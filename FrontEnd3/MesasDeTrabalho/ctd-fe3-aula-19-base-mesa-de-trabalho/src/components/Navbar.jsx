import React, { useContext } from 'react';
import '../App.css';
import LanguageContext from '../context/LanguageContext';

const Navbar = () => {
  const { language, handleChangeLA } = useContext(LanguageContext);
  const { text } = language;

  return (
    <div className="navbar">
      <p>{text?.home}</p>
      <p>
        {text?.current}: {language.id}
      </p>
      <button onClick={handleChangeLA}>{text && text.button}</button>
    </div>
  );
};

export default Navbar;
