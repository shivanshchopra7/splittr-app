'use client';

import React from 'react';
import { Users, UserPlus, LineChart } from 'lucide-react';
import Banner from '@/components/Banner';
import FeatureCard from '@/components/FeatureCard';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <Banner />

      {/* Features Section */}
      <div className="container mx-auto py-16 sm:px-6 lg:px-8 lg:py-24 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why use <span className="text-purple-600">Splittr?</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <FeatureCard
              Icon={Users}
              title="Group Expense Tracking"
              description="Easily add group members to your expense. All the expenses are added up and divided by the number of people in the group."
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <FeatureCard
              Icon={UserPlus}
              title="Individual Expense Addition"
              description="Add expenses to your group. You can add your expenses, and they will be automatically added to your group's expenses."
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <FeatureCard
              Icon={LineChart}
              title="Expense Viewing"
              description="View all your expenses in one place. You can see how much you've spent and how much you owe."
            />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container border-t-2 mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-sm text-gray-500 bg-gray-100">
        <p className="text-md">By using <span className="font-bold text-purple-600">Splittr</span>, you agree to our <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.</p>
      </footer>
    </div>
  );
}
