'use client';

import React from 'react';
import { Users, UserPlus, LineChart } from 'lucide-react';
import Banner from '@/components/Banner';
import FeatureCard from '@/components/FeatureCard';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <Banner />

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Designed to make <span className="text-purple-600">splitting expenses</span> effortless
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureCard
              Icon={Users}
              title="Track Group Expenses"
              description="Add group members and automatically split expenses. Perfect for trips, roommates, and shared activities."
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureCard
              Icon={UserPlus}
              title="Add Personal Contributions"
              description="Add your individual expenses and keep everything balanced within the group context — seamlessly."
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureCard
              Icon={LineChart}
              title="Visualize Spending"
              description="See clear overviews of how much you've spent, what others owe you, and your total balance — all in real-time."
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-10 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-purple-600">Splittr</span>. All rights reserved.
        </p>
        <p className="mt-2">
          <a href="#" className="hover:underline text-purple-500">
            Terms of Service
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline text-purple-500">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}
