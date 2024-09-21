import React from 'react';
import Data from '@/components/datas/datas';
import { Layout } from '@ui-kitten/components';

export default function Home() {
  return (
    <Layout className='flex-1 bg-gray-800'>
      <Data />
    </Layout>
  );
}
