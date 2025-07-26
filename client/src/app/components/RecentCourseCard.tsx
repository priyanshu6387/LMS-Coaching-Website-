'use client';

import Image from 'next/image';
import Link from 'next/link';

const RecentCourseCard = () => {
  return (
    <section className="py-10 px-22 bg-gradient-to-br from-purple-100 to-cyan-100 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Recent courses</h2>
        <Link
          href="/courses"
          className="text-indigo-500 hover:text-indigo-600 font-semibold transition duration-300"
        >
          See All →
        </Link>
      </div>

      <div className="flex items-center gap-6 group">
        <div className="relative w-[220px] h-[150px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-105">
          <Image
            src="/images/coursecard4.jpg"
            alt="Course Thumbnail"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col space-y-3 flex-grow">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white text-xs text-gray-600 rounded-md shadow hover:shadow-lg transition duration-300 cursor-pointer">
              FREE CONTENT
            </span>
            <span className="px-3 py-1 bg-white text-xs text-gray-600 rounded-md shadow hover:shadow-lg transition duration-300 cursor-pointer">
              TESTS
            </span>
            <span className="px-3 py-1 bg-white text-xs text-gray-600 rounded-md shadow hover:shadow-lg transition duration-300 cursor-pointer">
              VIDEOS
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-500 transition duration-300 cursor-pointer">
            Udaan Batch (Sem-III + Sem-IV) | ME & ME Allied
          </h3>

          <div className="text-sm text-orange-500 font-medium flex items-center gap-1">
            <span>🏷️ Extra ₹500 coupon discount</span>
          </div>

          <div className="flex items-center gap-2 font-bold text-gray-800">
            <span className="text-xl">₹2,898</span>
            <span className="text-sm text-gray-400 line-through">₹5,009</span>
            <span className="text-sm text-red-500">42% OFF</span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white text-xl font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:bg-indigo-700 hover:scale-110 focus:outline-none"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default RecentCourseCard;
