'use client';
import React from "react";  
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form className="flex flex-col gap-4 w-full max-w-xs mb-8">
          <input
            type="text"
            placeholder="帳號"
            value={account}
            onChange={e => setAccount(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="密碼"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <button type="submit" className="bg-black text-white rounded px-3 py-2">
            登入
          </button>
        </form>
      </main>
    </div>
  );
}