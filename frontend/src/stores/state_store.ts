import { writable, type Writable } from "svelte/store";

export let cart_on: Writable<boolean> = writable(false);

export let cart_button: Writable<HTMLElement | null> = writable(null);
