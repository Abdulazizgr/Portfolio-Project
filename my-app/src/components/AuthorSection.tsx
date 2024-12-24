import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthorSectionProps {
  name: string;
  bookCount: number;
  followerCount: number;
  bio: string;
  profileImage: string;
}

export function AuthorSection({
  name,
  bookCount,
  followerCount,
  bio,
  profileImage,
}: AuthorSectionProps) {
  return (
    <div className="py-8 max-w-fit">
      <h2 className="text-2xl font-bold mb-4">About the author</h2>
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">
              {bookCount} books · {followerCount} followers
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              {bio}
            </p>
          </div>
        </div>
        <Button variant="default" className="bg-black hover:bg-black/90">
          Follow
        </Button>
      </div>
    </div>
  );
}
