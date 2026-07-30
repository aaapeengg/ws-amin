import DeleteGameButton from "@/components/admin/DeleteGameButton";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminGames() {

  const games = await prisma.game.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Kelola Game
          </h1>

          <Link
            href="/admin/games/new"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-bold"
          >
            + Tambah Game
          </Link>

        </div>

        <div className="space-y-4">

          {games.map((game) => (

            <div
              key={game.id}
              className="bg-slate-800 rounded-2xl p-5 flex justify-between items-center"
            >

              <div>

                <h2 className="text-xl font-bold">
                  {game.name}
                </h2>

                <p className="text-gray-400">
                  {game.slug}
                </p>

              </div>

              <div className="flex gap-3">

                <Link
                  href={`/admin/games/${game.id}`}
                  className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-xl"
                >
                  Edit
                </Link>

                <DeleteGameButton id={game.id} />

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}