import langImport from '@/lang/getLang';
import { createContext } from 'react';

type Lang = {
  [index: string]: {
    placeholder: { [index: string]: string };
    pageContent: {
      hero: { [index: string]: string };
      details: {
        title: string;
        one: { [index: string]: string };
        two: { [index: string]: string };
        three: { [index: string]: string };
      };
      button: string;
      followUs: string;
    };
  };
};

const lang: Lang = langImport;

const LanguageContext = createContext(lang['en']);

export default LanguageContext;
