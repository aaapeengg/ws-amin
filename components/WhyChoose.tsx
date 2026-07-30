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
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">

        <p className="text-[var(--primary)] font-semibold tracking-widest uppercase">
          Kenapa Memilih Kami
        </p>

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
                hover:shadow-xl
                hover:shadow-cyan-500/10
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
                <Icon size={28} />
              </div>

              <h3 className="font-space text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-[var(--muted)] mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
}