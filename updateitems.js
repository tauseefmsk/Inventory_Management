import { inventory } from "./additems.js";

export const updateItemQuantity = (id, newquantity) => {
    const index = inventory.findIndex(item=>{
        return item.id ===id;
    })
    if (index!==-1) {
        inventory[index].quantity = newquantity;
        console.log(`Updated ${inventory[index].id} to quantity: ${newquantity}`)
    } else {
        console.log(`Item with ID: ${id} not found`);
    }
}