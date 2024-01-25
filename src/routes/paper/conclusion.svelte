<script>
  import Cite from "./cite.svelte";
  import Ref from "./ref.svelte";
  let collapse = false;
</script>

<section
  id="conclusion"
  aria-roledescription="Conclusion"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="conclusion" href="#conclusion">9. Conclusion</a>
    <button
      class="collapse-button"
      aria-roledescription="Collapse button"
      on:click={() => {
        collapse = !collapse;
      }}>{!collapse ? "Collapse" : "Show"}</button
    >
  </h2>
  <p aria-roledescription="paragraph">
    <em>Erie</em> is a declarative grammar for data sonification design that
    supports expressing audio channels as data encodings.
    <em>Erie</em> supports various auditory encoding channels, such as pitch,
    tapping, and modulation index, and different instruments for sound tones
    like a simple oscillator, musical instruments, and synths. Furthermore, we
    implemented and open-sourced <em>Erie</em>'s spec API, compiler, and player
    for the web audio environment, and they offer extension methods using audio
    filters and custom encoding channels. By providing a variety of examples and
    replicating existing sonification use cases, we demonstrated the
    expressiveness of <em>Erie</em> grammar and the technical feasibility of our
    implementations. We expect <em>Erie</em> to support various data
    sonification research and produce further understanding in auditory
    perception of data, which will in turn help extend <em>Erie</em>'s
    capabilities.
  </p>
</section>
