import { firebaseConfig } from "../firebase-config";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const fetchLiveSession = async () => {
  const liveSession = await firestore.collection("liveSession").get();
  liveSession.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  })
  return liveSession;
};

export const fetchUsers = async () => {
  const users = await firestore.collection("users").get();
  users.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  })
  return users;
};
