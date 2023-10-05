<script lang="ts">
  import type { CartItemType } from "$lib/interfaces/Item";
  import { fade } from "svelte/transition";
  import { cart_array, cart_total } from "../../../stores/cart_store";
  import { flip } from "svelte/animate";
  export let cart_item: CartItemType;

  let shown_price: number = cart_item.total_price;

  function remove_item() {
    cart_array.update((cart_items) => {
      return cart_items.filter((item) => item.id != cart_item.id);
    });
    $cart_total -= cart_item.total_price;
  }
</script>

<main
  class="cart_item h-12 w-4/5 m-2 p-2 flex justify-start items-center border border-green-300 rounded-lg"
  out:fade
>
  <p class="item_name" id="item_name">{cart_item.item_name}</p>
  <p class="item_price" id="item_price">{shown_price}</p>
  <p class="selected_currency selected_currency" id="p">dollars</p>
  <p class="quantity" id="quantity">{cart_item.quantity}</p>
  <button
    class="remove h-6 pr-1 pl-1 text-xs border border-red-600 rounded-md text-red-500 hover:bg-red-300 hover:h-8 hover:pr-2 hover:pl-2 hover:text-sm hover:text-white hover:shadow-md hover:shadow-red-500"
    id="remove_item"
    on:click={remove_item}>remove</button
  >
</main>

<style>
  p {
    margin-right: 2rem;
  }

  .remove {
    transition: all ease-in-out 0.4s;
  }
</style>
