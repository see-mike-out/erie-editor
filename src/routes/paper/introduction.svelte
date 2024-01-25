<script>
  import Cite from "./cite.svelte";
  let collapse = false;
</script>

<section
  id="introduction"
  aria-roledescription="Introduction"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="introduction" href="#introduction"
      >1. Introduction</a
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
    Data sonification maps data variables (e.g., height, weight) to auditory
    variables (e.g., pitch, loudness) <Cite
      content="hermann2008:taxonomy,kramer1997:sonification,scaletti1994:sound"
    ></Cite>. Sonification plays an important role in domains such as data
    accessibility, scientific observation, data-driven art, and museum
    exhibitions <Cite content="supper2014:sublime"></Cite>. For people with
    Blindness or Vision Impairment (BVI), sonification makes it possible to
    access data presented on screen. In science museums or digital news
    articles, data sonifications can support authoring more immersive data
    narratives by diversifying cues.
  </p>
  <p aria-roledescription="paragraph">
    While sonification designs vary with their intended purposes, creating data
    sonification is often laborious because of limited software-wise support for
    auditory channels, compared to a robust set of expressive visualization
    toolkits (e.g., D3 <Cite content="bostock:d32011"></Cite>, ggplot2 <Cite
      content="wickham:ggplot22010"
    ></Cite>). An ability to express diverse designs helps creators and
    developers to be less constrained in making their artifacts. Due to a lack
    of expressive tools for data sonification, however, many prior empirical
    works in accessible visualization rely on more hand-crafted methods (e.g.,
    using Garage Band by Wang et al. <Cite content="wang2022:intuitiveness"
    ></Cite>) or solution-specific approaches (e.g., Hoque et al. <Cite
      content="hoque2023:naturalsound"
    ></Cite>). For example, Sonification Sandbox <Cite
      content="walker2003:sandbox"
    ></Cite>'s authoring interface for data sonifications does not support
    expressing a sequence or overlay of multiple sonifications. Creators of
    artistic sonifications or data stories need to use additional audio
    processing software to combine those sonifications, which requires a
    different set of skills. Furthermore, those tools are not programmatically
    available, so it is hard to apply them to use cases with data updates or
    user interactions. While several R and JavaScript libraries support creating
    data sonifications (e.g., DataGoBoop <Cite content="datagoboop"></Cite>,
    PlayItByR <Cite content="playitbyr"></Cite>, Sonifier.JS <Cite
      content="sonifier"
    ></Cite>), they are tightly bound to the associated visualization's chart
    type (e.g., histogram, boxplot) or support few encoding channels (e.g.,
    pitch only), limiting authors' potential to compose diverse data
    sonification designs.
  </p>
  <p aria-roledescription="paragraph">
    To facilitate research and tool development for data sonification, we
    contribute <em>Erie</em>, a declarative grammar for data sonification. We
    developed <em>Erie</em> with the goal of supporting independence from visual
    graphs, expressiveness, data-driven expression, compatibility with standard
    audio libraries, and extensibility with respect to sound design and
    encodings. At high level, <em>Erie</em>'s syntax specifies a sonification
    design in terms of <em>tone</em> (the overall quality of a sound) and
    <em>encoding</em>
    (mappings from data variables to auditory features).
    <em>Erie</em> supports various <em>tone</em> definitions: oscillator, FM
    (frequency modulation) and AM (amplitude modulation) synthesizer, classical
    instruments, periodic wave form, and audio sampling. Authors can specify
    various auditory <em>encoding</em> channels, such as time, duration, pitch,
    loudness, stereo panning, tapping (speed and count), and modulation index.
    Authors can also use <em>Erie</em> to express a composition combining
    multiple sonifications via repetition, sequence, and overlay. Our
    open-sourced <em>Erie</em> player for web environments supports rendering a
    specified sonification on web browsers using the standard Web Audio and
    Speech APIs.
    <em>Erie</em>'s queue compiler generates an <em>audio queue</em> (a
    scheduled list of sounds to be played), providing the potential for
    extending <em>Erie</em> to other audio environments like C++ and R.
  </p>
  <p aria-roledescription="paragraph">
    We demonstrate <em>Erie</em>'s expressiveness by replicating accessibility
    and general-purpose sonification designs proposed by prior work (e.g., Audio
    Narrative <Cite content="audioNarrative:siu2022"></Cite>, Chart Reader <Cite
      content="thompson2023:chartreader"
    ></Cite>, and news articles <Cite content="vegas"></Cite>). We provide an
    interactive gallery with a variety of example sonification designs. We
    conclude by outlining necessary future work for <em>Erie</em>, including
    technological hurdles, potential use cases, and blueprints for supporting
    interactivity and streaming data.
  </p>
</section>
