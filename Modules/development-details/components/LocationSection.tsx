import React, { useState } from 'react';
import PrivateAppointmentForm from '@/Modules/development-details/components/PrivateAppointmentForm';
import Image from 'next/image';
import { staticImageLoader } from '@/Shared/services/loader';
import Portal from '@/Shared/Components/Portal/Portal';

interface IProp {
  title: string;
  fullAddress: string;
  shortAddress: string;
}

const LocationSection = ({ title, fullAddress, shortAddress }: IProp) => {
  const [isMounted, setMounted] = useState(false);

  const togglePortal = () => {
    setMounted((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <section>
        <h2 className='text-lg font-bold'>Location Of {title}</h2>
        <div className='mt-8 mb-4 relative'>
          <Image
            loader={staticImageLoader}
            src='https://www.justvehicle.solutions/wp-content/uploads/2019/05/Google-Maps-Tips.png'
            alt='location map'
            className='h-50 w-full rounded-lg'
            width={200}
            height={100}
          />
          <span className='shadow-at-16 rounded-lg w-9 h-9 flex justify-center bg-white absolute right-3 top-3 '>
            <Image
              loader={staticImageLoader}
              src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/maximize.1097beed.svg'
              width={20}
              height={36}
              alt='maximize-arrow'
            />
          </span>
        </div>
        <div className='mb-4'>
          <h6 className='text-sm font-bold'>Development Location</h6>
          <p className='text-xs font-normal'>{fullAddress}</p>
        </div>
        <div className='mb-4'>
          <h6 className='text-sm font-bold'>Display Location</h6>
          <p className='text-xs font-normal'>{shortAddress}</p>
        </div>
        <div className='mb-4'>
          <h6 className='text-sm font-bold'>Display Open Hours</h6>
          <p className='text-xs font-normal'>Not available</p>
        </div>
        <button
          onClick={togglePortal}
          className='px-4 py-2 font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 w-full rounded-lg '
        >
          Request a private appointment
        </button>
      </section>
      <Portal isMounted={isMounted}>
        <div
          id='portal'
          className='fixed z-[100] flex justify-center items-center top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 bg-at-black-shadow'
        >
          <PrivateAppointmentForm title={title} onTogglePortal={togglePortal} />
        </div>
      </Portal>
    </>
  );
};

export default LocationSection;
