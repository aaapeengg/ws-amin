"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Banner = {
  id: string;
  title: string;
  image: string;
};

export default function HeroSlider() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/admin/banner")
      .then((res) => res.json())
      .then(setBanners);
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners]);

  if (banners.length === 0) {
    return (
      <div className="text-slate-500">
        Belum ada banner.
      </div>
    );
  }

  return (
  <div className="relative w-full h-full overflow-hidden rounded-3xl">

    <Image
      key={banners[current].id}
      src={banners[current].image}
      alt={banners[current].title}
      fill
      priority
      className="
        object-cover
        transition-all
        duration-700
      "
    />

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/40
        via-transparent
        to-transparent
      "
    />

    <div
      className="
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        flex
        gap-2
      "
    >
      {banners.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`transition-all rounded-full ${
            current === index
              ? "w-8 h-2 bg-cyan-400"
              : "w-2 h-2 bg-white/40"
          }`}
        />
      ))}
    </div>

  </div>
);
}