'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from 'react-icons/fa';

const ModernContactForm: React.FC = () => {
  return (
    <section className="py-26 px-10 sm:px-22 bg-gradient-to-br from-indigo-100 to-emerald-100 transition-all duration-300">
      <div className="max-w-7xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-600 mb-2 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
            Get in touch
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Write Us a Message</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
            Junk MTV quiz graced by fox whelps. Bawds jog,
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, color: 'hover:text-blue-600' },
              { icon: <FaTwitter />, color: 'hover:text-sky-500' },
              { icon: <FaInstagram />, color: 'hover:text-pink-500' },
              { icon: <FaPinterestP />, color: 'hover:text-red-500' },
              { icon: <FaLinkedinIn />, color: 'hover:text-blue-700' },
            ].map((item, i) => (
              <div
                key={i}
                className={`w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-blue-400 rounded-full text-gray-600 text-sm transition duration-300 transform hover:scale-110 cursor-pointer ${item.color}`}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-gradient-to-br from-blue-200 to-green-200 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-blue-400 rounded-md px-4 py-3 w-full text-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border border-blue-400 rounded-md px-4 py-3 w-full text-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-blue-400 rounded-md px-4 py-3 w-full text-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border border-blue-400 rounded-md px-4 py-3 w-full text-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="border border-blue-400 rounded-md px-4 py-3 w-full text-sm text-black placeholder-black md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ModernContactForm;
