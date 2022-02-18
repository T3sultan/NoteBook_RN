import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0hVdTENEhfZpSm46AVps9VKH03CBAiMw",
  authDomain: "note-rn.firebaseapp.com",
  projectId: "note-rn",
  storageBucket: "note-rn.appspot.com",
  messagingSenderId: "937186780139",
  appId: "1:937186780139:web:5cd134d2c981ca58452fae",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
