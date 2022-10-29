import { Button, SafeAreaView } from 'react-native';
import { useAuthStore } from '../../stores/useAuthStore';
import { useModalStore } from '../../stores/useModalStore';

export default function DiscoverScreen({ navigation }) {
  const logout = useAuthStore((state) => state.logout);
  const setModal = useModalStore((state) => state.setModal);

  console.log({ navigation });

  return (
    <SafeAreaView>
      <Button title="Logout" onPress={logout} />
      <Button title="Open Modal" onPress={() => setModal()} />
      <Button title="Open react nav Modal" onPress={() => navigation.navigate('MyModal')} />
    </SafeAreaView>
  );
}
