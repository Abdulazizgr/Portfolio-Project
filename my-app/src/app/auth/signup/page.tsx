"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF] p-4 md:p-6 lg:p-8">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-20 md:mb-20">
          {/* Logo and Brand */}
          <Image src="/logo3.png" width={40} height={40} alt="Logo" />
          <span className="text-xl font-bold pt-2 text-[#1E1915]">
            Logo Name
          </span>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative">
          {/* Left Illustration */}
          <div className="absolute left-0 bottom-0 w-72 hidden lg:block">
            {/* <Image
              src="/placeholder.svg?height=300&width=288"
              alt="Stack of books illustration"
              width={288}
              height={300}
            /> */}
          </div>

          {/* Right Illustration */}
          <div className="absolute right-0 bottom-0 w-96 hidden lg:block">
            {/* <Image
              src="/placeholder.svg?height=400&width=384"
              alt="Person reading illustration"
              width={384}
              height={400}
            /> */}
          </div>

          {/* Sign Up Form */}
          <div className="max-w-md mx-auto">
            <div className="bg-[#F4F1EA] rounded-3xl p-8 relative overflow-hidden">
              {/* Form Illustration */}
              <div className="absolute top-1/2 right-0 w-32">
                {/* <Image
                  src="/placeholder.svg?height=150&width=128"
                  alt="Person jumping illustration"
                  width={128}
                  height={150}
                /> */}
              </div>

              <h1 className="text-2xl font-bold text-center mb-2">
                Welcome to Logo Name
              </h1>
              <p className="text-center mb-6 text-md">Sign Up to Continue</p>

              <form className="space-y-4 ">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-white rounded-full pl-10 h-12"
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

                <Button className="w-full rounded-full bg-[#4b4b48] text-white h-12 hover:bg-[#363634] transition-all">
                  Sign Up
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

              {/* Back to Login Link */}
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
    </>
  );
}
