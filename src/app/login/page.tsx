// app/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasikan login, jika sukses arahkan ke dashboard
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto p-4 items-center flex flex-col">
      <div className="breadcrumbs mb-4">Home / Login</div>
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="outline p-8 rounded-3xl flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}
