import firebaseApp from './firebase'
import { getFirestore, collection } from "firebase/firestore"
import { addDoc, getDocs } from "firebase/firestore"

// Initialize Cloud Firestore and get a reference to the service
const firestoreDb = getFirestore(firebaseApp)

export async function createRegister(dbName: string, values: any) {
    try {
        return await addDoc(collection(firestoreDb, dbName), values)
    } catch (e) {
        return "Erro adicionando registro: " + e
    }
}

export async function updateRegister(dbName: string, values: object) {}

export async function deleteRegister(dbName: string) {}

export async function getRegister(dbName: string) {

}

export async function getAllRegister(dbName: string) {
    const querySnapshot = await getDocs(collection(firestoreDb, dbName));
    var docs: object[] = []
    querySnapshot.forEach((doc) => {
        var item = `${doc.id} => ${doc.data()}`
        docs.push({item})
        console.log(item)
    });
    return docs
}

// export default firestoreDb