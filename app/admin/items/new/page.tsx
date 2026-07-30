import { prisma } from "@/lib/prisma";
import ItemForm from "@/components/admin/ItemForm";

export default async function NewItem() {

  const games = await prisma.game.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Tambah Nominal
        </h1>

        <ItemForm games={games} />

      </div>

    </main>

  );

}