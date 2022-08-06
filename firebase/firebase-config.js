import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlD39cq1ymJHkYsPt44jxbncyr8sh7vhI",
  authDomain: "powr-f34aa.firebaseapp.com",
  projectId: "powr-f34aa",
  storageBucket: "powr-f34aa.appspot.com",
  messagingSenderId: "489329450485",
  appId: "1:489329450485:web:a3dcf7ff708cf990cb94bc",
  measurementId: "G-5WK8F4HBH4"
};

const app = initializeApp(firebaseConfig);

// initialize auth
const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export  { authentication };
export const db = getFirestore(app);