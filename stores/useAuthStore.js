import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth, db } from '../firebase';

let store = (set, get) => ({
  user: null,
  isAuthenticating: false,
  isAuthenticated: false,
  authenticationError: null,
  createUser: async (email, password) => {
    set({ isAuthenticating: true });
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      set({ user, isAuthenticating: false, isAuthenticated: true });
      console.log('created user');
    } catch (error) {
      set({ isAuthenticating: false, authenticationError: error });
      console.error('error: ', error);
    }
  },
  login: async (email, password) => {
    set({ isAuthenticating: true });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      set({ user, isAuthenticating: false, isAuthenticated: true });
      console.log('logged in');
    } catch (error) {
      set({ isAuthenticating: false, authenticationError: error });
      console.error('error: ', error);
    }
  },
  logout: async () => {
    set({ isAuthenticating: true });
    try {
      auth.signOut();
    } catch (error) {
      set({ authenticationError: error });
      console.error('error: ', error);
    }
    set({ user: null, isAuthenticated: false, isAuthenticating: false });
    console.log('logged out');
  },
  signInWithGoogle: async () => {},
});

store = persist(store, { name: 'auth_store', getStorage: () => AsyncStorage });

export const useAuthStore = create(store);
