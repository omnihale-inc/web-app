import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button
      className='block w-[fit-context] m-auto mt-7 bg-[#247e5b] hover:bg-[#286b52] px-5 py-3 text-white rounded-md'
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
