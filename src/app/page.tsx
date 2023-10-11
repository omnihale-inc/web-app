/* eslint-disable */
'use client';

import { useState, createContext, useEffect } from 'react';
import Select from 'react-select';
import { Caesar_Dressing } from 'next/font/google';

import langImport from '@/lang/getLang';
import options from '@/utilities/options';
import Modal from '@/components/Modal';
import ModalContents from '@/components/ModalContent';
import HomeContents from '@/components/HomeContents';
import Image from 'next/image';

const caeserDressing = Caesar_Dressing({ subsets: ['latin'], weight: '400' });

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
    };
  };
};

const lang: Lang = langImport;

export const LanguageContext = createContext(lang['en']);

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    // Checks if the user has selected an option before
    // deciding its initial state when the page loads.
    // This help show the current language before the
    // useEffect kicks in to improve user experience
    const currentLangStore = localStorage.getItem('lang');
    if (currentLangStore) return lang[currentLangStore];
    return lang['en'];
  });
  const [optionSelect, setOptionSelect] = useState(() => {
    // Checks if the user has selected an option before
    // deciding its initial state when the page loads.
    // This help show the current language before the
    // useEffect kicks in to improve user experience
    const optionSelectStore = localStorage.getItem('option-select');
    if (optionSelectStore) JSON.parse(optionSelectStore);
    return {
      value: 'en',
      label: 'english',
    };
  });

  useEffect(() => {
    // Preserves the user selected language between renders
    const currentLangStore = localStorage.getItem('lang');
    const optionSelectStore = localStorage.getItem('option-select');
    // Checks is the user has selected a language preference
    // then sets that language
    if (currentLangStore && optionSelectStore) {
      setCurrentLang(lang[currentLangStore]);
      setOptionSelect(JSON.parse(optionSelectStore));
    } else localStorage.setItem('lang', 'en');
  }, []);

  return (
    <LanguageContext.Provider value={currentLang}>
      <main className=''>
        {/* Header */}
        <div>
          <div className='md:flex justify-between mb-10 pt-6 lg:mb-20 max-w-[1250px] w-[90%] m-auto'>
            <div className='flex justify-center md:justify-start items-center mb-6 text-3xl text-[#404040]'>
              <Image
                src='/logo.png'
                width={40}
                height={40}
                alt='logo'
                className='mr-2'
              />
              <h2 className={caeserDressing.className}>Omnihale</h2>
            </div>
            <div className='relative mb-7 md:mb-0'>
              <div className='md:flex md:justify-end text-sm md:text-md'>
                <label htmlFor='language' className='mr-2 lg:mt-2'>
                  Choose Language
                </label>
                <Select
                  className='mt-2 md:mt-[0px]'
                  id='language'
                  aria-label='select language'
                  options={options}
                  value={optionSelect}
                  onChange={(userLang) => {
                    if (userLang?.value) {
                      setOptionSelect(userLang);
                      setCurrentLang(lang[userLang.value]);
                      localStorage.setItem('lang', userLang.value);
                      localStorage.setItem(
                        'option-select',
                        JSON.stringify(userLang)
                      );
                    }
                  }}
                  styles={{
                    control: (_, state) => ({
                      display: 'flex',
                      alignItems: 'end',
                      width: 'fit-content',
                      outlineStyle: 'solid',
                      borderRadius: 8,
                      outlineWidth: state.isFocused ? '2px' : '1px',
                      outlineColor: state.isFocused
                        ? 'black'
                        : 'rgba(0, 0, 0, 0.15)',
                    }),
                  }}
                />
              </div>
            </div>
          </div>
          {/* Contents */}
          <HomeContents onShowModal={setShowModal} />
        </div>
        {showModal && (
          <Modal>
            <ModalContents onModalShow={setShowModal} />
          </Modal>
        )}
        <footer className='text-center bg-[#247e5b]/[.16] pt-3 pb-2'>
          &copy; Omnihale 2023
        </footer>
      </main>
    </LanguageContext.Provider>
  );
}
