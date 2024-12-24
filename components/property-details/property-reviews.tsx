"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";
import { Review } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface PropertyReviewsProps {
  reviews: Review[];
  averageRating: number;
}

export function PropertyReviews({ reviews, averageRating }: PropertyReviewsProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
          <span className="font-bold">{averageRating.toFixed(1)}</span>
          <span className="text-gray-600 ml-1">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">{review.userName}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {format(new Date(review.date), 'PP')}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              Helpful ({review.helpful})
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}