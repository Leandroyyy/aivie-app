import { useEffect } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export const useFloatingAnimation = (initialDirection: number) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(initialDirection * 10, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(initialDirection * -10, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  return useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { rotate: '45deg' }],
  }));
};
