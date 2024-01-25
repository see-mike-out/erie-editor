<script>
  import { onMount } from "svelte";
  import {
    findCitation,
    getCiteCount,
    registerCitationPosition,
  } from "./cites.js";

  export let content = "";
  let parsed = [];
  let citation = [];
  onMount(() => {
    citation = [];
    parsed = content.split(",").map((t) => t.trim());
    parsed.forEach((key) => {
      let citeRefId = "r" + getCiteCount();
      registerCitationPosition(key, citeRefId);
      citation.push({
        citeRefId,
        item: findCitation(key),
      });
    });
  });
</script>

<span
  >[{#each citation as cite, i}{i != 0 ? ", " : ""}<a
      name={cite.citeRefId}
      href={"#c" + cite.item.index}>{cite.item.index || "?"}</a
    >{/each}]
</span>

<style>
  span {
    font-size: inherit;
    color: inherit;
  }
  span a {
    font-size: inherit;
    color: inherit;
  }
</style>
