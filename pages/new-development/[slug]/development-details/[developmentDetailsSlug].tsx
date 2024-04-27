import React from 'react';
import Layout from '@/Shared/Components/Layout/Layout';
import NewDevelopmentDetails from '@/Modules/development-details/Templet/newDevelopmentDetails';
import { IDevelopmentDetail } from '@/Modules/development-details/development-details.interface';
import Head from 'next/head';

export const getServerSideProps = async (context: any) => {
  const response = await fetch('https://mocki.io/v1/1ab244ea-8d56-4e18-9911-1eb798fc74ae');
  const data = await response.json();
  const {
    props: {
      pageProps: {
        data: { developmentDetail },
      },
    },
  } = data;
  if (context.params.developmentDetailsSlug !== developmentDetail.slug.name) {
    return {
      redirect: {
        destination: '/mobile',
        permanent: false,
      },
    };
  }
  return { props: developmentDetail };
};

const getLayout = (props: IDevelopmentDetail) => {
  return (
    <Layout>
      <Head>
        <title>Rahul's Development Detail page</title>
      </Head>
      <NewDevelopmentDetails props={props} />
    </Layout>
  );
};

export default getLayout;
