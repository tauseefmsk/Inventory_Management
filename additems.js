export let inventory = [];

export const addNewItems = (id, name, quantity, price) => {
    if (inventory.find(item => item.id === id)) {
        console.log(`Item with ID: ${id} already exists`);
        return;
    } else {
    const item = { id, name, quantity, price };
    inventory.push(item);
    console.log(`Added ${item.name} to the inventory`);
    }
};
// module.exports = addNewItems;