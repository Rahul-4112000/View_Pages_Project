import Image from 'next/image';
import React, { useState, useRef, ReactElement } from 'react';
import DownArrow from '@/public/downArrow.svg';

interface IProp {
  children: ReactElement;
  defaultHeight: string;
  closeBtnName?: string;
  openBtnName?: string;
  btnColor?: string;
  btnClassName?: string;
  conditionalBtnClassName?: string;
}

const ArrowAccordion = ({
  children,
  defaultHeight,
  closeBtnName,
  openBtnName,
  btnColor,
  btnClassName,
  conditionalBtnClassName,
}: IProp) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const elmRef = useRef<HTMLDivElement>(null);

  const getScrollHeight = (): string => {
    return isAccordionOpen ? elmRef.current?.scrollHeight + 'px' : defaultHeight + 'px';
  };

  const toggleAccordion = () => {
    setIsAccordionOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div ref={elmRef} style={{ height: getScrollHeight() }} className='overflow-hidden transition-all duration-500'>
        {children}
      </div>
      <button
        onClick={toggleAccordion}
        className={`flex items-center gap-2 mt-2 ${btnColor || 'text-at-primary'} ${btnClassName || ''} ${
          isAccordionOpen ? '' : conditionalBtnClassName
        }`}
      >
        {isAccordionOpen ? openBtnName || 'Show less' : closeBtnName || 'Show more'}
        <Image
          src={DownArrow}
          alt='down-arrow-icon'
          className={`transform duration-300 ${isAccordionOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </>
  );
};

export default ArrowAccordion;
