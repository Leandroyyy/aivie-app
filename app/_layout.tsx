import 'global.css';

import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { router, Stack } from 'expo-router';
import { useEffect } from 'react';

import InitialLoading from './(auth)/initial-loading';

import { tokenCache } from '~/storage/token-cache';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace('(app)/main-screen/' as any);
    } else {
      router.replace('(auth)/welcome-screen/' as any);
    }
  }, [isSignedIn]);

  return isLoaded ? (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)/welcome-screen/index" />
      <Stack.Screen name="(app)/main-screen/index" />
    </Stack>
  ) : (
    <InitialLoading />
  );
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}
