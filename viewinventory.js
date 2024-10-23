import { inventory } from "./additems.js";

export const viewInventory = ()=>{
    console.log(`Currently Inventory: `);
    inventory.forEach(item => {

        inventory.map(item => ({ID: item.id, NAME: item.name, QUANTITY: item.quantity, PRICE: item.price}))

    });
    console.table(inventory);
  
}
// Export the viewInventory function for use in other modules
// module.exports = viewInventory;
