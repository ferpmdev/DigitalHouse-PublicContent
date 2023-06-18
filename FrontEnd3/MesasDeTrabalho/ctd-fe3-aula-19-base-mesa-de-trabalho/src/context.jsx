import { createContext, useContext, useState } from 'react';
import EN from './languages/english.json';
import PTBR from './languages/portuguese.json';
import ES from './languages/spanish.json';

export const languages = {
  english: {
    id: 'EN',
    text: EN,
  },
  portuguese: {
    id: 'PTBR',
    text: PTBR,
  },
  spanish: {
    id: 'ES',
    text: ES,
  },
};

/* DICA: Use o createContext e inicie o idioma inglês como padrão(default) */
const LanguageContext = createContext();

const Context = ({ children }) => {
  const [languages, setLanguages] = useState({ EN });
  return (
    <LanguageContext.Provider
      value={{
        languages,
        setLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;

export const useLanguageContext = () => useContext(LanguageContext);
