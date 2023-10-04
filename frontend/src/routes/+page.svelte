<script lang="ts">
  let num1: number = 1;
  $: numReact = num1;

  function increment() {
    num1 += 1;
  }
</script>

<main
  class="main w-screen h-screen flex flex-col justify-start items-center p-2"
>
  <div class="dynamic_island" id="dynamic_island">
    <button class="items" id="items">Items</button>
    <button class="cart" id="cart">Cart</button>
  </div>
  <h1>{numReact}</h1>
  <br />
  <button
    on:click={() => (num1 += 1)}
    class="button bg-slate-200 border border-black rounded-sm p-1"
    >Increment</button
  >
</main>
