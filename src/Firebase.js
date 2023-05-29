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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsersFromDB() {
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);
  // console.log('userSnapshot', userSnapshot);
  // console.log('userSnapshot.docs', userSnapshot.docs);
  const userList = userSnapshot.docs.map(doc => doc.data());
  console.log('userList', userList);

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

async function getUserStudyRecordsFromDB() {
  const querySnapshot = await getDocs(
    collection(db, '/users/6zlRWdioOCPqZlFL19FU/study_record')
  );
  const studyRecords = querySnapshot.docs.map(doc => doc.data());
  console.log('studyRecords', studyRecords);

  return studyRecords;
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

export { getUsersFromDB, getUserStudyRecordsFromDB };
