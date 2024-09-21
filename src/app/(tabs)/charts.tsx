import React from 'react';
import Data from '@/components/datas/datas';
import { View, Text } from 'react-native';

export default function Charts() {
  return (
    <View className='flex-1 bg-gray-800 p-4'>
      <View className=' rounded-lg  space-y-2 my-auto bg-gray-600 h-48 p-4'>
        <View className='flex flex-row justify-center items-center space-x-2 hover:bg-gray-300 p-2 rounded-lg'>
          <Text className='text-3xl text-gray-300'>Em desenvolvimento</Text>
        </View>
      </View>
    </View>
  );
}
