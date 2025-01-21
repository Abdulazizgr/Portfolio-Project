"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFFFFF] p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-20 md:mb-20">
        <Image
          src="/logo.webp"
          width={40}
          height={40}
          alt="Logo"
          className="rounded-lg"
        />
        <span className="text-xl font-bold pt-2 text-[#1E1915]">
          Book Review Hub
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-md mx-auto">
          <div className="bg-[#F4F1EA] rounded-3xl p-8 relative overflow-hidden">
            <h1 className="text-2xl font-bold text-center mb-2">
              Welcome to Logo Name
            </h1>
            <p className="text-center mb-6 text-md">Sign Up to Continue</p>

            <form className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-white rounded-full pl-10 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  👤
                </span>
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="bg-white rounded-full pl-10 pr-12 h-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  🔒
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="bg-white rounded-full pl-10 pr-12 h-12"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  🔒
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                className="w-full rounded-full bg-[#4b4b48] text-white h-12 hover:bg-[#363634] transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-md mb-4">OR</p>
              <div className="flex justify-center gap-4">
                <button className="flex items-center justify-center w-full p-3 bg-[#3f72af] text-white rounded-full hover:bg-[#355a8e] transition-all">
                  <FaGoogle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">
                    Sign up with Google
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-700">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-[#3f72af] font-semibold hover:underline"
                >
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
