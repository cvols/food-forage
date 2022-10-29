import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens';
import { useAuthStore } from '../stores/useAuthStore';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  const user = useAuthStore((state) => state.user);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? <Stack.Screen name="LoggedIn" component={TabNavigator} /> : <Stack.Screen name="Login" component={LoginScreen} />}
    </Stack.Navigator>
  );
}
