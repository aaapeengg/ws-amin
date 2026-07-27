"use client";

import { useRouter } from "next/navigation";


export default function ConfirmButton({
  orderId,
}: {
  orderId: string;
}) {


  const router = useRouter();



  async function confirmPayment() {


    const res = await fetch(
      "/api/orders/status",
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          orderId,
        }),

      }
    );


    if (res.ok) {

      alert("Pembayaran berhasil dikonfirmasi");

      router.refresh();

    }


  }




  return (

    <button

      onClick={confirmPayment}

      className="
      w-full
      mt-6
      bg-green-600
      py-3
      rounded-xl
      font-bold
      "

    >

      Saya Sudah Bayar

    </button>

  );

}