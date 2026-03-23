import { db } from "./config.js";
import { collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export async function add(colName, data) {
    try {
        return await addDoc(collection(db, colName), data);
    } catch (error) {
        console.error("Error adding document:", error);
    }
}

export async function selectAll(colName) {
    try {
        const querySnapshot = await getDocs(collection(db, colName));
        return querySnapshot.docs;
    } catch (error) {
        console.error("Error getting documents:", error);
    }
}