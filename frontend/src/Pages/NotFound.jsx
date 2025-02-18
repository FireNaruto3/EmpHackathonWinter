import React from 'react';

const NotFound = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
        <div className="text-center animate-fadeIn">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-6">Page Not Found</p>
          <p className="text-lg">Sorry, the page you are looking for doesn't exist.</p>
        </div>
      </div>
    );
  };

export default NotFound;