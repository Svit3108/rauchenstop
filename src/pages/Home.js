import React, { useState } from 'react';
import { useSpring, animated, useTransition } from '@react-spring/web';

const Home = () => {
  const [language, setLanguage] = useState('de');

  // Animation for the entire page load
  const pageAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  // Animation for content change when language switches
  const contentTransition = useTransition(language, {
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
    config: { duration: 500 },
  });

  const content = {
    de: {
      welcome: "Willkommen bei Stop Smoking!",
      mission: "Unsere Mission ist es, Menschen dabei zu helfen, das Rauchen aufzugeben und ein gesünderes Leben zu führen. Rauchen ist eine der größten Gefahren für Ihre Gesundheit und Ihr Wohlbefinden. Es kann zu ernsthaften Erkrankungen wie Herz-Kreislauf-Problemen, Krebs und Atemwegserkrankungen führen. Lassen Sie uns gemeinsam einen gesünderen Lebensstil anstreben!",
      videoTitle: "Warum Rauchen schädlich ist",
      dangers: "Warum Rauchen gefährlich ist",
      points: [
        "Herz-Kreislauf-Erkrankungen: Rauchen erhöht das Risiko für Herzinfarkt und Schlaganfall.",
        "Krebs: Es ist die Hauptursache für Lungenkrebs und kann auch andere Krebsarten verursachen.",
        "Atemwegserkrankungen: Rauchen kann zu chronischer Bronchitis und Emphysem führen.",
        "Schädigung der Zähne: Rauchen kann zu Zahnfleischerkrankungen und Zahnverlust führen.",
        "Reduzierung der Lebensqualität: Rauchen kann das allgemeine Wohlbefinden und die Lebensqualität beeinträchtigen."
      ]
    },
    en: {
      welcome: "Welcome to Stop Smoking!",
      mission: "Our mission is to help people quit smoking and lead healthier lives. Smoking is one of the biggest dangers to your health and well-being. It can lead to serious illnesses such as cardiovascular problems, cancer, and respiratory diseases. Let's strive for a healthier lifestyle together!",
      videoTitle: "Why Smoking is Harmful",
      dangers: "Why Smoking is Dangerous",
      points: [
        "Cardiovascular diseases: Smoking increases the risk of heart attack and stroke.",
        "Cancer: It is the leading cause of lung cancer and can also cause other types of cancer.",
        "Respiratory diseases: Smoking can lead to chronic bronchitis and emphysema.",
        "Dental damage: Smoking can lead to gum disease and tooth loss.",
        "Reduced quality of life: Smoking can affect overall well-being and quality of life."
      ]
    },
    fr: {
      welcome: "Bienvenue à Stop Smoking!",
      mission: "Notre mission est d'aider les gens à arrêter de fumer et à mener une vie plus saine. Fumer est l'un des plus grands dangers pour votre santé et votre bien-être. Cela peut entraîner des maladies graves telles que des problèmes cardiovasculaires, le cancer et des maladies respiratoires. Ensemble, visons un mode de vie plus sain!",
      videoTitle: "Pourquoi fumer est nocif",
      dangers: "Pourquoi fumer est dangereux",
      points: [
        "Maladies cardiovasculaires: Fumer augmente le risque de crise cardiaque et d'accident vasculaire cérébral.",
        "Cancer: C'est la principale cause de cancer du poumon et peut également causer d'autres types de cancer.",
        "Maladies respiratoires: Fumer peut entraîner une bronchite chronique et un emphysème.",
        "Dommages dentaires: Fumer peut entraîner des maladies des gencives et la perte de dents.",
        "Réduction de la qualité de vie: Fumer peut affecter le bien-être général et la qualité de vie."
      ]
    },
    ua: {
      welcome: "Ласкаво просимо до Stop Smoking!",
      mission: "Наша місія - допомогти людям кинути палити і вести здоровіший спосіб життя. Куріння є однією з найбільших загроз для вашого здоров'я та благополуччя. Це може призвести до серйозних захворювань, таких як серцево-судинні проблеми, рак і респіраторні захворювання. Давайте разом прагнути до здорового способу життя!",
      videoTitle: "Чому куріння шкідливе",
      dangers: "Чому куріння небезпечне",
      points: [
        "Серцево-судинні захворювання: куріння збільшує ризик серцевого нападу та інсульту.",
        "Рак: це основна причина раку легенів і може викликати інші види раку.",
        "Респіраторні захворювання: куріння може призвести до хронічного бронхіту та емфіземи.",
        "Зубні захворювання: куріння може призвести до захворювань ясен і втрати зубів.",
        "Зниження якості життя: куріння може вплинути на загальне самопочуття та якість життя."
      ]
    }
  };

  const currentContent = content[language];

  return (
    <animated.div style={pageAnimation} className="p-8 md:p-16 bg-gradient-to-r from-green-200 via-yellow-100 to-red-200 min-h-screen flex flex-col items-center">

      {contentTransition((style, item) => 
        item === language ? (
          <animated.div style={style} key={item} className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800">
              {currentContent.welcome}
            </h1>
            
            <img 
              src="/path/to/smoking-image.jpg" 
              alt="Stop Smoking" 
              className="mb-8 w-full max-w-md h-auto rounded-lg shadow-lg border-4 border-green-300"
            />

            <p className="text-lg md:text-xl text-center mb-8 text-gray-700 max-w-3xl">
              {currentContent.mission}
            </p>

            <div className="w-full max-w-md h-auto mb-8 rounded-lg shadow-lg border-4 border-yellow-300">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/o3I0mJ2RfU0"
                title={currentContent.videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.dangers}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {currentContent.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </animated.div>
        ) : null
      )}

      <select
        className="mb-4 p-2 border rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ua">Українська</option>
      </select>
    </animated.div>
  );
};

export default Home;



