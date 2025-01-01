"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, ChevronDown, LogOut, User, Home as HomeIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const isActive = (path: string) => {
    if (path === '/properties' && pathname?.startsWith('/properties')) return true;
    return pathname === path;
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Home className="h-7 w-7 text-blue-500" />
              <span className="font-bold text-xl text-[#0066FF]">
                Boarding.lk
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/properties">
              <Button 
                variant="ghost" 
                className={`text-base transition-colors ${
                  isActive('/properties') 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                Properties
              </Button>
            </Link>
            <Link href="/my-rentals">
            </Link>
            <Link href="/proprietor">
              <Button 
                variant="ghost" 
                className={`text-base transition-colors ${
                  isActive('/proprietor') 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                Proprietor
              </Button>
            </Link>
            <Link href="/boarder">
              <Button 
                variant="ghost" 
                className={`text-base transition-colors ${
                  isActive('/boarder') 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                Boarder
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="ghost" 
                className={`text-base transition-colors ${
                  isActive('/about') 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                About Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="ghost" 
                className={`text-base transition-colors ${
                  isActive('/contact') 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/post-ad">
              <Button className="text-base border border-blue-400 text-blue-500 hover:bg-blue-400 hover:text-white px-6 font-medium transition-all duration-200">
                Post Your Ad
              </Button>
            </Link>
            {status === "authenticated" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <img
                      src={session.user?.image || ""}
                      alt={session.user?.name || ""}
                      className="w-8 h-8 rounded-full"
                    />
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{session.user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer focus:bg-blue-50 py-2" asChild>
                    <Link href="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer focus:bg-blue-50 py-2" asChild>
                    <Link href="/my-rentals" className="flex items-center">
                      <HomeIcon className="mr-2 h-4 w-4" />
                      <span>My Rentals</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer focus:bg-blue-50 py-2" asChild>
                    <Link href="/my-posts" className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>My Posts</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer focus:bg-red-50 text-red-600 hover:text-red-600 hover:bg-red-50 py-2" 
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button
                  className="text-base bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Log In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-blue-50">
                  <Menu className="h-6 w-6 text-blue-800" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/95 backdrop-blur-lg">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/properties" className="w-full">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start text-base ${
                        isActive('/properties') 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      Properties
                    </Button>
                  </Link>
                  <Link href="/my-rentals" className="w-full">
                  </Link>
                  <Link href="/proprietor" className="w-full">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start text-base ${
                        isActive('/proprietor') 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      Proprietor
                    </Button>
                  </Link>
                  <Link href="/boarder" className="w-full">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start text-base ${
                        isActive('/boarder') 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      Boarder
                    </Button>
                  </Link>
                  <Link href="/about" className="w-full">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start text-base ${
                        isActive('/about') 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      About Us
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start text-base ${
                        isActive('/contact') 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/post-ad" className="w-full">
                    <Button className="w-full justify-start text-base border border-blue-400 text-blue-500 hover:bg-blue-400 hover:text-white font-medium transition-all duration-200">
                      Post Your Ad
                    </Button>
                  </Link>
                  {status === "authenticated" ? (
                    <Button
                      onClick={() => signOut()}
                      className="w-full justify-start text-base bg-red-600 text-white hover:bg-red-700"
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <Link href="/login" className="w-full">
                      <Button
                        className="w-full justify-start text-base bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Log In
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}