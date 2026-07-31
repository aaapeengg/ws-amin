import SearchGame from "./SearchGame";

export default function HeroSearch() {
  return (
    <div
      className="
        rounded-3xl
        bg-[var(--card)]
        border
        border-[var(--border)]
        p-6
      "
    >
      <h2 className="text-4xl font-bold mb-6">
        Cari Game
      </h2>

      <SearchGame />
    </div>
  );
}