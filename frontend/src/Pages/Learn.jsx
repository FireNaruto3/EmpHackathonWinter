import React from "react";
import ResourceSelector from "../Components/DropdownComponent/Dropdown";

const Learning = () => {
  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Learning Page</h1>
        <p className="text-gray-600 mb-6">
          Expand your knowledge with engaging content and interactive lessons.
        </p>
      </div>
          <ResourceSelector />
    </div>
  );
};

export default Learning;