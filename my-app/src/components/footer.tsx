import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F4] border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4527A0]">
              About Book Review Hub
            </h3>
            <p className="text-gray-600 text-sm">
              Your go-to platform for discovering, reviewing, and discussing
              books. Join our community of passionate readers and share your
              literary journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4527A0]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/latest-reviews"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Latest Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/top-rated"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Top Rated Books
                </Link>
              </li>
              <li>
                <Link
                  href="/reading-lists"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Reading Lists
                </Link>
              </li>
              <li>
                <Link
                  href="/book-clubs"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Book Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4527A0]">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guidelines"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-[#4527A0] text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Discord Invitation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4527A0]">
              Join Our Community
            </h3>
            <p className="text-gray-600 text-sm">
              Connect with fellow book lovers in our Discord group. Share your
              thoughts, get recommendations, and participate in live
              discussions!
            </p>
            <Button
              className="w-full rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
            //   onClick={() =>
            //     window.open("https://discord.gg/your-invite-link", "_blank")
            //   }
            >
              Join our Discord
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link href="#" className="text-gray-600 hover:text-[#4527A0]">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#4527A0]">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#4527A0]">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#4527A0]">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-[#4527A0]">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Book Review Hub. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-[#4527A0]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-[#4527A0]"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-600 hover:text-[#4527A0]"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
