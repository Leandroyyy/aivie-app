import { StyleProp, View, ViewStyle } from 'react-native';

interface HexagonProps {
  animatedStyle?: StyleProp<ViewStyle>;
  size: number;
  borderWidth: number;
  borderColor: string;
}

export function Hexagon({ animatedStyle, size, borderWidth, borderColor }: HexagonProps) {
  return (
    <View
      style={[
        animatedStyle,
        {
          transform: [{ rotate: '45deg' }],
          height: size,
          width: size,
          borderWidth,
          borderColor,
        },
      ]}
    />
  );
}
