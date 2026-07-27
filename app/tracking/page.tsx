"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingPage() {
  const router = useRouter();

  const [orderId, setOrderId] = useState("");

  function handleSearch() {
    if (!orderId.trim()) {
      alert("Masukkan Order ID.");
      return;
    }

    router.push(`/invoice?orderId=${orderId}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">

      <div className="bg-slate-800 rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Cek Status Pesanan
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Masukkan Order ID untuk melihat status transaksi.
        </p>

        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Contoh: WS-1753641123"
          className="
            w-full
            bg-slate-700
            rounded-xl
            p-4
            outline-none
            mb-6
          "
        />

        <button
          onClick={handleSearch}
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            py-3
            rounded-xl
            font-bold
          "
        >
          Cari Pesanan
        </button>

      </div>

    </main>
  );
}