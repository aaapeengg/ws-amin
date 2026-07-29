import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const body = await req.json();

  const game = await prisma.game.create({

    data: {

      name: body.name,

      slug: body.slug,

      image: body.image,

      currency: body.currency,

      inputType: body.inputType,

      nicknameCode: body.nicknameCode,

    },

  });

  return NextResponse.json(game);

}