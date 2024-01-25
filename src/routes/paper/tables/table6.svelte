<script>
  import AudioTable6 from "../audio/audio-table6.svelte";
  import Ref from "../ref.svelte";

  export let key = "";
  let collapse = false;
  let alt = `The sonification queue for scale description introduced in Section 6.1. The queue numbers start from 4. Queue number 4. Speech for "The miles-per-gallon in mapped to time. The duration of the stream is 4.5 seconds." Queue number 5. Speech for "The count is mapped to pitch. The minimum domain value 0 is mapped to". Queue number 6. Tone for a sound that starts at time 0, lasts for the duration of 0.3 seconds with a sine oscillator, pitch of 220 Hertz, and loudness of 1. Queue number 7. Speech for "and the maximum domain value 100 is mapped to". Queue number 8. Tone for a sound that starts at time 0, lasts for the duration of 0.3 seconds with a sine oscillator, pitch of 660 Hertz, and loudness of 1.`;
</script>

<p>
  <strong
    ><a name={key}>Table 6</a>. The default scale description provided by
    <em>Erie</em>
    for the walkthrough case. These items are played before the sonification in <Ref
      key="tab-grammar-walkthrough"
    ></Ref> by default.</strong
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
  <AudioTable6></AudioTable6>
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
