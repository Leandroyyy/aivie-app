import { FlatList, Image, Pressable, Text, View } from 'react-native';

export interface Client {
  id: number;
  name: string;
  image: string;
}

interface ClientListProps {
  clients: Client[];
}

interface ClientItemProps {
  name: string;
  image: string;
}

export function ClientList({ clients }: ClientListProps) {
  return (
    <View>
      <Text className="mb-2 text-lg font-bold text-gray-800">Últimos registros</Text>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ClientItem name={item.name} image={item.image} />}
        contentContainerStyle={{ gap: 8 }}
      />
    </View>
  );
}

const ClientItem: React.FC<ClientItemProps> = ({ name, image }) => (
  <Pressable className="border-aivie-border-gray flex-row items-center gap-3 rounded-lg border bg-white p-3">
    <Image source={{ uri: image }} className="h-16 w-16 rounded-full" />
    <Text className="flex-1 text-lg font-semibold text-black">{name}</Text>
  </Pressable>
);
