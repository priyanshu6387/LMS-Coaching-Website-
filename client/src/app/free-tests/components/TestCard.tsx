'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

type Test = {
  id: number;
  title: string;
};

const testData: Test[] = [
  {
    id: 1,
    title: 'DEMO TEST – TCS – Repeated MCQs: Time, Speed, and Distance',
  },
  {
    id: 2,
    title: 'TCS-NQT Quantitative Aptitude – Algebra and Equations',
  },
  {
    id: 3,
    title: 'Logical Reasoning – Series and Patterns',
  },
];

const TestCard: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredTests = testData.filter((test) =>
    test.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-emerald-100 px-4 py-32">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-blue-400 rounded-md py-2 px-4 pl-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition text-black placeholder-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-600" />
        </div>

        {/* Test Cards - Stacked */}
        <div className="flex flex-col gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-gradient-to-br from-blue-300 to-green-300 text-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.01] hover:brightness-105 transition-all duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="bg-white/70 p-3 rounded-lg shadow-sm">
                  <img
                    src="/images/tcs.png"
                    alt="doc-icon"
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-sm font-semibold">{test.title}</div>
              </div>

              {/* Attempt Button */}
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-1.5 rounded-md text-sm transition-all shadow"
                onClick={() => alert(`Starting test: ${test.title}`)}
              >
                Attempt
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestCard;
