import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export const useRotatingAnimation = () => {
  const rotation = useSharedValue(45);

  rotation.value = withRepeat(
    withSequence(
      withTiming(225, { duration: 1000, easing: Easing.linear }),
      withDelay(500, withTiming(45, { duration: 0 }))
    ),
    -1,
    false
  );

  return useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));
};
