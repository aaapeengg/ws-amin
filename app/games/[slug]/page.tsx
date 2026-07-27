import Image from "next/image";
import { games } from "@/data/games";
import TopUpForm from "@/components/TopUpForm";


export default async function GameDetail({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {


  const { slug } = await params;


  const game = games.find(
    (item) => item.slug === slug
  );


  if (!game) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-3xl font-bold">
          Game tidak ditemukan
        </h1>

      </main>
    );
  }



  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">


      <div className="max-w-5xl mx-auto">


        <div className="
          bg-slate-800
          rounded-3xl
          overflow-hidden
          mb-8
        ">


          <div className="
            relative
            h-64
            w-full
          ">


            <Image
              src={game.image}
              alt={game.name}
              fill
              className="object-cover"
            />


          </div>



          <div className="p-6">


            <h1 className="text-4xl font-bold">
              Top Up {game.name}
            </h1>


            <p className="text-gray-400 mt-2">
              Proses cepat, aman, dan otomatis.
            </p>


          </div>


        </div>




        <TopUpForm game={game} />


      </div>


    </main>

  );
}