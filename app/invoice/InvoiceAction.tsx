"use client";

import { useRouter } from "next/navigation";

export default function InvoiceAction({
  orderId,
}: {
  orderId: string;
}) {
  const router = useRouter();

  async function copyOrderId() {
    await navigator.clipboard.writeText(orderId);
    alert("Order ID berhasil disalin.");
  }

  function printInvoice() {
    window.print();
  }

  return (
    <div className="mt-8 grid gap-3">

      <button
        onClick={copyOrderId}
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          py-3
          rounded-xl
          font-bold
          transition
        "
      >
        📋 Salin Order ID
      </button>

      <button
        onClick={printInvoice}
        className="
          w-full
          bg-green-600
          hover:bg-green-700
          py-3
          rounded-xl
          font-bold
          transition
        "
      >
        🖨 Cetak Invoice
      </button>

      <button
        onClick={() => router.push("/history")}
        className="
          w-full
          bg-slate-700
          hover:bg-slate-600
          py-3
          rounded-xl
          font-bold
          transition
        "
      >
        ⬅ Kembali ke Riwayat
      </button>

    </div>
  );
}