import { FontAwesome } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export default function NewClientButton() {
  return (
    <View className="my-4 items-center">
      <Pressable className="w-3/4 flex-row items-center justify-center gap-4 rounded-lg bg-aivie-green p-2">
        <FontAwesome
          name="plus"
          size={20}
          color="#00905A"
          className="border-aivie-light-gray bg-aivie-light-gray rounded-full border-8 px-[0.1rem]"
        />
        <Text className="text-aivie-light-gray text-lg font-semibold">Novo cliente</Text>
      </Pressable>
    </View>
  );
}
