import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import ClientList from '~/components/client-list';
import { Hexagon } from '~/components/hexagon';

const ClientImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function ClientsScreen() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View className="flex-1 gap-4 gap-8 bg-white px-5 py-4">
      <View className="flex-row items-center justify-between gap-2">
        <View>
          <Text className="text-3xl text-aivie-text-light-gray">Pesquisar por cliente</Text>
          <Text className="text-lg text-aivie-small-text-light-gray">
            Acesse os <Text className="font-semibold">dados</Text> dos seus clientes
          </Text>
        </View>
        <Hexagon size={25} borderWidth={8} borderColor="#00905A" />
      </View>

      <View className="flex-row items-center justify-center gap-2 rounded-lg bg-aivie-gray px-3">
        <Pressable onPress={() => inputRef.current?.focus()}>
          <FontAwesome5 name="search" size={24} color={isFocused ? '#00905A' : '#666666'} />
        </Pressable>

        <TextInput
          ref={inputRef}
          className="w-4/5 p-2 text-lg"
          placeholder="Pesquisar"
          placeholderTextColor="#888"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <View className="flex-row items-center gap-2">
          <View className="h-7 w-px bg-gray-300" />

          <MaterialCommunityIcons name="tune-variant" size={24} color="#666666" />
        </View>
      </View>
      <View className="flex-1">
        <ClientList
          clients={[
            { id: '1', image: ClientImage, name: 'John Doe', email: 'john@due.com' },
            { id: '2', image: ClientImage, name: 'Jane Doe', email: 'john@due.com' },
            { id: '3', image: ClientImage, name: 'Alice', email: 'john@due.com' },
            { id: '4', image: ClientImage, name: 'Bob', email: 'john@due.com' },
            { id: '5', image: ClientImage, name: 'Charlie', email: 'john@due.com' },
            { id: '6', image: ClientImage, name: 'Daniel', email: 'john@due.com' },
            { id: '7', image: ClientImage, name: 'Eve', email: 'john@due.com' },
            { id: '8', image: ClientImage, name: 'Frank', email: 'john@due.com' },
          ]}
        />
      </View>
    </View>
  );
}
