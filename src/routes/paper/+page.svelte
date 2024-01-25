<script>
  import { onMount } from "svelte";
  import Abstract from "./abstract.svelte";
  import Introduction from "./introduction.svelte";
  import References from "./references.svelte";
  import Background from "./background.svelte";
  import Gaps from "./gaps.svelte";
  import Footnotes from "./footnotes.svelte";
  import Considerations from "./considerations.svelte";
  import Grammar from "./grammar.svelte";
  import Compiler from "./compiler.svelte";
  import Demonstration from "./demonstration.svelte";
  import Discussion from "./discussion.svelte";
  import Conclusion from "./conclusion.svelte";
  import Appendix from "./appendix.svelte";
  import Toc from "./toc.svelte";
  onMount(() => {});
</script>

<svelte:head>
  <title>Erie: A Declarative Grammar for Data Sonification (Web Preprint)</title
  >
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossorigin="anonymous"
  />
</svelte:head>
<div class="container">
  <div class="toc">
    <Toc></Toc>
  </div>
  <main>
    <Abstract></Abstract>
    <Introduction></Introduction>
    <Background></Background>
    <Gaps></Gaps>
    <Considerations></Considerations>
    <Grammar></Grammar>
    <Compiler></Compiler>
    <Demonstration></Demonstration>
    <Discussion></Discussion>
    <Conclusion></Conclusion>
    <Footnotes></Footnotes>
    <References></References>
    <Appendix></Appendix>
  </main>
</div>

<div id="to-top">
  <a href="#toc">Top</a>
</div>

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1400px) {
    .container {
      display: flex;
    }
    .toc {
      width: 380px;
      padding-right: 20px;
    }
    main {
      width: 1000px;
    }
  }
  :global(img) {
    max-width: 100%;
  }
  :global(h1) {
    font-size: 2rem;
    padding-top: 1rem;
  }
  :global(h2) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  :global(h3) {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  :global(h4) {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 600;
  }
  :global(p) {
    max-width: 600px;
    margin-left: 0;
    font-size: 0.9rem;
    color: #454545;
    line-height: 160%;
    font-weight: 400;
  }
  :global(.anchor) {
    color: black;
    text-decoration: none;
  }
  :global(.anchor:hover) {
    color: blue;
    text-decoration: underline;
  }
  :global(.table-wrapper) {
    max-width: 100%;
    overflow-x: scroll;
    font-size: 0.85rem;
  }
  :global(.section-collapse) {
    height: 4rem;
    overflow: hidden;
  }
  :global(.collapse-button) {
    vertical-align: middle;
  }
  :global(code) {
    color: #c40e60;
    background: rgba(0, 0, 0, 0.05);
    font-size: 0.8rem;
  }
  :global(strong) {
    font-weight: 700;
  }
  #to-top {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
</style>
