import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children }: { children: React.ReactNode }) {
  const modalContainer = document.createElement('div');

  useEffect(() => {
    const modal = document.getElementById('modal');
    modal?.appendChild(modalContainer);
    const body = document.querySelector('body');
    body?.setAttribute('style', 'overflow:hidden');
    () => {
      if (modal?.lastChild) modal?.removeChild(modal.lastChild);
    };
  });
  return createPortal(children, modalContainer);
}
