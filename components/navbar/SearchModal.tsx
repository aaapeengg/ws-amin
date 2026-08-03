"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Gamepad2 } from "lucide-react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onClose: () => void;
};

const games = [
  {
    name: "Mobile Legends",
    developer: "Moonton",
    slug: "mobile-legends",
    image: "/games/ml.jpg",
  },
  {
    name: "Free Fire",
    developer: "Garena",
    slug: "free-fire",
    image: "/games/ff.jpg",
  },
  {
    name: "PUBG Mobile",
    developer: "Krafton",
    slug: "pubg-mobile",
    image: "/games/pubg.jpg",
  },
  {
    name: "Valorant",
    developer: "Riot Games",
    slug: "valorant",
    image: "/games/valorant.jpg",
  },
];

export default function SearchModal({
  open,
  onClose,
}: Props) {

  const [keyword, setKeyword] = useState("");

  const filteredGames = useMemo(() => {

    return games.filter((game) =>
      game.name
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );

  }, [keyword]);

  return (

    <Dialog
      open={open}
      onOpenChange={onClose}
    >

      <DialogContent

        className="

          w-[95vw]
          max-w-xl

          rounded-3xl

          border
          border-slate-700

          bg-[#081221]

          shadow-2xl
          shadow-cyan-500/20

          p-0

          overflow-hidden

        "

      >
        <div className="p-6">

  <div className="relative">

    <Search
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2

        h-5
        w-5

        text-slate-400
        pointer-events-none
      "
    />

    <input
      autoFocus
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Cari game..."

      className="
        w-full

        rounded-2xl

        border
        border-slate-700

        bg-slate-900

        py-4
        pl-12
        pr-4

        text-white
        placeholder:text-slate-500
        caret-cyan-400
        outline-none

        transition-all
        duration-300

        focus:border-cyan-500
        focus:ring-4
        focus:ring-cyan-500/20
      "
    />

  </div>

{!keyword && (
  <div className="mt-5 mb-6 flex items-center gap-4">
    <div className="h-px flex-1 bg-slate-700" />

    <span
      className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        text-slate-400
      "
    >
      Game Populer
    </span>

    <div className="h-px flex-1 bg-slate-700" />
  </div>
)}

  <div

    className="
      mt-5

      max-h-[350px]

      overflow-y-auto

      space-y-2

      pr-1
    "

  >
    {(keyword ? filteredGames : games).map((game) => (

  <Link
    key={game.slug}
    href={`/games/${game.slug}`}
    onClick={onClose}
    className="
      flex
      items-center
      gap-4

      rounded-2xl

      border
      border-transparent

      p-3

      transition-all
      duration-300

      hover:border-cyan-500/30
      hover:bg-slate-800
      hover:scale-[1.03]
      hover:shadow-lg
      hover:shadow-cyan-500/10
    "
  >

    <div
      className="
        relative
        h-12
        w-12
        overflow-hidden
        rounded-xl
        border
        border-slate-700
      "
    >
      <Image
        src={game.image}
        alt={game.name}
        fill
        className="object-cover"
      />
    </div>

    <div>

      <h3 className="font-semibold text-white">
        {game.name}
      </h3>

      <p className="text-sm text-slate-400">
        {game.developer}
      </p>

    </div>

  </Link>

))}

  <div className="py-8 text-center text-slate-500">
    Mulai ketik untuk mencari game...
  </div>

  </div>

</div>

      </DialogContent>

    </Dialog>

  );

}