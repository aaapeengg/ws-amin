import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createVipOrder } from "@/lib/vipreseller";


export async function PATCH(req: Request) {

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
          message: "Order tidak ditemukan",
        },
        {
          status: 404,
        }
      );

    }



    // ==========================
    // JIKA ADMIN KLIK SUCCESS
    // ==========================

    if (
      body.status === "SUCCESS" &&
      order.productCode
    ) {


      const vipResponse = await createVipOrder({

        productCode: order.productCode,

        userId: order.userId,

        zoneId: order.extraId,

      });



      console.log(
        "VIP RESPONSE:",
        vipResponse
      );



      if (!vipResponse.result) {

        return NextResponse.json(
          {
            message:
              vipResponse.message ||
              "Gagal order VIP",
          },
          {
            status: 400,
          }
        );

      }



      const updatedOrder =
        await prisma.order.update({
  where: {
  orderId: body.orderId,
},
  data: {
    vipTrxId: vipResponse.data.trxid,


            status:
              "PROCESSING",

          },


        });



      return NextResponse.json(updatedOrder);


    }



    // ==========================
    // UPDATE BIASA
    // FAILED / PENDING
    // ==========================


    const updatedOrder =
      await prisma.order.update({

        where: {
          orderId: body.orderId,
        },


        data: {

          status: body.status,

        },


      });



    return NextResponse.json(updatedOrder);



  } catch(error:any) {


    console.error(
      "STATUS ERROR:",
      error
    );


    return NextResponse.json(

      {
        message:error.message,
      },

      {
        status:500,
      }

    );

  }

}