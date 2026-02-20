import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBRPjBCEjhsOHtT140QH0_Riz31Oea2jUI',
  authDomain: 'portfolio-64e16.firebaseapp.com',
  databaseURL: 'https://portfolio-64e16-default-rtdb.firebaseio.com',
  projectId: 'portfolio-64e16',
  storageBucket: 'portfolio-64e16.firebasestorage.app',
  messagingSenderId: '108290761657',
  appId: '1:108290761657:web:9969ce8c74ab5f4f400c68',
  measurementId: 'G-9KBZS06TR5',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
