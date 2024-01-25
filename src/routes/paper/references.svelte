<script>
  import { onMount } from "svelte";
  import { cites, makeRefAuthorName } from "./cites";
  let citations = [];
  onMount(() => {
    citations = Object.keys(cites)
      .map((key) => {
        let item = JSON.parse(JSON.stringify(cites[key]));
        item.key = key;
        return item;
      })
      .filter((c) => c.index !== undefined);
    citations.sort((a, b) => a.index - b.index);
  });
</script>

<section id="references" aria-roledescription="Reference list">
  <h2 aria-roledescription="section title">
    <a class="anchor" name="references" href="#references">References</a>
  </h2>
  {#each citations as item, i}
    <article aria-roledescription="citation item">
      <a class="anchor" name={"c" + item.index} href={"#c" + i}
        >[{item.index}]</a
      >
      {#if item.authorList && item.authorList.length > 0}{makeRefAuthorName(
          item.authorList,
        )}.{/if}
      {#if item.year}({item.year}).{/if}
      <em>{item.title}</em>.
      {#if item.booktitle}{item.booktitle}{#if item.series}
          &nbsp;({item.series}){/if}.{/if}
      {#if item.publisher}{item.publisher}.{/if}
      {#if item.doi}<a href={`https://doi.org/${item.doi}`} target="_blank"
          >https://doi.org/{item.doi}</a
        >.{/if}
      {#if item.note}{@html item.note}.{/if}
      {#if item.position?.length > 0}Cited at {#each item.position as pos, i}{i !=
          0
            ? ", "
            : ""}<a href={"#" + pos}>{i + 1}</a>{/each}{/if}
    </article>
  {/each}
</section>

<style>
  article {
    padding: 0.15rem 0;
    font-size: 0.85rem;
    color: #666;
  }
  article:hover {
    background-color: rgba(255, 255, 0, 0.3);
  }
</style>
