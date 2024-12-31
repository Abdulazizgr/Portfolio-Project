"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  ratingCount: string;
}

interface BookRecommendationsProps {
  books: Book[];
}

export function BookRecommendations({ books }: BookRecommendationsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  };
  const totalPages = Math.ceil(books.length / booksPerPage.desktop);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">
          Readers <span className="italic">also</span> enjoyed
        </h2>
        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-6 h-1 rounded-full transition-colors ${
                index === currentPage ? "bg-black" : "bg-gray-200"
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {books
          .slice(
            currentPage * booksPerPage.desktop,
            (currentPage + 1) * booksPerPage.desktop
          )
          .map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="relative aspect-[3/4] mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold group-hover:text-[#4527A0] transition-colors text-sm sm:text-base">
                {book.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">{book.author}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-xs sm:text-sm">
                  {book.rating}
                </span>
                <span className="text-gray-600 text-xs sm:text-sm">
                  · {book.ratingCount}
                </span>
              </div>
            </Link>
          ))}
      </div>

      <div className="mt-6 flex justify-center sm:justify-end">
        <Button
          onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
          className="bg-[#1E1915] text-white hover:bg-[#4e4137] rounded-full px-4 py-2 flex items-center gap-2"
        >
          See more recommendations
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
