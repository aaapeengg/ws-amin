import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q") || "";

  const games = await prisma.game.findMany({

    where: {
      name: {
        contains: q,
        mode: "insensitive",
      },
    },

    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
      developer: true,
    },

    take: 6,

  });

  return NextResponse.json(games);

}