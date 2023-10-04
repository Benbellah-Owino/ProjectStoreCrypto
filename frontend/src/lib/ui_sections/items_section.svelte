<script lang="ts">
  import ItemTile from "$lib/ui_components/product_components/item_tile.svelte";
  import type { Item } from "$lib/interfaces/Item";
  export let items_array: Item[];
  console.log(items_array);
</script>

<main
  class="item_section w-9/12 h-full flex flex-wrap items-center bg-teal-200"
>
  {#each items_array as item (item.id)}
    <ItemTile {item} />
  {/each}
</main>
