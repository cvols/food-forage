import { useEffect } from 'react';
import { Appearance, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppStack from './navigation/AppStack';
import { useSettingsStore } from './stores/useSettingsStore';

export default function App() {
  const darkMode = useSettingsStore((state) => state.darkMode);
  const setDarkMode = useSettingsStore((state) => state.setDarkMode);
  const colorScheme = Appearance.getColorScheme();

  const [loaded] = useFonts({
    'OperatorMono-Medium': require('./assets/fonts/OperatorMono-Medium.otf'),
  });

  // if (!loaded) {
  //   return <Text>loading</Text>
  // }

  useEffect(() => {
    if (colorScheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
