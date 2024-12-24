"use client";

import { motion } from "framer-motion";

interface PropertyDescriptionProps {
  description: string;
}

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">About this property</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}