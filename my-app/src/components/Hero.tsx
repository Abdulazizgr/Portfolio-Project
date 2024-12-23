"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
// import img from "@/public/download.jpeg";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [
    {
      title: "Ipsum Dolor Si",
      description:
        " lorem*3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo nemo odit repellendus dolor excepturi illo, eaque, non provident, dolores itaque quas iusto! Vitae blanditiis a odio, deserunt consequatur molestiae..",
    },
    {
      title: "Ipsum Dolor Si",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. lorem*0.4  ",
    },
    {
      title: "Ipsum Dolor Si",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    },
    {
      title: "Ipsum Dolor Si",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.eeee",
    },
    {
      title: "Ipsum Dolor Si",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.eeee",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative min-h-[600px] bg-[#F9F8F4] from-pink-50 to-white h-screen">
      <div className="container mx-auto px-8 pl-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#1E1915] mb-4">
              {slides[activeSlide].title}
            </h2>
            <p className="text-[#1E1915] mb-6">
              {slides[activeSlide].description}
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2">
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
                className="bg-[#1E1915] text-white hover:bg-[#4e4137] rounded-full px-6"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-8">
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
          <div className="relative h-[500px] hidden md:block">
            {/* Book 1 */}
            <div className="absolute top-20 left-[10%] transform  hover:rotate-0 transition-transform">
              <Image
                src="/download.jpeg?height=280&width=200"
                alt="2020 World of War"
                width={200}
                height={280}
                className="rounded-lg shadow-2xl "
              />
            </div>

            {/* Book 2 */}
            <div className="absolute bottom-0 right-[10%] transform rotate-0 hover:rotate-0 transition-transform">
              <Image
                src="/h.jpg?height=280&width=200"
                alt="At War on the Gothic Line"
                width={200}
                height={280}
                className="w-[200px] h-auto rounded-lg shadow-xl md:w-[120px]"
              />
            </div>

            {/* Book 3 */}
            <div className="absolute top-0 left-[40%] transform -rotate- hover:rotate-0 transition-transform">
              <Image
                src="/i.jpg"
                alt="The Time Traveller's Handbook"
                width={280} // Adjust the width here
                height={160} // Adjust the height here
                className="w-[200px] h-auto rounded-lg shadow-xl md:w-[150px]" // Tailwind for responsive resizing
              />
            </div>

            {/* Book 4 */}
            <div className="absolute top-4 right-[3%] transform rotate- hover:rotate-0 transition-transform">
              <Image
                src="/g.jpg?height=280&width=200"
                alt="Doctor Who"
                width={200}
                height={280}
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Book 5 */}
            <div className="absolute bottom-[1%] left-[43%] transform -rotate- hover:rotate-0 transition-transform">
              <Image
                src="/d.webp?height=280&width=200"
                alt="Slipfest"
                width={200}
                height={280}
                className="w-[200px] h-auto rounded-lg shadow-xl md:w-[170px]"
              />
            </div>
          </div>

          {/* Mobile Book Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="aspect-[3/4]">
                <Image
                  src="/placeholder.svg?height=280&width=200"
                  alt={`Book ${index + 1}`}
                  width={200}
                  height={280}
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
