import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  const banner = await prisma.banner.update({
    where: {
      id,
    },
    data: {
      title: body.title,
      image: body.image,
      isActive: body.isActive,
    },
  });

  return NextResponse.json(banner);
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const current = await prisma.banner.findUnique({
    where: { id },
  });

  if (!current) {
    return NextResponse.json(
      { error: "Banner tidak ditemukan" },
      { status: 404 }
    );
  }

  if (!current.isActive) {
    await prisma.banner.updateMany({
      data: {
        isActive: false,
      },
    });
  }

  const banner = await prisma.banner.update({
    where: { id },
    data: {
      isActive: !current.isActive,
    },
  });

  return NextResponse.json(banner);
}