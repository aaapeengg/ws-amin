"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageUpload({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [loading, setLoading] = useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);

    setLoading(true);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setLoading(false);

    onChange(data.url);
  }

  return (
    <div className="space-y-4">

      {value && (
        <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-700">

          <Image
            src={value}
            alt="Preview"
            fill
            className="object-cover"
          />

        </div>
      )}

      <label
        className="
          flex
          items-center
          justify-center
          border-2
          border-dashed
          border-slate-600
          rounded-2xl
          p-8
          cursor-pointer
          hover:border-blue-500
          transition
        "
      >

        {loading ? "Uploading..." : "📷 Pilih Gambar"}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />

      </label>

    </div>
  );
}