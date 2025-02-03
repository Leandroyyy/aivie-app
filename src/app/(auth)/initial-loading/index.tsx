import React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useRotatingAnimation } from './use-rotating-animation';

import { Hexagon } from '~/components/hexagon';
import { useFloatingAnimation } from '~/hooks/use-floating-animation';

export default function InitialLoading() {
  const hexagon1Style = useFloatingAnimation(1);
  const hexagon2Style = useFloatingAnimation(-1);
  const rotatingStyle = useRotatingAnimation();

  return (
    <View className="flex-1 items-center justify-center bg-aivie-green">
      <View className="absolute h-full w-full">
        <Hexagon
          animatedStyle={hexagon1Style}
          size={384}
          borderWidth={150}
          borderColor="#00905A"
          position={{ right: 240, top: -40 }}
        />
        <Hexagon
          animatedStyle={hexagon2Style}
          size={384}
          borderWidth={150}
          borderColor="#00905A"
          position={{ bottom: -40, left: 240 }}
        />
      </View>

      <View className="absolute flex flex-row items-center justify-center gap-3">
        <Animated.View
          style={[
            rotatingStyle,
            {
              height: 32,
              width: 32,
              transform: [{ rotate: '45deg' }],
              borderWidth: 8,
              borderColor: '#fff',
            },
          ]}
        />
        <Text className="text-2xl font-bold text-white">AIVIE</Text>
      </View>
    </View>
  );
}
