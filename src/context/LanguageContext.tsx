import langImport from '@/lang/getLang';
import { createContext } from 'react';

type Lang = {
  [index: string]: {
    form: { placeholder: { [index: string]: string }; submit: string };
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
