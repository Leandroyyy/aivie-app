import React from 'react';
import { Text, View } from 'react-native';

interface MeasureItemProps {
  label: string;
  value: string;
}

export function MeasureItem({ label, value }: MeasureItemProps) {
  return (
    <>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg text-aivie-text-light-gray">{label}</Text>
        <Text className="text-lg">{value}</Text>
      </View>
      <View className="border-b border-gray-300" />
    </>
  );
}
