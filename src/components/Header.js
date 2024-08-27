// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <animated.header style={props} className="bg-green-500 p-6 text-white text-center flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo.png" alt={t.title} className="h-12 w-12 mr-4" />
        <h1 className="text-4xl">{t.title}</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/" className="text-blue-300 hover:text-blue-500">{t.home}</Link>
        <Link to="/content" className="text-yellow-300 hover:text-yellow-500">{t.content}</Link>
        <Link to="/about" className="text-red-300 hover:text-red-500">{t.about}</Link>
      </nav>

      {/* Language Selection */}
      <div className="flex items-center">
        <label htmlFor="language" className="mr-2">{t.language}</label>
        <select id="language" value={language} onChange={handleLanguageChange} className="bg-green-500 text-white border-none outline-none">
          <option value="de">Deutsch</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="uk">Українська</option>
        </select>
      </div>
    </animated.header>
  );
};

export default Header;
