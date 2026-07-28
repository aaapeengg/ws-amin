import InvoiceAction from "./InvoiceAction";
import { prisma } from "@/lib/prisma";
import StatusBadge from "@/components/StatusBadge";
import GameLogo from "@/components/GameLogo";
import { checkVipStatus } from "@/lib/vipstatus";


export default async function Invoice({
  searchParams,
}: {
  searchParams: Promise<{
    orderId?: string;
  }>;
}) {


  const params = await searchParams;



  if (!params.orderId) {

    return (

      <main className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-6">

          <h1 className="text-3xl font-bold">
            Order ID tidak ditemukan
          </h1>

        </div>

      </main>

    );

  }




  const order = await prisma.order.findUnique({

    where: {
      orderId: params.orderId,
    },

  });

  // =====================
// UPDATE STATUS VIP
// =====================

if (order?.vipTrxId) {

  try {

    const vip = await checkVipStatus(
      order.vipTrxId
    );

    if (vip.result && vip.data.length > 0) {

      const latest = vip.data[0];

      await prisma.order.update({

        where: {
          orderId: order.orderId,
        },

        data: {

          vipStatus: latest.status,

          note: latest.note ?? null,

        },

      });

      order.vipStatus = latest.status;
      order.note = latest.note ?? null;

    }

  } catch (err) {

    console.error(
      "CHECK VIP ERROR:",
      err
    );

  }

}




  if (!order) {

    return (

      <main className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-6">

          <h1 className="text-3xl font-bold">
            Order tidak ditemukan
          </h1>

        </div>

      </main>

    );

  }





  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">


      <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-6">



        <div className="flex items-center gap-4 mb-8">

  <GameLogo game={order.game} />

  <div>

    <h1 className="text-3xl font-bold">
      Invoice Pembayaran
    </h1>

    <p className="text-gray-400">
      {order.game}
    </p>

  </div>

</div>





        <div className="bg-slate-700 rounded-xl p-4 mb-6">

  <p className="text-gray-300">
    Nomor Transaksi
  </p>

  <b className="text-xl">
    {order.orderId}
  </b>

  <p className="mt-4 text-gray-300">
    Tanggal Transaksi
  </p>

  <p>
    {new Date(order.createdAt).toLocaleString("id-ID")}
  </p>

</div>





        <h2 className="text-xl font-bold mb-4">

          Detail Pesanan

        </h2>


<div className="mt-8 bg-slate-700 rounded-xl p-5">

  <h2 className="font-bold text-xl mb-4">
    Ringkasan Pembayaran
  </h2>

  <div className="flex justify-between mb-2">
    <span>Nominal</span>
    <b>{order.item}</b>
  </div>

  <div className="flex justify-between mb-2">
    <span>Metode</span>
    <b>{order.payment}</b>
  </div>

  <div className="flex justify-between text-lg font-bold border-t border-slate-600 pt-3 mt-3">
    <span>Total</span>
    <span>
      Rp {order.price.toLocaleString("id-ID")}
    </span>
  </div>

</div>



        <div className="space-y-3">



          <p>

            Game:

            <b className="ml-2">

              {order.game}

            </b>

          </p>





          <p>

            ID:

            <b className="ml-2">

              {order.userId}

            </b>

          </p>





          {order.extraId && (

            <p>

              {order.game === "Valorant"
                ? "Tagline:"
                : "Server ID:"}


              <b className="ml-2">

                {order.extraId}

              </b>


            </p>

          )}






          <p>

            Nominal:

            <b className="ml-2">

              {order.item}

            </b>

          </p>






          <p>

            Harga:

            <b className="ml-2">

              Rp {order.price.toLocaleString("id-ID")}

            </b>

          </p>







          <p>

            Pembayaran:

            <b className="ml-2">

              {order.payment}

            </b>

          </p>




        </div>







        <div className="
  mt-8
  bg-slate-700
  rounded-xl
  p-5
">


          <h3 className="
  font-bold
  mb-3
">
  Status Pesanan
</h3>



<StatusBadge status={order.status} />


        </div>


<InvoiceAction
  orderId={order.orderId}
/>

      </div>


    </main>

  );

}