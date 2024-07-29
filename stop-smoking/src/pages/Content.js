// src/pages/Content.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Content = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div style={animation} className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Wertvolle Inhalte und Ressourcen</h2>
      <p className="text-lg mb-6">Hier finden Sie hilfreiche Tipps, Ratschläge und Geschichten, die Ihnen auf dem Weg zum Nichtraucher helfen können.</p>
      {/* Weitere Inhalte hier */}
    </animated.div>
  );
};

export default Content;
