'use client';

import { motion } from 'framer-motion';

const RecordedCoursesHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/recordedcourseshero.jpg" // 🔁 Replace with your actual image path
          alt="Recorded Courses Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          Explore Recorded Courses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          Watch anytime, anywhere. Access pre-recorded lectures from top educators across Computer Science, AI, Mathematics, and more.
        </motion.p>
      </div>
    </section>
  );
};

export default RecordedCoursesHero;
