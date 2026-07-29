import GameForm from "../../../../components/admin/GameForm";

export default function NewGame() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Tambah Game
        </h1>

        <GameForm />

      </div>

    </main>

  );

}