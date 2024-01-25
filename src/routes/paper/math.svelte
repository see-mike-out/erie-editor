<script>
  import katex from "katex";
  export let content = "";
  export let displayMode = true;

  const options = {
    displayMode: displayMode,
    throwOnError: false,
  };

  $: katexString = katex.renderToString(content, options);
</script>

<div aria-roledescription="equation">
  {@html katexString}
</div>

<style>
  :global(.katex *) {
    font-family: serif !important;
    font-size: 0.85rem !important;
  }
  div {
    max-width: 100%;
    text-align: center;
    margin: 0.25rem auto;
    overflow-x: scroll;
  }
</style>
