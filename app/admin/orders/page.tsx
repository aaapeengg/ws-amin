import SearchBox from "./components/SearchBox";
import { prisma } from "@/lib/prisma";
import StatusButton from "./StatusButton";
import StatusBadge from "@/components/StatusBadge";
import GameLogo from "@/components/GameLogo";
import Link from "next/link";


export default async function AdminOrders({
  searchParams,
}: {
  searchParams: Promise<{
  q?: string;
  status?: string;
}>;
}) {

  const { q, status } = await searchParams;


  const orders = await prisma.order.findMany({

  where: {

    ...(q
      ? {
          OR: [
            {
              orderId: {
                contains: q,
              },
            },
            {
              userId: {
                contains: q,
              },
            },
          ],
        }
      : {}),

    ...(status && status !== "ALL"
      ? {
          status,
        }
      : {}),

  },

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
        max-w-5xl
        mx-auto
      ">


        <h1 className="
          text-4xl
          font-bold
          mb-8
        ">
          Kelola Order
        </h1>

<SearchBox />

<div className="flex gap-3 mb-6 flex-wrap">

  <FilterButton
    label="Semua"
    value="ALL"
    current={status}
  />

  <FilterButton
    label="Pending"
    value="PENDING"
    current={status}
  />

  <FilterButton
    label="Success"
    value="SUCCESS"
    current={status}
  />

  <FilterButton
    label="Failed"
    value="FAILED"
    current={status}
  />

</div>


        {orders.length === 0 ? (

          <div className="
            bg-slate-800
            rounded-3xl
            p-6
          ">
            Belum ada order.
          </div>


        ) : (


          <div className="
            space-y-5
          ">


            {orders.map((order) => (

  <div
    key={order.id}
    className="
      bg-slate-800
      rounded-3xl
      p-6
    "
  >

    <Link
      href={`/admin/orders/${order.orderId}`}
      className="
        block
        hover:bg-slate-700
        rounded-2xl
        transition
      "
    >

      <div
        className="
          flex
          justify-between
          items-start
          gap-5
        "
      >

        <div
          className="
            flex
            gap-4
          "
        >

          <GameLogo
            game={order.game}
          />

          <div>

            <h2
              className="
                text-xl
                font-bold
              "
            >
              {order.game}
            </h2>

            <p
              className="
                text-gray-400
              "
            >
              {order.orderId}
            </p>

          </div>

        </div>

        <StatusBadge
          status={order.status}
        />

      </div>

      <div
        className="
          mt-6
          bg-slate-700
          rounded-2xl
          p-4
          space-y-2
        "
      >

        <p>
          User ID:
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
          Item:
          <b className="ml-2">
            {order.item}
          </b>
        </p>

        <p>
          Total:
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

    </Link>

    <StatusButton
      orderId={order.orderId}
    />

  </div>

))}



          </div>


        )}



      </div>


    </main>

  );

  } 

function FilterButton({
  label,
  value,
  current,
}: {
  label: string;
  value: string;
  current?: string;
}) {

  const active = (current ?? "ALL") === value;

  return (

    <a
      href={
        value === "ALL"
          ? "/admin/orders"
          : `/admin/orders?status=${value}`
      }
      className={`
        px-4
        py-2
        rounded-xl
        font-semibold
        transition
        ${
          active
            ? "bg-blue-600 text-white"
            : "bg-slate-700 hover:bg-slate-600"
        }
      `}
    >
      {label}
    </a>

  );

}