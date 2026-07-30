"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/admin/ImageUpload";

export default function BannerForm({
  banner,
}: {
  banner?: any;
}) {

  const router = useRouter();

const [title, setTitle] = useState(banner?.title ?? "");
const [image, setImage] = useState(banner?.image ?? "");

  async function handleSubmit() {

    if (!title || !image) {
      alert("Lengkapi semua data.");
      return;
    }

    const res = await fetch(

  banner
    ? `/api/admin/banner/${banner.id}`
    : "/api/admin/banner",

  {
    method: banner ? "PUT" : "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      title,
      image,
      isActive: banner?.isActive ?? true,
    }),
  }

);

    if (res.ok) {

      setTitle("");
      setImage("");

      window.location.reload();

    }

  }

  return (

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
  {banner ? "Edit Banner" : "Tambah Banner"}
</h2>
      <input
        placeholder="Judul Banner"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full bg-slate-700 rounded-xl p-3 mb-4"
      />

      <ImageUpload
  value={image}
  onChange={setImage}
/>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
      >
        {banner ? "Update Banner" : "Tambah Banner"}
      </button>

    </div>

  );

}