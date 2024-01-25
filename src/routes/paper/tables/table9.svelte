<script>
  import Ref from "../ref.svelte";
  import Eq from "../eq.svelte";
  import AudioTable9 from "../audio/audio-table9.svelte";

  export let key = "";
  let collapse = false;
  let alt = `This is the sonification queue for a kernel density estimate design in Section 7.1.2. There are 25 subqueue items with 13 to 21 are omitted with an ellipsis.`;
</script>

<p>
  <strong
    ><a name={key}>Table 9</a>. The audio queue resulting from a kernel density
    estimate sonification spec in <Ref key="demonstration-example-kde"></Ref>.
    The pitch values (range from 0 to 700) are low because they are representing
    the both-side tails of each estimated density distribution.</strong
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
  <AudioTable9></AudioTable9>
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
  table table {
    border-collapse: collapse;
    border: 0;
    color: #454545;
  }
  td,
  th {
    padding: 0.15rem 0.25rem;
  }
</style>
