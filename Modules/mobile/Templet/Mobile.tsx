import React from 'react';
import HeroSection from '@/Shared/Components/HeroContainer/HeroContainer';
import Image from 'next/image';
import Link from 'next/link';
import { dynamicImageLoader, staticImageLoader } from '@/Shared/services/loader';

const Mobile = () => {
  const renderApplicationButtons = () => {
    return (
      <div className='flex gap-4 mt-6 lg:mt-12'>
        <Link href='#'>
          <Image
            loader={staticImageLoader}
            src='https://view.com.au/viewstatic/lancer/_next/static/media/AppStore.36362f83.svg'
            alt='app-store-image'
            width={166}
            height={55}
          />
        </Link>
        <Link href='#'>
          <Image
            loader={staticImageLoader}
            src='https://view.com.au/viewstatic/lancer/_next/static/media/PlayStore.7128a9f5.svg'
            alt='play-store-image'
            width={186}
            height={55}
          />
        </Link>
      </div>
    );
  };

  const renderMobileImageContent = () => {
    return (
      <div className='flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-17 lg:pr-8'>
        <h2 className='text-2xl font-bold mb-3 lg:mb-6'>Save and track.</h2>
        <p className='text-base font-normal mb-6 text-center text-at-dark-700 lg:text-left'>
          Shortlist your favorite properties to keep track of upcoming open for inspections and auction. Login with your
          view.com.au account to sync your saved properties between your computer and mobile devices.
        </p>
        <div className='mb-8 px-6 lg:px-0'>{renderApplicationButtons()}</div>
      </div>
    );
  };

  const renderMobileImage = () => {
    return (
      <Image
        // sizes='100vw'
        src='https://view.com.au/viewstatic/lancer/_next/static/media/landing-page-mobile.b0d0f9f8.png'
        alt='mobile-image'
        width={450}
        height={558}
        className='px-17 lg:pr-17 flex justify-center lg:w-1/2'
      />
    );
  };

  const renderTabletImage = () => {
    return (
      <Image
        // sizes='100vw'

        src='https://view.com.au/viewstatic/lancer/_next/static/media/landing-page-desktop.e2b2c6d9.png'
        alt='tablet-image'
        width={650}
        height={464}
        className='px-6 flex justify-center lg:pl-17 lg:pr-0'
      />
    );
  };

  const renderTabletImageContent = () => {
    return (
      <div className='flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:pr-17 lg:pl-112px '>
        <h2 className='text-2xl font-bold text-center mb-3 lg:mb-6 lg:text-left'>
          Search, plan and research properties.
        </h2>
        <p className='text-base font-normal mb-6 text-center text-at-dark-700 lg:text-left'>
          Search any property in Australia, get price data and suburb information, plus points of interest.
        </p>
        <div className='mb-8 px-6 lg:px-0 lg:min-w-[368px]'>{renderApplicationButtons()}</div>
      </div>
    );
  };

  return (
    <>
      <HeroSection
        title='Explore properties wherever and whenever you like.'
        subTitle='Available on iOS and Android, the view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties.'
        className='mb-16 p-6 md:py-12  md:pl-16 md:pr-72'
        subTitleClassName='lg:text-lg'
      >
        {renderApplicationButtons()}
      </HeroSection>

      <section className='mb-16 md:mb-6 flex flex-col lg:flex-row items-center lg:h-500px'>
        {renderMobileImageContent()}
        {renderMobileImage()}
      </section>

      <section className='mb-2 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center lg:h-500px'>
        {renderTabletImage()}
        {renderTabletImageContent()}
      </section>
    </>
  );
};

export default Mobile;
