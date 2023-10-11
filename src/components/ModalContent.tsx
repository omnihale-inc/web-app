import Image from 'next/image';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import { useContext } from 'react';

import LanguageContext from '@/context/LanguageContext';
import Form from './Form';

type ModalContentsProps = {
  onModalShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalContents(props: ModalContentsProps) {
  const LangConsumer = useContext(LanguageContext);
  return (
    <div className='fixed h-[100vh] w-screen bg-black/60 backdrop-blur-sm z-10'>
      <div className='flex flex-col-reverse items-end lg:flex-row lg:items-start sm:w-[520px] h-[95vh] mx-auto'>
        <div className='w-[80%] bg-white mx-[auto] mt-3 lg:mt-7 rounded-3xl pb-3'>
          <div className='pt-8 w-fit mx-auto'>
            <Image src='/logo.png' width={50} height={50} alt='logo' />
          </div>
          <div className='overflow-y-scroll h-[68vh] w-[90%] mt-7 mx-auto'>
            <Form language={LangConsumer} />
          </div>
        </div>
        <div
          onClick={() => {
            const modal = document.getElementById('modal');
            if (modal?.lastChild) modal?.removeChild(modal.lastChild);
            props.onModalShow(false);
            const body = document.querySelector('body');
            body?.removeAttribute('style');
          }}
          className='cursor-pointer mr-6'
        >
          <IconContext.Provider
            value={{ size: '30px', style: { color: 'white', marginTop: 32 } }}
          >
            <IoMdClose />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
