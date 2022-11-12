import firebaseApp from './firebase'
import { getFirestore } from "firebase/firestore"

// Initialize Cloud Firestore and get a reference to the service
const firestoreDb = getFirestore(firebaseApp)

export default firestoreDb