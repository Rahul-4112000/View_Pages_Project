import React from 'react';
import Layout from '@/Shared/Components/Layout/Layout';
import Mobile from '@/Modules/mobile/Templet/Mobile';
import Head from 'next/head';

const RealEstateApp = () => {
  return (
    <Layout>
      <Head>
        <title>Rahul's Mobile page</title>
      </Head>
      <Mobile />
    </Layout>
  );
};

export default RealEstateApp;
