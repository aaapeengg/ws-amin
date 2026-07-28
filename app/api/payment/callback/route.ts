import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createVipOrder } from "@/lib/vipreseller";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("MIDTRANS CALLBACK:", body);

    // ==========================
    // VERIFIKASI SIGNATURE
    // ==========================

    const signature = crypto
      .createHash("sha512")
      .update(
        body.order_id +
          body.status_code +
          body.gross_amount +
          process.env.MIDTRANS_SERVER_KEY
      )
      .digest("hex");

    if (signature !== body.signature_key) {
      console.log("SIGNATURE TIDAK VALID");

      return NextResponse.json(
        {
          message: "Invalid Signature",
        },
        {
          status: 403,
        }
      );
    }

    const orderId = body.order_id;
    const transactionStatus = body.transaction_status;

    console.log("TRANSACTION STATUS:", transactionStatus);

    const order = await prisma.order.findUnique({
      where: {
        orderId,
      },
    });

    if (!order) {
      console.log("ORDER TIDAK DITEMUKAN");

      return NextResponse.json(
        {
          message: "Order tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }

    // ==========================
    // UPDATE STATUS MIDTRANS
    // ==========================

    await prisma.order.update({
      where: {
        orderId,
      },

      data: {
        transactionStatus,

        status:
          transactionStatus === "settlement"
            ? "SUCCESS"
            : transactionStatus === "pending"
            ? "PENDING"
            : "FAILED",
      },
    });

    console.log("STATUS DATABASE BERHASIL DIUPDATE");

    // ==========================
    // DEBUG
    // ==========================

    console.log("MASUK CEK VIP?");
    console.log({
      transactionStatus,
      productCode: order.productCode,
      vipTrxId: order.vipTrxId,
    });

    // ==========================
    // KIRIM KE VIP
    // ==========================

    if (
      transactionStatus === "settlement" &&
      order.productCode &&
      !order.vipTrxId
    ) {
      console.log("KIRIM ORDER KE VIP");

      const vip = await createVipOrder({
        productCode: order.productCode,
        userId: order.userId,
        zoneId: order.extraId,
      });

      console.log("VIP RESPONSE:", vip);

      if (vip.result && vip.data) {
        console.log("UPDATE DATABASE VIP");

        await prisma.order.update({
          where: {
            orderId,
          },

          data: {
            vipTrxId: vip.data.trxid,
            vipStatus: vip.data.status,
            note: vip.data.note ?? null,
          },
        });

        console.log("VIP BERHASIL DISIMPAN");
      } else {
        console.log("VIP GAGAL:", vip);
      }
    } else {
      console.log("TIDAK MASUK BLOK VIP");
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("CALLBACK ERROR:", error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}