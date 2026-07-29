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

export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    console.log("DELETE ID:", body.id);

    const deleted = await prisma.banner.deleteMany({
      where: {
        id: body.id,
      },
    });

    console.log("DELETE RESULT:", deleted);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

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