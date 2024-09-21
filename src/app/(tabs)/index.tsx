import React from 'react';
import Data from '@/components/datas/datas';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className='flex-1 bg-gray-800 p-4'>
      <Data />
    </View>
  );
}
