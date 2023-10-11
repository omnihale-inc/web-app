import { ChangeEvent } from 'react';

type TextAreaProps = {
  placeHolder: string;
  name: string;
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      placeholder={props.placeHolder}
      name={props.name}
      value={props.value}
      onChange={(e) => {
        if (props.onChange) props.onChange(e);
      }}
      rows={4}
      className='border border-black/[.15] px-2 py-1 rounded-lg block w-full m-2'
    ></textarea>
  );
}
