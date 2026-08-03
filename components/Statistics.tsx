"use client";

import {
  ShoppingBag,
  Users,
  Headset,
  BadgeCheck,
} from "lucide-react";
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

const icons = [
  ShoppingBag,
  Users,
  Headset,
  BadgeCheck,
];

export default function Statistics() {
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
    top-0

    h-[420px]
    w-[420px]

    -translate-x-1/2

    rounded-full

    bg-cyan-500/10

    blur-[150px]

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

  <BadgeCheck
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
    SV STORE IN NUMBERS
  </span>

</div>

        <h2 className="font-space text-4xl md:text-5xl font-bold mt-3">
          Dipercaya Ribuan Gamer
        </h2>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => {

  const Icon = icons[index];

  return (

    <div
      key={item.label}
      className="
        group

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-8

        text-center

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-2xl
        hover:shadow-cyan-500/20
      "
    >

      <div className="mb-6 flex justify-center">

        <div
          className="
            flex
            h-16
            w-16
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
              h-8
              w-8
              text-cyan-400
            "
          />

        </div>

      </div>

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

  );

})}

      </div>

    </section>
  );
}