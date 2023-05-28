import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  console.log(citySnapshot.docs);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async function getUserForExport() {
  // await console.log(db);
  const usersCol = collection(db, 'users');
  // await console.log(usersCol);
  const userSnapshot = await getDocs(usersCol);
  await console.log(userSnapshot.docs);
  const userList = userSnapshot.docs.map(doc => doc.data());
  await console.log(userList);

  return userList;
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

async function getUserStudyRecordsForExport() {
  const querySnapshot = await getDocs(
    collection(db, '/users/6zlRWdioOCPqZlFL19FU/study_record')
  );
  console.log(querySnapshot.docs);

  const studyRecord = querySnapshot.docs.map(doc => doc.data());
  await console.log(studyRecord);

  return studyRecord;
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

export { getUserForExport, getUserStudyRecordsForExport };
