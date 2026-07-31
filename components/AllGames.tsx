import GameCard from "@/components/GameCard";
import { prisma } from "@/lib/prisma";

export default async function AllGames() {
  const games = await prisma.game.findMany({
    orderBy: {
      name: "asc",
    },

    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
      status: true,
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold mb-8">
        Semua Game
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            image={game.image}
            slug={game.slug}
            status={game.status}
          />
        ))}

      </div>

    </section>
  );
}