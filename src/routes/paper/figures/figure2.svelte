<script>
  import Cite from "../cite.svelte";
  export let key = "";
  import Figure from "$lib/images/figures/erie-audio-narrative.jpeg";

  let alt = `This figure has three parts from A to C. (A) Auditory encoding customization. 
A listener can set an encoding channel to map the stock price variable and the scale range for that channel. 
It is currently set to pitch with a range of 200 hertz to 1,6000 hertz. 
There is a screenshot of three input forms horizontally arranged. 
The first form item is a select box labeled Encoding, and pitch is currently selected. 
The other selectable items are loudness and pan. 
The second form item is a number input box, labeled From (Stock price: 0), with the current value of 200. 
The last form item is a number input box, labeled To (Stock price: 230), with the current value of 1,600. (B) Player options. 
The listener can play and stop the scale description and the audio narrative sonification. 
These buttons are accessible with a screen reader and keyboard interaction. 
There is a screenshot showing three buttons for Play scales, Play audio narrative, and Stop audio narrative, aligned from left to right. 
(C) Audio narrative segments. The listener can also play each segment separately. 


There are two screenshots connected by ellipsis. Each box consists of a text, a line chart, and a play button. 
The play button in the first box is highlighted and labeled as "C1. play button for a segment." 
In the first box, the text is 'No. 1. From Januyary first, 2000 to August first, Apple's stock price fluctuates between 21 dollars and 34 dollars.' 
and the line chart has a wiggly shape. 
In the second box, the text is 'No. 7. From February first, 2099 to March first, 2010, the stock price steadily increased from 89.31 dollars to 233.02 dollars.`;
  let collapse = false;
</script>

<p>
  <strong
    ><a name={key}>Figure 2</a>. Our replication and extension of Audio
    Narrative <Cite content="audioNarrative:siu2022"></Cite> using
    <em>Erie</em>. In addition to the originally offered sequencing and speech
    description, we included options for using different encoding channels (A)
    and playing the scale description (B).</strong
  >
  <button
    class="collapse-button"
    aria-roledescription="Collapse button"
    on:click={() => {
      collapse = !collapse;
    }}>{!collapse ? "Collapse" : "Show"}</button
  >
  <a href="../examples/audioNarrative/" target="_blank">Go to the example</a>
</p>

{#if !collapse}
  <div class="table-wrapper">
    <img src={Figure} {alt} />
  </div>
{/if}
