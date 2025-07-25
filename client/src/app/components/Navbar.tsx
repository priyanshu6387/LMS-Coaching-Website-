'use client';

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 shadow-md border-t-2 border-t-blue-800 animate-fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center transition-all duration-300">
          {/* Left - Logo/Brand */}
          <div className="flex-shrink-0 transition-transform hover:scale-105">
            <Link href="/">
              <span className="text-xl font-extrabold text-white tracking-wide transition-transform duration-300 hover:rotate-1">
                MyLMS
              </span>
            </Link>
          </div>

          {/* Center - Nav links */}
          <div className="hidden md:flex space-x-10 items-center text-base font-medium text-white">
            {['Home', 'Our Team', 'Free Tests', 'Courses'].map((item, idx) => {
              const path = item.toLowerCase().replace(/\s/g, '-');
              return (
                <Link
                  key={idx}
                  href={`/${path === 'home' ? '' : path}`}
                  className="relative group transition duration-200"
                >
                  <span className="hover:text-white">
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right - Contact + Login buttons */}
          <div className="flex space-x-3 items-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-emerald-100 text-emerald-700 font-semibold py-2 px-5 rounded-xl text-sm transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-white hover:bg-blue-100 text-blue-700 font-semibold py-2 px-5 rounded-xl text-sm transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
