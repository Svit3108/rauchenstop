// src/pages/About.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div style={animation} className="p-8">
      <h2 className="text-3xl font-semibold mb-4">{t.about}</h2>
      <p className="text-lg mb-6">{t.aboutUs}</p>
      {/* Additional information here */}
    </animated.div>
  );
};

export default About;

