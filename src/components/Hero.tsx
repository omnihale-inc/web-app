/* eslint-disable @next/next/no-img-element */

import Button from "./Elements/Button";

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
    <div className='max-w-[1250px] w-[90%] m-auto'>
      <div>
        <h1 className='text-center text-xl lg:text-5xl max-w-[900px] w-[90%] m-auto text-[#247e5b] font-bold'>
          {props.language.pageContent.hero.title}
        </h1>
        <p className='text-center text-sm lg:text-xl max-w-[900px] w-[90%] m-auto mt-5'>
          {props.language.pageContent.hero.description}
        </p>
        <Button text={props.language.pageContent.hero.button} handleClick={() => (location.href = 'mailto:contact@omnihale.com')}/>
      </div>
      <div className='w-[fit-content] m-auto'>
        <img
          src='/images/First aid kit-rafiki.png'
          alt='first aid'
          className='w-[125px]  2xl:inline hidden'
        />
        <img
          src='/images/Hospital patient-bro.png'
          alt='first aid'
          className='w-[250px]  xl:inline hidden'
        />
        <img
          src='/images/Online Doctor-bro.png'
          alt='first aid'
          className='w-[500px] inline'
        />
        <img
          src='/images/Cardiologist-bro.png'
          alt='first aid'
          className='w-[250px]  xl:inline hidden'
        />
        <img
          src='/images/Online Doctor-rafiki.png'
          alt='first aid'
          className='w-[125px] 2xl:inline hidden'
        />
      </div>
    </div>
  );
}
