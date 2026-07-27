import { prisma } from "@/lib/prisma";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import GameLogo from "@/components/GameLogo";

export default async function OrderDetail({
  params,
}: {
  params: Promise<{
    orderId: string;
  }>;
}) {

  const { orderId } = await params;

  const order = await prisma.order.findUnique({
    where: {
      orderId,
    },
  });

  if (!order) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Order tidak ditemukan
        </h1>
      </main>
    );
  }

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-3xl mx-auto">

        <Link
          href="/admin/orders"
          className="text-blue-400 hover:underline"
        >
          ← Kembali
        </Link>

        <div className="bg-slate-800 rounded-3xl p-8 mt-6">

          <div className="flex items-center gap-5">

            <GameLogo
              game={order.game}
            />

            <div>

              <h1 className="text-3xl font-bold">
                {order.game}
              </h1>

              <p className="text-gray-400">
                {order.orderId}
              </p>

            </div>

          </div>

          <div className="mt-6">
            <StatusBadge status={order.status} />
          </div>

          <div className="mt-8 space-y-4">

            <Info
              title="User ID"
              value={order.userId}
            />

            {order.extraId && (
              <Info
                title={
                  order.game === "Valorant"
                    ? "Tagline"
                    : "Server ID"
                }
                value={order.extraId}
              />
            )}

            <Info
              title="Item"
              value={order.item}
            />

            <Info
              title="Harga"
              value={`Rp ${order.price.toLocaleString("id-ID")}`}
            />

            <Info
              title="Pembayaran"
              value={order.payment}
            />

            <Info
              title="Status Midtrans"
              value={order.transactionStatus ?? "-"}
            />

            <Info
              title="VIP Status"
              value={order.vipStatus ?? "-"}
            />

            <Info
              title="VIP TRX ID"
              value={order.vipTrxId ?? "-"}
            />

            <Info
              title="Tanggal"
              value={order.createdAt.toLocaleString("id-ID")}
            />

          </div>

        </div>

      </div>

    </main>

  );

}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div className="bg-slate-700 rounded-2xl p-4">

      <p className="text-gray-400">
        {title}
      </p>

      <p className="font-bold mt-1 break-all">
        {value}
      </p>

    </div>

  );

}