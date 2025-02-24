import 'global.css';

import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { router, Stack } from 'expo-router';
import { useEffect } from 'react';

import InitialLoading from './(auth)/initial-loading';

import { TabBarVisibilityProvider } from '~/context/tab-bar-visibility';
import { tokenCache } from '~/storage/token-cache';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    router.replace(isSignedIn ? '(app)/main-screen/' : ('(auth)/welcome-screen/' as any));
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) {
    return <InitialLoading />;
  }

  return (
    <TabBarVisibilityProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </TabBarVisibilityProvider>
  );
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}
