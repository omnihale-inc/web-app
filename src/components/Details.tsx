import DetailsItem from './DetailsItem';

type DetailsProps = {
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
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Details(props: DetailsProps) {
  return (
    <div className='max-w-[1250px] w-[90%] m-auto mt-12 lg:mt-20'>
      <div className='mb-[70px]'>
        <h2 className='text-center text-4xl font-semibold'>
          {props.language.pageContent.details.title}
        </h2>
      </div>
      <DetailsItem
        heading={props.language.pageContent.details.one.title}
        description={props.language.pageContent.details.one.description}
        image='/images/schedule.jpg'
        reverse={false}
      />
      <DetailsItem
        heading={props.language.pageContent.details.two.title}
        description={props.language.pageContent.details.two.description}
        image='/images/telemedicine.jpg'
        reverse={true}
      />
      <DetailsItem
        heading={props.language.pageContent.details.three.title}
        description={props.language.pageContent.details.three.description}
        image='/images/electronic-health-record.jpg'
        reverse={false}
      />
      <button
        className='block w-[fit-context] m-auto mt-7 bg-[#247e5b] px-5 py-3 text-white rounded-md mb-10'
        onClick={() => props.onShowModal(true)}
      >
        {props.language.pageContent.button} {'->'}
      </button>
    </div>
  );
}
