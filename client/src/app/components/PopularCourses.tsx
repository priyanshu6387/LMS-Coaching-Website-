'use client';

import Image from 'next/image';

const courses = [
  {
    title: 'Udaan Batch (Sem-III + Sem-IV) | CS/IT & Allied',
    image: '/images/coursecard1.jpg',
    tags: ['FREE CONTENT', 'TESTS', 'VIDEOS'],
    coupon: 'Extra ₹ 500 coupon discount',
    price: 2898,
    original: 5000,
    discount: '42% OFF',
  },
  {
    title: 'Udaan Batch (Sem-III) | CS/IT & Allied',
    image: '/images/coursecard2.webp',
    tags: ['FREE CONTENT', 'VIDEOS', 'FILES'],
    coupon: 'Extra ₹ 500 coupon discount',
    price: 1999,
    original: 2510,
    discount: '20% OFF',
  },
  {
    title: 'Udaan Batch (Sem-III + Sem-IV) | EE Allied',
    image: '/images/coursecard3.jpg',
    tags: ['FREE CONTENT', 'TESTS', 'VIDEOS'],
    coupon: 'Extra ₹ 500 coupon discount',
    price: 2898,
    original: 5000,
    discount: '42% OFF',
  },
];

const PopularCourses: React.FC = () => {
  return (
    <section className="py-14 px-10 sm:px-22 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Popular Courses</h2>
          <button className="text-indigo-600 font-semibold text-sm flex items-center gap-1 hover:underline transition">
            See All <span>→</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Image */}
              <div className="rounded-lg overflow-hidden mb-3">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-auto transition duration-300 hover:brightness-105"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {course.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-indigo-100 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-1">{course.title}</h3>

              {/* Coupon */}
              <p className="text-orange-500 text-sm font-medium mb-2">🔖 {course.coupon}</p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-xl font-bold text-gray-900">₹ {course.price}</span>{' '}
                <span className="line-through text-gray-400 text-sm">₹ {course.original}</span>{' '}
                <span className="text-red-500 text-sm font-semibold">{course.discount}</span>
              </div>

              {/* CTA */}
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-100">
                Get this course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
