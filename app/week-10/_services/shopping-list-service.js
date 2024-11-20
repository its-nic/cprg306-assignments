import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId, itemsStateSetter) {
    try {
        const allItemsReference = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItemsReference);
        const querySnapshotArray = await getDocs(allItemsQuery);
    
        let itemsArray = [];
    
        querySnapshotArray.forEach((docSnap) => {
            let thisItem = {
                id: docSnap.id,
                ...docSnap.data()
            }
            itemsArray.push(thisItem);
        });
        itemsStateSetter(itemsArray);
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, item) {
    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemReference, item);
    } catch (error) {
        console.log(error);
    }
}