import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utilities/motion';
type DetailsItemProp = {
  heading: string;
  description: string;
  reverse: boolean;
  image: string;
};

export default function DetailsItem(props: DetailsItemProp) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      className={`flex flex-col-reverse lg:min-h-[55vh] min-h-[50vh] ${
        props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center justify-between mt-10 p-7 lg:p-0 bg-[#247e5b]/[.15] lg:bg-transparent rounded-lg mb-[50px] lg:mb-[100px]`}
    >
      <div className='lg:w-[650px] flex flex-col gap-4 lg:gap-6'>
        <motion.h2
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='text-lg lg:text-4xl text-[#247e5b] md:text-center lg:text-left lg:w-[400px] mb-2 mt-7 lg:mt-0 leading-5'
        >
          {props.heading}
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='text-[15px] lg:text-lg sm:leading-normal w-[100%] md:text-center lg:text-left leading-5 lg:leading-6'
        >
          {props.description}
        </motion.p>
      </div>
      <div className='w-[40px]'></div>
      <motion.img
        variants={fadeIn('up', 'tween', 0.1, 1)}
        src={props.image}
        alt={props.image.split('/')[2].split('.')[0]} //returns the name of image from image url
        className='rounded-lg'
      />
    </motion.div>
  );
}
