"use client";

import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Check, ChevronsUpDown, Search, Home, Hotel, Users, Building2, Building, User, CircleUserRound, CircleUser } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const cities = [
  { value: "colombo", label: "Colombo" },
  { value: "kandy", label: "Kandy" },
  { value: "galle", label: "Galle" },
  { value: "negombo", label: "Negombo" },
  { value: "jaffna", label: "Jaffna" },
  { value: "batticaloa", label: "Batticaloa" },
  { value: "trincomalee", label: "Trincomalee" },
  { value: "anuradhapura", label: "Anuradhapura" },
  { value: "matara", label: "Matara" },
  { value: "kurunegala", label: "Kurunegala" },
  { value: "ratnapura", label: "Ratnapura" },
  { value: "badulla", label: "Badulla" },
  { value: "matale", label: "Matale" },
  { value: "nuwara-eliya", label: "Nuwara Eliya" },
  { value: "kalmunai", label: "Kalmunai" },
  { value: "vavuniya", label: "Vavuniya" },
  { value: "hambantota", label: "Hambantota" },
  { value: "ampara", label: "Ampara" },
  { value: "kegalle", label: "Kegalle" },
  { value: "kalutara", label: "Kalutara" },
];

const MaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
    <circle cx="10" cy="14" r="5" strokeWidth="2"/>
    <path d="M19 5l-6 6M19 5h-6M19 5v6" strokeWidth="2"/>
  </svg>
);

const FemaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
    <circle cx="12" cy="10" r="5" strokeWidth="2"/>
    <path d="M12 15v7M9 19h6" strokeWidth="2"/>
  </svg>
);

export function FilterSection({ showGenderToggle = false, centerSearchButton = false }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [deposit, setDeposit] = useState("");
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const searchButton = (
    <Button 
      className={cn(
        "bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg h-10",
        centerSearchButton ? "w-[200px]" : "w-full"
      )}
    >
      <Search className="w-4 h-4 mr-2" />
      Search
    </Button>
  );

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* City Selection */}
        <div className="md:col-span-4 space-y-2">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between border-gray-200 bg-white hover:bg-gray-50"
              >
                {value
                  ? cities.find((city) => city.value === value)?.label
                  : "Select city..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command shouldFilter={false}>
                <CommandInput placeholder="Search city..." />
                <CommandEmpty>No city found.</CommandEmpty>
                <CommandGroup>
                  {cities.map((city) => (
                    <CommandItem
                      key={city.value}
                      onSelect={() => {
                        setValue(city.value === value ? "" : city.value);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === city.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {city.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Property Type */}
        <div className="md:col-span-3 space-y-2">
          <label className="text-sm font-medium text-gray-700">Property Type</label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-room">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Single Rooms
                </div>
              </SelectItem>
              <SelectItem value="shared-room">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Shared Rooms
                </div>
              </SelectItem>
              <SelectItem value="house">
                <div className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Houses
                </div>
              </SelectItem>
              <SelectItem value="annex">
                <div className="flex items-center">
                  <Hotel className="mr-2 h-4 w-4" />
                  Annexes
                </div>
              </SelectItem>
              <SelectItem value="apartment">
                <div className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4" />
                  Apartments
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Deposit Option */}
        <div className="md:col-span-3 space-y-2">
          <label className="text-sm font-medium text-gray-700">Deposit</label>
          <Select value={deposit} onValueChange={setDeposit}>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select deposit option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="with">Deposit</SelectItem>
              <SelectItem value="without">No Deposit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gender Toggle - Only shown when showGenderToggle is true */}
        {showGenderToggle && (
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <div className="flex bg-white border rounded-md p-1">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 p-2 rounded-md transition-all duration-200 ${
                  gender === 'male' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <MaleIcon />
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 p-2 rounded-md transition-all duration-200 ${
                  gender === 'female' 
                    ? 'bg-pink-100 text-pink-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <FemaleIcon />
              </button>
            </div>
          </div>
        )}

        {/* Search Button - Only shown when not centered */}
        {!centerSearchButton && (
          <div className="md:col-span-2">
            {searchButton}
          </div>
        )}
      </div>

      {/* Centered Search Button */}
      {centerSearchButton && (
        <div className="flex justify-center mt-6">
          {searchButton}
        </div>
      )}
    </div>
  );
}