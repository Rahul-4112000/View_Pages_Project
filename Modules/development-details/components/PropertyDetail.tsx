import Image from 'next/image';
import React from 'react';
import LocationIcon from '@/public/location.svg';
import HomeIcon from '@/public/home.svg';

interface IProp {
  propertyLocation?: string;
  propertyType?: string;
  propertySize?: string | number;
}

const PropertyDetail = ({ propertyLocation, propertyType, propertySize }: IProp) => {
  return (
    <div className='lg:flex'>
      {propertyLocation && (
        <div className='mb-2 [&:not(:first-child)]:lg:border-l [&:not(:first-child)]:lg:border-at-light-500 lg:pr-6 [&:not(:first-child)]:lg:pl-6 '>
          <div className='flex gap-2 items-center mb-1'>
            <Image src={LocationIcon} alt='location-icon' />
            <span className='text-sm font-normal text-at-dark-700'>Display Location</span>
          </div>
          <p className='text-base font-normal'>{propertyLocation}</p>
        </div>
      )}

      {propertyType && (
        <div className='mb-2 [&:not(:first-child)]:lg:border-l [&:not(:first-child)]:lg:border-at-light-500 lg:pr-6 [&:not(:first-child)]:lg:pl-6 '>
          <div className='flex gap-2 items-center mb-1'>
            <Image src={LocationIcon} alt='location-icon' />
            <span className='text-sm font-normal text-at-dark-700'>Property Type</span>
          </div>
          <p className='text-base font-normal'>{propertyType}</p>
        </div>
      )}

      {propertySize && (
        <div className='mb-2 [&:not(:first-child)]:lg:border-l [&:not(:first-child)]:lg:border-at-light-500 lg:pr-6 [&:not(:first-child)]:lg:pl-6 '>
          <div className='flex gap-2 items-center mb-1'>
            <Image src={HomeIcon} alt='home-icon' />
            <span className='text-sm font-normal text-at-dark-700'>Size</span>
          </div>
          <p className='text-base font-normal'>{propertySize}</p>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
