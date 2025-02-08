import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

interface HexagonProps {
  animatedStyle?: StyleProp<ViewStyle>;
  size: number;
  borderWidth: number;
  borderColor: string;
  position?: { top?: number; bottom?: number; left?: number; right?: number };
}

export function AnimatedHexagon({
  animatedStyle,
  size,
  borderWidth,
  borderColor,
  position,
}: HexagonProps) {
  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: 'absolute',
          height: size,
          width: size,
          borderWidth,
          borderColor,
          ...position,
        },
      ]}
    />
  );
}
