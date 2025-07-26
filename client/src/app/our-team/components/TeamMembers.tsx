'use client';

import { motion } from 'framer-motion';

type Faculty = {
  name: string;
  department: string;
  image: string;
  bio: string;
};

const engineeringTeachers: Faculty[] = [
  {
    name: 'Dr. A.K. Singh',
    department: 'Computer Science',
    image: '/images/team1.jpg',
    bio: 'Expert in algorithms and system design with 15+ years of teaching.',
  },
  {
    name: 'Prof. Nidhi Verma',
    department: 'Electronics & Communication',
    image: '/images/team2.jpg',
    bio: 'Specializes in signal processing and embedded systems.',
  },
  {
    name: 'Dr. R. Mehra',
    department: 'Mechanical Engineering',
    image: '/images/team3.jpg',
    bio: 'Industry-integrated teaching with focus on thermodynamics and design.',
  },
  {
    name: 'Prof. Saurabh Jain',
    department: 'Civil Engineering',
    image: '/images/team4.jpg',
    bio: 'Civil structures and project management specialist.',
  },
  {
    name: 'Dr. Sneha Awasthi',
    department: 'Artificial Intelligence',
    image: '/images/team5.jpg',
    bio: 'AI researcher with focus on machine learning and NLP.',
  },
  {
    name: 'Prof. T.K. Ghosh',
    department: 'Electrical Engineering',
    image: '/images/team6.jpg',
    bio: 'Mentor in power systems, smart grid, and energy solutions.',
  },
];

const EngineeringFaculty: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-100 to-emerald-100 py-16 px-22">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-12"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {engineeringTeachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 text-center"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-emerald-200"
              />
              <h3 className="text-xl font-semibold text-indigo-800">{teacher.name}</h3>
              <p className="text-sm text-green-600 font-medium">{teacher.department}</p>
              <p className="text-gray-600 text-sm mt-2">{teacher.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringFaculty;
