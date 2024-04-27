import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { HEADER_LINKS } from './Header.constant';
import { staticImageLoader } from '@/Shared/services/loader';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderViewIcon = () => {
    return (
      <div className='w-19 h-6.5 xl:w-23.75 xl:h-8 flex items-center'>
        <Link href='/mobile'>
          <Image
            loader={staticImageLoader}
            src='https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg'
            alt='home_icon'
            width={95}
            height={32}
          />
        </Link>
      </div>
    );
  };

  const renderHamburgerIcon = () => {
    return (
      <button className='xl:hidden' onClick={toggleSidebar}>
        <Hamburger color='#333333' size={24} distance='lg' />
      </button>
    );
  };

  const renderHeaderLinks = () => {
    return (
      <ul className='font-medium hidden xl:flex xl:gap-2'>
        {HEADER_LINKS.map((link) => {
          return (
            <li key={link} className='hover:bg-at-light-200 rounded-lg px-3 py-2 cursor-pointer'>
              <Link href='#'>{link}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderHeaderButton = () => {
    return (
      <button
        type='button'
        className='text-sm py-1.5 px-2 rounded-lg font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 xl:text-base xl:px-4 xl:py-2.5'
      >
        Join / Sign In
      </button>
    );
  };

  return (
    <>
      <header className='sticky top-0 z-50 bg-white flex justify-center items-center border-b border-at-light-500'>
        <nav className='flex justify-between items-center h-15 w-full max-w-screen-xl font-DmSans pl-0.5 pr-3 xl:px-0 xl:h-16'>
          <div className='flex gap-2.5 items-center'>
            {renderHamburgerIcon()}
            {renderViewIcon()}
          </div>
          {renderHeaderLinks()}
          {renderHeaderButton()}
        </nav>
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Header;
