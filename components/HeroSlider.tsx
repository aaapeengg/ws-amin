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
    <div className="relative w-full h-full rounded-3xl overflow-hidden">

      <>
  <Image
  key={banners[current].id}
  src={banners[current].image}
  alt={banners[current].title}
  fill
  className="
    object-cover
    transition-opacity
    duration-700
  "
/>

<div
  className="
    absolute
    bottom-5
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
      className={`
        h-2
        rounded-full
        transition-all
        ${
          current === index
            ? "bg-cyan-400 w-8"
            : "bg-white/40 w-2"
        }
      `}
    />
  ))}
</div>

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/50
      via-transparent
      to-transparent
    "
  />
</>

    </div>
  );
}