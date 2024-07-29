import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div style={animation} className="p-8 md:p-16 bg-gradient-to-r from-green-200 via-yellow-100 to-red-200 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800">Willkommen bei Stop Smoking!</h1>
      
      <img 
        src="/path/to/smoking-image.jpg" 
        alt="Stop Smoking" 
        className="mb-8 w-full max-w-md h-auto rounded-lg shadow-lg border-4 border-green-300"
      />

      <p className="text-lg md:text-xl text-center mb-8 text-gray-700 max-w-3xl">
        Unsere Mission ist es, Menschen dabei zu helfen, das Rauchen aufzugeben und ein gesünderes Leben zu führen. Rauchen ist eine der größten Gefahren für Ihre Gesundheit und Ihr Wohlbefinden. 
        Es kann zu ernsthaften Erkrankungen wie Herz-Kreislauf-Problemen, Krebs und Atemwegserkrankungen führen. Lassen Sie uns gemeinsam einen gesünderen Lebensstil anstreben!
      </p>

      <video controls className="w-full max-w-md h-auto mb-8 rounded-lg shadow-lg border-4 border-yellow-300">
        <source src="/path/to/video.mp4" type="video/mp4" />
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Warum Rauchen Gefährlich Ist</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Herz-Kreislauf-Erkrankungen:</strong> Rauchen erhöht das Risiko für Herzinfarkt und Schlaganfall.</li>
          <li><strong>Krebs:</strong> Es ist die Hauptursache für Lungenkrebs und kann auch andere Krebsarten verursachen.</li>
          <li><strong>Atemwegserkrankungen:</strong> Rauchen kann zu chronischer Bronchitis und emphysem führen.</li>
          <li><strong>Schädigung der Zähne:</strong> Rauchen kann zu Zahnfleischerkrankungen und Zahnverlust führen.</li>
          <li><strong>Reduzierung der Lebensqualität:</strong> Rauchen kann das allgemeine Wohlbefinden und die Lebensqualität beeinträchtigen.</li>
        </ul>
      </div>
    </animated.div>
  );
};

export default Home;
