import './App.css';
import React, { useState } from 'react';
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage(() => {
      //DICA: Função que troca um idioma por outro (ao clicar no botão)
    });
  };

  return (
    <LanguageContext>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </LanguageContext>
  );
}

export default App;
