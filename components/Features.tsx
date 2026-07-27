const features = [
  {
    title: "Proses Instan",
    icon: "⚡",
    desc: "Pesanan diproses dalam hitungan detik.",
  },
  {
    title: "Harga Murah",
    icon: "💰",
    desc: "Harga kompetitif setiap hari.",
  },
  {
    title: "Pembayaran Lengkap",
    icon: "💳",
    desc: "QRIS, E-Wallet, Bank Transfer.",
  },
  {
    title: "Support",
    icon: "💬",
    desc: "Siap membantu jika ada kendala.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold mb-10">
        Kenapa Memilih Kami?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item) => (

          <div
            key={item.title}
            className="bg-slate-800 rounded-2xl p-8"
          >

            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <h3 className="font-bold text-xl mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}