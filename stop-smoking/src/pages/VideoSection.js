import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const VideoSection = () => {
  // Animation für das Einblenden des Videos
  const videoAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={videoAnimation} className="p-8 w-full md:w-2/3 lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 text-center">Schau dir dieses Video an</h2>
      <video controls className="w-full rounded-lg shadow-lg">
        <source src="dein-video.mp4" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>
    </animated.div>
  );
};

export default VideoSection;
