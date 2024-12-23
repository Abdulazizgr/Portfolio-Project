"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu, User, LogOut } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be replaced with your actual auth logic

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-[#F4F1EA] border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-2">
            <Image src="/logo3.png" width={40} height={40} alt="Logo" />
            <span className="text-xl font-bold pt-2 text-[#1E1915]">
              Logo Name
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-[#1E1915] font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full active:text-gray-600"
            >
              Home
            </Link>
            <Link
              href="/my-books"
              className="text-sm text-[#1E1915] font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-gray-600 active:text-gray-800"
            >
              My Books
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 
             text-sm text-[#1E1915] font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-gray-600 active:text-gray-800"
              >
                Reviews <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#F9F8F4]">
                <DropdownMenuItem>Test </DropdownMenuItem>
                <DropdownMenuItem>Test</DropdownMenuItem>
                <DropdownMenuItem>Test</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-[#1E1915] font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-gray-600 active:text-gray-800">
                Community <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#F4F1EA]">
                <DropdownMenuItem>Test</DropdownMenuItem>
                <DropdownMenuItem>Test</DropdownMenuItem>
                <DropdownMenuItem>Test</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Login Button or Profile and Mobile Menu */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full ">
                    <User className="h-5 w-5 mr-2" />
                    <span className="sr-only md:not-sr-only ">Profile</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className="rounded-full border-2  text-[#1E1915]  bg-[F4F1EA] border-[#2f4858]  hover:bg-[#363634] hover:text-white transition-colors"
                >
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <div className="space-y-4">
                    <Link
                      href="/"
                      className="block py-2 text-sm font-medium text-[#1E1915]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/my-books"
                      className="block py-2 text-sm font-medium"
                    >
                      My Books
                    </Link>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="reviews">
                        <AccordionTrigger className="text-sm font-medium">
                          Reviews
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-2">
                            <Link
                              href="/reviews/latest"
                              className="block py-2 text-sm"
                            >
                              Test
                            </Link>
                            <Link
                              href="/reviews/write"
                              className="block py-2 text-sm"
                            >
                              Test
                            </Link>
                            <Link
                              href="/reviews/my"
                              className="block py-2 text-sm"
                            >
                              Test
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="community">
                        <AccordionTrigger className="text-sm font-medium">
                          Test
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-2">
                            <Link
                              href="/community/discussion"
                              className="block py-2 text-sm"
                            >
                              Test
                            </Link>
                            <Link
                              href="/community/book-clubs"
                              className="block py-2 text-sm"
                            >
                              Test
                            </Link>
                            <Link
                              href="/community/events"
                              className="block py-2 text-sm"
                            >
                              Test
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    {isLoggedIn ? (
                      <>
                        <Link
                          href="/profile"
                          className="block py-2 text-sm font-medium text-[#1e3a8a]"
                        >
                          My Profile
                        </Link>
                        <Link
                          href="/settings"
                          className="block py-2 text-sm font-medium text-[#1e3a8a]"
                        >
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block py-2 text-sm font-medium text-[#1e3a8a]"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link
                        href="/auth/login"
                        className="block py-2 text-sm font-medium text-[#1e3a8a]"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}