"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BannerForm() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit() {

    if (!title || !image) {
      alert("Lengkapi semua data.");
      return;
    }

    const res = await fetch("/api/admin/banner", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        image,
      }),

    });

    if (res.ok) {

      setTitle("");
      setImage("");

      router.refresh();

    }

  }

  return (

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Tambah Banner
      </h2>

      <input
        placeholder="Judul Banner"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3 mb-4"
      />

      <input
        placeholder="/banner/ml.jpg"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3 mb-6"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
      >
        Tambah Banner
      </button>

    </div>

  );

}