'use client';

import { ChangeEvent, useMemo, useState } from 'react';
import Select, { GroupBase } from 'react-select';
import countryList from 'react-select-country-list';
import TextArea from './TextArea';
import Input from './Input';

type FormProps = {
  language: {
    placeholder: { [index: string]: string };
  };
};

export default function Form(props: FormProps) {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    occupation: '',
    medicalCentre: '',
    painPoint: '',
    benefit: '',
    touchPoint: '',
    POV: '',
  });

  const options: (string | GroupBase<string>)[] = useMemo(
    () => countryList().getData() as unknown as string[],
    []
  );

  const formHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues((values) => {
      return { ...values, [name]: value };
    });
  };

  return (
    <form action='' className='flex flex-wrap justify-between'>
      <Input
        placeholder={props.language.placeholder.fullName}
        name='fullName'
        value={values.fullName}
        onChange={formHandler}
      />
      <Input
        placeholder={props.language.placeholder.email}
        type='email'
        name='email'
        value={values.email}
        onChange={formHandler}
      />
      <Select
        required
        placeholder={props.language.placeholder.country}
        options={options}
        name='options'
        className=' rounded-lg block w-full m-2'
        value={values.country}
        onChange={(value) =>
          setValues((values) => {
            return { ...values, country: value as string };
          })
        }
        styles={{
          control: (_, state) => ({
            display: 'flex',
            outlineStyle: 'solid',
            borderRadius: 8,
            outlineWidth: state.isFocused ? '2px' : '1px',
            outlineColor: state.isFocused ? 'black' : 'rgba(0, 0, 0, 0.15)',
          }),
        }}
      />
      <Input
        placeholder={props.language.placeholder.occupation}
        name='occupation'
        value={values.occupation}
        onChange={formHandler}
      />
      <Input
        placeholder={props.language.placeholder.medicalCentre}
        name='medicalCentre'
        value={values.medicalCentre}
        onChange={formHandler}
      />
      <TextArea
        name='painPoint'
        placeHolder={props.language.placeholder.painPoint}
        value={values.painPoint}
        onChange={formHandler}
      />
      <TextArea
        name='benefit'
        placeHolder={props.language.placeholder.benefit}
        value={values.benefit}
        onChange={formHandler}
      />
      <TextArea
        name='touchPoint'
        placeHolder={props.language.placeholder.touchPoint}
        value={values.touchPoint}
        onChange={formHandler}
      />
      <TextArea
        name='POV'
        placeHolder={props.language.placeholder.POV}
        value={values.POV}
        onChange={formHandler}
      />
      <button onClick={() => console.log(values)} className='bg-green'>
        Submit
      </button>
    </form>
  );
}
