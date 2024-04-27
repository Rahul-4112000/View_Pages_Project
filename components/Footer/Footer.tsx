import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FOOTER_SIDE_LINKS,
  LARGE_DEVICE_FOOTER_LINKS,
  SMALL_DEVICE_FOOTER_LINKS,
  SOCIAL_MEDIA_LIST,
} from './Footer.constant';
import { staticImageLoader } from '@/Shared/services/loader';

const Footer: React.FC = () => {
  console.log('footer page');
  const renderLinks = (startIndex: number, endIndex: number) => {
    return (
      <>
        {LARGE_DEVICE_FOOTER_LINKS.slice(startIndex, endIndex + 1).map((link, index) => (
          <li key={link.title} className={`hover:underline hover:text-at-primary ${index ? 'mt-4' : ''}`}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </>
    );
  };

  const renderSocialMediaIcons = () => {
    return (
      <ul className='flex gap-8 lg:gap-6'>
        {SOCIAL_MEDIA_LIST.map((socialMedia) => {
          return (
            <li key={socialMedia.altText} className='cursor-pointer'>
              <Image
                loader={staticImageLoader}
                src={socialMedia.imgSrc}
                alt={socialMedia.altText}
                width={24}
                height={24}
                unoptimized
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const renderGeneralLinks = () => {
    return (
      <ul className='hidden justify-end gap-6 lg:flex'>
        {FOOTER_SIDE_LINKS.map((linkNames) => {
          return (
            <li key={linkNames} className='text-base text-at-dark-700 hover:text-at-primary hover:underline'>
              <Link href='#'>{linkNames}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderMobileViewLinks = () => {
    return (
      <ul className='grid grid-cols-2 gap-2 place-items-center'>
        {SMALL_DEVICE_FOOTER_LINKS.map((link) => {
          return (
            <li key={link.title} className='mb-2 text-base text-at-dark-700 hover:text-at-primary hover:underline'>
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderFooterIcons = () => {
    return (
      <>
        <Link href='#'>
          <Image
            loader={staticImageLoader}
            src='https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg'
            alt='view-icon'
            width={96}
            height={25}
          />
        </Link>
        <div className='flex flex-col items-center gap-1 text-at-dark-700 text-center  lg:flex-row lg:gap-2 lg:text-end'>
          <p className='text-sm font-normal lg:w-32 lg:leading-4'>Part of View Media Group (VMG)</p>
          <Link href='#' className='pt-1'>
            <Image
              loader={staticImageLoader}
              src='https://view.com.au/viewstatic/lancer/_next/static/media/VMG_logo.24597d8a.png'
              alt='view media group'
              width={110}
              height={28}
            />
          </Link>
        </div>
      </>
    );
  };

  return (
    <footer className='px-5 lg:max-w-screen-xl lg:mx-auto lg:px-0'>
      <div className='py-6 border-b border-at-light-500 flex justify-center items-center lg:justify-between'>
        {renderSocialMediaIcons()}
        {renderGeneralLinks()}
      </div>
      <hr />
      {/* for large device */}
      <div className='py-6 border-b border-at-light-500 hidden text-at-dark-700 pr-5 text-base grid-cols-4 text-left lg:grid'>
        <ul>{renderLinks(0, 5)}</ul>
        <ul>{renderLinks(6, 10)}</ul>
        <ul>{renderLinks(11, 15)}</ul>
        <ul>{renderLinks(16, 18)}</ul>
      </div>
      {/* for small device */}
      <div className='py-6 border-b border-at-light-500 lg:hidden '>{renderMobileViewLinks()}</div>
      <hr />
      <div className='flex flex-col justify-between pt-8 items-center lg:flex-row'>{renderFooterIcons()}</div>
      <p className='text-sm font-normal py-2 text-center lg:text-left'>Copyright © 2001-2024 "|" view.com.au Ltd</p>
    </footer>
  );
};

export default Footer;
