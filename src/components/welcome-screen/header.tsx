import { Text, View } from 'react-native';

import { AnimatedHexagon } from '../animated-hexagon';

export const Header = ({ hexagonStyle }: { hexagonStyle: object }) => (
  <View className="h-[60%] w-[120%] items-center justify-center self-center rounded-b-[18rem] bg-aivie-green">
    <AnimatedHexagon
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
);
