import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 h-[65px]">
      <div className="container text-center flex flex-row justify-center gap-5 items-center">
        <div className="text-2xl font-bold mb-2">
          <span className="text-orange-500">&lt;i </span>
          <span className="text-green-500">Todo/&gt;</span>
        </div>
        <p className="text-sm">
          &copy; svibhor23. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
