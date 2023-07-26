// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjabXALSgzcv4CYYoTcVdwjg8e0ErxWU",
  authDomain: "bright-query.firebaseapp.com",
  projectId: "bright-query",
  storageBucket: "bright-query.appspot.com",
  messagingSenderId: "257484915206",
  appId: "1:257484915206:web:9bf025e16ed60a40217987",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res._tokenResponse.idToken);
      localStorage.setItem("token", res._tokenResponse.idToken);
      Swal.fire("Good job!", "You clicked the button!", "success").then(
        (res) => {
          window.location.reload();
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
