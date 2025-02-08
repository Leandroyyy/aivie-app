import { ActivityIndicator, Image, Pressable, Text } from 'react-native';

interface LoginButtonProps {
  isLoading: boolean;
  onPress: () => void;
}
const GoogleImage = require('~/assets/google-icon.png');

export const LoginButton = ({ isLoading, onPress }: LoginButtonProps) => (
  <Pressable
    className="w-[80%] flex-row items-center justify-center gap-5 rounded-lg border border-gray-300 bg-white py-2 shadow-md active:opacity-70"
    onPress={onPress}
    disabled={isLoading}>
    {isLoading ? (
      <ActivityIndicator size="small" color="#555" />
    ) : (
      <Image source={GoogleImage} style={{ width: 30, height: 30 }} />
    )}
    <Text className="text-lg font-bold text-gray-800">
      {isLoading ? 'Carregando...' : 'Entrar com o Google'}
    </Text>
  </Pressable>
);
