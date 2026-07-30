import DeleteGameButton from "@/components/admin/DeleteGameButton";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import AdminHeader from "@/components/admin/ui/AdminHeader";
import AdminStatCard from "@/components/admin/ui/AdminStatCard";
import AdminCard from "@/components/admin/ui/AdminCard";
import Image from "next/image";

import {
  Gamepad2,
  Plus,
  Pencil,
} from "lucide-react";

export default async function AdminGames() {

  const games = await prisma.game.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (

      <div className="max-w-6xl mx-auto">

        <AdminHeader
  badge="Dashboard"
  title="Kelola Game"
  description="Tambah, edit, dan kelola seluruh game yang tersedia di SV STORE."
  action={
    <Link
      href="/admin/games/new"
      className="
        inline-flex
        items-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        px-6
        py-3
        font-semibold
        transition
        hover:scale-105
        hover:shadow-lg
        hover:shadow-cyan-500/20
      "
    >
      <Plus size={18} />
      Tambah Game
    </Link>
  }
/>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <AdminStatCard
    label="Total Game"
    value={games.length}
  />

  <AdminStatCard
    label="Status"
    value="Aktif"
  />

  <AdminStatCard
    label="Kategori"
    value="4"
  />

</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

  <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">

    <p className="text-[var(--muted)]">
      Total Game
    </p>

    <h2 className="font-space text-4xl font-bold mt-2 text-[var(--primary)]">
      {games.length}
    </h2>

  </div>

  <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">

    <p className="text-[var(--muted)]">
      Status
    </p>

    <h2 className="font-space text-2xl font-bold mt-2">
      Semua Aktif
    </h2>

  </div>

  <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">

    <p className="text-[var(--muted)]">
      Terakhir Update
    </p>

    <h2 className="font-space text-2xl font-bold mt-2">
      Hari Ini
    </h2>

  </div>

</div>

        <div className="space-y-5">

  {games.map((game) => (

    <AdminCard key={game.id}>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex items-center gap-5">

          <Image
            src={game.image}
            alt={game.name}
            width={72}
            height={72}
            className="rounded-2xl object-cover border border-[var(--border)]"
          />

          <div>

            <h2 className="font-space text-2xl font-bold">
              {game.name}
            </h2>

            <p className="text-[var(--muted)] mt-1">
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
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
              transition
            "
          >
            Edit
          </Link>

          <DeleteGameButton id={game.id} />

        </div>

      </div>

    </AdminCard>

  ))}

</div>

      </div>
      
  );

}