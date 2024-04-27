import Image from 'next/image';
import React from 'react';
import Amenities from './Amenities';
import { staticImageLoader } from '@/Shared/services/loader';

interface IProp {
  imgPath: string;
  title: string;
  price: string;
  bedrooms?: string;
  bathrooms?: string;
  carSpaces?: string;
  discr?: string;
  altText: string;
}

const ResidenceForSale = ({ imgPath, title, altText, price, bedrooms, bathrooms, carSpaces, discr }: IProp) => {
  return (
    <div className='flex border p-4 pb-8 md:pb-4 rounded-lg shadow-at-4 mb-4 gap-4'>
      <Image
        loader={staticImageLoader}
        quality={100}
        src={imgPath}
        alt={altText}
        width={80}
        height={80}
        className='rounded-lg w-20 h-20'
      />

      <div className='flex flex-col justify-between'>
        <p className='text-lg font-bold'>{title}</p>
        <p className='text-base font-normal text-at-dark-700'>${price}</p>
        <Amenities bedRooms={bedrooms} bathRooms={bathrooms} carSpaces={carSpaces} discr={discr} />
      </div>
    </div>
  );
};

export default ResidenceForSale;
