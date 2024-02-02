<script>
  import Ref from "./ref.svelte";

  let collapse = false;
  let list = [
    {
      key: "tab-grammar-walkthrough",
      cap: "An auditory histogram for cars.json data",
    },
    {
      key: "tab-grammar-repeat1",
      cap: "An auditory histogram repeated by Origin and Cylinders (in sequence)",
    },
    {
      key: "tab-grammar-repeat2",
      cap: "An auditory histogram repeated by Origin and Cylinders (in overaly)",
    },
    {
      key: "tab-compiler-scale",
      cap: "An auditory scale example for the histogram",
    },
    {
      key: "tab-demo-sparsity",
      cap: "A sonification design for dataset sparsity",
    },
    {
      key: "tab-demo-kde",
      cap: "A sonification design for kernel density estimation",
    },
    {
      key: "tab-demo-fit",
      cap: "Sonification designs for a residual plot and QQ plot",
    },
  ];
  let examples = [
    {
      key: "fig-demo-narrative",
      link: "../examples/audioNarrative/",
      cap: "Audio Narrative replication",
    },
    {
      key: "fig-demo-reader",
      link: "../examples/chartReader/",
      cap: "Chart Reader replication",
    },
    {
      key: "fig-demo-gunman",
      link: "../examples/lasVegasGunMan/",
      cap: "'Nine Rounds a Second' (NYT article) replication",
    },
  ];
</script>

<section
  id="shortcuts"
  aria-roledescription="The List of Sonifications in this Article"
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="shortcuts" href="#shortcuts"
      >The List of Sonifications in this Article</a
    >
    <button
      class="collapse-button"
      aria-roledescription="Collapse button"
      on:click={() => {
        collapse = !collapse;
      }}>{!collapse ? "Collapse" : "Show"}</button
    >
  </h2>
  {#if !collapse}
    <ul>
      {#each list as item}
        <li>
          <Ref key={item.key}></Ref>. {item.cap}.
        </li>
      {/each}
      {#each examples as item}
        <li>
          <Ref key={item.key}></Ref>. {item.cap}.
          <a href={item.link} target="_blank">Go to the example</a>.
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  li {
    max-width: 600px;
    margin-left: 0;
    font-size: 0.9rem;
    color: #454545;
    line-height: 160%;
    font-weight: 400;
  }
</style>
