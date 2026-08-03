import AllGameCard from "@/components/AllGameCard";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

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
      developer: true,
      status: true,
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-6 pt-2 pb-16">

      <div
  className="
    mb-8
    flex
    items-center
    justify-between
  "
>

  <div className="flex items-center gap-2">

    <Sparkles
      className="text-cyan-400"
      size={22}
    />

    <h2 className="text-xl font-bold">
      Semua Game
    </h2>

  </div>

  <Link
    href="/games"
    className="
      inline-flex
      items-center
      gap-1

      text-sm
      font-semibold
      text-cyan-400

      transition-all
      duration-300

      hover:gap-2
      hover:text-cyan-300
    "
  >
    Lihat Semua

    <ArrowRight size={16}/>
  </Link>

</div>

      <div
        className="
          grid
          grid-cols-3
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-3
        "
      >

        {games.map((game) => (
  <AllGameCard
    key={game.id}
    title={game.name}
    image={game.image}
    slug={game.slug}
    developer={game.developer}
    status={game.status}
  />
))}

      </div>

    </section>
  );
}