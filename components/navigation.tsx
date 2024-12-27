"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
              <span className="font-bold text-xl text-sky-600">
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
            <Button className="text-base bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Log In
            </Button>
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
                  <Button className="w-full justify-start text-base bg-blue-600 text-white hover:bg-blue-700">
                    Log In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}