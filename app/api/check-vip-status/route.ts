import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkVipStatus } from "@/lib/vipstatus";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const order = await prisma.order.findUnique({
      where: {
        orderId: body.orderId,
      },
    });

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          message: "Order tidak ditemukan",
        },
        {
          status: 404,
        }
      );
    }

    if (!order.vipTrxId) {
      return NextResponse.json({
        success: false,
        message: "VIP Transaction belum tersedia",
      });
    }

    const vip = await checkVipStatus(order.vipTrxId);

    console.log("VIP STATUS:", vip);

    if (
      vip.result &&
      vip.data &&
      vip.data.length > 0
    ) {

      const trx = vip.data[0];

      await prisma.order.update({
        where: {
          orderId: order.orderId,
        },
        data: {

          vipStatus: trx.status,

          note: trx.note ?? null,

          status:
            trx.status === "success"
              ? "SUCCESS"
              : trx.status === "processing"
              ? "PENDING"
              : trx.status === "error"
              ? "FAILED"
              : order.status,

        },
      });

      return NextResponse.json({
        success: true,
        data: trx,
      });

    }

    return NextResponse.json({
      success: false,
      message: "Status VIP gagal diambil",
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