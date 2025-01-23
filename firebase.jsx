
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAWds0y7gZozQ8cCfHKM3ySSQv44Mt66BY",
  authDomain: "loginsignup-d2c7f.firebaseapp.com",
  projectId: "loginsignup-d2c7f",
  storageBucket: "loginsignup-d2c7f.firebasestorage.app",
  messagingSenderId: "600150292469",
  appId: "1:600150292469:web:4a6771d6c536cb3b4d92bc"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth}