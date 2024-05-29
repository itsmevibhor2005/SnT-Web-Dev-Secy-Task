import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-130px)] bg-gradient-to-b from-purple-200 to-gray-200">
      <div className="text-center max-w-2xl p-8 rounded">
        <h1 className="text-4xl font-bold mb-4 text-green-800">
          Stay Organized and Productive with iTodo
        </h1>
        <p className="text-lg text-orange-500">
          iTodo is your ultimate task management tool designed to help you organize your life and boost your productivity. Easily create, track, and complete your tasks with our intuitive and user-friendly interface. Whether you're managing personal errands, work projects, or collaborative tasks, iTodo provides all the features you need to stay on top of your to-do list. Prioritize your tasks, set deadlines, and never miss a beat with reminders and notifications. Start achieving your goals more efficiently with iTodo.
        </p>
        <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 m-5">
          Make a Todo
        </button>
      </div>
    </div>
  );
}

export default Home;
