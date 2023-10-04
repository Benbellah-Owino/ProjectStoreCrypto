import { items } from "../../stores/item_stores";
import type { Item } from "$lib/interfaces/Item";

/** @type {import('./$types').PageLoad} */
export function load(): Item[] {
  let items_array: Item[];

  items.subscribe((v) => {
    items_array = v;
  });

  return { items_array };
}
