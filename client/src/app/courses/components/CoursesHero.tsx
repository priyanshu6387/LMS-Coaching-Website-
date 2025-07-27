'use client';

import { motion } from 'framer-motion';

const CoursesHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/mycourseshero.jpeg" // 👈 Replace with your actual image path
          alt="Courses Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/80 to-emerald-200/80" />
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center px-4 py-36 space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-900"
        >
          My Courses
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-800 max-w-2xl text-lg md:text-xl"
        >
          Welcome to your personalized learning dashboard. Pick up where you left off, explore new knowledge, and reach your learning goals.
        </motion.p>
      </div>
    </section>
  );
};

export default CoursesHero;
