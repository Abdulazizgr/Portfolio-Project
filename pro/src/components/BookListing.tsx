"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Grid, List, Search } from "lucide-react";
import Link from "next/link";

export default function BookListing() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearRange, setYearRange] = useState({
    min: 2000,
    max: new Date().getFullYear(),
  });

  const books = [
    {
      id: 1,
      title: "Demon Copperhead",
      author: "Barbara Kingsolver",
      rating: 4.5,
      reviewCount: 128,
      image: "/f1.jpg?height=400&width=300",
      genre: "Fiction,Historical Fiction,Audiobook ",
    },
    {
      id: 2,
      title: "A Little Life",
      author: "Hanya Yanagihara",
      rating: 4.2,
      reviewCount: 85,
      image: "/f2.jpg?height=400&width=300",
      genre: "Fiction",
    },
    {
      id: 3,
      title: "The Frozen River",
      author: "Ariel Lawhon",
      rating: 4.8,
      reviewCount: 245,
      image: "/h2.jpg?height=400&width=300",
      genre: "Fiction",
    },
    {
      id: 4,
      title: "All the Light We Cannot See",
      author: "Anthony Doerr",
      rating: 4.6,
      reviewCount: 189,
      image: "/h1.jpg?height=400&width=300",
      genre: "Mystery",
    },
    {
      id: 5,
      title: "First Lie Wins",
      author: "Ashley Elston",
      rating: 4.7,
      reviewCount: 312,
      image: "/m1.jpg?height=400&width=300",
      genre: "Thriller",
    },
    {
      id: 6,
      title: "Rock Paper Scissors",
      author: "Alice Feeney",
      rating: 4.4,
      reviewCount: 276,
      image: "/m2.jpg?height=400&width=300",
      genre: "Fiction",
    },
    {
      id: 7,
      title: "Dune",
      author: "Frank Herbert",
      rating: 4.4,
      reviewCount: 276,
      image: "/s1.jpg?height=400&width=300",
      genre: "Fiction",
    },
    {
      id: 8,
      title: "All Systems Red",
      author: "Martha Wells",
      rating: 4.4,
      reviewCount: 276,
      image: "/s2.jpg?height=400&width=300",
      genre: "Fiction",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      {/* Global Search Bar */}
      <div className="mb-8">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search for books, authors, or genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full border-2 border-[#1E1915] focus:border-gray-400 focus:ring-gray-400"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#1E1915] text-white hover:bg-[#4e4137] rounded-full px-6"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Rating Filter */}
            <div>
              <h3 className="font-semibold mb-4">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-2">
                    <Checkbox />
                    <div className="flex items-center">
                      {[...Array(rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">& Up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Genre Filter */}
            <Accordion type="single" collapsible>
              <AccordionItem value="genre">
                <AccordionTrigger>Genre</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {[
                      "Fiction",
                      "Non-Fiction",
                      "Mystery",
                      "Romance",
                      "Sci-Fi",
                    ].map((genre) => (
                      <label key={genre} className="flex items-center gap-2">
                        <Checkbox />
                        <span className="text-sm">{genre}</span>
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="year">
                <AccordionTrigger>Publication Year</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">From:</label>
                      <Input
                        type="number"
                        min="1800"
                        max={yearRange.max}
                        value={yearRange.min}
                        onChange={(e) =>
                          setYearRange({
                            ...yearRange,
                            min: parseInt(e.target.value),
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">To:</label>
                      <Input
                        type="number"
                        min={yearRange.min}
                        max={new Date().getFullYear()}
                        value={yearRange.max}
                        onChange={(e) =>
                          setYearRange({
                            ...yearRange,
                            max: parseInt(e.target.value),
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              Showing 1 - 6 of 24 results
            </div>

            <div className="flex gap-4 items-center">
              <Select defaultValue="rating">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="title">Alphabetically, A-Z</SelectItem>
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

          {/* Book Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 lg:grid-cols-2"
            }`}
          >
            {books.map((book) => (
              <Link
                key={book.id}
                href={`/bookdetails/${book.id}`}
                className={`group ${
                  viewMode === "list" ? "flex gap-6" : "flex flex-col"
                }`}
              >
                <div className="w-56 flex-shrink-0 ">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover rounded-lg "
                    />
                  </div>
                </div>
                <div className={`${viewMode === "list" ? "flex-1 " : "mt-4"}`}>
                  <h3 className="font-semibold group-hover:text-[#4527A0] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{book.author}</p>
                  <div className="mt-2">{renderStars(book.rating)}</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {book.reviewCount} reviews
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(4)}
              disabled={currentPage === 4}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
