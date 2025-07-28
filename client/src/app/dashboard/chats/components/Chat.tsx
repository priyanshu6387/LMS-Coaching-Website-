'use client';

import { useEffect, useState } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'instructor';
  text: string;
}

const courses = ['Physics - 101', 'Math - 201', 'Chemistry - 102'];

export default function Chat() {
  const [selectedCourse, setSelectedCourse] = useState<string>(courses[0]);

  const [courseChats, setCourseChats] = useState<Record<string, Message[]>>({
    'Physics - 101': [{ id: 1, sender: 'instructor', text: 'Welcome to Physics class!' }],
    'Math - 201': [{ id: 1, sender: 'instructor', text: 'Welcome to Math discussions!' }],
    'Chemistry - 102': [{ id: 1, sender: 'instructor', text: 'Chemistry class is live!' }]
  });

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: courseChats[selectedCourse].length + 1,
      sender: 'user',
      text: input.trim()
    };

    const updatedMessages = [...courseChats[selectedCourse], newMessage];

    setCourseChats(prev => ({
      ...prev,
      [selectedCourse]: updatedMessages
    }));

    setInput('');

    // Trigger Auto Reply after 1 second
    setTimeout(() => {
      const autoReply: Message = {
        id: updatedMessages.length + 1,
        sender: 'instructor',
        text: generateAutoReply(input)
      };

      setCourseChats(prev => ({
        ...prev,
        [selectedCourse]: [...prev[selectedCourse], autoReply]
      }));
    }, 1000);
  };

  const generateAutoReply = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('doubt') || msg.includes('question')) {
      return 'Sure! Please describe your doubt in detail.';
    } else if (msg.includes('topic')) {
      return 'Let me know which topic you are referring to.';
    } else if (msg.includes('thank')) {
      return 'You’re welcome! Keep learning.';
    } else if (msg.includes('hi') || msg.includes('hello')) {
      return 'Hi there! How can I assist you today?';
    } else {
      return 'Thanks for your message! I’ll get back to you shortly.';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-80px)] ml-[-2vmin] mt-20 bg-white border rounded-lg shadow-md overflow-hidden">

      {/* Sidebar */}
      <aside className="w-full sm:w-64 bg-gray-100 border-b sm:border-r sm:border-b-0 p-4 ">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Class Chats</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {courses.map((course) => (
            <li
              key={course}
              className={`p-2 rounded-md cursor-pointer ${
                selectedCourse === course
                  ? 'bg-green-600 text-white font-medium'
                  : 'hover:bg-green-100'
              }`}
              onClick={() => setSelectedCourse(course)}
            >
              {course}
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col justify-between bg-gray-50">
        {/* Messages */}
        <div className="flex-1 px-4 py-6 overflow-y-auto space-y-4">
          {courseChats[selectedCourse]?.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[75%] md:max-w-md px-4 py-2 rounded-xl shadow-sm text-sm ${
                msg.sender === 'user'
                  ? 'ml-auto bg-green-600 text-white'
                  : 'mr-auto bg-white text-gray-800 border'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t bg-white flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={`Message in ${selectedCourse}...`}
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
          />
          <button
            onClick={sendMessage}
            className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-all"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
