"use client";

import InfoRow from "./topup/InfoRow";
import SummarySection from "./topup/SummarySection";
import ContactSection from "./topup/ContactSection";
import PaymentSection from "./topup/PaymentSection";
import NominalSection from "./topup/NominalSection";
import AccountSection from "./topup/AccountSection";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { payments } from "@/data/payments";
import {
  Gamepad2,
  Gem,
  CreditCard,
  UserRound,
  Receipt,
  LoaderCircle,
  CircleCheckBig,
  CircleX,
  ShoppingCart
} from "lucide-react";

export default function TopUpForm({ game }: any) {

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [openedCategory, setOpenedCategory] = useState("QRIS");

const [userId, setUserId] = useState("");
const [extraId, setExtraId] = useState("");

const [nickname, setNickname] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const [countryCode, setCountryCode] = useState("+62");
const [whatsapp, setWhatsapp] = useState("");

const [checking, setChecking] = useState(false);
const [checked, setChecked] = useState(false);

const paymentRef = useRef<HTMLDivElement>(null);
const contactRef = useRef<HTMLDivElement>(null);
const summaryRef = useRef<HTMLDivElement>(null);


  const canContinue =
  selectedItem &&
selectedPayment &&
userId &&
whatsapp &&
(
  game.inputType === "user" ||
  extraId
) &&
checked;

const adminFee = selectedPayment ? 1000 : 0;

const totalPrice =
  (selectedItem?.price || 0) + adminFee;

const paymentMethod =
  payments
    .flatMap(category => category.methods)
    .find(method => method.id === selectedPayment);

const paymentName = paymentMethod?.name || "-";

const paymentData =
  payments
    .flatMap((group) => group.methods)
    .find((p) => p.id === selectedPayment);

async function handleCheckNickname() {

  try {

    setChecking(true);

    setChecked(false);

    setNickname("");

    setErrorMessage("");

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

setErrorMessage("");

setChecked(true);

    } else {

      setErrorMessage(data.message || "Nickname tidak ditemukan");

    }

  } catch (err) {

    console.error(err);

    setErrorMessage("Gagal mengecek nickname.");

  } finally {

    setChecking(false);

  }

} 

useEffect(() => {

  setChecked(false);
  setNickname("");
  setErrorMessage("");

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

    <div className="bg-slate-800 rounded-3xl p-5">

  <div className="flex items-center justify-between">

    <div className="flex flex-col items-center flex-1">

      <div className={`
        w-10 h-10 rounded-full
        flex items-center justify-center
        font-bold
        ${checked ? "bg-cyan-500" : "bg-slate-700"}
      `}>
        {checked ? "✓" : "1"}
      </div>

      <span className="text-xs mt-2 text-slate-400">
        Account
      </span>

    </div>

    <div className="flex-1 h-[2px] bg-slate-700 mx-2"/>

    <div className="flex flex-col items-center flex-1">

      <div className={`
        w-10 h-10 rounded-full
        flex items-center justify-center
        font-bold
        ${selectedItem ? "bg-cyan-500" : "bg-slate-700"}
      `}>
        {selectedItem ? "✓" : "2"}
      </div>

      <span className="text-xs mt-2 text-slate-400">
        Nominal
      </span>

    </div>

    <div className="flex-1 h-[2px] bg-slate-700 mx-2"/>

    <div className="flex flex-col items-center flex-1">

      <div className={`
        w-10 h-10 rounded-full
        flex items-center justify-center
        font-bold
        ${selectedPayment ? "✓" : "3"}
      `}>
        {selectedPayment ? "✓" : "3"}
      </div>

      <span className="text-xs mt-2 text-slate-400">
        Payment
      </span>

    </div>

    <div className="flex-1 h-[2px] bg-slate-700 mx-2"/>

    <div className="flex flex-col items-center flex-1">

      <div className={`
        w-10 h-10 rounded-full
        flex items-center justify-center
        font-bold
        ${whatsapp.length >= 9 ? "bg-cyan-500" : "bg-slate-700"}
      `}>
        {whatsapp.length >= 9 ? "✓" : "4"}
      </div>

      <span className="text-xs mt-2 text-slate-400">
        Contact
      </span>

    </div>

    <div className="flex-1 h-[2px] bg-slate-700 mx-2"/>

    <div className="flex flex-col items-center flex-1">

      <div className={`
        w-10 h-10 rounded-full
        flex items-center justify-center
        font-bold
        ${canContinue ? "bg-green-500" : "bg-slate-700"}
      `}>
        {canContinue ? "✓" : "5"}
      </div>

      <span className="text-xs mt-2 text-slate-400">
        Finish
      </span>

    </div>

  </div>

</div>


      {/* DATA AKUN */}

      <AccountSection> 

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


</div>

{checking && (

  <div
    className="
      mt-4
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-yellow-500/40
      bg-yellow-500/10
      px-4
      py-3
    "
  >

    <LoaderCircle
  className="
    h-5
    w-5
    text-yellow-400
    animate-spin
  "
/>

    <p className="text-sm font-medium text-yellow-300">
      Please Wait...
    </p>

  </div>

)}

{nickname && (

  <div
    className="
      mt-4
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-green-500/40
      bg-green-500/10
      px-4
      py-3
    "
  >

    <CircleCheckBig
  className="
    h-6
    w-6
    text-green-400
    shrink-0
  "
/>

    <p className="flex items-center gap-2 text-sm">

  <span className="text-green-400 font-semibold">
    Your account is
  </span>

  <span className="font-bold text-white">
    {nickname}
  </span>

  <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-300">
    🇮🇩 Indonesia
  </span>

</p>

  </div>

)}

{errorMessage && (

  <div
    className="
      mt-4
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-red-500/40
      bg-red-500/10
      px-4
      py-3
    "
  >

    <CircleX
  className="
    h-6
    w-6
    text-red-400
    shrink-0
  "
/>

    <p className="text-sm font-semibold text-red-400">
      Invalid ID
    </p>

  </div>

)}

      </AccountSection>

      {/* NOMINAL */}

      <NominalSection> 
        
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-4
        ">


          {game.items.map((item:any)=>(


            <button

              key={item.amount}

              onClick={() => {
  setSelectedItem(item);

  setTimeout(() => {
    paymentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 200);
}}

              className={`
  relative
  overflow-hidden
  p-5
  rounded-2xl
  border
  duration-300
  transition-all
  transform

  ${
    selectedItem?.amount === item.amount
      ? `
        bg-cyan-500/15
        border-cyan-400
        scale-[1.03]
        shadow-[0_0_25px_rgba(34,211,238,0.35)]
      `
      : `
        bg-slate-800
        border-slate-700
        hover:border-cyan-500
        hover:bg-slate-700
        hover:-translate-y-1
        hover:scale-[1.02]
      `
  }
`}

            >

              <div className="flex items-center justify-between">

  <div>

    <p className="font-bold text-lg">
      {item.amount}
    </p>

    <p className="text-sm text-slate-400 mt-1">
      Diamond
    </p>

<span
  className="
    inline-block
    mt-2
    rounded-full
    bg-cyan-500/15
    px-3
    py-1
    text-xs
    font-semibold
    text-cyan-300
  "
>
  Instant
</span>

  </div>

  <Gem
  className="
    h-9
    w-9
    text-cyan-400
    drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]
  "
/>

</div>

<div className="mt-5 pt-4 border-t border-slate-600">

  <p className="
  text-2xl
  font-extrabold
  text-cyan-400
">
    Rp {item.price.toLocaleString("id-ID")}
  </p>

</div>


            </button>


          ))}


        </div>


      </NominalSection>

      <div
  ref={paymentRef}
  className="bg-slate-800 rounded-3xl p-6"
>
  <PaymentSection> 

  <p className="text-slate-400 mt-1">
    Pilih metode pembayaran favoritmu.
  </p>

</PaymentSection>

  <div className="space-y-4">

  {payments.map((category) => (

    <div
      key={category.category}
      className="rounded-2xl border border-slate-700 overflow-hidden"
    >

      <button
        onClick={() =>
          setOpenedCategory(
            openedCategory === category.category
              ? ""
              : category.category
          )
        }
        className="
  w-full
  flex
  items-center
  justify-between
  bg-slate-800
  hover:bg-slate-700
  px-6
  py-5
  transition-all
"
      >

        <div>

          <div className="flex items-center gap-3">

  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">

    {category.category === "QRIS" && "📱"}
    {category.category === "E-Wallet" && "💳"}
    {category.category === "Virtual Account" && "🏦"}

  </div>

  <div>

    <p className="font-bold">
      {category.category}
    </p>

    <p className="text-sm text-slate-400">
      {category.methods.length} metode pembayaran
    </p>

  </div>

</div>

        </div>

        <ChevronDown
  className={`
    h-5
    w-5
    transition-all
    duration-300
    ${
      openedCategory === category.category
        ? "rotate-180 text-cyan-400"
        : "text-slate-400"
    }
  `}
/>

      </button>

      {openedCategory === category.category && (

        <div className="p-4 space-y-3 bg-slate-900">

          {category.methods.map((payment) => (

            <button
              key={payment.id}
              onClick={() => {

  setSelectedPayment(payment.id);

  setTimeout(() => {

    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }, 200);

}}
              className={`
  w-full
  flex
  items-center
  justify-between
  rounded-2xl
  border
  p-5
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-lg

  ${
    selectedPayment === payment.id
      ? "border-cyan-500 bg-cyan-500/10 shadow-cyan-500/20 shadow-lg"
      : "border-slate-700 hover:border-cyan-500 bg-slate-800"
  }
`}
            >

              <div className="flex items-center gap-4">

                <Image
  src={payment.image}
  alt={payment.name}
  width={52}
  height={52}
  className="
    rounded-xl
    bg-white
    p-1
  "
/>

                <div className="text-left">

  <div className="flex items-center gap-2">

    <p className="font-bold">
      {payment.name}
    </p>

    {payment.id === "qris" && (
      <span
        className="
          bg-green-500
          text-white
          text-[10px]
          px-2
          py-0.5
          rounded-full
          font-semibold
        "
      >
        Recommended
      </span>
    )}

  </div>

  <div className="flex items-center gap-2 mt-1">

  <p className="text-sm text-slate-400">
    {payment.subtitle}
  </p>

  <span className="text-slate-500">
    •
  </span>

  <p className="text-xs text-cyan-400 font-medium">
    {payment.eta}
  </p>

</div>

</div>

              </div>

              {selectedPayment === payment.id && (

                <div
  className="
    h-8
    w-8
    rounded-full
    bg-cyan-500
    flex
    items-center
    justify-center
    text-slate-950
    font-bold
    animate-pulse
  "
>
  ✓
  <p className="text-xs text-cyan-400 mt-2">
  Dipilih
</p>
</div>

              )}

            </button>

          ))}

        </div>

      )}

    </div>

  ))}

</div>

</div>

<div
  ref={contactRef}
  className="bg-slate-800 rounded-3xl p-6"
>

  <ContactSection>

  <h2 className="text-2xl font-bold mb-6">
    Contact
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    {/* Country */}

    <div>

      <label className="text-sm text-slate-400">
        Region
      </label>

      <select
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        className="
          mt-2
          w-full
          rounded-xl
          bg-slate-700
          p-3
        "
      >

        <option value="+62">🇮🇩 Indonesia (+62)</option>

        <option value="+60">🇲🇾 Malaysia (+60)</option>

        <option value="+65">🇸🇬 Singapore (+65)</option>

        <option value="+63">🇵🇭 Philippines (+63)</option>

      </select>

    </div>

    {/* WhatsApp */}

    <div className="md:col-span-2">

      <label className="text-sm text-slate-400">
        WhatsApp
      </label>

      <input
        type="tel"
        inputMode="numeric"
        placeholder="81234567890"
        value={whatsapp}
        onChange={(e) => {

  const value = e.target.value.replace(/\D/g,"");

  setWhatsapp(value);

  if (value.length >= 9) {

    setTimeout(() => {

      summaryRef.current?.scrollIntoView({

        behavior: "smooth",
        block: "start",

      });

    }, 300);

  }

}}
        className="
          mt-2
          w-full
          rounded-xl
          bg-slate-700
          p-3
        "
      />

    </div>

  </div>

  <p className="text-xs text-slate-500 mt-4">
    Status pesanan akan dikirim ke nomor WhatsApp ini.
  </p>

</ContactSection>

</div>



      {/* RINGKASAN */}


      {selectedItem && (

        <SummarySection>
  
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
  <Receipt className="w-6 h-6 text-cyan-400" />
  Ringkasan Pesanan
</h2>

<div className="space-y-6">

  <InfoRow
    icon={<Gamepad2 className="text-cyan-400" />}
    label="Game"
    value={game.name}
  />

  <InfoRow
    icon={<UserRound className="text-cyan-400" />}
    label="Nickname"
    value={nickname}
  />

  <InfoRow
    icon={<Gem className="text-cyan-400" />}
    label="Nominal"
    value={selectedItem.amount}
  />

  <InfoRow
    icon={<CreditCard className="text-cyan-400" />}
    label="Pembayaran"
    value={
      <div>
        <p>{paymentName}</p>

        <p className="text-xs text-slate-400">
          {
            payments
              .flatMap(category => category.methods)
              .find(method => method.id === selectedPayment)
              ?.subtitle
          }
        </p>
      </div>
    }
  />

</div>

<div className="my-6 border-t border-slate-700"></div>

<div className="space-y-3">

  <div className="flex justify-between">

  <span className="text-slate-400">
    Subtotal
  </span>

  <span className="font-semibold text-white">
    Rp {selectedItem.price.toLocaleString("id-ID")}
  </span>

</div>

  <div className="flex justify-between text-gray-400">
    <span>Biaya Admin</span>
    <span className={adminFee === 0 ? "text-green-400 font-semibold" : "font-semibold text-white"}>
  {adminFee === 0
    ? "Gratis"
    : `Rp ${adminFee.toLocaleString("id-ID")}`}
</span>
  </div>

</div>

<div className="my-6 border-t border-slate-700"></div>

<div className="flex items-center justify-between">

  <div>

    <p className="uppercase text-xs tracking-wider text-slate-500">
      Total Pembayaran
    </p>

    <p className="text-4xl font-black tracking-tight text-cyan-400">
      Rp {totalPrice.toLocaleString("id-ID")}
    </p>

  </div>

</div>

        </SummarySection>

      )}





      <button

        disabled={!canContinue}

        onClick={() => {

const url =
  `/checkout?game=${game.name}` +
  `&item=${selectedItem.amount}` +
  `&price=${selectedItem.price}` +
  `&user=${userId}` +
  `&extra=${extraId}` +
  `&product=${selectedItem.productCode}` +
  `&payment=${selectedPayment}`;

console.log(url);

window.location.href = url;
}}

        className="
group
w-full
mt-8

rounded-3xl

bg-gradient-to-r
from-cyan-500
via-cyan-600
to-blue-600

px-7
py-6

transition-all
duration-300

hover:-translate-y-1
hover:scale-[1.01]

hover:shadow-2xl
hover:shadow-cyan-500/30

active:scale-[0.99]

disabled:opacity-50
disabled:cursor-not-allowed
"

      >

        <div className="flex items-center justify-between">

  <div className="flex items-center gap-4">

    <div
      className="
h-12
w-12
rounded-2xl
bg-white/10

flex
items-center
justify-center

transition-all
duration-300

group-hover:bg-white/20
"
    >
      <ShoppingCart className="h-6 w-6 text-white" />
    </div>

    <div>

      <p className="text-lg font-bold text-white">
        Pesan Sekarang
      </p>

      <p className="text-sm text-cyan-100">
        Klik untuk membuat pesanan
      </p>

    </div>

  </div>

  <div className="text-right">

    <p className="uppercase text-[10px] tracking-[3px] text-cyan-100">
      TOTAL
    </p>

    <p className="text-3xl font-black text-white">
      Rp {totalPrice.toLocaleString("id-ID")}
    </p>

  </div>

</div>

      </button>



    </div>

  );
}