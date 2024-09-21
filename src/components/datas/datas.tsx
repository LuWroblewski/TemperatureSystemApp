import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
type Data = {
  id: number;
  temperature: string;
  humidity: string;
  created_at: string;
};

type DataResponse = {
  status: string;
  message: string;
  data: Data;
};

export default function Data() {
  const [dataJson, setDataJson] = useState<Data | null>(null);
  const URL_API = process.env.EXPO_PUBLIC_URL_API;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL_API}/api/temperature/getLatest`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      });

      const data: DataResponse = await response.json();
      setDataJson(data.data);
    };

    fetchData();
  }, [URL_API]);

  return (
    <View className=' rounded-lg  space-y-2 my-auto bg-gray-600 h-48 p-4'>
      {dataJson && (
        <>
          <View className='flex flex-row justify-center items-center space-x-2 my-auto p-2 rounded-lg'>
            <Text className='text-3xl text-gray-300'>
              <FontAwesome size={28} name='thermometer-half' /> Temperatura: {dataJson.temperature}
            </Text>
          </View>
          <View className='flex flex-row justify-center items-center space-x-2 my-auto  p-2 rounded-lg'>
            <Text className='text-3xl text-gray-300'>
              <Entypo size={28} name='water' /> Umidade: {dataJson.humidity}%
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
