import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { Hexagon } from '~/components/hexagon';
import { MeasureItem } from '~/components/measures/measure-item';

// Dados das medidas
const measures = [
  { label: 'Distância Focal', value: '0,20' },
  { label: 'Distância Pupilar', value: '0,20' },
  { label: 'Distância Naso Pupilar', value: '0,20' },
];

// Componente para exibir um item da lista de medidas
const ClientImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Measures() {
  return (
    <View className="flex-1 gap-16 bg-white px-5 py-8">
      {/* Header */}
      <View className="gap-10">
        <View className="flex-row items-center justify-between">
          <MaterialIcons
            name="arrow-back-ios"
            size={18}
            color="#808A99"
            onPress={() => router.push('/(app)/clients')}
          />
          <Hexagon size={25} borderWidth={8} borderColor="#00905A" />
        </View>

        {/* Usuário */}
        <View className="flex-row items-center justify-between">
          <View className="gap-4">
            <Text className="text-3xl text-aivie-text-light-gray">Medidas</Text>
            <Text className="text-xl font-semibold">Leandro Cavallari</Text>
          </View>
          <Image source={{ uri: ClientImage }} className="h-28 w-28 rounded-full" />
        </View>
      </View>

      {/* Lista de Medidas */}
      <View className="flex-1 gap-6">
        {measures.map((measure, index) => (
          <MeasureItem key={index} label={measure.label} value={measure.value} />
        ))}
      </View>

      {/* Botões */}
      <View className="mt-auto flex-row gap-3 pb-4">
        <Pressable
          onPress={() => router.push('/(app)/clients/measures')}
          className="w-1/2 flex-row justify-center self-center rounded-lg border border-aivie-green bg-white p-2">
          <Text className="text-lg font-semibold text-aivie-green">Recapturar medidas</Text>
        </Pressable>
        <Pressable className="w-1/2 flex-row justify-center self-center rounded-lg bg-aivie-green p-2">
          <Text className="text-lg font-semibold text-aivie-light-gray">Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}
