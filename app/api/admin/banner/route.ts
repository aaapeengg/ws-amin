import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {

  const banners = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(banners);

}

export async function POST(req: Request) {

  const body = await req.json();

  const banner = await prisma.banner.create({

    data: {

      title: body.title,

      image: body.image,

      isActive: true,

    },

  });

  return NextResponse.json(banner);

}