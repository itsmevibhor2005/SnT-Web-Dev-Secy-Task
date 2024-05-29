import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-130px)] bg-gradient-to-b from-purple-200 to-gray-200">
      <div className="text-center max-w-2xl p-8 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          About Task
        </h1>
        <p className="text-lg text-green-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
