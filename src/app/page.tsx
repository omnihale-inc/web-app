'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import { Caesar_Dressing } from 'next/font/google';
import Image from 'next/image';

import langImport from '@/lang/getLang';
import options from '@/utilities/options';
import Modal from '@/components/Modal';
import ModalContents from '@/components/ModalContent';
import HomeContents from '@/components/HomeContents';
import LanguageContext from '@/context/LanguageContext';

const caeserDressing = Caesar_Dressing({ subsets: ['latin'], weight: '400' });

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

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      // Checks if the user has selected an option before
      // deciding its initial state when the page loads.
      // This help show the current language before the
      // useEffect kicks in to improve user experience
      const currentLangStore = window.localStorage.getItem('lang');
      if (currentLangStore) return lang[currentLangStore];
    }
    return lang['en'];
  });
  const [optionSelect, setOptionSelect] = useState(() => {
    if (typeof window !== 'undefined') {
      // Checks if the user has selected an option before
      // deciding its initial state when the page loads.
      // This help show the current language before the
      // useEffect kicks in to improve user experience
      const optionSelectStore = window.localStorage.getItem('option-select');
      if (optionSelectStore) JSON.parse(optionSelectStore);
    }
    return {
      value: 'en',
      label: 'english',
    };
  });

  useEffect(() => {
    // Preserves the user selected language between renders
    const currentLangStore = window.localStorage.getItem('lang');
    const optionSelectStore = window.localStorage.getItem('option-select');
    // Checks is the user has selected a language preference
    // then sets that language
    if (currentLangStore && optionSelectStore) {
      setCurrentLang(lang[currentLangStore]);
      setOptionSelect(JSON.parse(optionSelectStore));
    } else window.localStorage.setItem('lang', 'en');
  }, []);

  return (
    <LanguageContext.Provider value={currentLang}>
      <main>
        {/* Header */}
        <div>
          <div className='flex justify-between mb-10 pt-6 lg:mb-20 max-w-[1250px] w-[90%] m-auto'>
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
          <div
            style={{
              direction: optionSelect.label === 'arabic' ? 'rtl' : 'ltr',
            }}
          >
            <HomeContents onShowModal={setShowModal} />
          </div>
        </div>
        {showModal && (
          <Modal>
            <div
              style={{
                direction: optionSelect.label === 'arabic' ? 'rtl' : 'ltr',
              }}
            >
              <ModalContents onModalShow={setShowModal} />
            </div>
          </Modal>
        )}
        <footer className='text-center text-[] bg-[#247e5b]/[.16] pt-3 pb-2'>
          &copy; Omnihale 2023
        </footer>
      </main>
    </LanguageContext.Provider>
  );
}
