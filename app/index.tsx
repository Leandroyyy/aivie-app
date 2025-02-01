import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import InitialLoading from './(auth)/initial-loading';

export default function Home() {
  const router = useRouter();
  const opacity = useSharedValue(1);

  useEffect(() => {
    setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 }, () => {
        runOnJS(router.replace)('/(auth)/welcome-screen' as any);
      });
    }, 2000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <InitialLoading />
    </Animated.View>
  );
}
