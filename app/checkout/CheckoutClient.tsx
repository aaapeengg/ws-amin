"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutClient({
  game,
  item,
  price,
  user,
  extra,
  product,
  payment,
}: any) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    alert("Tes berhasil");
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="
        w-full
        mt-8
        bg-gradient-to-r
        from-blue-500
        to-blue-700
        hover:from-blue-600
        hover:to-blue-800
        py-4
        rounded-2xl
        font-bold
        text-lg
        disabled:bg-gray-600
      "
    >
      {loading ? "Memproses..." : "Bayar Sekarang →"}
    </button>
  );
}