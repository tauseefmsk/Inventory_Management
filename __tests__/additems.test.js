import {describe, it, expect} from 'vitest';
import {addNewItems, inventory} from '../additems.js';

describe('addNewItems', () => {
    it('should add new items to the inventory', () => {
        const itemsBefore = addNewItems(1, 'Apple', 10, 1.00);
        expect(inventory.length).toBe(1);
        const itemsAfter = addNewItems(2, 'Banana', 5, 0.50);
        expect(inventory.length).toBe(2);
    });

    it('should add the correct item to the inventory', () => {
        addNewItems(3, 'Orange', 3, 0.75);
        expect(inventory[2]).toEqual({ id: 3, name: 'Orange', quantity: 3, price: 0.75 });
    });

    it('should not add an item with an existing id', () => {
        addNewItems(1, 'Grapes', 15, 2.00);
        expect(inventory.length).toBe(3); // Length should remain the same
    });

    it('should handle adding an item with zero quantity', () => {
        addNewItems(4, 'Mango', 0, 1.50);
        expect(inventory[inventory.length - 1]).toEqual({ id: 4, name: 'Mango', quantity: 0, price: 1.50 });
    });

    it('should handle adding an item with negative price', () => {
        addNewItems(5, 'Pineapple', 2, -2.00);
        expect(inventory[inventory.length - 1]).toEqual({ id: 5, name: 'Pineapple', quantity: 2, price: -2.00 });
    });
});
    it('should handle adding an item with negative quantity', () => {
        addNewItems(6, 'Pear', -1, 1.25);
        expect(inventory[inventory.length - 1]).toEqual({ id: 6, name: 'Pear', quantity: -1, price: 1.25 });
    });

    it('should handle adding an item with price of zero', () => {
        addNewItems(7, 'Peach', 2, 0.00);
        expect(inventory[inventory.length - 1]).toEqual({ id: 7, name: 'Peach', quantity: 2, price: 0.00 });
    });
