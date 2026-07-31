import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log("ORDER BODY:", body);


    const order = await prisma.order.create({

      data: {

        orderId: "ORD-" + Date.now(),

        game: body.game,

        userId: body.userId,

        extraId: body.extraId || null,

        item: body.item,

        price: Number(body.price),

        payment: body.payment,

        productCode: body.productCode || null,

        status: "PENDING",

      },

    });

    console.log("ORDER BERHASIL DISIMPAN:", order);
    
    return NextResponse.json(order);


  } catch (error: any) {


    console.error(
      "PRISMA ERROR:",
      error
    );


    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }

}