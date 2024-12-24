"use client";

import { motion } from "framer-motion";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aspect-video rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Property image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}