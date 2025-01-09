"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function BookCard() {
  const books = [
    {
      id: 1,
      title: "The Burning Earth",
      author: "Sunil Amrith",
      rating: 4.5,
      image: "/z.webp",
    },
    {
      id: 2,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      rating: 4.2,
      image: "/y.jpg",
    },
    {
      id: 3,
      title: "The Art of War",
      author: "Thomas Cleary",
      rating: 4.8,
      image: "/x.jpg",
    },
    {
      id: 4,
      title: "Emotional Intelligence",
      author: "Daniel Goleman",
      rating: 4.0,
      image: "/v.jpg",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1 justify-center ">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : index < rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <span className="text-sm text-gray-600 uppercase tracking-wider">
            Featured Book Reviews
          </span>
        </div>
        <h2 className="text-3xl font-bold text-center text-[#4527A0] mb-8">
          New Release Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl ml-20 ">
          {books.map((book) => (
            <div key={book.id} className="group  p-4">
              <div className="relative aspect-[3/4] mb-4 shadow-2xl rounded-xl">
                <Link href="/bookdetails/1">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover p-4 rounded-lg"
                  />
                </Link>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-center">
                <Link
                  href="#"
                  className="hover:text-[#4527A0] transition-colors"
                >
                  {book.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-2 text-center">{book.author}</p>
              {renderStars(book.rating)}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 gap-4">
          <Link href="/myBooks">
            <Button
              variant="outline"
              className="rounded-full border-2 py-5 px-10  text-[#1E1915]  bg-[F4F1EA] border-[#2f4858]  hover:bg-[#363634] hover:text-white transition-colors"
            >
              View All Books →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
