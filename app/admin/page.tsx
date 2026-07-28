export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import SalesChart from "@/components/admin/SalesChart";

export default async function AdminDashboard() {

  const totalOrders = await prisma.order.count();

  const pendingOrders = await prisma.order.count({
    where: {
      status: "PENDING",
    },
  });

  const successOrders = await prisma.order.count({
    where: {
      status: "SUCCESS",
    },
  });

  const failedOrders = await prisma.order.count({
    where: {
      status: "FAILED",
    },
  });

  const revenue = await prisma.order.aggregate({
    _sum: {
      price: true,
    },
    where: {
      status: "SUCCESS",
    },
  });

  const sales = await prisma.order.findMany({
  where: {
    status: "SUCCESS",
  },
  orderBy: {
    createdAt: "asc",
  },
});

const chartData = sales.map((order) => ({
  date: order.createdAt.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
  }),
  total: order.price,
}));

  const latestOrders = await prisma.order.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard Admin
        </h1>

        <div className="grid md:grid-cols-5 gap-5">

          <Card
            title="Total Order"
            value={totalOrders}
          />

          <Card
            title="Pending"
            value={pendingOrders}
          />

          <Card
            title="Success"
            value={successOrders}
          />

          <Card
            title="Failed"
            value={failedOrders}
          />

          <div className="bg-green-700 rounded-3xl p-6">

            <p className="text-gray-200">
              Pendapatan
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Rp {(revenue._sum.price ?? 0).toLocaleString("id-ID")}
            </h2>

          </div>

        </div>

        <div className="mt-10 bg-slate-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            5 Order Terbaru
          </h2>

          <div className="space-y-4">

            {latestOrders.length === 0 ? (

              <p className="text-gray-400">
                Belum ada order.
              </p>

            ) : (

              latestOrders.map((order) => (

                <div
                  key={order.id}
                  className="flex justify-between items-center bg-slate-700 rounded-2xl p-4"
                >

                  <div>

                    <p className="font-bold">
                      {order.game}
                    </p>

                    <p className="text-sm text-gray-400">
                      {order.orderId}
                    </p>

                    <p className="text-sm mt-1">
                      Rp {order.price.toLocaleString("id-ID")}
                    </p>

                  </div>

                  <StatusBadge
                    status={order.status}
                  />

                </div>

              ))

            )}

          </div>

        </div>

        <div className="mt-8">

          <Link
            href="/admin/orders"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            Lihat Semua Order →
          </Link>

<a
    href="/api/admin/export"
    className="
      inline-block
      bg-green-600
      hover:bg-green-700
      px-6
      py-3
      rounded-xl
      font-semibold
    "
  >
    📊 Export Excel
  </a>

        </div>

<SalesChart data={chartData} />

      </div>

    </main>

  );

}

function Card({
  title,
  value,
}: {
  title: string;
  value: number;
}) {

  return (

    <div className="bg-slate-800 rounded-3xl p-6">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

    </div>

  );

}