"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-toastify";
import { Star, BookOpen } from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const formSchema = z.object({
  bookTitle: z.string().min(1, "Book title is required"),
  author: z.string().min(1, "Author name is required"),
  rating: z.number().min(1).max(5),
  reviewTitle: z.string().min(5, "Review title must be at least 5 characters"),
  reviewContent: z.string().min(50, "Review must be at least 50 characters"),
  readDate: z.string().optional(),
  genre: z.string().min(1, "Please select a genre"),
  containsSpoilers: z.boolean(),
});

export default function WriteReview() {
  const [previewMode, setPreviewMode] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookTitle: "",
      author: "",
      rating: 0,
      reviewTitle: "",
      reviewContent: "",
      readDate: "",
      genre: "",
      containsSpoilers: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Review submitted successfully!");
    // Here you would typically send the review data to your backend
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 fill-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 max-w-4xl py-8">
        <h1 className="text-3xl font-bold mb-6">Write a Book Review</h1>

        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            onClick={() => setPreviewMode(!previewMode)}
          >
            {previewMode ? "Edit Review" : "Preview Review"}
          </Button>
        </div>

        {previewMode ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              {form.getValues("reviewTitle")}
            </h2>
            <h3 className="text-xl mb-2">
              {form.getValues("bookTitle")} by {form.getValues("author")}
            </h3>
            <div className="flex items-center mb-2">
              {renderStars(form.getValues("rating"))}
              <span className="ml-2 text-gray-600">
                {form.getValues("rating")} stars
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Genre: {form.getValues("genre")} | Read on:{" "}
              {form.getValues("readDate")}
            </p>
            {form.getValues("containsSpoilers") && (
              <p className="text-red-500 mb-4">
                ⚠️ This review contains spoilers
              </p>
            )}
            <p className="whitespace-pre-wrap">
              {form.getValues("reviewContent")}
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="bookTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Book Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the book title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the author's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Slider
                        min={1}
                        max={5}
                        step={1}
                        value={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                      />
                    </FormControl>
                    <FormDescription className="flex justify-between">
                      <span>1 star</span>
                      <span>5 stars</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reviewTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a title for your review"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reviewContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your review here"
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="readDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Read</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a genre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="mystery">Mystery</SelectItem>
                        <SelectItem value="sci-fi">Science Fiction</SelectItem>
                        <SelectItem value="fantasy">Fantasy</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="thriller">Thriller</SelectItem>
                        <SelectItem value="biography">Biography</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="containsSpoilers"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Contains Spoilers
                      </FormLabel>
                      <FormDescription>
                        Toggle if your review contains spoilers
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                <BookOpen className="w-4 h-4 mr-2" />
                Submit Review
              </Button>
            </form>
          </Form>
        )}
      </div>
      <Footer />
    </>
  );
}
