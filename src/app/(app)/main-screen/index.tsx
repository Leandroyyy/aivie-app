import { useAuth, useUser } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import ClientList, { Client } from '~/components/client-list';
import NewClientButton from '~/components/main-screen/new-client-button';
import UserProfile from '~/components/main-screen/user-profile';

const ClientImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const clients: Client[] = [
  { id: '1', name: 'Larissa de Oliveira', image: ClientImage, email: 'johndue@gmail.com' },
  { id: '2', name: 'Carlos Souza', image: ClientImage, email: 'johndue@gmail.com' },
  { id: '3', name: 'Carlos Souza', image: ClientImage, email: 'johndue@gmail.com' },
];

export default function MainScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View className="flex-1 gap-5 bg-white p-4">
      <StatusBar backgroundColor="#ffffff" translucent={false} />

      <UserProfile
        name={user?.fullName!}
        email={user?.emailAddresses[0].emailAddress!}
        image={user?.imageUrl!}
        onPress={() => signOut()}
      />

      <View className="border-b border-gray-300" />

      <Text className="text-lg font-bold text-gray-800">Últimos registros</Text>

      <View className="flex-1">
        <ClientList clients={clients} />
      </View>

      <NewClientButton />
    </View>
  );
}
