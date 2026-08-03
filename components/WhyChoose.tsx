import {
  Zap,
  ShieldCheck,
  Wallet,
  Clock3,
} from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Proses Instan",
    desc: "Pesanan diproses otomatis hanya dalam hitungan detik.",
  },
  {
    icon: ShieldCheck,
    title: "100% Aman",
    desc: "Transaksi aman menggunakan sistem terpercaya.",
  },
  {
    icon: Wallet,
    title: "Harga Terbaik",
    desc: "Harga kompetitif dengan promo setiap hari.",
  },
  {
    icon: Clock3,
    title: "Layanan 24/7",
    desc: "Kami siap membantu kapan pun kamu membutuhkan.",
  },
];

export default function WhyChoose() {
  return (
    <section
  className="
    relative
    max-w-7xl
    mx-auto
    px-6
    py-20
  "
>

<div
  className="
    absolute
    left-1/2
    top-20

    h-96
    w-96

    -translate-x-1/2

    rounded-full

    bg-cyan-500/10

    blur-[140px]

    pointer-events-none
  "
/>

      <div className="text-center mb-14">

        <div
  className="
    inline-flex
    items-center
    gap-2

    rounded-full

    bg-cyan-500/10

    px-4
    py-2
  "
>

  <ShieldCheck
    className="
      h-4
      w-4
      text-cyan-400
    "
  />

  <span
    className="
      text-sm
      font-semibold
      tracking-widest

      text-cyan-400
    "
  >
    WHY CHOOSE US
  </span>

</div>

        <h2 className="font-space text-4xl md:text-5xl font-bold mt-3">
          Kenapa SV STORE?
        </h2>

        <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
          Kami menghadirkan pengalaman top up game yang cepat,
          aman, dan nyaman untuk semua pemain.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                group
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-[var(--primary)]
                hover:shadow-2xl
                hover:shadow-cyan-500/25
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-[var(--primary)]
                "
              >
                <Icon
  size={28}
  className="
    transition-all
    duration-300

    group-hover:scale-125
    group-hover:rotate-6
  "
/>
              </div>

              <h3
  className="
    mt-6

    font-space
    text-2xl
    font-bold

    transition-all
    duration-300

    group-hover:text-cyan-400
  "
>
                {item.title}
              </h3>

              <p className="text-[var(--muted)] mt-4 leading-7">
                
                {item.desc}
              </p>

<div
  className="
    mt-6

    flex
    items-center
    gap-2

    text-sm
    font-semibold

    text-cyan-400
  "
>

  <Zap className="h-4 w-4"/>

  Trusted by 50.000+ gamers

</div>

            </div>

          );
        })}

      </div>

    </section>
  );
}