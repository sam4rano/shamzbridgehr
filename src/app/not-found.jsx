"use client"
import { useRouter } from 'next/navigation';
import { FaHome, FaRedo } from 'react-icons/fa';
import React from 'react';

const NotFound = () => {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh(); // Next.js router refreshes the current page
  };

  const handleGoHome = () => {
    router.push('/'); // Navigate back to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
      
      <div className="flex space-x-4">
        <button
          onClick={handleRefresh}
          className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          <FaRedo className="mr-2" />
          Refresh
        </button>

        <button
          onClick={handleGoHome}
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <FaHome className="mr-2" />
          Go to Home
        </button>
      </div>

      {/* <div className="mt-8 w-64">
        <Image
          src="/404-illustration.svg" // Path to your image
          alt="Not found illustration"
          width={500} // Specify width
          height={500} // Specify height
          className="object-contain"
        />
      </div> */}
    </div>
  );
};

export default NotFound;
