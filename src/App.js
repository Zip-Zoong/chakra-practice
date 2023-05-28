import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
//////////////////////////////////////////////////////////
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADNXDyCTRcosCDMetaTZU58B37om2TFUE',
  authDomain: 'zip-zoong.firebaseapp.com',
  projectId: 'zip-zoong',
  storageBucket: 'zip-zoong.appspot.com',
  messagingSenderId: '355084792460',
  appId: '1:355084792460:web:41b08d923016cc76a741a9',
  measurementId: 'G-T6G7T6GPCY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/////////////////////////////////////////////////////////////

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  console.log(citySnapshot.docs);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async function getUsers(db) {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const querySnapshot2 = await getDocs(
    collection(querySnapshot, 'study_record')
  );
  console.log('222', querySnapshot2);
  console.log('querySnapshot', querySnapshot);
  console.log('querySnapshot.docs', querySnapshot.docs);
  // console.log('testing', querySnapshot.docs.data);
  console.log('forEachDoc');
  querySnapshot.forEach(doc => {
    console.log(doc.data());
  });
  console.log('!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(querySnapshot.docs[0].data());
  getDocs(collection());
}

async function getUserStudyRecords(db) {
  const querySnapshot = await getDocs(
    collection(db, '/users/6zlRWdioOCPqZlFL19FU/study_record')
  );

  console.log(querySnapshot.docs);
  querySnapshot.forEach(doc => {
    console.log(doc.id, ' => ', doc.data());
  });
}

async function writeUsers(db) {
  // try {
  //   const docRef = await addDoc(collection(db, 'users'), {
  //     first: 'Junhyeong',
  //     last: 'Park',
  //     born: 2020,
  //   });
  //   console.log('Document written with ID: ', docRef.id);
  // } catch (e) {
  //   console.error('Error adding document: ', e);
  // }
}

function App() {
  // const [data, setData] = useState(null);
  // // getUsers(db);
  // // getCities(db);
  // useEffect(() => {
  //   getUserStudyRecords(db);
  //   // setData(getCities(db));
  //   // writeUsers(db);
  // }, []);

  return <div>hello</div>;
}

export default App;
