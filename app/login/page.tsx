"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/admin",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-800 p-8 rounded-3xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-8">
          Login Admin
        </h1>

        <input
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-xl bg-slate-700 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl bg-slate-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
        >
          Login
        </button>

      </div>

    </main>
  );
}