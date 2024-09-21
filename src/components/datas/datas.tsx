import React, { useEffect, useState } from 'react';
import { Layout, Text } from '@ui-kitten/components';
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
    <Layout className='rounded-lg space-y-2 my-auto bg-gray-600 h-48 '>
      {dataJson && (
        <>
          <Layout className='flex flex-row justify-center items-center space-x-2 my-auto p-2 rounded-lg '>
            <Text className=' text-gray-300 tracking-wider'>
              <FontAwesome size={28} name='thermometer-half' /> Temperatura: {dataJson.temperature}
            </Text>
          </Layout>
          <Layout className='flex flex-row justify-center items-center space-x-2 my-auto p-2 rounded-lg'>
            <Text className=' text-gray-300'>
              <Entypo size={28} name='water' /> Umidade: {dataJson.humidity}%
            </Text>
          </Layout>
        </>
      )}
    </Layout>
  );
}
