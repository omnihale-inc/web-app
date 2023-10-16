import { useContext } from 'react';

import { IconContext } from 'react-icons';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

import LanguageContext from '@/context/LanguageContext';
import Hero from './Hero';
import Details from './Details';
import SocialLink from './Elements/SocialLink';

type HomeContentsProps = {
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HomeContents(props: HomeContentsProps) {
  const LangConsumer = useContext(LanguageContext);
  return (
    <>
      <Hero language={LangConsumer} />
      <Details language={LangConsumer} onShowModal={props.onShowModal} />
      {/* Social Icons */}
      <div className='max-w-[1250px] w-[90%] m-auto mt-12 lg:mt-20 mb-8 lg:mb-14 text-[#000000]/[.65]'>
        <IconContext.Provider value={{ size: '30px' }}>
          <div className='flex w-[fit-content] m-auto'>
            <h3 className='text-2xl px-2'>
              {LangConsumer.pageContent.followUs} |
            </h3>
            <SocialLink icon={<BsLinkedin/>} href='https://www.linkedin.com/company/omnihale/'/>
            <div className='w-3'></div>
            <SocialLink icon={<BsTwitter />} href='https://twitter.com/omnihale'/>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}
