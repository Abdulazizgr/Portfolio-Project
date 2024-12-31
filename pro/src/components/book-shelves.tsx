"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Grid, List } from "lucide-react";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number | null;
  dateAdded: string;
  shelf: "want-to-read" | "currently-reading" | "read";
}

interface BookShelvesProps {
  books: Book[];
}

export function BookShelves({ books: allBooks }: BookShelvesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeShelf, setActiveShelf] = useState<Book["shelf"]>("want-to-read");
  const booksPerPage = 5;

  const filteredBooks = allBooks.filter((book) => book.shelf === activeShelf);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const renderStars = (rating: number | null) => {
    if (rating === null) return null;
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
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
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={activeShelf === "want-to-read" ? "default" : "outline"}
            onClick={() => setActiveShelf("want-to-read")}
          >
            Want to Read
          </Button>
          <Button
            variant={
              activeShelf === "currently-reading" ? "default" : "outline"
            }
            onClick={() => setActiveShelf("currently-reading")}
          >
            Currently Reading
          </Button>
          <Button
            variant={activeShelf === "read" ? "default" : "outline"}
            onClick={() => setActiveShelf("read")}
          >
            Read
          </Button>
        </div>

        <div className="flex gap-4 items-center">
          <Select defaultValue="date-added">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-added">Date Added</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="author">Author</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-gray-100" : ""}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-gray-100" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {currentBooks.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className={`group ${
              viewMode === "list" ? "flex gap-6" : "flex flex-col"
            }`}
          >
            <div className={`${viewMode === "list" ? "w-32" : "w-full"}`}>
              <div className="relative ">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={200}
                  height={267}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className={`${viewMode === "list" ? "flex-1" : "mt-4"}`}>
              <h3 className="font-semibold group-hover:text-[#4527A0] transition-colors">
                {book.title}
              </h3>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <div className="mt-2">{renderStars(book.rating)}</div>
              <p className="text-sm text-gray-600 mt-1">
                Added {book.dateAdded}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
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
      )}
    </div>
  );
}
