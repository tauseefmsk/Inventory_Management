import {addNewItems} from "./additems.js";
import {viewInventory} from "./viewinventory.js";
import {removeItems} from "./removeitems.js";
import { updateItemQuantity } from "./updateitems.js";

// const addNewItems = require('./additems'); // Import the function
// const viewInventory = require('./viewinventory');


addNewItems(1, "Apple", 10, 1.00);
addNewItems(2, "Banana", 5, 0.50);
addNewItems(3, "Orange", 3, 0.75);
addNewItems(4, "Mango", 8, 1.50);
addNewItems(5, "Pineapple", 2, 2.00);

viewInventory();

removeItems(2);

viewInventory();

updateItemQuantity(1,50);

viewInventory();