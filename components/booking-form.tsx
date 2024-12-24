"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CreditCard, Mail, Phone, User, Users } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Property } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  property: Property;
}

const formSections = {
  dates: {
    title: "Select Dates",
    icon: Calendar,
  },
  occupants: {
    title: "Number of Occupants",
    icon: Users,
  },
  contact: {
    title: "Contact Information",
    icon: User,
  },
  payment: {
    title: "Payment Details",
    icon: CreditCard,
  },
};

export function BookingForm({ property }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [activeSection, setActiveSection] = useState("dates");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Dates Section */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        variants={itemVariants}
        onClick={() => setActiveSection("dates")}
      >
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-sky-500" />
          <h3 className="text-lg font-semibold">{formSections.dates.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Check-in Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </motion.div>

      {/* Occupants Section */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        variants={itemVariants}
        onClick={() => setActiveSection("occupants")}
      >
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-sky-500" />
          <h3 className="text-lg font-semibold">{formSections.occupants.title}</h3>
        </div>
        <div className="space-y-2">
          <Label>Number of Occupants</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select number of occupants" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Person</SelectItem>
              <SelectItem value="2">2 People</SelectItem>
              <SelectItem value="3">3 People</SelectItem>
              <SelectItem value="4">4 People</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        variants={itemVariants}
        onClick={() => setActiveSection("contact")}
      >
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5 text-sky-500" />
          <h3 className="text-lg font-semibold">{formSections.contact.title}</h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10" placeholder="Enter your first name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-10" placeholder="Enter your last name" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input className="pl-10" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input className="pl-10" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Details Section */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        variants={itemVariants}
        onClick={() => setActiveSection("payment")}
      >
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="h-5 w-5 text-sky-500" />
          <h3 className="text-lg font-semibold">{formSections.payment.title}</h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Card Number</Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input className="pl-10" placeholder="Enter your card number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Expiry Date</Label>
              <Input placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label>CVV</Label>
              <Input type="password" placeholder="Enter CVV" maxLength={3} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Booking Summary Section */}
      <motion.div
        className="rounded-lg bg-sky-50 p-6 shadow-sm"
        variants={itemVariants}
      >
        <h4 className="font-semibold mb-4 text-lg">Booking Summary</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Rate per night</span>
            <span className="font-medium">{property.price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Service fee</span>
            <span className="font-medium">Rs. 1,000</span>
          </div>
          <Separator className="my-3" />
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-bold text-lg">Rs. 16,000</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Button
            type="submit"
            className="w-full bg-sky-100 hover:bg-sky-200 text-sky-900 py-6 text-lg font-semibold"
          >
            Confirm Booking
          </Button>
        </motion.div>

        <p className="text-sm text-gray-500 text-center">
          By clicking Confirm Booking, you agree to our terms and conditions
        </p>
      </motion.div>
    </motion.form>
  );
} 