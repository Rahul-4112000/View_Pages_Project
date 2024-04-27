import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ISidebarContent } from '../Sidebar/Sidebar.interface';
import { staticImageLoader } from '@/Shared/services/loader';

const SidebarLinks: React.FC<ISidebarContent> = ({ title, imgSrc }) => {
  return (
    <li className='py-3 px-3 flex items-center gap-3 cursor-pointer'>
      <Image loader={staticImageLoader} src={imgSrc} alt={title} width={20} height={20} />
      <Link href='#'>
        <h3 className='font-medium text-base hover:text-orange-500'>{title}</h3>
      </Link>
    </li>
  );
};

export default SidebarLinks;
