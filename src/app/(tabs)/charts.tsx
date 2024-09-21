import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

export default function Charts() {
  return (
    <Layout className='flex-1 bg-gray-800 p-4'>
      <Layout className='rounded-lg space-y-2 my-auto bg-gray-600 h-48 p-4'>
        <Layout className='flex flex-row justify-center items-center space-x-2 hover:bg-gray-300 p-2 rounded-lg'>
          <Text className='text-3xl text-gray-300'>Em desenvolvimento</Text>
        </Layout>
      </Layout>
    </Layout>
  );
}
