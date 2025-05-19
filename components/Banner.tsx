import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Instant Tracking",
    desc: "Log expenses on the go and see real-time updates.",
  },
  {
    title: "Smart Summaries",
    desc: "Know exactly who owes what, instantly.",
  },
  {
    title: "No More Awkwardness",
    desc: "Split evenly or by custom amounts, effortlessly.",
  },
];

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-tr from-purple-700 via-pink-600 to-pink-400 min-h-screen flex flex-col items-center justify-center text-white px-8 py-24 overflow-hidden font-sans">

      {/* Decorative Background Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-pink-400 rounded-full opacity-30 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px] bg-purple-600 rounded-full opacity-25 blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <motion.div
        className="text-center max-w-4xl z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-8 leading-tight tracking-tight drop-shadow-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Split Expenses.<br /> Stay Friends. 💸
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Whether it's a group trip, dinner, or household rent — Splittr helps you keep things fair and simple with real-time tracking, smart summaries, and seamless settlements.
        </motion.p>

        <Link href="/group" passHref>
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button className="bg-white text-purple-700 hover:bg-purple-800 hover:text-white text-lg px-10 py-6 rounded-3xl font-semibold shadow-lg transition-all">
              Get Started 🚀
            </Button>
          </motion.div>
        </Link>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mt-32 max-w-6xl w-full grid md:grid-cols-3 gap-10 text-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {features.map(({ title, desc }, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition cursor-default"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
          >
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-white text-opacity-90 text-lg">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Remove the CTA Section here */}
    </div>
  );
}
