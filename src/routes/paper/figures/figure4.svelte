<script>
  export let key = "";
  import Figure from "$lib/images/figures/erie-gunman.jpeg";

  let alt = `This figure shows a line chart with several input options on the top and a tooltip on the chart. There are four sections in the input options, from A to D. (A). Toggle the selection interaction. It is a checkbox labeled Play sound when hovered. (B). Toggle the aggregation (mean) for sonification. This is a checkbox labeled Aggregate data (mean). (C). Player options. This consists of two buttons for Play all and Stop. (D). Play each Data Insight items. This consists of seven buttons from 0 to 6.  (E). Hover-based selection interaction. This is the tooltip on the chart. The tooltip content is: 'Data insights No. 5. From November first, 2006 to May first, 2000, the stock price more rapidly increased from 91.66 dollars to 198.08, and then suddenly dropped to 125.92 dollars. Then, it increased rapidly to 188.75 dollars.'`;
  let collapse = false;
</script>

<p>
  <strong
    ><a name={key}>Figure 4</a>. This figure has two sections, A and B. (A).
    Player options. Two buttons for Play and Stop. (B). Visualization. The dots
    and name corresponding to the currently played sound stream are colored red.
    The visualization is a scatterplot for three categories, Las Vegas, Orlando,
    and Automatic Weapon. Each dot indicates the time and index of a gunshot in
    each category. The dots for Las Vegas are colored red. They exhibit a long,
    increasing pattern with short between-dot distances. The dots for Orlando
    are fewer and more spread with larger between-dot distances. The dots for
    Automatic Weapon has a highly regular pattern with the same, short
    between-dot distances. This indicates that the distribution of the Las Vegas
    dots resembles that of the Automatic Weapon dots.</strong
  >
  <button
    class="collapse-button"
    aria-roledescription="Collapse button"
    on:click={() => {
      collapse = !collapse;
    }}>{!collapse ? "Collapse" : "Show"}</button
  >
  <a href="../examples/lasVegasGunMan/" target="_blank">Go to the example</a>
</p>

{#if !collapse}
  <div class="table-wrapper">
    <img src={Figure} {alt} />
  </div>
{/if}
