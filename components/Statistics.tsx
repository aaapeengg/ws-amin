"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "Order Berhasil",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Pelanggan",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Customer Support",
  },
  {
    value: 99,
    suffix: "%",
    label: "Success Rate",
  },
];

export default function Statistics() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">

        <p className="text-[var(--primary)] font-semibold tracking-widest uppercase">
          SV STORE DALAM ANGKA
        </p>

        <h2 className="font-space text-4xl md:text-5xl font-bold mt-3">
          Dipercaya Ribuan Gamer
        </h2>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item) => (

          <div
            key={item.label}
            className="
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-8
              text-center
            "
          >

            <div className="text-5xl font-black text-[var(--primary)]">

              <CountUp

                end={item.value}

                duration={2.5}

              />

              {item.suffix}

            </div>

            <p className="text-[var(--muted)] mt-5">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}