"use client";

import Image from "next/image";
import Link from "next/link";

import AdminCard from "./ui/AdminCard";
import DeleteGameButton from "./DeleteGameButton";

type Props = {
  game: {
    id: string;
    name: string;
    slug: string;
    image: string;
  };
};

export default function GameRow({
  game,
}: Props) {
  return (

    <AdminCard>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex items-center gap-5">

          <Image
            src={game.image}
            alt={game.name}
            width={72}
            height={72}
            className="rounded-2xl border border-[var(--border)]"
          />

          <div>

            <h2 className="font-space text-2xl font-bold">
              {game.name}
            </h2>

            <p className="text-[var(--muted)]">
              {game.slug}
            </p>

          </div>

        </div>

        <div className="flex gap-3">

          <Link
            href={`/admin/games/${game.id}`}
            className="
              rounded-2xl
              border
              border-[var(--border)]
              px-5
              py-2.5
              transition
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
          >
            Edit
          </Link>

          <DeleteGameButton
            id={game.id}
          />

        </div>

      </div>

    </AdminCard>

  );
}