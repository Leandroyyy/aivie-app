import { FontAwesome } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export default function NewClientButton() {
  return (
    <View className="items-center">
      <Pressable className="w-3/4 flex-row items-center justify-center gap-4 rounded-lg bg-aivie-green p-2">
        <FontAwesome
          name="plus"
          size={20}
          color="#00905A"
          className="rounded-full border-8 border-aivie-light-gray bg-aivie-light-gray px-[0.1rem]"
        />
        <Text className="text-lg font-semibold text-aivie-light-gray">Novo cliente</Text>
      </Pressable>
    </View>
  );
}
