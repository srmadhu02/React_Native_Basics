import {initializeApp} from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig={
    apiKey: "AIzaSyDo0ExRQjHLGye9MTWnqaq5AMaoykhCP3Y",
    authDomain: "fir-aurdino-1.firebaseapp.com",
    databaseURL: "https://fir-aurdino-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-aurdino-1",
    storageBucket: "fir-aurdino-1.appspot.com",
    messagingSenderId: "717985539302",
    appId: "1:717985539302:web:645288a10b9491adfc8727",
    measurementId: "G-3NJJMQ6YC9",
};

const firebase = initializeApp(firebaseConfig)
const db = getDatabase(firebase)
export default db;