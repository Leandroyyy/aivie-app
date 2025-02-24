import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function ProfileScreen() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    (async () => {
      const status = await requestPermission();
      console.log('Permissão da câmera:', status);
    })();
  }, []);

  if (!hasPermission) return <Text>Solicitando permissão...</Text>;
  if (device == null) return <Text>Carregando câmera...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Perfil</Text>
      <Camera style={styles.camera} device={device} isActive />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  camera: {
    width: '100%',
    height: 500, // Defina uma altura específica
  },
});
