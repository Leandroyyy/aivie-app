import { Image, Text, View } from 'react-native';

interface UserProfileProps {
  name: string;
  email: string;
  image: string;
}

export default function UserProfile({ name, email, image }: UserProfileProps) {
  return (
    <View className="flex-row items-center gap-3 p-4">
      <Image source={{ uri: image }} className="h-20 w-20 rounded-full" />
      <View>
        <Text className="text-aivie-text-light-gray text-2xl font-semibold">{name}</Text>
        <Text className="text-lg font-semibold text-gray-800">{email}</Text>
      </View>
    </View>
  );
}
