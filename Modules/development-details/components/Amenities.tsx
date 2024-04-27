import { staticImageLoader } from '@/Shared/services/loader';
import Image from 'next/image';
import React from 'react';

interface IProp {
  bedRooms?: string | number;
  bathRooms?: string | number;
  carSpaces?: string | number;
  className?: string;
  discr?: string;
}

const Amenities = ({ className, bedRooms, bathRooms, carSpaces, discr }: IProp) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      {bedRooms && (
        <div className='flex items-center gap-2 pr-2 border-r border-at-light-500  last:border-0 [&:not(:first-child)]:pl-2'>
          <Image
            loader={staticImageLoader}
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Bedroom.4f0da04d.svg'
            alt='bedroom-icon'
            width={16}
            height={16}
          />
          <span className='text-sm font-normal text-at-dark-700'>{bedRooms}</span>
        </div>
      )}
      {bathRooms && (
        <div className='flex items-center gap-2 pr-2 border-r border-at-light-500  last:border-0 [&:not(:first-child)]:pl-2'>
          <Image
            loader={staticImageLoader}
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Bathtub.275ab49f.svg'
            alt='bathtub-icon'
            width={16}
            height={16}
          />
          <span className='text-sm font-normal text-at-dark-700'>{bathRooms}</span>
        </div>
      )}
      {carSpaces && (
        <div className='flex items-center gap-2 pr-2 border-r border-at-light-500  last:border-0 [&:not(:first-child)]:pl-2'>
          <Image
            loader={staticImageLoader}
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/parking.4027a27b.svg'
            alt='parking-icon'
            width={16}
            height={16}
          />
          <span className='text-sm font-normal text-at-dark-700'>{bathRooms}</span>
        </div>
      )}
      {discr && <span className='text-sm font-normal text-at-dark-700 pl-2'>{discr}</span>}
    </div>
  );
};

export default Amenities;
