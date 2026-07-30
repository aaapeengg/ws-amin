"use client";

import { useRouter } from "next/navigation";

export default function DeleteGameButton({
  id,
}: {
  id: string;
}) {

  const router = useRouter();

  async function handleDelete() {

    const ok = confirm(
      "Yakin ingin menghapus game ini?"
    );

    if (!ok) return;

    const res = await fetch("/api/admin/game", {

      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
      }),

    });

    if (res.ok) {

      router.refresh();

    } else {

      alert("Gagal menghapus game.");

    }

  }

  return (

    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
    >
      Hapus
    </button>

  );

}