import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q") || "";

  const games = await prisma.game.findMany({
    where: {
      status: "ACTIVE",
      OR: [
        {
          name: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          slug: {
            contains: q,
            mode: "insensitive",
          },
        },
      ],
    },

    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
    },

    take: 8,
  });

  return NextResponse.json(games);
}