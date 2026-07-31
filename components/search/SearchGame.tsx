"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

type Game = {
  id: string;
  name: string;
  slug: string;
  image: string;
};

export default function SearchGame() {
  const [keyword, setKeyword] = useState("");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (keyword.trim() === "") {
      setGames([]);
      return;
    }

    const fetchGames = async () => {
      const res = await fetch(
        `/api/games/search?q=${encodeURIComponent(keyword)}`
      );

      const data = await res.json();

      setGames(data);
    };

    fetchGames();
  }, [keyword]);

  return (
    <div className="relative w-full">

      <div
        className="
          flex
          items-center
          bg-[#111827]
          border
          border-[#233047]
          rounded-xl
          px-4
          py-2
        "
      >

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari game..."
          className="
            ml-3
            bg-transparent
            outline-none
            w-full
            text-sm
            placeholder:text-slate-500
          "
        />

      </div>

      {games.length > 0 && (

        <div
          className="
            absolute
            mt-2
            w-full
            rounded-2xl
            border
            border-[#233047]
            bg-[#0F172A]
            overflow-hidden
            shadow-xl
            z-50
          "
        >

          {games.map((game) => (

            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="
                flex
                items-center
                gap-3
                p-3
                hover:bg-cyan-500/10
                transition
              "
            >

              <Image
                src={game.image}
                alt={game.name}
                width={48}
                height={48}
                className="rounded-xl"
              />

              <span className="font-semibold">
                {game.name}
              </span>

            </Link>

          ))}

        </div>

      )}

    </div>
  );
}