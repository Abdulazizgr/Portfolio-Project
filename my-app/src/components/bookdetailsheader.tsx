"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Star, Share2, ChevronDown, Award } from 'lucide-react'

export default function BookDetails() {
  const [userRating, setUserRating] = useState<number | null>(null)
  const [isReadingStatusOpen, setIsReadingStatusOpen] = useState(false)

  const book = {
    title: "The Sum of Us: What Racism Costs Everyone and How We Can Prosper Together",
    author: "Heather McGhee",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 4.63,
    totalRatings: 19319,
    totalReviews: 2802,
    awards: [
      {
        name: "Goodreads Choice Award",
        category: "Nominee for Readers' Favorite Nonfiction (2021)"
      }
    ],
    description: `Heather McGhee's specialty is the American economy—and the mystery of why it so often fails the American public. From the financial crisis to rising student debt to collapsing public infrastructure, she found a common root problem: racism. But not just in the most obvious indignities for people of color. Racism has costs for white people, too. It is the common denominator of our most vexing public problems, the core dysfunction of our democracy and constitutive of the spiritual and moral crises that grip us all.`,
    genres: ["Nonfiction", "Race", "History", "Politics", "Social Justice", "Audiobook", "Anti Racist"],
    pages: 415,
    format: "Hardcover",
    publishedDate: "February 16, 2021",
    currentlyReading: 4570,
    wantToRead: 63600
  }

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && setUserRating(star)}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          >
            <Star
              className={`w-5 h-5 ${
                star <= (userRating || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Book Cover */}
        <div className="lg:w-1/3">
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex justify-center">
              <DropdownMenu open={isReadingStatusOpen} onOpenChange={setIsReadingStatusOpen}>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full max-w-xs bg-[#4527A0] hover:bg-[#4527A0]/90">
                    Want to read
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Want to read</DropdownMenuItem>
                  <DropdownMenuItem>Currently reading</DropdownMenuItem>
                  <DropdownMenuItem>Read</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex justify-center">
              <div className="space-y-2">
                <p className="text-center text-sm text-gray-600">Rate this book</p>
                {renderStars(0, true)}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Book Details */}
        <div className="lg:w-2/3">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{book.title}</h1>
              <p className="text-xl text-gray-600">by {book.author}</p>
              
              <div className="flex items-center gap-3">
                {renderStars(book.rating)}
                <span className="text-2xl font-bold">{book.rating}</span>
                <div className="text-sm text-gray-600">
                  {book.totalRatings.toLocaleString()} ratings ·{" "}
                  {book.totalReviews.toLocaleString()} reviews
                </div>
              </div>

              {book.awards.map((award, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>{award.name}</span>
                  <span className="text-gray-600">{award.category}</span>
                </div>
              ))}
            </div>

            <Button variant="ghost" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-6 space-y-6">
            <p className="text-gray-700 leading-relaxed">{book.description}</p>

            <div>
              <h2 className="text-lg font-semibold mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {book.genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="rounded-full"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-semibold">Format:</span>
                <span>{book.format}</span>
                <span className="text-gray-600">· {book.pages} pages</span>
              </div>
              <div>
                <span className="font-semibold">First published</span>
                <span className="ml-2">{book.publishedDate}</span>
              </div>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {book.currentlyReading.toLocaleString()} people currently reading
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {book.wantToRead.toLocaleString()} people want to read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

