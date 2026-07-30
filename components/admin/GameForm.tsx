"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GameForm() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [currency, setCurrency] = useState("");
  const [inputType, setInputType] = useState("");
  const [nicknameCode, setNicknameCode] = useState("");

  async function handleSubmit() {

    const res = await fetch("/api/admin/game", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        slug,
        image,
        currency,
        inputType,
        nicknameCode,
      }),

    });

    if (res.ok) {

      router.push("/admin/games");

    }

  }

  return (

    <div className="bg-slate-800 rounded-2xl p-6 space-y-4">

      <input
  placeholder="Nama Game"
  value={name}
  onChange={(e) => {

    const value = e.target.value;

    setName(value);

    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
    );

  }}
  className="w-full bg-slate-700 rounded-xl p-3"
/>

      <input
  placeholder="Slug Otomatis"
  value={slug}
  readOnly
  className="w-full bg-slate-900 rounded-xl p-3 text-gray-400 cursor-not-allowed"
/>

      <input
        placeholder="/games/ml.jpg"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        placeholder="Diamond"
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        placeholder="ml / user / riot"
        value={inputType}
        onChange={(e)=>setInputType(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        placeholder="mobile-legends"
        value={nicknameCode}
        onChange={(e)=>setNicknameCode(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
      >
        Simpan
      </button>

    </div>

  );

}