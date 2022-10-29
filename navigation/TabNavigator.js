import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native';

import { EatScreen, SettingsScreen, DiscoverScreen, ShopScreen, ForageScreen } from '../screens';
import { useModalStore } from '../stores/useModalStore';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const modalVisible = useModalStore((state) => state.modalVisible);
  const setModalVisible = useModalStore((state) => state.setModalVisible);
  const modal = useModalStore((state) => state.modal);

  return (
    <>
      <Tab.Navigator>
        <Tab.Group>
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Ionicons name="map" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Ionicons name="cart" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Forage"
            component={ForageScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Eat"
            component={EatScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Ionicons name="fast-food" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />,
            }}
          />
        </Tab.Group>
      </Tab.Navigator>
      <Modal animationType="slide" presentationStyle="pageSheet" visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
        {modal}
      </Modal>
    </>
  );
};

export default TabNavigator;
