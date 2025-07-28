'use client';

import { useState } from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  price: number;
  tag: string;
  thumbnail: string;
  youtubeVideoId: string;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    description: 'Master DSA for interviews and core B.Tech knowledge.',
    instructor: 'Prof. Ankit Sharma',
    price: 499,
    tag: 'Computer Science',
    thumbnail: "/images/dsa.webp",
    youtubeVideoId: 'RBSGKlAvoiM'
  },
  {
    id: 2,
    title: 'Thermodynamics',
    description: 'Concepts of heat and energy in mechanical systems.',
    instructor: 'Dr. Meera Yadav',
    price: 399,
    tag: 'Mechanical',
    thumbnail: "/images/thermodynamics.jpg",
    youtubeVideoId: 'PoSfPpSMt3I'
  },
  {
    id: 3,
    title: 'Digital Electronics',
    description: 'Logic gates, flip-flops, counters and circuits.',
    instructor: 'Prof. Ravi Patel',
    price: 449,
    tag: 'Electronics',
    thumbnail: "/images/de.jpg",
    youtubeVideoId: 'y2pQY4H08xg'
  },
  {
    id: 4,
    title: 'Structural Analysis',
    description: 'Fundamentals of loads, beams, and stability.',
    instructor: 'Dr. Neha Kumar',
    price: 349,
    tag: 'Civil',
    thumbnail: "/images/sa.jpg",
    youtubeVideoId: '7HqEByiL7dE'
  }
];

export default function CourseStore() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const openBuyModal = (course: Course) => {
    setSelectedCourse(course);
    setShowModal(true);
    setPurchased(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
    setPurchased(false);
  };

  const handleBuy = () => {
    // Simulate purchase
    setPurchased(true);
  };

  return (
    <section className="px-16 ml-[-4vmin] mr-[-2vmin] mb-[0vmin] py-16 bg-gradient-to-br from-green-50 via-lime-100 to-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">B.Tech Course Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img src={course.thumbnail} alt={course.title} className="w-full h-44 object-cover" />
            <div className="p-5 space-y-2">
              <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                {course.tag}
              </span>
              <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2>
              <p className="text-gray-600 text-sm">{course.description}</p>
              <p className="text-sm text-gray-500">By {course.instructor}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-emerald-600 font-bold text-base">₹{course.price}</p>
                <button
                  onClick={() => openBuyModal(course)}
                  className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-xl p-6 shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>

            {!purchased ? (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Buy Course</h2>
                <div className="space-y-2 text-black">
                  <p><span className="font-medium">Course:</span> {selectedCourse.title}</p>
                  <p><span className="font-medium">Instructor:</span> {selectedCourse.instructor}</p>
                  <p><span className="font-medium">Price:</span> ₹{selectedCourse.price}</p>
                </div>
                <button
                  onClick={handleBuy}
                  className="mt-6 w-full bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold text-base shadow-md hover:bg-emerald-700 hover:scale-[1.02] transition-transform duration-200"
                >
                  🚀 Proceed to Buy
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">🎓 Access Course</h2>
                <p className="text-gray-700 mb-4">
                  Thank you for purchasing <strong>{selectedCourse.title}</strong>. Start learning below:
                </p>
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedCourse.youtubeVideoId}`}
                    title="Course Video"
                    allowFullScreen
                    className="w-full h-full rounded-md border"
                  ></iframe>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
