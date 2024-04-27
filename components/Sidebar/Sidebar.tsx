import Link from 'next/link';
import React from 'react';
import SidebarLinks from '../SidebarLinks/SidebarLinks';
import { link } from 'fs';
import { SIDEBAR_CONTENT_LIST, SIDEBAR_TOP_LINKS } from './Sidebar.constant';

const Sidebar: React.FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
  let styles = 'fixed top-0 bottom-0 pt-15 transform transition -translate-x-full w-full block bg-white xl:hidden ';

  if (isSidebarOpen) {
    styles += 'translate-x-0';
  }

  const renderTopLinks = () => {
    return SIDEBAR_TOP_LINKS.map((linkNames) => {
      return (
        <li className='px-5 py-3' key={linkNames}>
          <Link href='#'>
            <h2 className='font-medium text-2xl text-black'>{linkNames}</h2>
          </Link>
        </li>
      );
    });
  };

  return (
    <aside className={`${styles} overflow-y-auto z-40`}>
      <ul className='font-DmSans'>
        {renderTopLinks()}
        <SidebarLinks
          title='New Developments'
          imgSrc='https://view.com.au/viewstatic/lancer/_next/static/media/nav-rocket.15d190c5.svg'
        />
        <SidebarLinks
          title='Price Estimate'
          imgSrc='https://view.com.au/viewstatic/lancer/_next/static/media/nav-scales.37599d36.svg'
        />
        <hr className='my-4' />
        {SIDEBAR_CONTENT_LIST.map((link) => {
          return <SidebarLinks key={link.title} title={link.title} imgSrc={link.imgSrc} />;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
