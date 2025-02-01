import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import InitialLoading from './(auth)/initial-loading';

export default function Home() {
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <InitialLoading />
    </Animated.View>
  );
}
