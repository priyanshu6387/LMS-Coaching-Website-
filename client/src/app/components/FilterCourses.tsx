'use client';

import Link from 'next/link';

const FilterCourses: React.FC = () => {
  return (
    <section className="py-12 px-10 sm:px-22 bg-gradient-to-br from-indigo-50 to-green-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Filter courses</h2>

      <div className="flex flex-wrap gap-6">
        {/* Test Series Button */}
        <Link href="/test-series">
          <button
            type="button"
            className="w-[220px] h-[150px] bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl text-white font-bold text-lg p-4 relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
          >
            <span className="z-10 relative block">
              Test<br />Series
            </span>
            <span className="absolute right-4 bottom-4 text-2xl z-10">➡️</span>
            <span className="absolute right-3 top-3 opacity-20 text-5xl">📝</span>
          </button>
        </Link>

        {/* Recorded Courses Button */}
        <Link href="/recorded-courses">
          <button
            type="button"
            className="w-[220px] h-[150px] bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl text-white font-bold text-lg p-4 relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
          >
            <span className="z-10 relative block">
              Recorded<br />Courses
            </span>
            <span className="absolute right-4 bottom-4 text-2xl z-10">➡️</span>
            <span className="absolute right-3 top-3 opacity-20 text-5xl">🎬</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FilterCourses;
