import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import BookCard from "@/components/bookCard";
import BookReviewCTA from "@/components/BookReviewCTA";
import FeaturedBook from "@/components/featured";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedBook />
      <BookReviewCTA />
      <BookCard />
      <Footer />
    </>
  );
}
