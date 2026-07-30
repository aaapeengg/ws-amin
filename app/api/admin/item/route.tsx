import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const body = await req.json();

  const item = await prisma.gameItem.create({

    data: {

      gameId: body.gameId,

      amount: body.amount,

      price: body.price,

      productCode: body.productCode,

    },

  });

  return NextResponse.json(item);

}

export async function DELETE(req: Request) {

  const body = await req.json();

  await prisma.gameItem.delete({

    where: {
      id: body.id,
    },

  });

  return NextResponse.json({

    success: true,

  });

}