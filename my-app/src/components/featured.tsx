import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function FeaturedBook() {
  return (
    <div className=" to-white ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Book Cover */}
          <div className="relative aspect-[3/4] max-w-md  mx-auto md:mx-0">
            <Image
              src="/k.jpg?height=600&width=450"
              alt="Birds Gonna Be Happy by Timbur Hood"
              width={350}
              height={500}
              className="rounded-lg shadow-lg p-5  "
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#4527A0]">Featured Book</h2>

            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                BY TIMBUR HOOD
              </p>
              <h3 className="text-2xl font-semibold">Birds Gonna Be Happy</h3>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">(128 reviews)</span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </p>

            <div className="flex flex-wrap gap-4 pb-10">
              <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-green-700">
                  96% Positive Reviews
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-blue-700">Top Rated 2024</span>
              </div>
            </div>

            <Link href="/books/birds-gonna-be-happy">
              <Button
                variant="outline"
                className="rounded-full  border-2 border-[#4527A0] text-[#4527A0] hover:bg-[#4527A0] hover:text-white transition-colors"
              >
                VIEW MORE →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
