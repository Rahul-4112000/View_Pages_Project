import React, { ReactNode } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl m-auto'>
        <div className='p-4 xl:py-8 xl:px-0'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
