import Link from "next/link";
import CheckoutClient from "./CheckoutClient";

export default async function Checkout({
  searchParams,
}: {
  searchParams: Promise<{
  game?: string;
  item?: string;
  price?: string;
  user?: string;
  extra?: string;
  product?: string;
  payment?: string;
}>;
}) {

  const params = await searchParams;

  if (
  !params.game ||
  !params.item ||
  !params.price
) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="text-center">

        <h1 className="text-3xl font-bold">
          Data Checkout Tidak Valid
        </h1>

        <p className="text-slate-400 mt-3">
          Silakan ulangi proses top up.
        </p>

      </div>

    </main>
  );
}

  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-4">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Checkout
        </h1>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">

          <h2 className="text-2xl font-bold mb-6">
            Detail Pesanan
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">
                Game
              </span>

              <span className="font-bold">
                🎮 {params.game}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-3">
              <span className="text-gray-400">
                User ID
              </span>

              <span className="font-bold">
                {params.user}
              </span>
            </div>

            {params.extra && (

              <div className="flex justify-between border-b border-slate-700 pb-3">

                <span className="text-gray-400">

                  {params.game === "Valorant"
                    ? "Tagline"
                    : "Server ID"}

                </span>

                <span className="font-bold">
                  {params.extra}
                </span>

              </div>

            )}

            <div className="flex justify-between border-b border-slate-700 pb-3">
  <span className="text-gray-400">
    Nominal
  </span>

  <span className="font-bold">
    💎 {params.item}
  </span>
</div>

<div className="flex justify-between border-b border-slate-700 pb-3">
  <span className="text-gray-400">
    Pembayaran
  </span>

  <span className="font-bold">
    {params.payment}
  </span>
</div>
            <div className="flex justify-between">

              <span className="text-gray-400">
                Total Pembayaran
              </span>

              <span className="text-green-400 text-2xl font-bold">
                Rp {Number(params.price).toLocaleString("id-ID")}
              </span>

            </div>

          </div>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6 mt-6 border border-slate-700">

          <h2 className="text-xl font-bold mb-4">
            Informasi
          </h2>

          <div className="space-y-3 text-gray-300">

            <p>
              ✅ Proses otomatis 1-3 menit.
            </p>

            <p>
              ✅ Pastikan User ID sudah benar.
            </p>

            <p>
              ✅ Pesanan yang sudah dibayar tidak dapat dibatalkan.
            </p>

            <p>
              ✅ Simpan nomor transaksi setelah pembayaran berhasil.
            </p>

          </div>

        </div>

        <CheckoutClient
  game={params.game}
  item={params.item}
  price={params.price}
  user={params.user}
  extra={params.extra}
  product={params.product}
  payment={params.payment}
/>
        
      </div>

    </main>
  );
}