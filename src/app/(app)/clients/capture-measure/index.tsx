import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Svg, { Circle, Defs, Mask, Rect } from 'react-native-svg';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

import { styles } from './styles';

export default function CaptureMeasure() {
  const router = useRouter();
  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef<Camera>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      setIsLoading(true);
      const photo = await cameraRef.current.takePhoto();
      setPhotoUri(`file://${photo.path}`);
      setIsLoading(false);
    }
  };

  const retakePhoto = () => {
    setPhotoUri(null);
  };

  const confirmPhoto = () => {
    router.push('/(app)/clients/measures');
  };

  if (!hasPermission) return <Text>Solicitando permissão...</Text>;
  if (device == null) return <Text>Carregando câmera...</Text>;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push('/(app)/clients/client-profile/1' as any)}
        style={styles.button}>
        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      </Pressable>

      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.camera} />
      ) : (
        <Camera ref={cameraRef} style={styles.camera} device={device} isActive photo />
      )}

      <View style={styles.overlay}>
        <Svg height="100%" width="100%">
          <Defs>
            <Mask id="mask" x="0" y="0" height="100%" width="100%">
              <Rect height="100%" width="100%" fill="white" />
              <Circle cx="50%" cy="50%" r="200" fill="black" />
            </Mask>
          </Defs>
          <Rect height="100%" width="100%" fill="rgba(0,0,0,0.7)" mask="url(#mask)" />
          <Circle cx="50%" cy="50%" r="205" stroke="white" strokeWidth="5" fill="transparent" />
        </Svg>

        {!photoUri && <Text style={styles.instruction}>Posicione seu rosto dentro do círculo</Text>}
      </View>

      {photoUri ? (
        <View style={styles.buttonContainer}>
          <Pressable onPress={retakePhoto} style={styles.retakeButton}>
            <MaterialIcons name="refresh" size={30} color="white" />
            <Text style={styles.retakeText}>Tirar Novamente</Text>
          </Pressable>
          <Pressable onPress={confirmPhoto} style={styles.confirmButton}>
            <MaterialIcons name="check" size={30} color="white" />
            <Text style={styles.confirmText}>Confirmar</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={takePhoto} style={styles.captureButton} disabled={isLoading}>
          {isLoading ? (
            <Text style={styles.loadingText}>Capturando...</Text>
          ) : (
            <MaterialIcons name="camera-alt" size={36} color="white" />
          )}
        </Pressable>
      )}
    </View>
  );
}
