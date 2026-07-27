import Link from "next/link";

import { games } from "@/data/games";;

export default function AllGames() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold mb-8">
        Semua Game
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {games.map((game) => (

          <Link
            key={game.name}
            href={`/games/${game.slug}`}
            className="bg-slate-800 hover:bg-slate-700 rounded-2xl p-6 transition"
          >

            <img
  src={game.image}
  alt={game.name}
  className="w-16 h-16 mx-auto mb-4 object-contain"
/>

            <h3 className="font-bold text-lg">
              {game.name}
            </h3>

          </Link>

        ))}

      </div>

    </section>
  );
}