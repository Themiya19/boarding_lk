"use client";

import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Check, ChevronsUpDown, Search } from "lucide-react";
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
] as const;

export function FilterSection() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
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
              <Command>
                <CommandInput placeholder="Search city..." />
                <CommandEmpty>No city found.</CommandEmpty>
                <CommandGroup>
                  {cities.map((city) => (
                    <CommandItem
                      key={city.value}
                      value={city.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
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
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="shared">Shared Room</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Deposit Option */}
        <div className="md:col-span-3 space-y-2">
          <label className="text-sm font-medium text-gray-700">Deposit</label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select deposit option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="with">With Deposit</SelectItem>
              <SelectItem value="without">Without Deposit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="md:col-span-2">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 h-10"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}