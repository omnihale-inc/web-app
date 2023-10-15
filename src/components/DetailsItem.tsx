import Image from 'next/image';

type DetailsItemProp = {
  heading: string;
  description: string;
  reverse: boolean;
  image: string;
};

export default function DetailsItem(props: DetailsItemProp) {
  return (
    <div
      className={`flex flex-col-reverse lg:min-h-[55vh] min-h-[50vh] ${
        props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center justify-between mt-10 p-7 lg:p-0 bg-[#247e5b]/[.15] lg:bg-transparent rounded-lg mb-[50px] lg:mb-[100px]`}
    >
      <div className='lg:w-[650px]'>
        <h2 className='text-lg lg:text-4xl text-[#247e5b] md:text-center lg:text-left lg:w-[400px] mb-2 mt-7 lg:mt-0 leading-2'>
          {props.heading}
        </h2>
        <p className='text-[15px] lg:text-lg sm:leading-normal lg:leading-none w-[100%] md:text-center lg:text-left'>
          {props.description}
        </p>
      </div>
      <div className='w-[40px]'></div>
      <Image
        src={props.image}
        width={500}
        height={600}
        alt={props.image.split('/')[2].split('.')[0]} //returns the name of image from image url
        className='rounded-lg'
      />
    </div>
  );
}
