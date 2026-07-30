"use client";

import { useRouter } from "next/navigation";

export default function ToggleBannerButton({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) {

  const router = useRouter();

  async function handleToggle() {

    const res = await fetch(`/api/admin/banner/${id}`, {
      method: "PATCH",
    });

    if (res.ok) {
      router.refresh();
    }

  }

  return (

    <button
      onClick={handleToggle}
      className={
        active
          ? "bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl"
          : "bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl"
      }
    >
      {active ? "Nonaktifkan" : "Aktifkan"}
    </button>

  );

}