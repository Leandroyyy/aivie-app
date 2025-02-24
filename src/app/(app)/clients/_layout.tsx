import 'global.css';

import { Stack, usePathname } from 'expo-router';
import { useEffect } from 'react';

import { useTabBarVisibility } from '~/context/tab-bar-visibility';

export default function ClientsLayout() {
  const pathname = usePathname();
  const { setTabBarVisible } = useTabBarVisibility();

  useEffect(() => {
    setTabBarVisible(!pathname.startsWith('/clients/'));
  }, [pathname]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="capture-measure/index" />
      <Stack.Screen name="(client-profile)/[id]" />
    </Stack>
  );
}
