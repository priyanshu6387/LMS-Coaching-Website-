'use client';

import { motion } from 'framer-motion';

const TeamHero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-200 via-cyan-100 to-green-100 py-34 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-900"
        >
          Meet Our Team
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-800 max-w-2xl text-lg md:text-xl"
        >
          We are a passionate group of educators, developers, and strategists committed to building meaningful learning experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default TeamHero;
