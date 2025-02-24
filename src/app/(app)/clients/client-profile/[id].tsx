import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as z from 'zod';

import { Hexagon } from '~/components/hexagon';

const schema = z.object({
  name: z.string().min(3, 'O nome precisa ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres'),
});

const ClientImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function ClientProfile() {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFocus = (name: string) => setFocusedField(name);
  const handleBlur = () => setFocusedField(null);

  const renderInput = (name: string, label: string, placeholder: string) => (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const isFocused = focusedField === name;

        return (
          <>
            <Text
              className={`font-semibold ${isFocused ? 'text-aivie-light-green' : 'text-black'}`}>
              {label}
            </Text>

            <TextInput
              className={`rounded-lg border p-3 ${
                isFocused ? 'border-aivie-light-green' : 'border-aivie-border-gray'
              }`}
              placeholder={placeholder}
              placeholderTextColor="gray"
              value={value}
              onChangeText={onChange}
              onFocus={() => handleFocus(name)}
              onBlur={handleBlur}
            />

            {errors[name] && <Text className="text-red-500">{errors.root?.[name].message}</Text>}
          </>
        );
      }}
    />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1 p-5"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View className="gap-10">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-4">
                <MaterialIcons
                  name="arrow-back-ios"
                  size={18}
                  color="#808A99"
                  onPress={() => router.push('/(app)/clients')}
                />
                <Text className="text-3xl text-aivie-text-light-gray">Perfil</Text>
              </View>
              <Hexagon size={25} borderWidth={8} borderColor="#00905A" />
            </View>

            <View className="flex items-center justify-center">
              <Image source={{ uri: ClientImage }} className="h-48 w-48 rounded-full shadow-md" />
            </View>

            <View className="gap-2">
              {renderInput('name', 'Nome', 'Digite o nome')}
              {renderInput('email', 'E-mail', 'Digite o e-mail')}
              {renderInput('focusDistance', 'Distância Focal (DF)', 'Digite a DF')}
              {renderInput('pupillaryDistance', 'Distância Pupilar (DP)', 'Digite a DP')}
              {renderInput('nasoPupillaryDistance', 'Distância Naso Pupilar (DNP)', 'Digite a DNP')}
            </View>

            {/* Botão */}
            <View className="flex-row items-center gap-4">
              <Pressable
                onPress={() => router.push('/(app)/clients/capture-measure')}
                className="w-1/2 flex-row justify-center rounded-lg border border-aivie-green bg-white p-2">
                <Text className="text-lg font-semibold text-aivie-green">Capturar medidas</Text>
              </Pressable>
              <Pressable className="w-1/2 flex-row justify-center rounded-lg bg-aivie-green p-2">
                <Text className="text-lg font-semibold text-aivie-light-gray">Salvar</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
