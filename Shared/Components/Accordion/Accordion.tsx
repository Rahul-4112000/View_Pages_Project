import { IAccordion } from '@/Modules/conveyancing/conveyancing.interface';
import React, { useRef, useState } from 'react';

const Accordion = ({ title, description }: IAccordion) => {
  const elm = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  const getScrollHeight = () => {
    return isOpen ? elm.current?.scrollHeight + 'px' : '0px';
  };

  const decElm = {
    __html: description,
  };
  return (
    <div className='border-b last:border-0 last:mb-4'>
      <div className='flex items-center justify-between cursor-pointer py-3.5' onClick={toggleAccordion}>
        <p className='text-base font-bold pr-2'>{title}</p>
        <span className='text-2xl font-medium pb-1'>{isOpen ? '-' : '+'}</span>
      </div>
      <div
        style={{ height: `${getScrollHeight()}` }}
        className={`text-at-dark-900 pr-6 overflow-hidden transition-all duration-500 ${isOpen ? 'mb-4' : 'mb-0'}`}
        dangerouslySetInnerHTML={decElm}
        ref={elm}
      />
    </div>
  );
};

export default Accordion;
