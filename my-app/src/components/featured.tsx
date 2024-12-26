import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import "./3dBook.css";

export default function FeaturedBook() {
  return (
    <div className=" bg-[#] ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-12 items-center  max-w-5xl mx-auto">
          {/* Book Cover */}
          <div className="relative  max-w-md  mx-auto md:mx-0">
            <Image
              src="/k.jpg?height=600&width=450"
              alt="Birds Gonna Be Happy by Timbur Hood"
              width={350}
              height={500}
              className="rounded-2xl shadow-2xl p-5 max-w-[250px] max-h-[400px] lg:max-w-[350px] lg:max-h-[500px] "
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6  ">
            <h2 className="text-lg font-bold text-[#1E1915]">
              Featured Book of the week
            </h2>

            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                BY J Deven
              </p>
              <h3 className="text-2xl font-semibold">
                Be Happy: Excerpts from The Teachings of Sung Zui
              </h3>
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
              AD 1212 – Between the mountains of the North-East of India and
              China lived the Master Sung Zui. He used to wander everywhere to
              find a disciple; rarely the enlightened masters did this at the
              time.
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

            <Link href="/bookdetails/1">
              <Button
                variant="outline"
                className="rounded-full  border-2 border-[#363634] text-[#363634] hover:bg-[#363634] hover:text-white transition-colors"
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
