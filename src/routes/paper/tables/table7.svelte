<script>
  import Ref from "../ref.svelte";
  import Eq from "../eq.svelte";
  import AudioTable7 from "../audio/audio-table7.svelte";

  export let key = "";
  let collapse = false;
  let alt = `The sonification queue for a sparsity sonification in Section 7.1.1. It has eleven subqueue items.`;
</script>

<p>
  <strong
    ><a name={key}>Table 7</a>. The audio queue resulting from a sparsity
    sonification spec in <Ref key="demonstration-example-sparsity"></Ref>.
    <code>after_previous</code>
    means "play after the previous sound" within the same sub-queue. A tapping pattern,
    <Eq math={`[a, b] \\times c`}></Eq>, means a tap sound for <Eq math="a"
    ></Eq> seconds and a pause for <Eq math="b"></Eq> seconds are repeated <Eq
      math="c"
    ></Eq> times (the last pause is omitted).</strong
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
  <AudioTable7></AudioTable7>
{/if}