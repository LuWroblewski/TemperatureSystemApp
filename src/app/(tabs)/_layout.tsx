import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function TabLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
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
            title: 'Gráficos',
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name='chart-simple' color={color} />,
          }}
        />
      </Tabs>
    </ApplicationProvider>
  );
}
