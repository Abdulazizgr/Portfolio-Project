"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, MessageCircle, Users, TrendingUp } from "lucide-react";

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const bookClubs = [
    {
      id: 1,
      name: "Sci-Fi Enthusiasts",
      members: 1234,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Classic Literature",
      members: 987,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Mystery Lovers",
      members: 2345,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "YA Book Club",
      members: 3456,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const discussions = [
    {
      id: 1,
      title: "Favorite dystopian novels?",
      author: "BookWorm23",
      replies: 45,
      likes: 132,
    },
    {
      id: 2,
      title: "Best opening lines in literature",
      author: "LiteraryExplorer",
      replies: 78,
      likes: 201,
    },
    {
      id: 3,
      title: "Underrated authors you love",
      author: "HiddenGems",
      replies: 56,
      likes: 98,
    },
    {
      id: 4,
      title: "Book to movie adaptations",
      author: "PageToScreen",
      replies: 89,
      likes: 176,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Book Lovers Community
      </h1>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search book clubs, discussions, or members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xl mx-auto"
        />
      </div>

      <Tabs defaultValue="book-clubs" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="book-clubs">Book Clubs</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        <TabsContent value="book-clubs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {bookClubs.map((club) => (
              <Card key={club.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Image
                    src={club.image}
                    alt={club.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle>{club.name}</CardTitle>
                    <CardDescription>{club.members} members</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Join Club</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="discussions">
          <div className="space-y-6 mt-6">
            {discussions.map((discussion) => (
              <Card key={discussion.id}>
                <CardHeader>
                  <CardTitle>{discussion.title}</CardTitle>
                  <CardDescription>
                    Started by {discussion.author}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{discussion.likes} likes</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="trending">
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Trending Books</CardTitle>
                <CardDescription>
                  Most discussed books this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>The Midnight Library by Matt Haig</li>
                  <li>Atomic Habits by James Clear</li>
                  <li>
                    The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid
                  </li>
                  <li>Project Hail Mary by Andy Weir</li>
                  <li>The Invisible Life of Addie LaRue by V.E. Schwab</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hot Topics</CardTitle>
                <CardDescription>Join the conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li># Summer Reading Challenge</li>
                  <li># Book to Movie Adaptations</li>
                  <li># Indie Author Spotlight</li>
                  <li># Reading Habits and Tips</li>
                  <li># Genre of the Month: Historical Fiction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Join Our Vibrant Community
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Connect with fellow book lovers, join exciting discussions, and
          discover your next favorite read. Our community is a place for all
          bibliophiles to share their passion for literature.
        </p>
        <Button size="lg">
          <Users className="mr-2 h-5 w-5" /> Create Your Account
        </Button>
      </div>
    </div>
  );
};

export default CommunityPage;
