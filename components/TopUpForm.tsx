"use client";

import { useEffect, useState } from "react";

export default function TopUpForm({ game }: any) {

  const [selectedItem, setSelectedItem] = useState<any>(null);

const [userId, setUserId] = useState("");
const [extraId, setExtraId] = useState("");

const [nickname, setNickname] = useState("");
const [checking, setChecking] = useState(false);
const [checked, setChecked] = useState(false);


  const canContinue =
  selectedItem &&
  userId &&
  (
    game.inputType === "user" ||
    extraId
  ) &&
  checked;

async function handleCheckNickname() {

  try {

    setChecking(true);

    setChecked(false);

    setNickname("");

    const res = await fetch("/api/check-nickname", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        code: game.nicknameCode,

        target: userId,

        additionalTarget: extraId || undefined,

      }),

    });

    const data = await res.json();

console.log("HASIL API:", data);

    if (data.result) {

      setNickname(data.data);

      setChecked(true);

    } else {

      alert(data.message);

    }

  } catch (err) {

    console.error(err);

    alert("Gagal mengecek nickname.");

  } finally {

    setChecking(false);

  }

} 

useEffect(() => {

  setChecked(false);
  setNickname("");

  if (!userId) return;

  if (game.inputType === "ml" && !extraId) return;

  if (game.inputType === "riot" && !extraId) return;

  const timer = setTimeout(() => {

    handleCheckNickname();

  }, 800);

  return () => clearTimeout(timer);

}, [userId, extraId]);


  return (

    <div className="space-y-6">


      {/* DATA AKUN */}

      <div className="
        bg-slate-800
        rounded-3xl
        p-6
      ">

        <h2 className="text-2xl font-bold mb-6">
          Masukkan Data Akun
        </h2>



        {game.inputType === "ml" && (
          <>

            <label className="text-sm text-gray-400">
              User ID *
            </label>

            <input
              type="text"
              placeholder="Contoh: 123456789"
              value={userId}
              inputMode="numeric"
              onChange={(e)=>
                setUserId(
                  e.target.value.replace(/\D/g,"")
                )
              }
              className="
                w-full
                mt-2
                bg-slate-700
                rounded-xl
                p-3
                mb-4
              "
            />



            <label className="text-sm text-gray-400">
              Server ID *
            </label>

            <input
              type="text"
              placeholder="Contoh: 1234"
              value={extraId}
              inputMode="numeric"
              onChange={(e)=>
                setExtraId(
                  e.target.value.replace(/\D/g,"")
                )
              }
              className="
                w-full
                mt-2
                bg-slate-700
                rounded-xl
                p-3
              "
            />

          </>
        )}



        {game.inputType === "user" && (

          <>

            <label className="text-sm text-gray-400">
              User ID *
            </label>


            <input
              type="text"
              placeholder="Masukkan ID akun"
              value={userId}
              inputMode="numeric"
              onChange={(e)=>
                setUserId(
                  e.target.value.replace(/\D/g,"")
                )
              }
              className="
                w-full
                mt-2
                bg-slate-700
                rounded-xl
                p-3
              "
            />

          </>

        )}



        {game.inputType === "riot" && (

          <>

            <label className="text-sm text-gray-400">
              Riot ID *
            </label>


            <input
              type="text"
              placeholder="Contoh: Syafril"
              value={userId}
              onChange={(e)=>
                setUserId(e.target.value)
              }
              className="
                w-full
                mt-2
                bg-slate-700
                rounded-xl
                p-3
                mb-4
              "
            />



            <label className="text-sm text-gray-400">
              Tagline *
            </label>


            <input
              type="text"
              placeholder="Contoh: 1234"
              value={extraId}
              onChange={(e)=>
                setExtraId(e.target.value)
              }
              className="
                w-full
                mt-2
                bg-slate-700
                rounded-xl
                p-3
              "
            />

          </>

        )}

      <div className="mt-5">

  <button
  type="button"
  onClick={handleCheckNickname}
  disabled={checking}
  className="
    mt-3
    bg-blue-600
    hover:bg-blue-700
    disabled:bg-gray-600
    px-5
    py-3
    rounded-xl
    font-bold
  "
>
  {checking ? "Mengecek..." : "Cek Nickname"}
</button>

</div>

{nickname && (

  <div
    className="
      mt-4
      bg-green-500/20
      border
      border-green-500
      rounded-xl
      p-4
    "
  >

    <p className="text-green-400 font-semibold">
      ✓ Nickname ditemukan
    </p>

    <p className="text-xl font-bold mt-2">
      {nickname}
    </p>

  </div>

)}


      </div>





      {/* NOMINAL */}


      <div className="
        bg-slate-800
        rounded-3xl
        p-6
      ">


        <h2 className="text-2xl font-bold mb-6">
          Pilih {game.currency}
        </h2>



        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-4
        ">


          {game.items.map((item:any)=>(


            <button

              key={item.amount}

              onClick={()=>
                setSelectedItem(item)
              }

              className={`
                p-5
                rounded-2xl
                border
                transition

                ${
                  selectedItem?.amount === item.amount
                  ?
                  "bg-blue-600 border-blue-400"
                  :
                  "bg-slate-700 border-slate-700 hover:bg-slate-600"
                }
              `}

            >

              <p className="font-bold text-lg">
                💎 {item.amount}
              </p>


              <p className="text-gray-300 mt-2">
                Rp {item.price.toLocaleString("id-ID")}
              </p>


            </button>


          ))}


        </div>


      </div>





      {/* RINGKASAN */}


      {selectedItem && (

        <div className="
          bg-slate-800
          rounded-3xl
          p-6
        ">


          <h2 className="text-xl font-bold mb-4">
            Ringkasan Pesanan
          </h2>


          <div className="space-y-2 text-gray-300">


            <p>
              Game:
              <b className="ml-2 text-white">
                {game.name}
              </b>
            </p>


            <p>
              Item:
              <b className="ml-2 text-white">
                {selectedItem.amount}
              </b>
            </p>


            <p>
              Harga:
              <b className="ml-2 text-white">
                Rp {selectedItem.price.toLocaleString("id-ID")}
              </b>
            </p>


          </div>


        </div>

      )}





      <button

        disabled={!canContinue}

        onClick={() => {

  window.location.href =
    `/checkout?game=${game.name}` +
    `&item=${selectedItem.amount}` +
    `&price=${selectedItem.price}` +
    `&user=${userId}` +
    `&extra=${extraId}` +
    `&product=${selectedItem.productCode}`;

}}

        className="
          w-full
          bg-green-600
          hover:bg-green-700
          disabled:bg-gray-600
          py-4
          rounded-2xl
          font-bold
          text-lg
        "

      >

        Lanjut Pembayaran

      </button>



    </div>

  );
}