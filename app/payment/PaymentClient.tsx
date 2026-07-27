"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const game = searchParams.get("game");
  const item = searchParams.get("item");
  const price = searchParams.get("price");
  const user = searchParams.get("user");
  const extra = searchParams.get("extra");
  const product = searchParams.get("product");

  const orderId = "WS-" + Date.now();

  async function handlePayment() {
    // ==========================
    // VALIDASI
    // ==========================

    if (!game) {
      alert("Game tidak ditemukan.");
      return;
    }

    if (!user) {
      alert("User ID wajib diisi.");
      return;
    }

    if (!item) {
      alert("Pilih nominal terlebih dahulu.");
      return;
    }

    if (!price) {
      alert("Harga tidak ditemukan.");
      return;
    }

    // Mobile Legends wajib Server ID
    if (game === "Mobile Legends" && !extra) {
      alert("Server ID wajib diisi.");
      return;
    }

    // Valorant wajib Tagline
    if (game === "Valorant" && !extra) {
      alert("Tagline wajib diisi.");
      return;
    }

    // Metode pembayaran
    if (!method) {
      alert("Pilih metode pembayaran terlebih dahulu.");
      return;
    }

    // ==========================
    // SIMPAN ORDER
    // ==========================

    try {
      setLoading(true);

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          game,
          userId: user,
          extraId: extra,
          item,
          price,
          payment: method,
          productCode: product,
        }),
      });

      const order = await res.json();

if (!res.ok) {
  console.error(order);
  alert(order.message || "Gagal membuat order.");
  return;
}

// =====================
// MIDTRANS
// =====================

const payment = await fetch("/api/payment", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    orderId,
    price: Number(price),
  }),
});

const snap = await payment.json();

if (!payment.ok) {
  console.error(snap);
  alert("Gagal membuat transaksi Midtrans.");
  return;
}

window.snap.pay(snap.token, {

  onSuccess() {

    router.push(`/invoice?orderId=${order.orderId}`);

  },

  onPending() {

    router.push(`/invoice?orderId=${order.orderId}`);

  },

  onError() {

    alert("Pembayaran gagal.");

  },

  onClose() {

    alert("Pembayaran dibatalkan.");

  },

});
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  return (
  <main className="min-h-screen bg-slate-950 text-white p-8">

    <div className="max-w-2xl mx-auto">

      <h1 className="
        text-4xl
        font-bold
        mb-8
      ">
        Pembayaran
      </h1>



      <div className="
        bg-slate-800
        rounded-3xl
        p-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-6
        ">
          Ringkasan Pesanan
        </h2>



        <div className="
          bg-slate-700
          rounded-2xl
          p-5
          space-y-3
          mb-8
        ">


          <p>
            Game:
            <b className="ml-2">
              {game}
            </b>
          </p>


          <p>
            ID:
            <b className="ml-2">
              {user}
            </b>
          </p>


          {extra && (
            <p>
              {game === "Valorant"
                ? "Tagline:"
                : "Server ID:"}

              <b className="ml-2">
                {extra}
              </b>

            </p>
          )}


          <p>
            Nominal:
            <b className="ml-2">
              {item}
            </b>
          </p>


        </div>




        <div className="
          bg-blue-600
          rounded-2xl
          p-5
          mb-8
        ">

          <p className="text-sm">
            Total Pembayaran
          </p>


          <h2 className="
            text-3xl
            font-bold
          ">
            Rp {Number(price).toLocaleString("id-ID")}
          </h2>

        </div>





        <h2 className="
          text-xl
          font-bold
          mb-4
        ">
          Pilih Metode Pembayaran
        </h2>





        <div className="
          grid
          gap-4
        ">


          {[
            {
              name:"QRIS",
              icon:"📱",
              desc:"Scan QR untuk membayar"
            },

            {
              name:"Dana",
              icon:"💙",
              desc:"Pembayaran melalui Dana"
            },

            {
              name:"Bank Transfer",
              icon:"🏦",
              desc:"Transfer manual"
            }

          ].map((payment)=>(


            <button

              key={payment.name}

              onClick={()=>
                setMethod(payment.name)
              }

              className={`
                flex
                items-center
                gap-4
                p-5
                rounded-2xl
                transition
                text-left

                ${
                  method === payment.name
                  ?
                  "bg-blue-600"
                  :
                  "bg-slate-700 hover:bg-slate-600"
                }

              `}

            >

              <div className="
                text-3xl
              ">
                {payment.icon}
              </div>


              <div>

                <p className="font-bold">
                  {payment.name}
                </p>


                <p className="
                  text-sm
                  text-gray-300
                ">
                  {payment.desc}
                </p>

              </div>


            </button>


          ))}


        </div>





        {method && (

          <div className="
            mt-6
            bg-slate-700
            rounded-2xl
            p-5
          ">


            <h3 className="font-bold mb-2">
              Instruksi Pembayaran
            </h3>


            {method === "QRIS" && (
              <p>
                Scan QRIS yang tersedia lalu lakukan pembayaran.
              </p>
            )}


            {method === "Dana" && (
              <p>
                Kirim pembayaran ke nomor Dana toko.
              </p>
            )}


            {method === "Bank Transfer" && (
              <p>
                Transfer ke rekening toko kemudian upload bukti pembayaran.
              </p>
            )}


          </div>

        )}






        <button

          onClick={handlePayment}

          disabled={loading}

          className="
            w-full
            mt-8
            bg-green-600
            hover:bg-green-700
            disabled:bg-gray-600
            py-4
            rounded-2xl
            font-bold
            text-lg
          "

        >

          {loading
            ? "Memproses..."
            : "Bayar Sekarang"
          }


        </button>



      </div>

    </div>


  </main>
);
}