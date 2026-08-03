import AllGames from "@/components/AllGames";

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-5 py-10">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Semua Game
        </h1>

        <p className="text-slate-400 mt-2">
          Pilih game favoritmu.
        </p>

      </div>

      <AllGames />

    </main>
  );
}