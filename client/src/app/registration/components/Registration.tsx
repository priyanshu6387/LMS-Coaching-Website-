"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Registering:", form);
    // TODO: Send data to backend
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#d2f8d2] to-[#b3e5fc] flex items-center justify-center px-4 py-26">
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#0284c7] to-[#00b894] rounded-[2rem] p-6 md:p-8 shadow-2xl border border-[#00a383]">
        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Create Your Account
          </h1>
        </div>

        {/* Divider */}
        <div className="text-center text-white text-sm mb-6">
          Sign up with email
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                className="w-full bg-transparent border-b border-white py-2 px-1 focus:outline-none placeholder:text-white/80"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="w-full bg-transparent border-b border-white py-2 px-1 focus:outline-none placeholder:text-white/80"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-white py-2 px-1 focus:outline-none placeholder:text-white/80"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full bg-transparent border-b border-white py-2 px-1 pr-10 focus:outline-none placeholder:text-white/80"
            />
            <div
              className="absolute right-2 top-[2.4rem] cursor-pointer text-xl text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </div>
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Re-enter your password"
              className="w-full bg-transparent border-b border-white py-2 px-1 pr-10 focus:outline-none placeholder:text-white/80"
            />
            <div
              className="absolute right-2 top-[2.4rem] cursor-pointer text-xl text-white"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <HiEyeOff /> : <HiEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#0070f3] py-2.5 rounded-full font-semibold hover:bg-[#0070f3] hover:text-white transition-all"
          >
            Register
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 my-6">
          <button className="bg-white p-3 rounded-full hover:scale-105 transition" aria-label="Signup with Google">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="bg-white p-3 rounded-full hover:scale-105 transition" aria-label="Signup with Apple">
            <FaApple className="text-2xl text-black" />
          </button>
          <button className="bg-white p-3 rounded-full hover:scale-105 transition" aria-label="Signup with Microsoft">
            <Image src="/icons/microsoft.svg" alt="Microsoft" width={22} height={22} className="rounded-sm" />
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center text-sm text-white">
          Already have an account?{" "}
          <Link href="/login" className="underline hover:text-black font-medium">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
