import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Hexagon } from '~/components/hexagon';
import { useFloatingAnimation } from '~/hooks/use-floating-animation';

const GoogleImage = require('~/assets/google-icon.png');

WebBrowser.maybeCompleteAuthSession();

export default function WelcomeScreen() {
  const hexagonStyle = useFloatingAnimation(-1);
  const opacity = useSharedValue(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const googleOAuth = useOAuth({ strategy: 'oauth_google' });

  async function handleLogin() {
    try {
      setIsLoading(true);
      const oAuthFlow = await googleOAuth.startOAuthFlow();

      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(JSON.stringify(error));
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
      <View className="flex-1 bg-white">
        <View className="flex h-[60%] w-[120%] items-center justify-center self-center rounded-b-[18rem] bg-aivie-green">
          <Hexagon
            animatedStyle={hexagonStyle}
            size={384}
            borderWidth={150}
            borderColor="#00905A"
            position={{ top: -80, left: -150 }}
          />

          <View className="flex flex-row items-center justify-center gap-5">
            <View className="h-8 w-8 rotate-45 border-[.6rem] border-white bg-transparent" />
            <Text className="text-xl font-bold text-white">AIVIE</Text>
          </View>
        </View>

        <Hexagon
          animatedStyle={hexagonStyle}
          size={384}
          borderWidth={150}
          borderColor="#F4F4F4"
          position={{ bottom: -40, left: 250 }}
        />
        <View className="flex gap-3 p-6">
          <Text className="text-center text-2xl font-bold text-gray-800">Seja bem-vindo!</Text>
          <Text className="text-center text-lg text-gray-600">
            Descubra a medida exata da sua distância pupilar de forma rápida e prática, garantindo
            conforto e precisão para seus óculos.
          </Text>
        </View>

        <View className="flex-1 items-center justify-end pb-8">
          <Pressable
            className="w-[80%] flex-row items-center justify-center gap-5 rounded-lg border border-gray-300 bg-white py-2 shadow-md active:opacity-70"
            onPress={handleLogin}
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#555" />
            ) : (
              <Image source={GoogleImage} style={{ width: 30, height: 30 }} />
            )}
            <Text className="text-lg font-bold text-gray-800">
              {isLoading ? '' : 'Entrar com o Google'}
            </Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}
