<script>
  import AudioTable5 from "../audio/audio-table5.svelte";

  export let key = "";
  let collapse = false;
  let alt = `This is a sonification queue for the auditory histogram sequenced by the origin field and overlaid by the cylinder field to demonstrate the case shown in Section 5.6.1. Queue number 1. Speech for "U.S.A." Queue nubmer 2. Tone overlay for "the histograms for U.S.A. and cylinder values of 3, 4, 5, 6, and 8." The same structure repeats for "Japan" and "Europe".`;
</script>

<p>
  <strong
    ><a name={key}>Table 5</a>. The sonification stream order for the auditory
    histograms sequenced by the <em>origin</em> field and overlaid by the
    <em>cylinders</em>
    field.</strong
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
  <AudioTable5></AudioTable5>
{/if}

<style>
  table {
    border-collapse: collapse;
    border: 1px solid #000;
    color: #454545;
  }
  table.queue > tbody > tr:nth-child(2n + 1) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  td,
  th {
    padding: 0.15rem 0.25rem;
  }
  td > table td {
    border: 1px solid #000;
  }
</style>
