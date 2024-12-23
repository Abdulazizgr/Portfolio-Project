"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function BookCard() {
  const books = [
    {
      id: 1,
      title: "Simple Way Of Piece Life",
      author: "Armor Ramsey",
      rating: 4.5,
      image: "/h.jpg",
    },
    {
      id: 2,
      title: "Great Travel At Desert",
      author: "Sanchit Howdy",
      rating: 4.2,
      image: "/h.jpg",
    },
    {
      id: 3,
      title: "The Lady Beauty Scarlett",
      author: "Arthur Doyle",
      rating: 4.8,
      image: "/h.jpg",
    },
    {
      id: 4,
      title: "Once Upon A Time",
      author: "Klien Marry",
      rating: 4.0,
      image: "/h.jpg",
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
                <Link href="/products">
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
          {/* <div className="flex gap-2">
            <button className="w-2 h-2 rounded-full bg-[#4527A0]" />
            <button className="w-2 h-2 rounded-full bg-gray-200" />
            <button className="w-2 h-2 rounded-full bg-gray-200" />
            <button className="w-2 h-2 rounded-full bg-gray-200" />
          </div> */}
          <Link href="/">
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
