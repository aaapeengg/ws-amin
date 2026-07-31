import Image from "next/image";
import { prisma } from "@/lib/prisma";
import TopUpForm from "@/components/TopUpForm";
import Link from "next/link";
import { Link2Icon } from "lucide-react";


export default async function GameDetail({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {


  const { slug } = await params;


  const game = await prisma.game.findUnique({

  where: {
    slug,
  },

  include: {
    items: true,
  },

});


  if (!game) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-3xl font-bold">
          Game tidak ditemukan
        </h1>

      </main>
    );
  }

  if (game.status !== "ACTIVE") {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div
        className="
          max-w-lg
          w-full
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-10
          text-center
        "
      >

        <div className="text-7xl mb-6">
          🚧
        </div>

        <h1 className="text-4xl font-bold text-white">
          Game Sedang Tidak Tersedia
        </h1>

        <p className="text-slate-400 mt-4">
          Saat ini game ini sedang maintenance atau belum tersedia.
        </p>

        <Link
          href="/"
          className="
            inline-block
            mt-8
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-400
            px-8
            py-4
            font-bold
            text-slate-950
            transition
          "
        >
          Kembali ke Beranda
        </Link>
      </div>

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