import 'global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)/welcome-screen/index" />
      <Stack.Screen name="(app)/main-screen/index" />
    </Stack>
  );
}
