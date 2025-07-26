'use client';

import { motion } from 'framer-motion';

const CoursesHero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-200 to-emerald-200 py-34 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
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
