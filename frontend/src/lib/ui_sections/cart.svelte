<script lang="ts">
  import CartItem from "$lib/ui_components/product_components/cart_item.svelte";
  import { flip } from "svelte/animate";
  import { cart_array, cart_total } from "../../stores/cart_store";
  import { draw, fade, fly } from "svelte/transition";

  let confirmBuy: boolean = false;

  function pressBuy() {
    confirmBuy = true;
  }

  function continueWithPurchase() {
    confirmBuy = false;
    alert("Thanks for shopping with us");
  }

  function rejectPurchase() {
    let main: HTMLElement | null = document.getElementById("main");

    if (main instanceof HTMLElement) {
      main.style.borderColor = "red";
      main.style.boxShadow = "red";
    }
  }
</script>

<main
  class="main w-6/12 h-2/3 absolute right-2 top-2 z-50 flex flex-col justify-center items-center bg-slate-50 border border-black shadow-lg shadow-green-400"
  id="main"
  in:fly
>
  {#each $cart_array as cart_item (cart_item.id)}
    <CartItem {cart_item} />
  {/each}

  <div class="total_cost w-11/12 h-16 flex justify-around items-center">
    <label for="price">Total Cost:</label>
    <h3 class="total_cost_dollars" id="total_cost_dollars">${$cart_total}</h3>
    <h3 class="total_cost_selected" id="total_cost_selected">
      0.12 <span class="symbol">ETH</span>
    </h3>
  </div>

  <button
    class="buy h-14 w-20 mt-3 border border-black rounded text-xl font-bold hover:bg-black hover:text-white hover:shadow-md hover:shadow-black"
    id="buy"
    on:click={pressBuy}>BUY</button
  >

  {#if confirmBuy}
    <div
      class="confirm_buy w-8/12 flex flex-col justify-between items-center"
      id="confirm_buy"
    >
      <p>Are you sure you of this purchase</p>
      <div
        class="confirm_buttons w-8/12 mt-3 flex justify-between items-center"
        id="confirm_buttons"
      >
        <button
          class="yes_confirm confirm bg-green-500 border border-green-500 hover:w-14 hover:h-10 hover:font-bold hover:shadow-md hover:shadow-green-400"
          id="yes_confirm"
          on:click={continueWithPurchase}>YES</button
        >
        <button
          class="no_confirm confirm bg-red-500 border border-red-500 hover:w-14 hover:h-10 hover:font-bold hover:shadow-md hover:shadow-red-400"
          id="no_confirm"
          on:click={rejectPurchase}>NO</button
        >
      </div>
    </div>
  {/if}
</main>

<style>
  .main {
    border-color: aqua;
  }
  .confirm {
    width: 3rem;
    height: 2rem;
    padding: 0;
    text-align: center;
    color: white;
    border-radius: 5px;
  }
</style>
