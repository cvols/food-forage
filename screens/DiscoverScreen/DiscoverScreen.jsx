import { Button, SafeAreaView } from 'react-native';
import { useAuthStore } from '../../stores/useAuthStore';
import { useModalStore } from '../../stores/useModalStore';

export default function DiscoverScreen() {
  const logout = useAuthStore((state) => state.logout);
  const setModal = useModalStore((state) => state.setModal);

  return (
    <SafeAreaView>
      <Button title="Logout" onPress={logout} />
      <Button title="Open Modal" onPress={() => setModal()} />
    </SafeAreaView>
  );
}
