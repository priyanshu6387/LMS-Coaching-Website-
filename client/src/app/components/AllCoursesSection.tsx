'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const courseList = [
  {
    title: 'Udaan Batch (Sem-III + Sem-IV) | EC & EC Allied',
    image: '/images/coursecard6.jpg',
    discount: 42,
    price: 2898,
    originalPrice: 5009,
    tags: ['FREE CONTENT', 'TESTS', 'VIDEOS'],
  },
  {
    title: 'Udaan Batch (Sem-III + Sem-IV) | EE & EE Allied',
    image: '/images/coursecard7.webp',
    discount: 42,
    price: 2898,
    originalPrice: 5009,
    tags: ['FREE CONTENT', 'TESTS', 'VIDEOS'],
  },
  {
    title: 'Udaan Batch (Sem-III + Sem-IV) | ME & ME Allied',
    image: '/images/coursecard8.webp',
    discount: 42,
    price: 2898,
    originalPrice: 5009,
    tags: ['FREE CONTENT', 'TESTS', 'VIDEOS'],
  },
];

const AllCoursesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % courseList.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + courseList.length) % courseList.length);
  };

  return (
    <section className="py-16 px-12 bg-gradient-to-br from-[#e0e7ff] to-[#ccfbf1]">
      <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800">All courses</h2>
        <Link
          href="/courses"
          className="text-violet-600 font-semibold hover:text-violet-800 transition-colors duration-300"
        >
          See All →
        </Link>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-4 transition-all duration-500 ease-in-out">
          {courseList
            .slice(startIndex, startIndex + itemsPerView)
            .map((course, idx) => (
              <div
                key={idx}
                className="w-[360px] bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="relative w-full h-[210px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600 font-medium hover:bg-gray-200 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition">
                  {course.title}
                </h3>

                <p className="text-sm text-orange-500 font-medium mb-1">
                  🏷️ Extra ₹500 coupon discount
                </p>

                <div className="flex items-center gap-2 text-gray-800 font-bold mb-5">
                  <span className="text-lg">₹{course.price}</span>
                  <span className="text-sm line-through text-gray-400">
                    ₹{course.originalPrice}
                  </span>
                  <span className="text-sm text-red-500">{course.discount}% OFF</span>
                </div>

                <button className="w-full bg-violet-600 text-white font-semibold py-2 rounded-xl hover:bg-violet-700 transition duration-300 transform hover:scale-105">
                  Get this course
                </button>
              </div>
            ))}
        </div>

        {/* Modern Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 border shadow-lg flex items-center justify-center text-2xl text-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 border shadow-lg flex items-center justify-center text-2xl text-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default AllCoursesSection;
