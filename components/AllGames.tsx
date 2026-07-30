import GameCard from "@/components/GameCard";

import { prisma } from "@/lib/prisma";;

export default async function AllGames() {
const games = await prisma.game.findMany({
  orderBy: {
    name: "asc",
  },
});

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold mb-8">
        Semua Game
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {games.map((game) => (

          <GameCard
  key={game.slug}
  title={game.name}
  image={game.image}
/>

        ))}

      </div>

    </section>
  );
}