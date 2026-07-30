"use client";

import { useRouter } from "next/navigation";

export default function DeleteItemButton({
  id,
}: {
  id: string;
}) {

  const router = useRouter();

  async function handleDelete() {

    if (!confirm("Hapus nominal ini?")) return;

    const res = await fetch("/api/admin/item", {

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