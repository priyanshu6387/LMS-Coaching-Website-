"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      interface LoginResponse {
        token: string;
        [key: string]: any;
      }

      const response = await axios.post<LoginResponse>("http://localhost:5000/api/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.error || "Login failed. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen mt-[12vmin] flex items-center justify-center bg-gradient-to-br from-[#f3f2ec] to-[#c8b9f2] px-4 py-10">
      <div className="w-full max-w-md bg-gradient-to-br from-[#ffffff] to-[#e8e2ff] rounded-3xl shadow-2xl p-8 border border-[#dad6f3]">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#2a2927]">Welcome Back</h1>
          <p className="text-sm mt-1 text-[#4b4a47]">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-[#2a2927]">
          <div>
            <label className="block text-sm mb-1 font-medium">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-[#2a2927] py-2 px-1 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-[#2a2927] py-2 px-1 pr-10 focus:outline-none"
              placeholder="Enter your password"
            />
            <div
              className="absolute right-2 top-[2.4rem] text-xl cursor-pointer text-[#2a2927]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </div>
          </div>

          <div className="text-right text-sm text-[#2a2927] underline cursor-pointer hover:text-black">
            Forgot password?
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-full bg-[#2a2927] text-white font-medium hover:bg-white hover:text-[#2a2927] hover:border hover:border-[#2a2927] transition-all disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Social Auth */}
        <div className="flex justify-center gap-4 my-6">
          <button
            className="bg-white p-3 rounded-full hover:scale-105 transition"
            aria-label="Login with Google"
          >
            <FcGoogle className="text-2xl" />
          </button>
          <button
            className="bg-white p-3 rounded-full hover:scale-105 transition"
            aria-label="Login with Apple"
          >
            <FaApple className="text-2xl text-black" />
          </button>
          <button
            className="bg-white p-3 rounded-full hover:scale-105 transition"
            aria-label="Login with Microsoft"
          >
            <Image
              src="/icons/microsoft.svg"
              alt="Microsoft"
              width={22}
              height={22}
              className="rounded-sm"
            />
          </button>
        </div>

        {/* Signup Link */}
        <div className="text-center text-sm text-[#2a2927]">
          Don’t have an account?{" "}
          <Link href="/registration" className="underline hover:text-black">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
