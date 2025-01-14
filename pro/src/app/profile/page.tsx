"use client";

import { ProfileDetails } from "@/components/profile-details";
import { BookShelves } from "@/components/book-shelves";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ProfilePage() {
  const profile = {
    name: "Sarah Johnson",
    username: "sarahreads",
    email: "sarah@example.com",
    bio: "Book lover, coffee addict, and aspiring writer. I enjoy reading across genres but have a special place in my heart for literary fiction and historical novels.",
    location: "San Francisco, CA",
    website: "https://sarahreads.blog",
    avatar: "/images.jpeg?height=200&width=200",
    joinDate: "Member since January 2020",
    stats: {
      reviews: 142,
      followers: 1234,
      following: 891,
      booksRead: 287,
    },
  };

  const books = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      coverImage: "/f.jpg?height=400&width=300",
      rating: 4,
      dateAdded: "March 15, 2024",
      shelf: "currently-reading" as const,
    },
    {
      id: "2",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage: "/s2.jpg?height=400&width=300",
      rating: null,
      dateAdded: "March 10, 2024",
      shelf: "want-to-read" as const,
    },
    {
      id: "3",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage: "/m1.jpg?height=400&width=300",
      rating: null,
      dateAdded: "March 10, 2024",
      shelf: "want-to-read" as const,
    },
    {
      id: "4",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage: "/y.jpg?height=400&width=300",
      rating: null,
      dateAdded: "March 10, 2024",
      shelf: "want-to-read" as const,
    },
    {
      id: "5",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage: "/x.jpg?height=400&width=300",
      rating: null,
      dateAdded: "March 10, 2024",
      shelf: "want-to-read" as const,
    },
    {
      id: "3",
      title: "A Gentleman in Moscow",
      author: "Amor Towles",
      coverImage: "/h2.jpg?height=400&width=300",
      rating: 5,
      dateAdded: "March 1, 2024",
      shelf: "read" as const,
    },
    
  ];

  const handleProfileSave = (updatedProfile: typeof profile) => {
    console.log("Saving profile:", updatedProfile);
   
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            <ProfileDetails profile={profile} onSave={handleProfileSave} />

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">My Book Shelves</h2>
              <BookShelves books={books} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
