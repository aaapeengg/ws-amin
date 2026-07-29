import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function GameSection() {

const games = await prisma.game.findMany({
  orderBy: {
    name: "asc",
  },
});

  return (

    <section
      id="games"
      className="
      max-w-7xl
      mx-auto
      px-6
      py-16
      "
    >


      <h2 className="
        text-4xl
        font-bold
        mb-8
      ">
        Game Populer
      </h2>



      <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
      ">


        {games.map((game)=>(


          <Link

            key={game.slug}

            href={`/games/${game.slug}`}

            className="
              bg-slate-800
              rounded-2xl
              overflow-hidden
              hover:scale-105
              transition
            "

          >


            <div className="
              relative
              h-40
            ">

              <Image

                src={game.image}

                alt={game.name}

                fill

                className="
                  object-cover
                "

              />

            </div>



            <div className="p-4">

              <h3 className="
                font-bold
                text-lg
              ">
                {game.name}
              </h3>


              <p className="
                text-gray-400
                text-sm
              ">
                Top Up Sekarang
              </p>


            </div>



          </Link>


        ))}


      </div>


    </section>

  );

}