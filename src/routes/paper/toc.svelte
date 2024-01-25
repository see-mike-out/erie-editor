<script>
  const list = [
    { anchor: "abstract", index: "", name: "Abstract", level: 1 },
    {
      anchor: "introduction",
      index: "Section 1",
      name: "Introduction",
      level: 1,
    },
    {
      anchor: "background",
      index: "Section 2",
      name: "Background and Related Work",
      level: 1,
    },
    {
      anchor: "background-sonification",
      index: "Section 2.1",
      name: "Data Sonification",
      level: 2,
    },
    {
      anchor: "background-toolkits",
      index: "Section 2.2",
      name: "Sonification Tools and Toolkits",
      level: 2,
    },
    {
      anchor: "background-grammar",
      index: "Section 2.3",
      name: "Declarative Grammar",
      level: 2,
    },
    {
      anchor: "gaps",
      index: "Section 3",
      name: "Gaps in Sonification Development Practices",
      level: 1,
    },
    {
      anchor: "consideration",
      index: "Section 4",
      name: "Design Considerations",
      level: 1,
    },
    {
      anchor: "grammar",
      index: "Section 5",
      name: "<em>Erie</em> Grammar",
      level: 1,
    },
    {
      anchor: "grammar-walkthrough",
      index: "Section 5.1",
      name: "A Walkthrough Example",
      level: 2,
    },
    {
      anchor: "grammar-stream",
      index: "Section 5.2",
      name: "Top-Level Specification and Stream",
      level: 2,
    },
    {
      anchor: "grammar-data",
      index: "Section 5.3",
      name: "Data, dataset, and Transform",
      level: 2,
    },
    { anchor: "grammar-tone", index: "Section 5.4", name: "Tone", level: 2 },
    {
      anchor: "grammar-encoding",
      index: "Section 5.5",
      name: "Encoding",
      level: 2,
    },
    {
      anchor: "grammar-encoding-scale",
      index: "Section 5.5.1",
      name: "Scale",
      level: 3,
    },
    {
      anchor: "grammar-composition",
      index: "Section 5.6",
      name: "Composition",
      level: 2,
    },
    {
      anchor: "grammar-composition-repeat",
      index: "Section 5.6.1",
      name: "Data-driven repetition: Repeat channel",
      level: 3,
    },
    {
      anchor: "grammar-composition-concat",
      index: "Section 5.6.2",
      name: "Concatenation: Sequence and overlay",
      level: 3,
    },
    {
      anchor: "grammar-configuration",
      index: "Section 5.7",
      name: "Configuration",
      level: 2,
    },
    { anchor: "compiler", index: "Section 6", name: "Compiler", level: 1 },
    {
      anchor: "complier-preset",
      index: "Section 6.1",
      name: "Supported Presets",
      level: 2,
    },
    {
      anchor: "complier-specAPI",
      index: "Section 6.2",
      name: "Spec API",
      level: 2,
    },
    {
      anchor: "complier-queue",
      index: "Section 6.3",
      name: "Queue Compiler",
      level: 2,
    },
    {
      anchor: "complier-player",
      index: "Section 6.4",
      name: "Player for Web",
      level: 2,
    },
    {
      anchor: "complier-extension",
      index: "Section 6.5",
      name: "Filter and Channel Extension",
      level: 2,
    },
    {
      anchor: "demonstration",
      index: "Section 7",
      name: "Demonstration",
      level: 1,
    },
    {
      anchor: "demonstration-example",
      index: "Section 7.1",
      name: "Example Sonification Designs",
      level: 2,
    },
    {
      anchor: "demonstration-example-sparsity",
      index: "Section 7.1.1",
      name: "Data sparsity",
      level: 3,
    },
    {
      anchor: "demonstration-example-kde",
      index: "Section 7.1.2",
      name: "Kernel density estimation",
      level: 3,
    },
    {
      anchor: "demonstration-example-fit",
      index: "Section 7.1.3",
      name: "Model fit sequence",
      level: 3,
    },
    {
      anchor: "demonstration-replication",
      index: "Section 7.2",
      name: "Example Sonification Designs",
      level: 2,
    },
    {
      anchor: "demonstration-replication-narrative",
      index: "Section 7.2.1",
      name: "Audio Narrative",
      level: 3,
    },
    {
      anchor: "demonstration-replication-reader",
      index: "Section 7.2.2",
      name: "Chart Reader",
      level: 3,
    },
    {
      anchor: "demonstration-replication-gunman",
      index: "Section 7.2.3",
      name: "Nine Rounds a Second",
      level: 3,
    },
    { anchor: "discussion", index: "Section 8", name: "Discussion", level: 1 },
    {
      anchor: "discussion-hurdle",
      index: "Section 8.1",
      name: "Technological Hurdles",
      level: 2,
    },
    {
      anchor: "discussion-potential",
      index: "Section 8.2",
      name: "Potential Use Cases of <em>Erie</em>",
      level: 2,
    },
    {
      anchor: "discussion-future",
      index: "Section 8.3",
      name: "Future Work",
      level: 2,
    },
    {
      anchor: "discussion-limitations",
      index: "Section 8.4",
      name: "Limitations",
      level: 2,
    },
    { anchor: "conclusion", index: "Section 9", name: "Conclusion", level: 1 },
    { anchor: "footnotes", index: "", name: "Footnotes", level: 1 },
    { anchor: "references", index: "", name: "References", level: 1 },
    {
      anchor: "appendix",
      index: "Appendix A",
      name: "Technical Details of <em>Erie</em>",
      level: 1,
    },
    {
      anchor: "appendix-tone",
      index: "Appendix A.1",
      name: "Customizing a Tone",
      level: 2,
    },
    {
      anchor: "appendix-encoding",
      index: "Appendix A.2",
      name: "Encoding",
      level: 2,
    },
    {
      anchor: "appendix-encoding-time",
      index: "Appendix A.2.1",
      name: "Expressing time as an encoding",
      level: 3,
    },
    {
      anchor: "appendix-encoding-channel",
      index: "Appendix A.2.2",
      name: "Channel-specific properties",
      level: 3,
    },
    {
      anchor: "appendix-encoding-reference",
      index: "Appendix A.2.3",
      name: "Providing auditory reference elements",
      level: 3,
    },
    {
      anchor: "appendix-encoding-inline",
      index: "Appendix A.2.4",
      name: "Inline transform",
      level: 3,
    },
  ];
  let collapse = false;
</script>

<section
  id="toc"
  aria-roledescription="Table of Contents"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="toc" href="#toc">Table of Contents</a>
    <button
      class="collapse-button"
      aria-roledescription="Collapse button"
      on:click={() => {
        collapse = !collapse;
      }}>{!collapse ? "Collapse" : "Show"}</button
    >
  </h2>
  <nav>
    {#each list as item, i}
      <div class={"toc-item toc-item-" + item.level}>
        <a href={"#" + item.anchor}
          >{item.index ? item.index + "." : ""}
          {@html item.name}</a
        >
      </div>
    {/each}
  </nav>
</section>

<style>
  nav {
    height: 300px;
    overflow: scroll;
  }
  @media screen and (min-width: 1400px) {
    section {
      position: sticky;
      top: 0;
      padding-top: 0.5rem;
    }
    nav {
      height: calc(100vh - 5rem);
      overflow: scroll;
    }
  }
  .toc-item {
    padding: 0.25rem;
    border-bottom: 1px solid #ddd;
  }
  .toc-item-2 {
    background-color: rgba(0, 0, 0, 0.03);
    padding-left: 0.75rem;
  }
  .toc-item-3 {
    background-color: rgba(0, 0, 0, 0.06);
    padding-left: 1.5rem;
  }
</style>
