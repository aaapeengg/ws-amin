"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StatusButton({
  orderId,
}: {
  orderId: string;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function updateStatus(status: string) {
    const confirmUpdate = window.confirm(
      `Yakin ingin mengubah status menjadi ${status}?`
    );

    if (!confirmUpdate) return;

    try {
      setLoading(true);

      const res = await fetch("/api/orders/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          status,
        }),
      });

      if (!res.ok) {
        alert("Gagal mengubah status.");
        return;
      }

      router.refresh();

    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan.");

    } finally {
      setLoading(false);
    }
  }

  return (

  <div className="
    flex
    gap-3
    mt-6
  ">


    <button
      onClick={() => updateStatus("SUCCESS")}
      className="
        flex-1
        bg-green-600
        hover:bg-green-700
        py-3
        rounded-xl
        font-bold
      "
    >
      Success
    </button>



    <button
      onClick={() => updateStatus("FAILED")}
      className="
        flex-1
        bg-red-600
        hover:bg-red-700
        py-3
        rounded-xl
        font-bold
      "
    >
      Failed
    </button>



    <button
      onClick={() => updateStatus("PENDING")}
      className="
        flex-1
        bg-yellow-500
        hover:bg-yellow-600
        text-black
        py-3
        rounded-xl
        font-bold
      "
    >
      Pending
    </button>


  </div>

);
}