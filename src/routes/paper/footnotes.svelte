<script>
  import { footnotes } from "./footnotes";
  let collapse = false;
</script>

<section id="references" aria-roledescription="Footnotes">
  <h2 aria-roledescription="section title">
    <a class="anchor" name="footnotes" href="#footnotes">Footnotes</a>
    <button
      class="collapse-button"
      aria-roledescription="Collapse button"
      on:click={() => {
        collapse = !collapse;
      }}>{!collapse ? "Collapse" : "Show"}</button
    >
  </h2>
  {#if !collapse}
    {#each $footnotes as item, i}
      <article aria-roledescription="footnote item">
        <a class="anchor" name={"f" + item.index} href={"#fr" + item.index}
          >{item.index}</a
        >.
        {@html item.content}
      </article>
    {/each}
  {/if}
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
