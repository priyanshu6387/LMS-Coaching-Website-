'use client';

import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-500 via-lime-400 to-yellow-300 shadow flex justify-between items-center px-6 py-4">
      {/* Navigation Links */}
      <div className="flex gap-6 text-base font-medium text-white">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/dashboard/chats" className="hover:underline">Chats</Link>
        <Link href="/dashboard/store" className="hover:underline">Store</Link>
      </div>

      {/* User Dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center gap-2 focus:outline-none">
          <div className="w-10 h-10 bg-white text-green-600 flex items-center justify-center rounded-full font-bold shadow">
            PP
          </div>
          <ChevronDownIcon className="w-4 h-4 text-white hidden sm:block" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/10 focus:outline-none z-50">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard/profile"
                  className={`block px-4 py-2 text-sm font-medium ${
                    active ? 'bg-yellow-100 text-green-700' : 'text-gray-800'
                  }`}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`w-full text-left block px-4 py-2 text-sm font-medium ${
                    active ? 'bg-yellow-100 text-green-700' : 'text-gray-800'
                  }`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </header>
  );
}
