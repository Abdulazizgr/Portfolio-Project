"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Star } from "lucide-react";

interface BookCoverProps {
  title: string;
  coverImage: string;
  onRatingChange?: (rating: number) => void;
}

export function BookCover({
  title,
  coverImage,
  onRatingChange,
}: BookCoverProps) {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [isReadingStatusOpen, setIsReadingStatusOpen] = useState(false);

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
    onRatingChange?.(rating);
  };

  const renderStars = (interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && handleRatingClick(star)}
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
    <div className="lg:sticky lg:top-8">
      <div className="relative pl-16 max-w-md mx-auto">
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col gap-3 pl-20 justify-center">
          <DropdownMenu
            open={isReadingStatusOpen}
            onOpenChange={setIsReadingStatusOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button className="w-full max-w-xs rounded-2xl bg-green-700 hover:bg-green-600/90">
                Want to read
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Want to read</DropdownMenuItem>
              <DropdownMenuItem>Currently reading</DropdownMenuItem>
              <DropdownMenuItem>Read</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu
            open={isReadingStatusOpen}
            onOpenChange={setIsReadingStatusOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button className="w-full max-w-xs border-2 border-green-200 rounded-2xl bg-white text-black hover:bg-green-700/90">
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
            {renderStars(true)}
          </div>
        </div>
      </div>
    </div>
  );
}
