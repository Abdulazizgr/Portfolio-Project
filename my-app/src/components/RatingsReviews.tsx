"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Book } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

interface RatingsData {
  totalRatings: number;
  totalReviews: number;
  averageRating: number;
  distribution: {
    [key: number]: {
      count: number;
      percentage: number;
    };
  };
}

interface RatingsReviewsProps {
  ratings: RatingsData;
}

export function RatingsReviews({ ratings }: RatingsReviewsProps) {
  const [userRating, setUserRating] = useState<number | null>(null);

  const renderStars = (interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && setUserRating(star)}
            className={`${
              interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
            } transition-transform`}
          >
            <Star
              className={`w-5 h-5 ${
                star <= (userRating || 0)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8 py-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>

        <div className="bg-white rounded-lg p-8 text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <Book className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold">
            What do <span className="italic">you</span> think?
          </h3>
          <div className="flex justify-center">{renderStars(true)}</div>
          <p className="text-sm text-gray-600">Rate this book</p>
          <Link href="/reviewPage/1">
            <Button variant="default" className="bg-black hover:bg-black/90">
              Write a Review
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Friends & Following</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-600">
            No one you know has read this book.{" "}
            <Link href="#" className="text-[#4527A0] hover:underline">
              Recommend it to a friend!
            </Link>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Community Reviews</h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{ratings.averageRating}</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.floor(ratings.averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-gray-600">
            {ratings.totalRatings.toLocaleString()} ratings ·{" "}
            {ratings.totalReviews.toLocaleString()} reviews
          </div>
        </div>

        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-4">
              <Link
                href="#"
                className="w-12 text-sm text-gray-600 hover:underline"
              >
                {stars} stars
              </Link>
              <Progress
                value={ratings.distribution[stars].percentage}
                className="h-2 flex-1"
              />
              <span className="w-20 text-sm text-gray-600">
                {ratings.distribution[stars].count.toLocaleString()} (
                {ratings.distribution[stars].percentage}%)
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
