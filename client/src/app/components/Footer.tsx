'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import { LuCalendarDays } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#7aa7ff] to-[#58d1aa] text-gray-800 py-14 px-6 sm:px-20 transition-all duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Intro */}
        <div className="text-center mt-[-7vmin] md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img src="/images/mylms.png" alt="MyLMS" className="w-30 h-auto" />
            <p className="text-sm mt-[-4vmin] text-gray-700 leading-relaxed transition duration-300 hover:text-gray-900">
              MyLMS tetur sadipscing elitr tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <div className="flex gap-3 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 border border-gray-500 rounded-full flex items-center justify-center text-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 transition duration-300 hover:text-yellow-400">
            <span className="text-yellow-400">|</span> Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 hover:text-gray-900 transition">
              <HiOutlineLocationMarker className="text-yellow-400 mt-1" />
              <span>420 Love Sreet 133/2 Street, NewYork</span>
            </li>
            <li className="flex items-center gap-2 hover:text-gray-900 transition">
              <HiOutlineMail className="text-yellow-400" />
              info.contact@gmail.com
            </li>
            <li className="flex items-center gap-2 hover:text-gray-900 transition">
              <HiOutlinePhone className="text-yellow-400" />
              012 345 678 9101
            </li>
          </ul>
        </div>

        {/* News & Blog */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 transition duration-300 hover:text-yellow-400">
            <span className="text-yellow-400">|</span> News & Blog
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <div className="flex items-start gap-2 hover:text-gray-900 transition">
                <BsDot className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 hover:text-blue-700 transition duration-300 cursor-pointer">
                    Big Ideas Of Business Branding Info.
                  </p>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <LuCalendarDays className="mr-1" /> December 7, 2022
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2 hover:text-gray-900 transition">
                <BsDot className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 hover:text-blue-700 transition duration-300 cursor-pointer">
                    Ui/Ux Ideas Of Business Branding Info.
                  </p>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <LuCalendarDays className="mr-1" /> December 7, 2022
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 transition duration-300 hover:text-yellow-400">
            <span className="text-yellow-400">|</span> Course
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              'Branding design',
              'Ui/Ux designing',
              'Make Elements',
              'Business',
              'Graphics design',
            ].map((course, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                <BsDot className="text-yellow-400" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
