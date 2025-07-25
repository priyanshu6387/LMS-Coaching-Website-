'use client';

import Image from 'next/image';

const subcategories = [
  { name: 'AKTU : B.Tech', count: 6 },
  { name: 'AKTU III SEM', count: 4 },
  { name: 'AKTU IV-SEM', count: 3 },
  { name: 'ME & ME Allied', count: 3 },
  { name: 'SEM-II', count: 3 },
  { name: 'AKTU : B.Tech', count: 2 },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-emerald-50 py-14 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src="/images/mylms.png" // Update as needed
            alt="MyLMS Logo"
            width={100}
            height={100}
            className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">About MyLMS</h2>
            <p className="text-gray-700 max-w-3xl text-base leading-relaxed">
              At MyLMS, we are committed to empowering individuals with the knowledge and skills they need to unlock their full potential and achieve their goals. Our mission is to serve as a bridge between aspiration and achievement, providing a gateway to success.
            </p>
          </div>
        </div>

        {/* Sub-categories */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Sub-category ({subcategories.length})
          </h3>
          <div className="flex flex-wrap gap-4">
            {subcategories.map((item, index) => (
              <button
                key={index}
                type="button"
                className="px-5 py-2 bg-white text-gray-800 border border-gray-200 rounded-xl shadow-md text-sm font-medium
                hover:bg-indigo-100 hover:border-indigo-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400
                transition-all duration-300 ease-in-out"
              >
                {item.name} ({item.count})
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
