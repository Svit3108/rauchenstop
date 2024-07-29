import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.header style={props} className="bg-green-500 p-6 text-white text-center flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo von Stop Rauchen" className="h-12 w-12 mr-4" />
        <h1 className="text-4xl">Stop Rauchen</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/" className="text-blue-300 hover:text-blue-500">Home</Link>
        <Link to="/content" className="text-yellow-300 hover:text-yellow-500">Content</Link>
        <Link to="/about" className="text-red-300 hover:text-red-500">About</Link>
      </nav>

      {/* Language Selection */}
      <div className="flex items-center">
        <label htmlFor="language" className="mr-2">Sprache:</label>
        <select id="language" className="bg-green-500 text-white border-none outline-none">
          <option value="de">Deutsch</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </animated.header>
  );
};

export default Header;




