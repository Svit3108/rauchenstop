// src/pages/Home.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div style={animation} className="p-10">
      <h2 className="text-3xl font-semibold mb-4">Willkommen zu unserer Stop-Smoking-Initiative!</h2>
      <img src="/path/to/smoking-image.jpg" alt="Stop Smoking" className="mb-6 w-full h-auto rounded-lg shadow-lg" />
      <p className="text-lg mb-6">Unsere Mission ist es, Menschen dabei zu helfen, das Rauchen aufzugeben und ein gesünderes Leben zu führen.</p>
      <video controls className="w-full h-auto">
        <source src="/path/to/video.mp4" type="video/mp4" />
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
    </animated.div>
  );
};

export default Home;
