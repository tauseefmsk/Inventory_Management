import {inventory} from "./additems.js";

export const removeItems = (id) => {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1); // Removes the item without reassigning the inventory
        console.log(`Removed item with ID: ${id}`);
    } else {
        console.log(`Item with ID: ${id} not found.`);
    }
};
