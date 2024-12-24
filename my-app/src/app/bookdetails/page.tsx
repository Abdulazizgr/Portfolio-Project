"use client";

import { BookCover } from "@/components/bookcover";
import { BookInfo } from "@/components/bookinfo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthorSection } from "@/components/AuthorSection";
import { BookRecommendations } from "@/components/BookRecommendations";
import { RatingsReviews } from "@/components/RatingsReviews";

interface Book {
  title: string;
  author: string;
  coverImage: string;
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
}

const ratingsData = {
    totalRatings: 19319,
    totalReviews: 2802,
    averageRating: 4.63,
    distribution: {
      5: { count: 13446, percentage: 69 },
      4: { count: 4794, percentage: 24 },
      3: { count: 900, percentage: 4 },
      2: { count: 118, percentage: 1 },
      1: { count: 61, percentage: 1 }
    }
  }
const recommendations = [
  {
    id: "1",
    title: "Poverty, by America",
    author: "Matthew Desmond",
    coverImage: "/f.jpg?height=400&width=300",
    rating: 4.27,
    ratingCount: "47.8k",
  },
  {
    id: "2",
    title:
      "How the Word Is Passed: A Reckoning with the History of Slavery Across America",
    author: "Clint Smith",
    coverImage: "/f.jpg?height=400&width=300",
    rating: 4.71,
    ratingCount: "35.7k",
  },
  {
    id: "3",
    title: "Caste: The Origins of Our Discontents",
    author: "Isabel Wilkerson",
    coverImage: "/f.jpg?height=400&width=300",
    rating: 4.53,
    ratingCount: "148k",
  },
  {
    id: "4",
    title:
      "The Color of Law: A Forgotten History of How Our Government Segregated America",
    author: "Richard Rothstein",
    coverImage: "/f.jpg?height=400&width=300",
    rating: 4.44,
    ratingCount: "41.7k",
  },
];
const author = {
  name: "Heather McGhee",
  bookCount: 4,
  followerCount: 480,
  bio: "Heather Charisse McGhee is an American political commentator and strategist. She is a former president and currently a distinguished senior fellow of Demos, a non-profit progressive U.S. think tank. McGhee is a regular contributor to NBC News and frequently appears as a guest and panelist on Meet the Press, All In with Chris Hayes, and Real Time with Bill Maher.",
  profileImage: "/placeholder.svg?height=200&width=200",
};

export default function BookDetails() {
  const book: Book = {
    title:
      "The Sum of Us: What Racism Costs Everyone and How We Can Prosper Together",
    author: "Heather McGhee",
    coverImage: "/f.jpg?height=600&width=400",
    rating: 4.63,
    totalRatings: 19319,
    totalReviews: 2802,
    awards: [
      {
        name: "Goodreads Choice Award",
        category: "Nominee for Readers' Favorite Nonfiction (2021)",
      },
    ],
    description: `Heather McGhee's specialty is the American economy—and the mystery of why it so often fails the American public. From the financial crisis to rising student debt to collapsing public infrastructure, she found a common root problem: racism. But not just in the most obvious indignities for people of color. Racism has costs for white people, too. It is the common denominator of our most vexing public problems, the core dysfunction of our democracy and constitutive of the spiritual and moral crises that grip us all.`,
    genres: [
      "Nonfiction",
      "Race",
      "History",
      "Politics",
      "Social Justice",
      "Audiobook",
      "Anti Racist",
    ],
    pages: 415,
    format: "Hardcover",
    publishedDate: "February 16, 2021",
    currentlyReading: 4570,
    wantToRead: 63600,
  };

  const handleRatingChange = (rating: number) => {
    console.log("New rating:", rating);
    // Here you would typically update the rating in your backend
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Fixed Book Cover */}
          <div className="lg:w-1/3">
            <BookCover
              title={book.title}
              coverImage={book.coverImage}
              onRatingChange={handleRatingChange}
            />
          </div>

          {/* Right Column - Scrollable Book Details */}
          <div className="lg:w-2/3">
            <BookInfo book={book} />
            <AuthorSection {...author} />
            <BookRecommendations books={recommendations} />
            <RatingsReviews ratings={ratingsData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
