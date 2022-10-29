import { View, Modal, Button } from 'react-native';

import { useModalStore } from '../../stores/useModalStore';

export default function EatScreen() {
  const setModal = useModalStore((state) => state.setModal);

  return (
    <View>
      <Button title="Open Modal" onPress={() => setModal('cool')} />
    </View>
  );
};
