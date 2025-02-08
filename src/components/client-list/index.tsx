import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

export interface Client {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface ClientListProps {
  clients: Client[];
}

interface ClientItemProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

export default function ClientList({ clients }: ClientListProps) {
  return (
    <View className="flex-1">
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ClientItem id={item.id} name={item.name} image={item.image} email={item.email} />
        )}
        contentContainerStyle={{ gap: 20, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function ClientItem({ id, name, image, email }: ClientItemProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/clients/(client-profile)/${id}` as any)}
      className="flex-row items-center gap-3 rounded-lg border border-aivie-border-gray bg-white p-2">
      <Image source={{ uri: image }} className="h-16 w-16 rounded-full" />
      <View className="flex-1">
        <Text className="flex-1 text-lg font-semibold text-black">{name}</Text>
        <Text className="flex-1 text-lg text-black">{email}</Text>
      </View>
    </Pressable>
  );
}
