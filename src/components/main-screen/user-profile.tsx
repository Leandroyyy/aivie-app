import { Image, Pressable, Text, View } from 'react-native';

import { Hexagon } from '../hexagon';

interface UserProfileProps {
  name: string;
  email: string;
  image: string;
  onPress?: () => void;
}

export default function UserProfile({ name, email, image, onPress }: UserProfileProps) {
  return (
    <View className="flex-row items-center justify-between gap-3 py-4">
      <Pressable onPress={onPress}>
        <View className="flex-row items-center gap-3">
          <Image source={{ uri: image }} className="h-20 w-20 rounded-full" />
          <View>
            <Text className="text-xl font-semibold text-black">{name}</Text>
            <Text className="text-md font-semibold text-aivie-text-light-gray">{email}</Text>
          </View>
        </View>
      </Pressable>
      <Hexagon size={25} borderWidth={8} borderColor="#00905A" />
    </View>
  );
}
