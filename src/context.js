import { createContext } from 'react';
import EN from "./languages/english.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN,
    },
    spanish: {
        id: "ES",
        text: ES,

    }
};

const LanguageContext = createContext(languages.english);

export default LanguageContext;