"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function BookReviewCTA() {
  return (
    <div className="min-h-[600px]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 p-8 lg:p-12 bg-[#] ">
            <div className="inline-block">
              <span className="text-[#E64A19] text-sm font-medium bg-[#E64A19]/10 px-3 py-1 rounded-full">
                book reviews
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#4527A0] leading-tight">
              Share, Discover & Engage with Book Reviews
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Join our vibrant community of book lovers. Share your thoughts on your latest reads,
              discover new books through authentic reviews, and engage with fellow readers who
              share your passion for literature.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* <div>
                <Input
                  type="email"
                  placeholder="Enter your email to get started"
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#4527A0] focus:ring-[#4527A0]"
                />
              </div> */}
              <Button 
                type="submit"
                className="w-full md:w-auto bg-[#E64A19] hover:bg-[#BF360C] text-white rounded-full px-8 py-3"
              >
                Start Reading Reviews
              </Button>
            </form>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>10K+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>5K+ Active Readers</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] hidden lg:block overflow-hidden ">
            <Image
              src="/cta.webp"
              alt="Person reading books"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

