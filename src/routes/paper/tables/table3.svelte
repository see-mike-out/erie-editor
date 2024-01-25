<script>
  export let key = "";
  import AudioTable3 from "../audio/audio-table3.svelte";
  import Ref from "../ref.svelte";
  let collapse = false;
  let alt =
    "This table describes the audio queue of the resulting auditory histogram as specified in Section 5.1. The first queue item is a speech queue for 'start playing' The second queue item is a tone queue for the nine histogram bins with their auditory properties including start time, end time, duration, timbre, and pitch in Hertz. The last queue is a speech queue for 'finished.'";
</script>

<p>
  <strong
    ><a name={key}>Table 3</a>. The sonification output for an auditory
    histogram in <Ref key="grammar-walkthrough"></Ref>. Units: seconds (start,
    end, duration) and Hz (pitch). "Sine" means a sinusoidal oscillator. The
    results of data transforms in.</strong
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
  <div>
    <AudioTable3></AudioTable3>
  </div>
{/if}
