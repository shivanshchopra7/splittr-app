import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-400 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-white opacity-20 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-20 rounded-full"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      {/* Content Section */}
      <div className="relative text-center px-6 sm:px-12  z-10">
        <motion.h1
          className="text-white text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Track & Split <br /> Expenses Effortlessly! 💸
        </motion.h1>
        <motion.p
          className="text-white text-lg sm:text-xl opacity-90 mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Whether it&apos;s a group trip or dinner, Splittr makes it easy
          <br /> to track shared expenses and settle up in a single tap.
        </motion.p>
        <Link href="/group">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button className="bg-white text-purple-700 hover:bg-purple-800 hover:text-white text-lg px-6 py-6 rounded-xl font-semibold transition-all shadow-lg">
              Get Started 🚀
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
