import Link from "next/link";

type GameCardProps = {
  title: string;
  image: string;
};

export default function GameCard({ title, image }: GameCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition cursor-pointer">
      <img
        src={image}
        alt={title}
        className="h-32 w-full object-cover rounded-xl"
      />

      <h2 className="text-xl font-semibold mt-4">
        {title}
      </h2>

      <Link
        href={`/games/${title.toLowerCase().replace(" ", "-")}`}
        className="block text-center w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded-xl"
      >
        Top Up
      </Link>
    </div>
  );
}