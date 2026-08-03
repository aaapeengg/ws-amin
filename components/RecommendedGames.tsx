import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Sparkles } from "lucide-react";

export default async function RecommendedGames() {
  const games = await prisma.game.findMany({
    take: 3,
    where: {
      status: "ACTIVE",
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-5 mt-8">

      <div className="flex items-center justify-between mb-4">

  <div className="flex items-center gap-2">

    <Sparkles
      className="text-cyan-400"
      size={22}
    />

    <h2 className="text-xl font-bold">
      Rekomendasi
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

    <ArrowRight size={16} />
  </Link>

</div>

      <div
  className="
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-4
  "
>
  {games.map((game) => (
    <Link
      key={game.id}
      href={`/games/${game.slug}`}
      className="
  group
  overflow-hidden
  rounded-2xl
  bg-[#101827]
  border
  border-slate-800

  transition-all
  duration-300

  hover:-translate-y-1
  hover:border-cyan-500
  hover:shadow-2xl
  hover:shadow-cyan-500/20
"
    >
      <div className="relative aspect-[16/7] overflow-hidden">

        <Image
          src={game.image}
          alt={game.name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      <div className="p-3">

        <h3
          className="
            text-sm
            lg:text-base
            font-semibold
            group-hover:text-cyan-400
            transition
          "
        >
          {game.name}
        </h3>

        <p className="text-slate-400 text-sm mt-1">
  {game.developer}
</p>

      </div>

    </Link>
  ))}
</div>

    </section>
  );
}