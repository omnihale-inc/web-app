import { ChangeEvent } from 'react';

type InputProps = {
  placeholder: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
};
export default function Input(props: InputProps) {
  return (
    <input
      required
      name={props.name}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        if (props.onChange) props.onChange(e);
      }}
      className='border border-black/[.15] px-2 py-2 rounded-lg block w-full m-2'
    />
  );
}
