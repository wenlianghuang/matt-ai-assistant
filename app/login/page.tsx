'use client';
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<null | "success" | "fail">(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //const response = await axios.post("https://agentic-ai-matt-backend.vercel.app/api/login", { account, password });
      const response = await axios.post("http://localhost:3000/api/login", { account, password });
      console.log(response.data);
      if (response.data.message === "Login successful!") {
        setResult("success");
      } else {
        setResult("fail");
      }
    } catch {
      setResult("fail");
    }
  };

  // 新增 useEffect 來導向
  useEffect(() => {
    if (result === "success") {
      // 登入成功後導向到聊天頁面
      router.push("/chatbot");
    }
  }, [result, router]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form className="flex flex-col gap-4 w-full max-w-xs mb-8" onSubmit={handleSubmit}>
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
        <button
        className="bg-red-500 text-white rounded px-3 py-2 w-full max-w-xs"
        onClick={() => window.location.href = "http://localhost:3000/api/auth/google"}
      >
        使用 Google 登入
      </button>
        {result === "success" && <div className="text-green-600">success</div>}
        {result === "fail" && <div className="text-red-600">失敗</div>}
      </main>
    </div>
  );
}