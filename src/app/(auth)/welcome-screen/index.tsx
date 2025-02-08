import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { AnimatedHexagon } from '~/components/animated-hexagon';
import { Header } from '~/components/welcome-screen/header';
import { LoginButton } from '~/components/welcome-screen/login';
import { useFloatingAnimation } from '~/hooks/use-floating-animation';

WebBrowser.maybeCompleteAuthSession();

export default function WelcomeScreen() {
  const hexagonStyle = useFloatingAnimation(-1);
  const opacity = useSharedValue(0);
  const [isLoading, setIsLoading] = useState(false);
  const googleOAuth = useOAuth({ strategy: 'oauth_google' });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  async function handleLogin() {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const redirectUrl = Linking.createURL('(auth)/welcome-screen/');
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === 'success') {
        await oAuthFlow.setActive?.({ session: oAuthFlow.createdSessionId });
      }
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (Platform.OS !== 'web') {
      WebBrowser.warmUpAsync();
    }

    return () => {
      if (Platform.OS !== 'web') {
        WebBrowser.coolDownAsync();
      }
    };
  }, []);

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <StatusBar backgroundColor="#00875F" translucent={false} />
      <View className="flex-1 bg-white">
        <Header hexagonStyle={hexagonStyle} />
        <AnimatedHexagon
          animatedStyle={hexagonStyle}
          size={384}
          borderWidth={150}
          borderColor="#F4F4F4"
          position={{ bottom: -40, left: 250 }}
        />
        <View className="gap-3 p-6">
          <Text className="text-center text-2xl font-bold text-gray-800">Seja bem-vindo!</Text>
          <Text className="text-center text-lg text-gray-600">
            Descubra a medida exata da sua distância pupilar de forma rápida e prática, garantindo
            conforto e precisão para seus óculos.
          </Text>
        </View>
        <View className="flex-1 items-center justify-end pb-8">
          <LoginButton isLoading={isLoading} onPress={handleLogin} />
        </View>
      </View>
    </Animated.View>
  );
}
