"use client";

import { BookCover } from "@/components/bookCover";
import { BookInfo } from "@/components/bookInfo";
import { AuthorSection } from "@/components/AuthorSection";
import { BookRecommendations } from "@/components/BookRecommendations";
import { RatingsReviews } from "@/components/RatingsReviews";
import { ReviewList } from "@/components/review-list";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BookDetails() {
  const book = {
    title:
      "The Sum of Us: What Racism Costs Everyone and How We Can Prosper Together",
    author: "Heather McGhee",
    coverImage: "/f1.jpg?height=600&width=400",
    rating: 4.63,
    totalRatings: 19319,
    totalReviews: 2802,
    awards: [
      {
        name: " lorem Choice Award",
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

  const author = {
    name: "Heather McGhee",
    bookCount: 4,
    followerCount: 480,
    bio: "Heather Charisse McGhee is an American political commentator and strategist. She is a former president and currently a distinguished senior fellow of Demos, a non-profit progressive U.S. think tank. McGhee is a regular contributor to NBC News and frequently appears as a guest and panelist on Meet the Press, All In with Chris Hayes, and Real Time with Bill Maher.",
    profileImage: "/placeholder.svg?height=200&width=200",
  };

  const recommendations = [
    {
      id: "1",
      title: "Poverty, by America",
      author: "Matthew Desmond",
      coverImage: "/f2.jpg?height=400&width=300",
      rating: 4.27,
      ratingCount: "47.8k",
    },
    {
      id: "2",
      title:
        "How the Word Is Passed: A Reckoning with the History of Slavery Across America",
      author: "Clint Smith",
      coverImage: "/f1.jpg?height=400&width=300",
      rating: 4.71,
      ratingCount: "35.7k",
    },
    {
      id: "3",
      title: "Caste: The Origins of Our Discontents",
      author: "Isabel Wilkerson",
      coverImage: "/m1.jpg?height=400&width=300",
      rating: 4.53,
      ratingCount: "148k",
    },
    {
      id: "4",
      title:
        "The Color of Law: A Forgotten History of How Our Government Segregated America",
      author: "Richard Rothstein",
      coverImage: "/m2.jpg?height=400&width=300",
      rating: 4.44,
      ratingCount: "41.7k",
    },
  ];

  const ratingsData = {
    totalRatings: 19319,
    totalReviews: 2802,
    averageRating: 4.63,
    distribution: {
      5: { count: 13446, percentage: 69 },
      4: { count: 4794, percentage: 24 },
      3: { count: 900, percentage: 4 },
      2: { count: 118, percentage: 1 },
      1: { count: 61, percentage: 1 },
    },
  };

  const reviews = [
    {
      id: "1",
      user: {
        name: "Trevor",
        image: "/placeholder.svg?height=64&width=64",
        reviewCount: 1413,
        followerCount: 23500,
        isFollowing: false,
      },
      rating: 5,
      date: "September 29, 2014",
      content:
        "This book is based on a television series which can be viewed on YouTube here: http://www.youtube.com/watch?v=LnfB-p... This is a really remarkable series and a remarkable, although annoying, book. The book is annoying because it should have been a coffee table book with large colour photographs and illustrations but instead it is a small format paperback with black and white illustrations.",
      tags: ["art", "photography"],
      likes: 530,
      comments: 38,
    },
    {
      id: "2",
      user: {
        name: "Justin Evans",
        image: "/placeholder.svg?height=64&width=64",
        reviewCount: 1629,
        followerCount: 977,
        isFollowing: true,
      },
      rating: 3,
      date: "June 3, 2014",
      content:
        "I am not the audience for this book, mainly because I've already read and more or less digested the handful of essays and ideas on which it is based. The seven chapters break down fairly simply. 1: Benjamin's 'Work of Art'- the ability to reproduce images alters the way we encounter works of art...",
      tags: ["essays", "history-etc"],
      likes: 225,
      comments: 17,
    },
    {
      id: "4",
      user: {
        name: "Justin Evans",
        image: "/placeholder.svg?height=64&width=64",
        reviewCount: 1629,
        followerCount: 977,
        isFollowing: true,
      },
      rating: 3,
      date: "June 3, 2014",
      content:
        "I am not the audience for this book, mainly because I've already read and more or less digested the handful of essays and ideas on which it is based. The seven chapters break down fairly simply. 1: Benjamin's 'Work of Art'- the ability to reproduce images alters the way we encounter works of art...",
      tags: ["essays", "history-etc"],
      likes: 225,
      comments: 17,
    },
    {
      id: "5",
      user: {
        name: "Justin Evans",
        image: "/z.jpg?height=64&width=64",
        reviewCount: 1629,
        followerCount: 977,
        isFollowing: true,
      },
      rating: 3,
      date: "June 3, 2014",
      content:
        "I am not the audience for this book, mainly because I've already read and more or less digested the handful of essays and ideas on which it is based. The seven chapters break down fairly simply. 1: Benjamin's 'Work of Art'- the ability to reproduce images alters the way we encounter works of art...",
      tags: ["essays", "history-etc"],
      likes: 225,
      comments: 17,
    },
    {
      id: "6",
      user: {
        name: "Justin Evans",
        image: "/m1.jpg?height=64&width=64",
        reviewCount: 1629,
        followerCount: 977,
        isFollowing: true,
      },
      rating: 3,
      date: "June 3, 2014",
      content:
        "I am not the audience for this book, mainly because I've already read and more or less digested the handful of essays and ideas on which it is based. The seven chapters break down fairly simply. 1: Benjamin's 'Work of Art'- the ability to reproduce images alters the way we encounter works of art...",
      tags: ["essays", "history-etc"],
      likes: 225,
      comments: 17,
    },
    {
      id: "7",
      user: {
        name: "ziuz",
        image: "/f2.jpg?height=64&width=64",
        reviewCount: 1629,
        followerCount: 977,
        isFollowing: true,
      },
      rating: 3,
      date: "June 3, 2014",
      content:
        "I am not the audience for this book, mainly because I've already read and more or less digested the handful of essays and ideas on which it is based. The seven chapters break down fairly simply. 1: Benjamin's 'Work of Art'- the ability to reproduce images alters the way we encounter works of art...",
      tags: ["essays", "history-etc"],
      likes: 225,
      comments: 17,
    },
    // Add more reviews as needed...
  ];

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
              onRatingChange={(rating) => console.log("New rating:", rating)}
            />
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="lg:w-2/3">
            <BookInfo book={book} />
            <AuthorSection {...author} />
            <RatingsReviews ratings={ratingsData} />
            <ReviewList totalReviews={3345} reviews={reviews} />
            <BookRecommendations books={recommendations} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
