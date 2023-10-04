<script lang="ts">
  import { items } from "../../../stores/item_stores";
  import type { Item } from "$lib/interfaces/Item";
  export let item: Item;

  let delivery: number = 40;
  let quantity: number = 0;
  $: taxes = item.price * 0.16;
  $: total = (item.price + delivery - taxes) * quantity;

  function buyItem() {
    console.log(`Bought ${quantity} items at ${total}`);
  }
</script>

<main
  class="item_tile w-60 h-80 m-6 p-0 border border-black rounded-md cursor-pointer hover:shadow-md shadow-black flex flex-col justify-start"
>
  <img src="" alt="" class="w-full h-2/6" />

  <!-- Item name -->
  <h2
    class="item_name w-full text-center h-8 bg-slate-400 text-lg font-bold"
    id="item_name"
  >
    {item.item_name}
  </h2>

  <!-- Item category -->
  <h3
    class="category float-right ml-32 bg-green-300 text-xs font-semibold"
    id="category"
  >
    {item.category}
  </h3>

  <!-- Item description -->
  <section class="description w-full h-20 bg-red-300 text-sm" id="description">
    {item.color}
    {item.size}
  </section>

  <!-- Price information -->
  <section class="price bg-orange-300 text-sm" id="price">
    <p>Item price: {item.price} Delivery: {delivery}</p>
    <p>Taxes: {taxes}</p>
  </section>

  <!-- Buying section -->
  <section
    class="buy w-full h-12 flex justify-around items-center bg-blue-400"
    id="buy"
  >
    <div class="quantity flex justify-center items-center">
      <button
        class="btn_add_quantity w-6 h-6 border-t border-b border-l border-black rounded-l-lg text-base font-bold"
        on:click={() => (quantity -= 1)}>-</button
      >

      <input
        type="text"
        name="txt_quantity"
        id="txt_quantity"
        class="tbx_quantity w-12 h-6 border-t border-b border-black text-xs text-center"
        bind:value={quantity}
      />

      <button
        class="btn_add_quantity w-6 h-6 border-t border-b border-r border-black rounded-r-lg text-base font-bold"
        on:click={() => (quantity += 1)}>+</button
      >
    </div>

    <button
      class="btn_add_to_cart border w-20 h-6 border-black rounded-md text-xs hover:shadow-lg hover:shadow-amber-400"
      id="btn_add_to_cart "
      on:click={buyItem}>buy for {total}</button
    >
  </section>

  <!-- End -->
</main>
