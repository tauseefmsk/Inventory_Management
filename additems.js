export let inventory = [];

export const addNewItems = (id, name, quantity, price) => {
    const item = { id, name, quantity, price };
    inventory.push(item);
    console.log(`Added ${item.name} to the inventory`);
};
// module.exports = addNewItems;