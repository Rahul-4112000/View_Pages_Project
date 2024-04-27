import React from 'react';
import Layout from '@/Shared/Components/Layout/Layout';
import Conveyancing from '@/Modules/conveyancing/Templet/Conveyancing';
import Head from 'next/head';
const getLayout = () => {
  return (
    <Layout>
      <Head>
        <title>Rahul's conveyancing page</title>
      </Head>
      <Conveyancing />
    </Layout>
  );
};

export default getLayout;
