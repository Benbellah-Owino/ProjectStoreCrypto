import { writable, type Writable } from "svelte/store";
import type { CartItemType } from "$lib/interfaces/Item";

export const cart_array: Writable<CartItemType[]> = writable([]);

export const cart_total: Writable<number> = writable(0);
