<script lang="ts">
  import ItemsSection from "$lib/ui_sections/items_section.svelte";
  import type { Item } from "$lib/interfaces/Item";
  export let data;
</script>

<main class="w-full h-full flex items-center justify-center bg-blue-300">
  <ItemsSection items_array={data.items_array} />
</main>
