'use client';

import { ChangeEvent, useMemo, useState } from 'react';
import Select, { GroupBase } from 'react-select';
import countryList from 'react-select-country-list';
import TextArea from './TextArea';
import Input from './Input';

type FormProps = {
  language: {
    form: {
      placeholder: { [index: string]: string };
      submit: string;
    };
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
  const [responseMessage, setResponseMessage] = useState('');

  const options: (string | GroupBase<string>)[] = useMemo(
    () => countryList().getData() as unknown as string[],
    []
  );

  const formHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((values) => {
      return { ...values, [name]: value };
    });
  };

  const submitFormHandler = () => {
    const { email } = values;
    const {
      fullName,
      phoneNumber,
      country,
      occupation,
      medicalCentre,
      painPoint,
      benefit,
      touchPoint,
      POV,
    } = values;
    const bodyContents = {
      email: email,
      emailContents: {
        fullName,
        phoneNumber,
        country,
        occupation,
        medicalCentre,
        painPoint,
        benefit,
        touchPoint,
        POV,
      },
    };
    fetch('http://localhost:3000/api/send', {
      method: 'POST',
      body: JSON.stringify(bodyContents),
    }).then(async (data) => {
      const body = await data.json();
      setResponseMessage(body.message);
    });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex flex-wrap justify-between'
    >
      {responseMessage !== '' && (
        <p className='bg-[green]'>{responseMessage}</p>
      )}
      <Input
        placeholder={props.language.form.placeholder.fullName}
        name='fullName'
        value={values.fullName}
        onChange={formHandler}
      />
      <Input
        placeholder={props.language.form.placeholder.email}
        type='email'
        name='email'
        value={values.email}
        onChange={formHandler}
      />
      <Select
        required
        placeholder={props.language.form.placeholder.country}
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
        placeholder={props.language.form.placeholder.occupation}
        name='occupation'
        value={values.occupation}
        onChange={formHandler}
      />
      <Input
        placeholder={props.language.form.placeholder.medicalCentre}
        name='medicalCentre'
        value={values.medicalCentre}
        onChange={formHandler}
      />
      <TextArea
        name='painPoint'
        placeHolder={props.language.form.placeholder.painPoint}
        value={values.painPoint}
        onChange={formHandler}
      />
      <TextArea
        name='benefit'
        placeHolder={props.language.form.placeholder.benefit}
        value={values.benefit}
        onChange={formHandler}
      />
      <TextArea
        name='touchPoint'
        placeHolder={props.language.form.placeholder.touchPoint}
        value={values.touchPoint}
        onChange={formHandler}
      />
      <TextArea
        name='POV'
        placeHolder={props.language.form.placeholder.POV}
        value={values.POV}
        onChange={formHandler}
      />
      <button
        className='w-[fit-context] m-auto mt-7 bg-[#247e5b] px-5 pt-3 pb-2 text-white rounded-md mb-10'
        onClick={submitFormHandler}
      >
        {props.language.form.submit}
      </button>
    </form>
  );
}
