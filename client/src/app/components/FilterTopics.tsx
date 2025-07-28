'use client';

import { useState, useRef, useEffect } from 'react';

const categorizedCourses: Record<
  string,
  Record<string, { title: string; youtubeUrl: string; videoId: string }[]>
> = {
  CSE: {
    'Operating Systems': [
      {
        title: 'OS Lecture 1',
        youtubeUrl: 'https://www.youtube.com/watch?v=QZp4Tkx3jbY',
        videoId: 'QZp4Tkx3jbY',
      },
      {
        title: 'OS Lecture 2',
        youtubeUrl: 'https://www.youtube.com/watch?v=Mz7F8wG4Fs8',
        videoId: 'Mz7F8wG4Fs8',
      },
    ],
    'Python Programming': [
      {
        title: 'Python for Beginners',
        youtubeUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
        videoId: 'rfscVS0vtbw',
      },
      {
        title: 'Advanced Python',
        youtubeUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        videoId: '_uQrJ0TkZlc',
      },
    ],
    'Web Development': [
      {
        title: 'HTML Crash Course',
        youtubeUrl: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
        videoId: 'UB1O30fR-EE',
      },
      {
        title: 'React JS in Hindi',
        youtubeUrl: 'https://www.youtube.com/watch?v=Y9iZr3Gg2Ck',
        videoId: 'Y9iZr3Gg2Ck',
      },
    ],
  },
  ECE: {
    'Digital Electronics': [
      {
        title: 'Digital Basics',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJ-D3CJ5obg',
        videoId: 'YJ-D3CJ5obg',
      },
      {
        title: 'Logic Gates',
        youtubeUrl: 'https://www.youtube.com/watch?v=H68YgW_9BqY',
        videoId: 'H68YgW_9BqY',
      },
    ],
    'Signals & Systems': [
      {
        title: 'Signals Intro',
        youtubeUrl: 'https://www.youtube.com/watch?v=t7F9sb-4wzY',
        videoId: 't7F9sb-4wzY',
      },
      {
        title: 'Fourier Series',
        youtubeUrl: 'https://www.youtube.com/watch?v=G7X_f0a7zto',
        videoId: 'G7X_f0a7zto',
      },
    ],
  },
  ME: {
    'Thermodynamics': [
      {
        title: 'Thermo Basics',
        youtubeUrl: 'https://www.youtube.com/watch?v=1aKkK1aWddk',
        videoId: '1aKkK1aWddk',
      },
      {
        title: 'Laws of Thermo',
        youtubeUrl: 'https://www.youtube.com/watch?v=PIbB4xrpQ8s',
        videoId: 'PIbB4xrpQ8s',
      },
    ],
  },
  Others: {
    'Communication Skills': [
      {
        title: 'Soft Skills Lecture',
        youtubeUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
        videoId: '2Vv-BfVoq4g',
      },
    ],
    'Ethics & Values': [
      {
        title: 'Ethics Explained',
        youtubeUrl: 'https://www.youtube.com/watch?v=XGm0y0s5Z2A',
        videoId: 'XGm0y0s5Z2A',
      },
    ],
  },
};

export default function FilterTopics() {
  const [expandedTopic, setExpandedTopic] = useState<{
    category: string;
    topic: string;
  } | null>(null);

  const [purchasedCourses, setPurchasedCourses] = useState<string[]>([]); // Track purchased titles
  const courseRef = useRef<HTMLDivElement | null>(null);

  const handleTopicClick = (category: string, topic: string) => {
    setExpandedTopic(prev =>
      prev?.category === category && prev?.topic === topic
        ? null
        : { category, topic }
    );
  };

  const handleBuy = (title: string) => {
    if (!purchasedCourses.includes(title)) {
      setPurchasedCourses(prev => [...prev, title]);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        courseRef.current &&
        !courseRef.current.contains(event.target as Node)
      ) {
        setExpandedTopic(null);
      }
    }

    if (expandedTopic) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedTopic]);

  return (
    <div className="w-screen ml-[-4vmin] mr-[-4vmin] min-h-screen bg-gradient-to-tr from-green-100 via-lime-100 to-yellow-50 p-10 sm:p-16 space-y-8 overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center text-green-700">
        Free B.Tech Courses
      </h2>

      {Object.entries(categorizedCourses).map(([category, topics]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            {category} Courses
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            {Object.keys(topics).map(topic => (
              <button
                key={topic}
                onClick={() => handleTopicClick(category, topic)}
                className={`w-full p-4 border rounded-lg shadow font-semibold text-left transition ${
                  expandedTopic?.category === category &&
                  expandedTopic?.topic === topic
                    ? 'bg-green-500 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-800'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          {expandedTopic?.category === category &&
            expandedTopic?.topic &&
            topics[expandedTopic.topic] && (
              <div
                ref={courseRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {topics[expandedTopic.topic].map((course, idx) => {
                  const isPurchased = purchasedCourses.includes(course.title);
                  return (
                    <div
                      key={idx}
                      className="bg-white border rounded-xl shadow-md p-4 flex flex-col items-center"
                    >
                      <h4 className="text-md font-semibold text-center mb-3">
                        {course.title}
                      </h4>

                      {!isPurchased ? (
                        <button
                          onClick={() => handleBuy(course.title)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
                        >
                          Buy Now
                        </button>
                      ) : (
                        <>
                          <div className="w-full aspect-video mb-3">
                            <iframe
                              width="100%"
                              height="100%"
                              className="rounded-md"
                              src={`https://www.youtube.com/embed/${course.videoId}`}
                              title={course.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <a
                            href={course.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
                          >
                            Watch on YouTube
                          </a>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}
