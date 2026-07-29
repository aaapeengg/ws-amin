"use client";

import { useRouter } from "next/navigation";

export default function DeleteBannerButton({
  id,
}: {
  id: string;
}) {

  const router = useRouter();

  async function handleDelete() {

    const ok = confirm(
      "Yakin ingin menghapus banner?"
    );

    if (!ok) return;

    await fetch("/api/admin/banner", {

      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
      }),

    });

    router.refresh();

  }

  return (

    <button
      onClick={handleDelete}
      className="
        mt-4
        bg-red-600
        hover:bg-red-700
        px-4
        py-2
        rounded-xl
        font-bold
      "
    >
      Hapus
    </button>

  );

}