import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert('Erro', 'Por favor, selecione uma avaliação!');
      return;
    }

    Alert.alert('Obrigado!', `Nota: ${rating}\nComentário: ${comment}`);

    router.replace('/(app)/clients');
  };

  return (
    <View className="flex-1 items-center justify-center gap-5 px-4 py-5">
      <View className="w-full flex-1 items-center justify-center gap-20">
        <View className="items-center gap-6">
          <Text className="text-2xl font-semibold text-aivie-text-light-gray">
            Avalie a <Text className="text-aivie-light-green">AIVIE</Text>
          </Text>

          {/* Componente de Avaliação por Estrelas */}
          <StarRating onRatingChange={setRating} />
        </View>
        {/* Campo de Comentário */}
        <TextInput
          className="w-full rounded-md border border-gray-300 p-3 text-base"
          placeholder="Deixe um comentário..."
          multiline
          numberOfLines={10}
          value={comment}
          onChangeText={setComment}
        />
      </View>

      {/* Botão de Envio */}
      <TouchableOpacity className="rounded-lg bg-aivie-green px-6 py-3" onPress={handleSubmit}>
        <Text className="text-lg font-semibold text-white">Enviar Avaliação</Text>
      </TouchableOpacity>
    </View>
  );
}

type StarRatingProps = {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
};

function StarRating({ initialRating = 0, onRatingChange }: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);

  const handlePress = (selectedRating: number) => {
    setRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <View className="flex-row gap-3 space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Pressable key={star} onPress={() => handlePress(star)}>
          <FontAwesome
            name={star <= rating ? 'star' : 'star-o'}
            size={32}
            color={star <= rating ? '#FFD700' : '#A0A0A0'}
          />
        </Pressable>
      ))}
    </View>
  );
}
