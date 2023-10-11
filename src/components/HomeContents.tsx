import { useContext } from 'react';

import LanguageContext from '@/context/LanguageContext';
import Hero from './Hero';
import Details from './Details';

type HomeContentsProps = {
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HomeContents(props: HomeContentsProps) {
  const LangConsumer = useContext(LanguageContext);
  return (
    <>
      <Hero language={LangConsumer} />
      <Details language={LangConsumer} onShowModal={props.onShowModal} />
    </>
  );
}
