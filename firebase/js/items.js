import { add, deleteById, selectAll, selectById, updateById } from "./firestore.js";

const COL_NAME = "items";

export async function addItem(title, content) {
    try {
        await add(COL_NAME, { title, content, date: new Date() });
        console.log("Item saved!");
        // Aquí podrías llamar a una función para refrescar la lista
    } catch (error) {
        console.error(error.message);
    }
}

// Hacemos que la función sea accesible desde el HTML si es necesario
window.addItem = addItem;