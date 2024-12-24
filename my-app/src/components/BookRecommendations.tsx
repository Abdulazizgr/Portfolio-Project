"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from 'lucide-react'
import Link from "next/link"

interface Book {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  ratingCount: string
}

interface BookRecommendationsProps {
  books: Book[]
}

export function BookRecommendations({ books }: BookRecommendationsProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(books.length / 4)

  return (
    <div className="py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
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

      <div className="grid grid-cols-4 gap-6">
        {books.slice(currentPage * 4, (currentPage + 1) * 4).map((book) => (
          <Link 
            key={book.id}
            href={`/books/${book.id}`}
            className="group"
          >
            <div className="relative aspect-[3/4] mb-3">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold group-hover:text-[#4527A0] transition-colors">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">{book.author}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{book.rating}</span>
              <span className="text-gray-600 text-sm">· {book.ratingCount}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

