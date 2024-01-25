<script>
  export let key = "";
  import GrammarFigure from "$lib/images/figures/erie-grammar-full.jpeg";
  import GrammarFigurePDF from "$lib/images/figures/erie-grammar-full.pdf";
  import Eq from "../eq.svelte";
  let collapse = false;
</script>

<p>
  <strong
    ><a name={key}>Figure 1</a>. The formal definition of Erie. For applicable
    elements, roughly analogous visualization elements are denoted by <Eq
      math={`\\approx`}
    ></Eq> signs.</strong
  >
  <button
    class="collapse-button"
    aria-roledescription="Collapse button"
    on:click={() => {
      collapse = !collapse;
    }}>{!collapse ? "Collapse" : "Show"}</button
  >
  <a href={GrammarFigurePDF} target="_blank">PDF version</a>
</p>

{#if !collapse}
<div class="table-wrapper">
  <img
    src={GrammarFigure}
    alt="This figure describes the formal specification of Erie in twelve parts. They are 1. Top-level specification. 2. Stream. 3. Data and datasets. 4. Transform. 5. Tone. 6. Encoding. 7. Scale. 8. Tick. 9. Synth. 10. Periodic wave. 11. Sampling. And, 12. Config."
  />
</div>
{/if}