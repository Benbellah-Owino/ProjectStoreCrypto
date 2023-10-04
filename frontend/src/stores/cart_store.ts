import { writable, type Writable } from "svelte/store";
import type { Item } from "$lib/interfaces/Item";

export const cart_array: Writable<Item[]> = writable([]);
