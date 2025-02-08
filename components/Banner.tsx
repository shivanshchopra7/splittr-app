import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-t  from-purple-500 to-pink-300"  />
      <div className="relative flex flex-col items-center justify-center pb-32 lg:pb-36 px-6 sm:py-40 sm:px-12 text-center">
        <h1 className="text-4xl  mt-16 md:mt-0 lg:mt-0 sm:text-5xl md:text-6xl lg:text-[40px] font-bold mb-2 text-[#333333] p-2">
        Splittr helps you track and split expenses with friends!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[18px] mb-4  p-4">
          Whether it&apos;s a group trip or dinner,Splittr makes it easy <br /> to track
          shared expenses and settle up in a single tap.
        </p>
        <p className="hidden text-lg sm:text-xl md:text-2xl lg:text-2xl mb-4  p-4">
          Whether it&apos;s a group trip or dinner, Splittr makes it easy <br /> to track
          shared expenses and settle up in a single tap.
        </p>
        <Link href="/group">
          <Button
            size="lg"
            className="bg-gray-800 hover:bg-gray-900 border-white border-dotted mt-4 text-white text-lg font-semibold sm:text-xl md:text-2xl lg:text-xl px-4 py-6"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
