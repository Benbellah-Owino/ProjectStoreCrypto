import { writable } from "svelte/store";
import type { Item } from "$lib/interfaces/Item";

const itemArray: Item[] = [
  {
    id: 1,
    item_name: "Toothbrush",
    category: "hygene (toiletry)",
    price: 100,
    color: "blue",
    size: "small",
    number_in_stock: 65,
  },
  {
    id: 2,
    item_name: "Mug",
    category: "kitchen (utensils)",
    price: 50,
    color: "white",
    size: "sm",
    number_in_stock: 43,
  },
  {
    id: 3,
    item_name: "Jordans",
    category: "clothing, shoes",
    price: 3000,
    color: "blue",
    size: 43,
    number_in_stock: 7,
  },
  {
    id: 4,
    item_name: "Vans",
    category: "clothing, shoes",
    price: 1500,
    color: "blue",
    size: 43,
    number_in_stock: 10,
  },
  {
    id: 5,
    item_name: "HP Workstation",
    category: "computers (workstation)",
    price: 10000,
    color: "black",
    size: "medium",
    number_in_stock: "out of stock",
  },
  {
    id: 6,
    item_name: "Logitech mouse",
    category: "computers (accesores)",
    price: 15000,
    color: "black",
    size: "large",
    number_in_stock: 3,
  },
];

export const items = writable(itemArray);
