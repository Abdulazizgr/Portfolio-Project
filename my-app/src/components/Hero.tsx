"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [
    {
      title: "Ipsum Dolor Si",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    },
    {
      title: "Consectetur Adipiscing",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Sed Eu Feugiat",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      title: "Urna Commodo",
      description:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lacus Ut Magna",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative min-h-screen bg-[#F9F8F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1915] mb-4">
              {slides[activeSlide].title}
            </h2>
            <p className="text-[#1E1915] mb-6 text-sm sm:text-base">
              {slides[activeSlide].description}
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2 mb-8">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search for books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 rounded-full border-2 border-[#1E1915] focus:border-gray-400 focus:ring-gray-400"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#1E1915] text-white hover:bg-[#4e4137] rounded-full px-4 sm:px-6"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>

            {/* Pagination Dots */}
            <div className="flex justify-center lg:justify-start gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSlide ? "bg-[#1E1915] w-7" : "bg-gray-300"
                  }`}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Book Covers Grid */}
          <div className="mt-12 lg:mt-0 relative h-[400px] sm:h-[500px] hidden sm:block">
            {/* Book 1 */}
            <div className="absolute top-[10%] left-[10%] transform hover:scale-105 transition-transform">
              <Image
                src="/download.jpeg"
                alt="2020 World of War"
                width={160}
                height={224}
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* Book 2 */}
            <div className="absolute bottom-[5%] right-[10%] transform hover:scale-105 transition-transform">
              <Image
                src="/h.jpg"
                alt="At War on the Gothic Line"
                width={140}
                height={196}
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Book 3 */}
            <div className="absolute top-[5%] left-[40%] transform hover:scale-105 transition-transform">
              <Image
                src="/i.jpg"
                alt="The Time Traveller's Handbook"
                width={180}
                height={120}
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Book 4 */}
            <div className="absolute top-[15%] right-[5%] transform hover:scale-105 transition-transform">
              <Image
                src="/g.jpg"
                alt="Doctor Who"
                width={150}
                height={210}
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Book 5 */}
            <div className="absolute bottom-[10%] left-[30%] transform hover:scale-105 transition-transform">
              <Image
                src="/d.webp"
                alt="Slipfest"
                width={170}
                height={238}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Mobile Book Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 sm:hidden">
            {["/download.jpeg", "/h.jpg", "/i.jpg", "/g.jpg", "/d.webp"].map(
              (src, index) => (
                <div key={index} className="aspect-[3/4]">
                  <Image
                    src={src}
                    alt={`Book ${index + 1}`}
                    width={200}
                    height={280}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
