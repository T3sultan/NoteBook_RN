
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeAuthenticationFirebase = () => {
      initializeApp(firebaseConfig)

}
export default initializeAuthenticationFirebase;