<script>
  import Ref from "../ref.svelte";
  import Eq from "../eq.svelte";
  import AudioTable10 from "../audio/audio-table10.svelte";

  export let key = "";
  let collapse = false;
  let alt = `This is the sonification queue for the model fit in Section 7.1.3. There are 36 subqueue items.`;
</script>

<p>
  <strong
    ><a name={key}>Table 10</a>. The audio queue resulting from a model fit
    sonification spec in <Ref key="demonstration-example-fit"></Ref>. "Q"
    indicates the index of each sub-queue.</strong
  >
  <button
    class="collapse-button"
    aria-roledescription="Collapse button"
    on:click={() => {
      collapse = !collapse;
    }}>{!collapse ? "Collapse" : "Show"}</button
  >
</p>

{#if !collapse}
  <AudioTable10></AudioTable10>
{/if}