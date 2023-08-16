import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyWebsite</div>
        <ul className="flex space-x-8">
          <li><Link to="/overview" className="hover:text-gray-400">Overview</Link></li>
          <li><Link to="/sensors" className="hover:text-gray-400">Sensors</Link></li>
          <li><Link to="/ai" className="hover:text-gray-400">Ai</Link></li>
          <li><Link to="/learning" className="hover:text-gray-400">Learning</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
