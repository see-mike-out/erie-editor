<script>
  import Cite from "./cite.svelte";
  import Eq from "./eq.svelte";
  import Ref from "./ref.svelte";
  let collapse = false;
</script>

<section
  id="consideration"
  aria-roledescription="Design Considerations"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="consideration" href="#consideration"
      >4. Design Considerations</a
    >
    <button
      class="collapse-button"
      aria-roledescription="Collapse button"
      on:click={() => {
        collapse = !collapse;
      }}>{!collapse ? "Collapse" : "Show"}</button
    >
  </h2>
  <p aria-roledescription="paragraph">
    Leveraging prior empirical studies, sonification toolkits (<Ref
      key="tab-comparison"
    ></Ref>), and development practices (<Ref key="gaps"></Ref>), we developed
    the <em>Erie</em> grammar and compiler as a toolkit for sonification developers
    with the following considerations in mind.
  </p>
  <p aria-roledescription="paragraph">
    <strong>(C1) Be independent.</strong>
    Many existing sonification libraries that provide APIs are strongly tied to visual
    forms, such that they support sonifying a particular visualization instead of
    authoring a sonification. While this approach can make it easy to generate sounds,
    it prevents sonification creators from exploring the many alternative designs
    one might generate by directly expressing audio graphs. Furthermore, it ignores
    different tasks implied by similar visualization designs. For example, point
    marks can be a scatterplot for assessing correlation or a residual plot for judging
    model fit, potentially calling for different sonification designs. We designed
    the <em>Erie</em> grammar to be independent of visual forms to maximize design
    possibilities.
  </p>
  <p aria-roledescription="paragraph">
    <strong>(C2) Be expressive.</strong>
    To support independently creating various sonification designs, it must be possible
    to express different sound qualities, auditory channels, and combinations of
    multiple sonifications. Expressive toolkits enable researchers and developers
    to navigate a variety of design ideas. Thus, <em>Erie</em> supports specifying
    different sound designs (e.g., instrument types, discrete vs. continuous sounds)
    and different auditory channels for data encoding, and also allows for specifying
    sonification sequences and overlays.
  </p>
  <p aria-roledescription="paragraph">
    <strong>(C3) Be data-driven.</strong>
    Sonification can be a useful tool for enhancing presentations of data in other
    modalities (e.g., visualization), in addition to standing on its own. Creating
    sonification often starts with implementing ad-hoc functions to convert data
    to audio properties as shown earlier. Under the assumption that
    <em>Erie</em>'s users may have limited understanding and skill with respect
    to acoustic engineering and audio programming, it makes more sense to be
    able to declare data-to-audio conversions with a few configuration terms.
    Consequently, we designed <em>Erie</em>'s syntax to express <em>data</em>
    instead of <em>sound</em> by leveraging the
    <em>grammar of graphics</em><Cite content="wilkinson:2012grammar"></Cite> and
    its popular implementations<Cite
      content="wickham:ggplot22010,satyanarayan:vega2016,satyanarayan:vega-lite2017"
    ></Cite>, such as their scale expressions for encoding channels.
  </p>
  <p aria-roledescription="paragraph">
    <strong>(C4) Be extensible.</strong>
    A toolkit may not be able to support all potential cases in advance, particularly
    when the design space is unlimited.
    <em>Erie</em> allows for sampling audio files, configuring FM and AM synths,
    and defining periodic waves (combining multiple sine and cosine waves).
    Furthermore, <em>Erie</em> provides a method to define and connect custom audio
    filters (e.g., distortion, biquad filters) that can have extra auditory encoding
    channels.
  </p>
  <p aria-roledescription="paragraph">
    <strong>(C5) Be compatible with standards.</strong>
    The expressiveness and extensibility criteria are constrained by specific audio
    environments. As different display media affect the resolution of images, sound
    representations are highly sensitive to audio environments, such as processing
    capacities and equipment. Thus, compatibility with the standards of a targeted
    environment is critical, similar to how we use SVG or Canvas for web visualizations.
    We consider two standards for sonification: (1) physical units and (2) rendering
    standards. First, <em>Erie</em>'s queue compiler generates a scheduled list
    of sound items using standard auditory units (e.g., Hz and musical notes for
    pitch, the panning range from <Eq math="1"></Eq> to <Eq math="-1"></Eq>) so
    as to be used in other audio environments (e.g., external music software).
    Our <em>Erie</em> player for web employs the Web Audio and Speech APIs to enable
    cross-browser experience.
  </p>
</section>
