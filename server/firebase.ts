import { getApps, getApp, deleteApp, initializeApp } from "firebase/app"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiJf5VpPni5XudcpPeavsr47cFxkXECpE",
  authDomain: "deep-sea-jellyfish.firebaseapp.com",
  projectId: "deep-sea-jellyfish",
  storageBucket: "deep-sea-jellyfish.appspot.com",
  messagingSenderId: "140244627619",
  appId: "1:140244627619:web:0010e13ea51744f92fcf16",
  measurementId: "G-P3F4JVXTZZ"
};
const dbName = 'Deep Sea Jellyfish'

if(getApps()) deleteFirestoreApps()

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig, dbName)

function deleteFirestoreApps(){
  getApps().forEach(function(app) {
    console.log(app)
    deleteApp(app)
  })
}

export default firebaseApp