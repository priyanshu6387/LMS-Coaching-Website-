'use client';

import Image from 'next/image';
import Link from 'next/link';

const FeaturedCourseCard = () => {
  return (
    <section className="py-10 px-22 sm:px-20 bg-gradient-to-br from-[#e0f2fe] to-[#d1fae5] shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Featured courses</h2>
        <Link
          href="/courses"
          className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300"
        >
          See All →
        </Link>
      </div>

      <div className="flex items-center gap-8 group">
        {/* Thumbnail */}
        <div className="relative w-[240px] h-[160px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-105">
          <Image
            src="/images/coursecard5.jpg"
            alt="Course Thumbnail"
            fill
            className="object-cover"
          />
        </div>

        {/* Course Info */}
        <div className="flex flex-col space-y-3 flex-grow">
          <div className="flex gap-2 flex-wrap">
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

          <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 cursor-pointer">
            Udaan Batch (Sem-III + Sem-IV) | Civil Engg.
          </h3>

          <div className="text-sm text-orange-500 font-medium flex items-center gap-1">
            🏷️ Extra ₹500 coupon discount
          </div>

          <div className="flex items-center gap-2 font-bold text-gray-800">
            <span className="text-xl">₹2,898</span>
            <span className="text-sm text-gray-400 line-through">₹5,009</span>
            <span className="text-sm text-red-500">42% OFF</span>
          </div>
        </div>

        {/* Arrow Button */}
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:bg-blue-700 hover:scale-110 focus:outline-none"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default FeaturedCourseCard;
