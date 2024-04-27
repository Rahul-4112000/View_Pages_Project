import Image from 'next/image';
import React from 'react';
import DownArrow from '@/public/downArrow.svg';
import { useState } from 'react';

const InsightDetails = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleInsight = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <div
      style={{ height: isOpen ? '300px' : '58px' }}
      className='white shadow-at-4 rounded-lg p-4 border border-at-light-500 cursor-pointer transform duration-500'
      onClick={toggleInsight}
    >
      <div className='flex items-center justify-between'>
        <p className='text-base font-bold'>{title}</p>
        <Image src={DownArrow} alt='down-arrow' className={`transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <p></p>
    </div>
  );
};

export default InsightDetails;
