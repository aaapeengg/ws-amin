import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Sparkles  } from "lucide-react";
import PopularGameCard from "@/components/PopularGameCard";

export default async function GameSection() {

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

    <section
      id="games"
      className="
  max-w-7xl
  mx-auto
  px-5
  py-10
  lg:py-14
"
    >


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

  <h2
    className="
      text-Sxl
      lg:text-xl
      font-bold
    "
  >
    Game Populer
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


        {games.map((game)=>(


          <PopularGameCard
  key={game.slug}
  title={game.name}
  image={game.image}
  slug={game.slug}
  status={game.status}
  developer={game.developer}
/>

        ))}


      </div>


    </section>

  );

}