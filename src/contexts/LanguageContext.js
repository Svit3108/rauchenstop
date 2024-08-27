// src/contexts/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import locales from '../locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const setLanguageAndSave = (lang) => {
    setLanguage(lang);
    // Optional: Sprache in den lokalen Speicher speichern, um die Präferenz zu merken
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageAndSave, t: locales[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
