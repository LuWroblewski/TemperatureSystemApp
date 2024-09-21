import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Medições',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name='charts'
        options={{
          title: 'Graficos',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name='chart-simple' color={color} />,
        }}
      />
    </Tabs>
  );
}
