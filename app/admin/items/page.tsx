import DeleteItemButton from "@/components/admin/DeleteItemButton";
import { prisma } from "@/lib/prisma";

export default async function AdminItems() {

  const games = await prisma.game.findMany({

    include: {

      items: true,

    },

    orderBy: {

      name: "asc",

    },

  });

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">

          Kelola Nominal

        </h1>

        {games.map((game)=>(

          <div
            key={game.id}
            className="bg-slate-800 rounded-2xl p-6 mb-8"
          >

            <h2 className="text-2xl font-bold mb-4">

              {game.name}

            </h2>

            {game.items.length === 0 ? (

              <p>Belum ada nominal.</p>

            ) : (

              game.items.map((item)=>(

                <div
  key={item.id}
  className="flex justify-between items-center py-3 border-b border-slate-700"
>

  <div>

    <p className="font-semibold">
      {item.amount}
    </p>

    <p className="text-gray-400 text-sm">
      Rp {item.price.toLocaleString("id-ID")}
    </p>

  </div>

  <div className="flex gap-2">

    <a
      href={`/admin/items/${item.id}`}
      className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-xl"
    >
      Edit
    </a>

    <DeleteItemButton
      id={item.id}
    />

  </div>

</div>

              ))

            )}

          </div>

        ))}

      </div>

    </main>

  );

}