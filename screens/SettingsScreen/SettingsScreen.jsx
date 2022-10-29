import { View, Button } from 'react-native';

import { useModalStore } from '../../stores/useModalStore';

export default function SettingsScreen() {
  const setModal = useModalStore((state) => state.setModal);

  return (
    <View>
      <Button title="Open Settings Modal" onPress={() => setModal('')} />
    </View>
  );
}
