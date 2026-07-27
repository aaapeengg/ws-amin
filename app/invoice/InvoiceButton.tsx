"use client";

import { useState } from "react";

export default function InvoiceButton({
  orderData,
}: {
  orderData: {
    orderId: string;
    game?: string;
    userId?: string;
    extraId?: string;
    item?: string;
    price?: string;
    payment?: string;
  };
}) {

  const [loading, setLoading] = useState(false);


  async function handleOrder() {
    try {
      setLoading(true);


      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });


      const result = await response.json();


      console.log(result);


      if (!response.ok) {
        throw new Error(result.message);
      }


      alert("Pesanan berhasil dibuat!");

    } catch (error) {

      console.error(error);

      alert("Gagal membuat pesanan");

    } finally {

      setLoading(false);

    }
  }


  return (
    <button
      onClick={handleOrder}
      disabled={loading}
      className="
      w-full
      mt-6
      bg-green-600
      hover:bg-green-700
      py-3
      rounded-xl
      font-bold
      disabled:opacity-50
      "
    >
      {loading ? "Memproses..." : "Saya Sudah Bayar"}
    </button>
  );
}