import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import 'global.css';

import { useTabBarVisibility } from '~/context/tab-bar-visibility';

export default function TabLayout() {
  const { isTabBarVisible } = useTabBarVisibility();

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: isTabBarVisible
          ? { backgroundColor: '#fff', paddingBottom: 8, height: 60 }
          : { display: 'none' }, // 👈 Esconde a Tab dinamicamente!
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#00905A',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarIconStyle: { flexDirection: 'column', alignItems: 'center' },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="main-screen/index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => <AntDesign name="home" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="clients"
        options={{
          title: 'Clientes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="more/index"
        options={{
          title: 'Mais',
          tabBarIcon: ({ color, size }) => (
            <Feather name="more-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
