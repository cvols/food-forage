import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

import { LoginScreen } from '../screens';
import { useAuthStore } from '../stores/useAuthStore';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export default function AppStack() {
  const user = useAuthStore((state) => state.user);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="LoggedIn" component={TabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="MyModal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
