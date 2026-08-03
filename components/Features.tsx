import {
  Zap,
  ShieldCheck,
  Wallet,
  CreditCard,
  Headset,
  Gamepad2,
} from "lucide-react";

const features = [
  {
    title: "Proses Instan",
    icon: Zap,
    desc: "Pesanan diproses otomatis hanya dalam hitungan detik.",
  },
  {
    title: "100% Aman",
    icon: ShieldCheck,
    desc: "Transaksi terenkripsi dan terpercaya.",
  },
  {
    title: "Harga Termurah",
    icon: Wallet,
    desc: "Harga selalu kompetitif setiap hari.",
  },
  {
    title: "Pembayaran Lengkap",
    icon: CreditCard,
    desc: "QRIS, E-Wallet, Virtual Account dan lainnya.",
  },
  {
    title: "Support 24/7",
    icon: Headset,
    desc: "Tim kami siap membantu kapan saja.",
  },
  {
    title: "Semua Game Populer",
    icon: Gamepad2,
    desc: "MLBB, FF, PUBG, Valorant dan banyak lagi.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10">

      <h2 className="text-2xl lg:text-3xl font-bold mb-2">
        Semua yang Kamu Butuhkan
      </h2>

      <p className="text-slate-400 max-w-xl mb-8">
  Kami menghadirkan pengalaman top up game yang cepat,
  aman, mudah, dan terpercaya untuk semua pemain.
</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

        {features.map((item) => {

  const Icon = item.icon;

  return (

          <div
            key={item.title}
            className="
group

rounded-2xl

border
border-slate-800

bg-[#101827]

p-5

transition-all
duration-300

hover:-translate-y-2
hover:border-cyan-500
hover:shadow-2xl
hover:shadow-cyan-500/20
"
          >
<div
  className="
    mb-6

    flex
    h-10
w-10
lg:h-12
lg:w-12

    items-center
    justify-center

    rounded-2xl

    bg-cyan-500/10

    transition-all
    duration-300

    group-hover:scale-110
    group-hover:rotate-6
  "
>

  <Icon
    className="
      h-5
w-5
lg:h-6
lg:w-6

      text-cyan-400
    "
  />

</div>

            <h3 className="font-bold text-base lg:text-lg mb-2">
              {item.title}
            </h3>

            <p
  className="
    hidden
    lg:block

    text-sm
    text-slate-400
    leading-6
    mt-2
  "
>
              {item.desc}
            </p>

          </div>

);

})}

      </div>

    </section>
  );
}