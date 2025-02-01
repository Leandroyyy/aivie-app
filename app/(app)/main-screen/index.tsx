import React from 'react';
import { View } from 'react-native';

import { Client, ClientList } from '../../../components/main-screen/client-list';
import NewClientButton from '../../../components/main-screen/new-client-button';
import UserProfile from '../../../components/main-screen/user-profile';

const PersonImage =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const ClientImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const clients: Client[] = [
  { id: 1, name: 'Larissa de Oliveira', image: ClientImage },
  { id: 2, name: 'Carlos Souza', image: ClientImage },
];

export default function MainScreen() {
  return (
    <View className="flex-1 justify-between bg-white p-4">
      <View className="gap-8">
        <UserProfile name="Fábio da Silva" email="fabio@gmail.com" image={PersonImage} />
        <View className="border-b border-gray-300" />
        <ClientList clients={clients} />
      </View>

      {/* Botão sempre no final */}
      <NewClientButton />
    </View>
  );
}
