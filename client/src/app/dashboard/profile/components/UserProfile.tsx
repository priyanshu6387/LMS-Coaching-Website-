'use client';

import { useState } from 'react';

export default function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Info');
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    email: '',
    rollNumber: '',
    about: '',
    doj: ''
  });

  const handleChange = (field: string, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const tabs = ['Info', 'Courses', 'Performance', 'Payments', 'Assignments'];

  return (
    <section className="max-w-4xl mx-auto mt-20 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-pink-300 flex items-center justify-center text-white text-2xl font-bold">
            {user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">Last login: 07-27-2025 at 12:39</p>
          </div>
        </div>

        {activeTab === 'Info' && (
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
          >
            {editMode ? 'Save' : 'Edit'}
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6 text-sm font-medium text-gray-700">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setEditMode(false);
            }}
            className={`pb-2 ${
              activeTab === tab
                ? 'border-b-2 border-emerald-600 text-emerald-700'
                : 'hover:text-emerald-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {activeTab === 'Info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                disabled={!editMode}
                value={user.name}
                onChange={e => handleChange('name', e.target.value)}
                title="Name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Mobile Number</label>
              <input
                disabled={!editMode}
                value={user.mobile}
                onChange={e => handleChange('mobile', e.target.value)}
                title="Mobile Number"
                placeholder="Enter your mobile number"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                disabled={!editMode}
                value={user.email}
                onChange={e => handleChange('email', e.target.value)}
                placeholder="Enter email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Roll Number</label>
              <input
                disabled={!editMode}
                value={user.rollNumber}
                onChange={e => handleChange('rollNumber', e.target.value)}
                placeholder="Enter roll number"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">About</label>
              <input
                disabled={!editMode}
                value={user.about}
                onChange={e => handleChange('about', e.target.value)}
                placeholder="Tell us about you"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Date of Joining</label>
              <input
                disabled={!editMode}
                value={user.doj}
                onChange={e => handleChange('doj', e.target.value)}
                placeholder="DD-MM-YYYY"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              />
            </div>
          </div>
        )}

        {activeTab === 'Courses' && (
          <div className="text-gray-700">📚 You are enrolled in 0 courses. (Dynamic data can be added here)</div>
        )}

        {activeTab === 'Performance' && (
          <div className="text-gray-700">📈 No performance data available yet. (You can show charts here)</div>
        )}

        {activeTab === 'Payments' && (
          <div className="text-gray-700">💳 No payment records yet. (Hook with payment history backend)</div>
        )}

        {activeTab === 'Assignments' && (
          <div className="text-gray-700">📂 No assignments submitted. (Connect to assignment portal)</div>
        )}
      </div>
    </section>
  );
}
