import { prisma } from "@/lib/prisma";
import Link from "next/link";
import AdminHeader from "@/components/admin/ui/AdminHeader";
import AdminStatCard from "@/components/admin/ui/AdminStatCard";
import GameTable from "@/components/admin/GameTable";

import { Plus } from "lucide-react";

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

        <GameTable games={games} />

      </div>
      
  );

}