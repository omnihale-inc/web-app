/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Button from './Elements/Button';
import { staggerContainer, textVariant } from '@/utilities/motion';

type HeroProps = {
  language: {
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

export default function Hero(props: HeroProps) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='max-w-[1250px] w-[90%] m-auto'
    >
      <motion.div>
        <motion.h1
          variants={textVariant(0.05)}
          className='text-center text-xl lg:text-5xl max-w-[900px] w-[90%] m-auto text-[#247e5b] font-bold'
        >
          {props.language.pageContent.hero.title}
        </motion.h1>
        <motion.p
          variants={textVariant(0.1)}
          className='text-center text-sm lg:text-xl max-w-[900px] w-[90%] m-auto mt-5'
        >
          {props.language.pageContent.hero.description}
        </motion.p>
        <Button
          text={props.language.pageContent.hero.button}
          handleClick={() => (location.href = 'mailto:contact@omnihale.com')}
        />
      </motion.div>
      <div className='w-[fit-content] m-auto duration-300'>
        <img
          src='/images/First aid kit-rafiki.png'
          alt='first aid'
          className='w-[125px]  2xl:inline hidden duration-300 hover:translate-x-3'
        />
        <img
          src='/images/Hospital patient-bro.png'
          alt='first aid'
          className='w-[250px]  xl:inline hidden duration-300 hover:-translate-x-3'
        />
        <img
          src='/images/Online Doctor-bro.png'
          alt='first aid'
          className='w-[500px] inline'
        />
        <img
          src='/images/Cardiologist-bro.png'
          alt='first aid'
          className='w-[250px]  xl:inline hidden duration-300 hover:translate-x-3'
        />
        <img
          src='/images/Online Doctor-rafiki.png'
          alt='first aid'
          className='w-[125px] 2xl:inline hidden duration-300 hover:-translate-x-3'
        />
      </div>
    </motion.div>
  );
}
