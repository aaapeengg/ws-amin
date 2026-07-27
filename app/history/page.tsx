import Link from "next/link";
import { prisma } from "@/lib/prisma";
import StatusBadge from "@/components/StatusBadge";
import GameLogo from "@/components/GameLogo";


export default async function HistoryPage() {


  const orders = await prisma.order.findMany({

    orderBy: {
      createdAt: "desc",
    },

  });



  return (

    <main className="
      min-h-screen
      bg-slate-950
      text-white
      p-8
    ">


      <div className="
        max-w-4xl
        mx-auto
      ">


        <h1 className="
          text-4xl
          font-bold
          mb-8
        ">
          Riwayat Transaksi
        </h1>




        {orders.length === 0 ? (

          <div className="
            bg-slate-800
            rounded-3xl
            p-6
            text-center
          ">

            Belum ada transaksi.

          </div>


        ) : (


          <div className="
            space-y-5
          ">


            {orders.map((order)=>(


              <div

                key={order.id}

                className="
                  bg-slate-800
                  rounded-3xl
                  p-6
                "

              >


                <div className="
                  flex
                  justify-between
                  gap-4
                  items-start
                ">


                  <div className="
                    flex
                    gap-4
                  ">


                    <GameLogo
                      game={order.game}
                    />



                    <div>


                      <h2 className="
                        text-xl
                        font-bold
                      ">

                        {order.game}

                      </h2>


                      <p className="
                        text-gray-400
                        text-sm
                      ">

                        {order.orderId}

                      </p>


                      <p className="
                        mt-3
                      ">

                        {order.item}

                      </p>



                      <p className="
                        font-bold
                        text-lg
                        mt-2
                      ">

                        Rp {order.price.toLocaleString("id-ID")}

                      </p>



                    </div>


                  </div>





                  <StatusBadge
                    status={order.status}
                  />


                </div>





                <div className="
                  mt-6
                  flex
                  justify-between
                  items-center
                ">


                  <p className="
                    text-sm
                    text-gray-400
                  ">

                    {new Date(order.createdAt)
                    .toLocaleDateString(
                      "id-ID"
                    )}

                  </p>




                  <Link

                    href={`/invoice?orderId=${order.orderId}`}

                    className="
                      bg-blue-600
                      hover:bg-blue-700
                      px-5
                      py-2
                      rounded-xl
                      font-bold
                    "

                  >

                    Lihat Invoice

                  </Link>


                </div>



              </div>


            ))}


          </div>


        )}


      </div>


    </main>

  );

}