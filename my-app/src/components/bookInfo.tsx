import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Share2, Award } from "lucide-react";

interface BookInfoProps {
  book: {
    title: string;
    author: string;
    rating: number;
    totalRatings: number;
    totalReviews: number;
    awards: Array<{
      name: string;
      category: string;
    }>;
    description: string;
    genres: string[];
    pages: number;
    format: string;
    publishedDate: string;
    currentlyReading: number;
    wantToRead: number;
  };
}

export function BookInfo({ book }: BookInfoProps) {
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
    );
  };

  return (
    <div className="space-y-8 max-w-2xl">
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

        <Button variant="ghost" size="icon" className=" absolute right-[2%]">
          <Share2 className="w-5 h-5" />
        </Button>
      </div>

      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">{book.description}</p>

        <div>
          <h2 className="text-lg font-semibold mb-2">Genres</h2>
          <div className="flex flex-wrap gap-2">
            {book.genres.map((genre) => (
              <Badge key={genre} variant="secondary" className="rounded-full">
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
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {book.currentlyReading.toLocaleString()} people currently reading
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {book.wantToRead.toLocaleString()} people want to read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
