import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Content = () => {
  // Animation für das Einblenden des Inhalts
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={animation} className="p-8 md:p-16 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Die Geschichte von Lungen und Rauch</h2>
      <p className="text-lg md:text-xl mb-6 text-gray-700">
        Rauchen ist eine der Hauptursachen für vermeidbare Todesfälle weltweit. 
        Jeder Zug an einer Zigarette führt schädliche Chemikalien in Ihre Lunge ein, 
        was zu chronischen Erkrankungen wie Lungenkrebs, Herzkrankheiten und COPD führt.
      </p>
      <p className="text-lg md:text-xl mb-6 text-gray-700">
        Stellen Sie sich Ihre Lungen als zwei saubere, empfindliche Schwämme vor. Jetzt stellen Sie sich vor, 
        jeden Tag schwarzen, giftigen Teer hineinzudrücken. Das ist im Wesentlichen das, was Rauchen mit Ihren Lungen macht.
      </p>
      <p className="text-lg md:text-xl text-gray-700">
        Das Aufhören mit dem Rauchen ist das Beste, was Sie für Ihre Gesundheit tun können. 
        Es verbessert nicht nur die Lungenfunktion, sondern reduziert auch das Risiko, schwere Krankheiten zu entwickeln, erheblich.
      </p>
    </animated.div>
  );
};

export default Content;