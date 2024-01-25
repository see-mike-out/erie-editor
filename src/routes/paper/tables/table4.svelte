<script>
  import AudioTable4 from "../audio/audio-table4.svelte";

  export let key = "";
  let collapse = false;
  let alt = `This is a sonification queue for the auditory histogram repeated by the origin and cylinder variables to demonstrate the case shown in Section 5.6.1. There are 30 queue items while 5 to 10, 13 to 18, and 23 to 28 are omitted and replaced by ellipsis. Queue number 1. Speech. "U.S.A., 3." indicating the origin and cylinder value for the first repetition stream. Queue number 2. Tone. "The histogram for origin U.S.A. and 3 cylinders." Queue number 3. Speech. "U.S.A., 4."  Queue number 4. Tone. "The histogram for origin U.S.A. and 4 cylinders." This structure is repeated for "U.S.A., 8", "Japan, 3", "Japan, 8", "Europe, 3", and "Europe, 8".`;
</script>

<p>
  <strong
    ><a name={key}>Table 4</a>. The sonification stream order for the auditory
    histograms repeated by the <em>origin</em> and <em>cylinders</em> variables.</strong
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
  <AudioTable4></AudioTable4>
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
</style>
