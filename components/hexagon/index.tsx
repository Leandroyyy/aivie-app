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

export const Hexagon: React.FC<HexagonProps> = ({
  animatedStyle,
  size,
  borderWidth,
  borderColor,
  position,
}) => {
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
};
