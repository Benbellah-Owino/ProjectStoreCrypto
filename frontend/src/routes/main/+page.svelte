<script lang="ts">
  import ItemsSection from "$lib/ui_sections/items_section.svelte";
  import Cart from "$lib/ui_sections/cart.svelte";
  import type { Item } from "$lib/interfaces/Item";
  import { cart_on, cart_button } from "../../stores/state_store.js";
  import { onMount } from "svelte";
  export let data;

  onMount(() => {
    $cart_button = document.getElementById("cart_toggle");
  });
</script>

<main class="w-full h-full flex items-center justify-center bg-blue-300">
  <ItemsSection items_array={data.items_array} />
  <button
    class="cart_toggle w-7 h-7 fixed top-2 right-3 border border-yellow-400 rounded-lg bg-yellow-50 hover:bg-yellow-300 hover:text-black hover:shadow-md hover:shadow-yellow-300"
    id="cart_toggle"
    on:click={() => {
      $cart_on = true;
      console.log($cart_on);
      setTimeout(() => {
        console.log($cart_on);
      }, 1000);
    }}>C</button
  >

  {#if $cart_on === true}
    <Cart />
  {/if}
</main>
