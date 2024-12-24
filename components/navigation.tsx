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
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Boarding.lk
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`text-base transition-colors group ${
                    pathname?.startsWith('/properties') 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  Properties
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white/95 backdrop-blur-lg">
                <Link href="/properties">
                  <DropdownMenuItem className={`text-base cursor-pointer ${
                    pathname === '/properties' ? 'bg-blue-50 text-blue-700' : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}>
                    All Properties
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties?filter=no-deposit">
                  <DropdownMenuItem className={`text-base cursor-pointer ${
                    pathname === '/properties' && new URLSearchParams(window?.location?.search).get('filter') === 'no-deposit'
                      ? 'bg-blue-50 text-blue-700' 
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}>
                    No Deposit
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties?filter=with-deposit">
                  <DropdownMenuItem className="text-base cursor-pointer hover:bg-blue-50 hover:text-blue-700">
                    With Deposit
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties?filter=featured">
                  <DropdownMenuItem className="text-base cursor-pointer hover:bg-blue-50 hover:text-blue-700">
                    Featured
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties?filter=new-listings">
                  <DropdownMenuItem className="text-base cursor-pointer hover:bg-blue-50 hover:text-blue-700">
                    New Listings
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
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
            <Button className="text-base bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-md hover:shadow-lg">
              Sign In
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
                  <div className="space-y-2">
                    <div className="font-medium text-base px-4 py-2">Properties</div>
                    <Link href="/properties">
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start text-base pl-8 ${
                          pathname === '/properties' 
                            ? 'bg-blue-50 text-blue-700' 
                            : 'hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        All Properties
                      </Button>
                    </Link>
                    <Link href="/properties?filter=no-deposit">
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start text-base pl-8 ${
                          pathname === '/properties' && new URLSearchParams(window?.location?.search).get('filter') === 'no-deposit'
                            ? 'bg-blue-50 text-blue-700' 
                            : 'hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        No Deposit
                      </Button>
                    </Link>
                    <Link href="/properties?filter=with-deposit">
                      <Button variant="ghost" className="w-full justify-start text-base hover:bg-blue-50 hover:text-blue-700 pl-8">
                        With Deposit
                      </Button>
                    </Link>
                    <Link href="/properties?filter=featured">
                      <Button variant="ghost" className="w-full justify-start text-base hover:bg-blue-50 hover:text-blue-700 pl-8">
                        Featured
                      </Button>
                    </Link>
                    <Link href="/properties?filter=new-listings">
                      <Button variant="ghost" className="w-full justify-start text-base hover:bg-blue-50 hover:text-blue-700 pl-8">
                        New Listings
                      </Button>
                    </Link>
                  </div>
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
                  <Button className="w-full justify-start text-base bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900">
                    Sign In
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