import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Contents = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 500,
  });

  return (
    <animated.div style={props} className="flex-grow p-6 text-center">
      <h2 className="text-2xl text-gray-800 mb-4">Warum du aufhören solltest zu rauchen</h2>
      <p className="text-gray-600 mb-2">Rauchen schadet deiner Gesundheit, verursacht Krankheiten und verringert die Lebensqualität.</p>
      <p className="text-gray-600 mb-2">Es ist teuer und hat negative Auswirkungen auf die Umwelt.</p>
      <p className="text-gray-600">Hör auf zu rauchen und gewinne dein Leben zurück!</p>
    </animated.div>
  );
};

export default Contents;
