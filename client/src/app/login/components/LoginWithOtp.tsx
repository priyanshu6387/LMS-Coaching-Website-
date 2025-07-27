'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginWithOtp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        alert('OTP sent to your email');
        setStep('otp');
      } else {
        alert('Failed to send OTP');
      }
    } catch (error) {
      alert('Error connecting to server');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        // Redirect or set login state here
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Error verifying OTP');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: About MyLMS */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">About MyLMS</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            MyLMS is your gateway to smart, flexible learning. Whether you're a student, teacher, or professional,
            our platform connects you with the tools you need to succeed.
          </p>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Interactive Courses</li>
            <li>Live and Recorded Classes</li>
            <li>Real-time Performance Insights</li>
          </ul>
        </motion.div>

        {/* Right: Login Form */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-br from-blue-500 to-emerald-400 rounded-2xl shadow-xl p-8 max-w-md mx-auto text-white"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login with Email & OTP</h2>

          <AnimatePresence mode="wait">
            {step === 'email' ? (
              <motion.form
                key="email-form"
                onSubmit={handleEmailSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-white/40 bg-white/90 text-black rounded-lg px-4 py-2 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white transition"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full bg-white text-blue-700 hover:bg-blue-100 font-semibold py-2 rounded-lg transition shadow-md ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="otp-form"
                onSubmit={handleOtpSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium mb-1">
                    Enter OTP sent to <span className="font-semibold underline">{email}</span>
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    maxLength={6}
                    required
                    className="w-full border border-white/40 bg-white/90 text-black rounded-lg px-4 py-2 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white transition"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full bg-white text-green-700 hover:bg-green-100 font-semibold py-2 rounded-lg transition shadow-md ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Verifying...' : 'Verify OTP & Login'}
                </motion.button>

                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="text-sm underline hover:text-gray-100 text-center block mt-2"
                >
                  Change Email
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginWithOtp;
