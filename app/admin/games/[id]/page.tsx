import { prisma } from "@/lib/prisma";
import EditGameForm from "../../../../components/admin/EditGameForm";

export default async function EditGamePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  console.log("ID DARI URL:", id);

  const game = await prisma.game.findUnique({
    where: {
      id,
    },
  });

  console.log("HASIL QUERY:", game);

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
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Edit Game
        </h1>

        <EditGameForm game={game} />

      </div>

  );
}