// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"; //bu iki kütüphaneyi eklemek lazım
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJBI6-7cLuiaXyKdRtNX93-jWpCXdRwOo",
  authDomain: "fir-auth-94d76.firebaseapp.com",
  projectId: "fir-auth-94d76",
  storageBucket: "fir-auth-94d76.appspot.com",
  messagingSenderId: "951022347945",
  appId: "1:951022347945:web:8e83ce28480dd691c56bb8"
};

// Initialize Firebase
if(!firebase.apps.length){ // eğer firebase içerisinde app yoksa, her seferinde initialize yapmasın verileri
   firebase.initializeApp(firebaseConfig);
}


const auth=firebase.auth(); 
//firebase auth dışarı açmamız lazım
export default {auth};