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

    const transactionStatus =
      body.transaction_status;

    const order = await prisma.order.findUnique({

      where: {
        orderId,
      },

    });

    if (!order) {

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

    // ==========================
    // KIRIM KE VIP
    // ==========================

    if (
  transactionStatus === "settlement" &&
  order.productCode &&
  !order.vipTrxId
) {

      const vip = await createVipOrder({

        productCode:
          order.productCode,

        userId:
          order.userId,

        zoneId:
          order.extraId,

      });

      console.log(
        "VIP RESPONSE:",
        vip
      );

      if (vip.result && vip.data) {

        await prisma.order.update({

          where: {
            orderId,
          },

          data: {

            vipTrxId:
              vip.data.trxid,

            vipStatus:
              vip.data.status,

            note:
              vip.data.note ?? null,

          },

        });

      }

    }

    return NextResponse.json({

      success: true,

    });

  } catch (error) {

    console.error(error);

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