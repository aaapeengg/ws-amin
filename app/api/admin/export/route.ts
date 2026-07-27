import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const data = orders.map((order) => ({
    "Order ID": order.orderId,
    Game: order.game,
    "User ID": order.userId,
    "Server ID": order.extraId ?? "-",
    Item: order.item,
    Harga: order.price,
    Status: order.status,
    Pembayaran: order.payment,
    Tanggal: order.createdAt.toLocaleString("id-ID"),
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Orders"
  );

  const buffer = XLSX.write(workbook, {
    type: "buffer",
    bookType: "xlsx",
  });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition":
        'attachment; filename="orders.xlsx"',
    },
  });
}