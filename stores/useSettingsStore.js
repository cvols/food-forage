
// import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set, get) => ({
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value }),
});

// store = persist(store, { name: 'settings_store', getStorage: () => AsyncStorage });

export const useSettingsStore = create(store);
