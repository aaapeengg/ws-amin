"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ItemForm({
  games,
}: {
  games: any[];
}) {

  const router = useRouter();

  const [gameId, setGameId] = useState(games[0]?.id || "");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [productCode, setProductCode] = useState("");

  async function handleSubmit() {

    const res = await fetch("/api/admin/item", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        gameId,

        amount,

        price: Number(price),

        productCode,

      }),

    });

    if (res.ok) {

      router.push("/admin/items");

    }

  }

  return (

    <div className="bg-slate-800 rounded-2xl p-6 space-y-4">

      <select
        value={gameId}
        onChange={(e)=>setGameId(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      >

        {games.map((game)=>(

          <option
            key={game.id}
            value={game.id}
          >
            {game.name}
          </option>

        ))}

      </select>

      <input
        placeholder="86 Diamond"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        placeholder="20000"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3"
      />

      <input
        placeholder="ML86"
        value={productCode}
        onChange={(e)=>setProductCode(e.target.value)}
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