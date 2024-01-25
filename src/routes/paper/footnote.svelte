<script>
  import { onMount } from "svelte";
  import { registerFootnote } from "./footnotes";

  export let content = "";
  let index;
  onMount(() => {
    index = registerFootnote(content);
  });
</script>

<sup><a href={"#f" + index} name={"fr" + index}>{index}</a></sup>
