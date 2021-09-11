import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {
  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage(() => language.id === languages.english.id ? languages.spanish : languages.english)
  }
  return (
    <LanguageContext.Provider value={{ language, handleChangeLA }}>
      <Navbar />
      <Body />
    </LanguageContext.Provider>
  )
}

export default App