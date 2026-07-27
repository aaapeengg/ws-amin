"use client";

import { useState } from "react";

export default function SearchGame() {
  const [keyword, setKeyword] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-slate-800 rounded-2xl p-6">

        <h2 className="text-3xl font-bold mb-4">
          Cari Game
        </h2>

        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari Mobile Legends, Free Fire..."
          className="
            w-full
            bg-slate-700
            rounded-xl
            p-4
            outline-none
            border
            border-slate-600
            focus:border-blue-500
          "
        />

      </div>

    </section>
  );
}