
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAK1s1nwrDrIjXi4C5VhWimwF1frtikrGY",
  authDomain: "myblog-e29ba.firebaseapp.com",
  projectId: "myblog-e29ba",
  storageBucket: "myblog-e29ba.appspot.com",
  messagingSenderId: "342516818741",
  appId: "1:342516818741:web:cc77a04ab2073ac56be27c"
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage }