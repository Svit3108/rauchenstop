// src/pages/About.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div style={animation} className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Über uns</h2>
      <p className="text-lg mb-6">Wir sind ein Team engagierter Experten, die sich der Aufgabe verschrieben haben, das Bewusstsein für die Gefahren des Rauchens zu schärfen und Unterstützung für Aufhörwillige zu bieten.</p>
      {/* Weitere Informationen hier */}
    </animated.div>
  );
};

export default About;
