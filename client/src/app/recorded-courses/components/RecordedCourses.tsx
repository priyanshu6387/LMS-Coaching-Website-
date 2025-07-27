'use client';

import { useRef } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';

type CourseVideo = {
  title: string;
  videoId: string;
};

const videos: CourseVideo[] = [
  {
    title: 'B.Tech CSE - Operating System Lecture 1',
    videoId: 'rHux0gMZ3Eg',
  },
  {
    title: 'Digital Electronics - Logic Gates Explained',
    videoId: 'zOjov-2OZ0E',
  },
  {
    title: 'Python Programming Basics',
    videoId: 'rfscVS0vtbw',
  },
  {
    title: 'Data Structures - Introduction',
    videoId: 'oSWTXtMglKE',
  },
  {
    title: 'Machine Learning - Overview and Applications',
    videoId: 'GwIo3gDZCVQ',
  },
  {
    title: 'Web Development - HTML & CSS Basics',
    videoId: 'UB1O30fR-EE',
  },
  {
    title: 'Database Management Systems - SQL Basics',
    videoId: 'HXV3zeQKqGY',
  },
];

const RecordedCourses: React.FC = () => {
  const players = useRef<YouTubePlayer[]>([]);

  const handlePlay = (index: number) => {
    players.current.forEach((player, i) => {
      if (player && i !== index) {
        player.pauseVideo();
      }
    });
  };

  return (
    <section className="bg-gradient-to-br from-indigo-100 to-emerald-100 py-20 px-22">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-10">
          Recorded Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-white p-4"
            >
              <div className="w-full aspect-[16/9] mb-3">
                <YouTube
                  videoId={video.videoId}
                  className="w-full h-full rounded-md"
                  onReady={(e) => {
                    players.current[index] = e.target;
                  }}
                  onPlay={() => handlePlay(index)}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
              </div>
              <p className="text-sm font-semibold text-indigo-800">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordedCourses;
