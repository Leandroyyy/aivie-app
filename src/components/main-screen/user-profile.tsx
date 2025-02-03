import { Image, Pressable, Text, View } from 'react-native';

interface UserProfileProps {
  name: string;
  email: string;
  image: string;
  onPressImage?: () => void;
}

export default function UserProfile({ name, email, image, onPressImage }: UserProfileProps) {
  return (
    <View className="flex-row items-center gap-3 py-4">
      <Pressable onPress={onPressImage}>
        <Image source={{ uri: image }} className="h-28 w-28 rounded-full" />
      </Pressable>
      <View>
        <Text className="text-aivie-text-light-gray text-2xl font-semibold">{name}</Text>
        <Text className="text-lg font-semibold text-gray-800">{email}</Text>
      </View>
    </View>
  );
}
