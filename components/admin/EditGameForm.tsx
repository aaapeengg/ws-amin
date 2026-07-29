"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditGameForm({
  game,
}: {
  game: any;
}) {

  const router = useRouter();

  const [name, setName] = useState(game.name);
  const [slug, setSlug] = useState(game.slug);
  const [image, setImage] = useState(game.image);
  const [currency, setCurrency] = useState(game.currency);
  const [inputType, setInputType] = useState(game.inputType);
  const [nicknameCode, setNicknameCode] = useState(
    game.nicknameCode || ""
  );

  async function handleUpdate() {

    const res = await fetch("/api/admin/game", {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        id: game.id,

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
      router.refresh();
    }

  }

  return (

    <div className="bg-slate-800 rounded-2xl p-6 space-y-4">

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        value={slug}
        onChange={(e)=>setSlug(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        value={inputType}
        onChange={(e)=>setInputType(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        value={nicknameCode}
        onChange={(e)=>setNicknameCode(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <button
        onClick={handleUpdate}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold"
      >
        Update Game
      </button>

    </div>

  );

}