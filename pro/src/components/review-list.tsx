"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Star, ThumbsUp, MessageSquare, MoreHorizontal } from 'lucide-react'

interface Review {
  id: string
  user: {
    name: string
    image: string
    reviewCount: number
    followerCount: number
  }
  rating: number
  date: string
  content: string
  tags: string[]
  likes: number
  comments: number
  isFollowing?: boolean
}

interface ReviewListProps {
  totalReviews: number
  reviews: Review[]
}

export function ReviewList({ totalReviews, reviews: allReviews }: ReviewListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set())
  const reviewsPerPage = 5
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage)

  const toggleExpand = (reviewId: string) => {
    const newExpanded = new Set(expandedReviews)
    if (expandedReviews.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    )
  }

  const startIndex = (currentPage - 1) * reviewsPerPage
  const endIndex = startIndex + reviewsPerPage
  const currentReviews = allReviews.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      <p className="text-gray-600">
        Displaying {startIndex + 1} - {Math.min(endIndex, allReviews.length)} of {totalReviews} reviews
      </p>

      <div className="space-y-8">
        {currentReviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            {/* User Profile Section */}
            <div className="w-32 flex-shrink-0">
              <div className="space-y-3">
                <Image
                  src={review.user.image}
                  alt={review.user.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.user.name}</h3>
                  <p className="text-sm text-gray-600">{review.user.reviewCount} reviews</p>
                  <p className="text-sm text-gray-600">{review.user.followerCount} followers</p>
                </div>
                <Button 
                  variant={review.isFollowing ? "outline" : "default"}
                  className="w-full"
                >
                  {review.isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            </div>

            {/* Review Content Section */}
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  {renderStars(review.rating)}
                  <p className="text-gray-600">{review.date}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Report review</DropdownMenuItem>
                    <DropdownMenuItem>Share review</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div>
                <div className={`prose prose-gray max-w-none ${
                  !expandedReviews.has(review.id) ? "line-clamp-3" : ""
                }`}>
                  <p>{review.content}</p>
                </div>
                {review.content.length > 200 && (
                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="text-[#4527A0] hover:underline text-sm mt-2"
                  >
                    {expandedReviews.has(review.id) ? "Show less" : "Show more"}
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{review.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">{review.comments} comments</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          First
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index + 1}
            variant={currentPage === index + 1 ? "default" : "outline"}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </Button>
      </div>
    </div>
  )
}

