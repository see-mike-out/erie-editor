<script>
  import Cite from "./cite.svelte";
  import Ref from "./ref.svelte";
  let collapse = false;
</script>

<section id="discussion" aria-roledescription="Discussion">
  <h2 aria-roledescription="section title">
    <a class="anchor" name="discussion" href="#discussion">8. Discussion</a>
    <button
      class="collapse-button"
      aria-roledescription="Collapse button"
      on:click={() => {
        collapse = !collapse;
      }}>{!collapse ? "Collapse" : "Show"}</button
    >
  </h2>
  {#if !collapse}
    <p aria-roledescription="paragraph">
      We contribute <em>Erie</em>, a declarative grammar for data sonification,
      with five design goals: independence as a sonification grammar,
      expressiveness, data-driven syntax, compatibility with audio standards,
      and extensibility of functionalities. Below, we briefly discuss remaining
      technological challenges, and then we motivate future sonification
      research that could use <em>Erie</em>.
    </p>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="discussion-hurdle" href="#discussion-hurdle"
        >8.1. Technological Hurdles</a
      >
    </h3>
    <p aria-roledescription="paragraph">
      While developing <em>Erie</em>, we faced two major technical hurdles in
      using the Web Audio and Speech APIs. First, there is no standard API that
      can capture (i.e., generating pure audio files from the source) the sound
      generated using those APIs. Instead, users need to use third-party audio
      capture applications or record sound as it is being played out of the
      device (which also records room noise and causes distortions due to audio
      feedback). Thus, we implemented
      <a href="https://github.com/see-mike-out/erie-chrome-ext" target="_blank"
        >a workaround Chrome extension</a
      >
      using Chrome-specific APIs. Second, speech sounds generated using the Web Speech
      API cannot overlap which limits <em>Erie</em>'s expressiveness, such as
      the potential to overlay different streams with speeches and tones. Thus,
      related technological extensions to those APIs could help express a more
      diverse set of audio graphs.
    </p>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="discussion-potential" href="#discussion-potential"
        >8.2. Potential Use Cases of <em>Erie</em></a
      >
    </h3>
    <p aria-roledescription="paragraph">
      We expect our implementation of <em>Erie</em> (compiler, player, and
      extension APIs) to facilitate various future work on data sonification
      research and tooling. In addition to the use cases like sonification for
      detecting model fit (which might be extended to properties like model
      convergence), sonification authoring applications, and popular media (<Ref
        key="demonstration"
      ></Ref>), future sonification research could use <em>Erie</em> to ask
      questions related to, for example, perceptual intuitiveness and
      effectiveness of different sonification strategies (e.g., <Cite
        content="wang2022:intuitiveness,walker2010:universal"
      ></Cite>). Given that sonification design specs expressed in <em>Erie</em>
      can be parameterized as a declarative grammar, sonification researchers could
      use <em>Erie</em> to more systematically generate different stimuli
      according to their experiment conditions. Such research will expand
      understanding around which audio graph formats are best suited for
      different tasks or auditorily pleasant, providing foundations for building
      intelligent tools like sonification recommenders. Furthermore, future
      sonification tools for data analysis or narrative authoring could use
      <em>Erie</em>
      as their internal representation to maintain user-specified designs. To support
      sonification researchers and developers to test out <em>Erie</em>, we
      provide
      <a href="https://github.com/see-mike-out/erie-chrome-ext" target="_blank"
        >an online editor for <em>Erie</em></a
      >.
    </p>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="discussion-future" href="#discussion-future"
        >8.3. Future Work</a
      >
    </h3>
    <p aria-roledescription="paragraph">
      <em>Erie</em> is our first step of an expressive declarative grammar for
      data sonification. Future work should extend <em>Erie</em> to support more
      dynamic use cases, such as interactivity, streaming data, and different audio
      environments.
    </p>
    <p aria-roledescription="paragraph">
      <em>Interactive sonification</em>. Interactivity is often necessary for
      data analysis because one static data representation cannot provide a full
      picture. While it is possible to use <em>Erie</em> in interactive user
      interfaces with customizability as we demonstrated (<Ref
        key="demonstration-replication"
      ></Ref>), <em>Erie</em> could better support interactive data sonification
      with native expressions. A prerequisite to developing an interactive
      grammar for data sonification is some understanding of how a sonification
      listener would trigger a user interaction and receive its feedback using
      different modalities. For instance, various approaches to using a
      keyboard, speech recognition, tabletop screens, or mobile haptic screens
      for interactive sonification are fruitful topics like personalized
      sonifications for future research to explore (e.g., <Cite
        content="agarwal:sonify,chundury2023:tactualplot"
      ></Cite>).
    </p>
    <p aria-roledescription="paragraph">
      <em>Expressing sonifications for streaming data</em>. Sonification has
      been used for various real-time streamed data from traditional Geiger
      counters to audio graphs for physics <Cite content="ghosh2010:particle"
      ></Cite>. While it is relatively simple for visualization to show existing
      data points and newly received data points, sonification-based tools may
      need to build a notion of "existing" given the transient characteristic of
      sound. For example, a visualization dashboard can express newly received
      data by adding corresponding visual marks, and the viewers can easily
      compare them with the existing visual marks. However, a sonification
      monitor may need to play sounds for some past data points, announce the
      auditory scales, or use notifications for some signals, depending on the
      task that the listeners want to achieve. Thus, future work should ask how
      to indicate and contextualize newly arrived data points, what portion of
      existing data points should be played again if needed, and how to
      auditorily imply that a system is waiting on new data.
    </p>
    <p aria-roledescription="paragraph">
      <em>Supporting different audio environments</em>. Data sonification can
      also be useful for other environments like statistical programming and
      server-side applications. For example, <em>Erie</em> player for R Studio
      (a popular integrated development environment for R) could benefit
      building tools for statistical sonifications like those described above.
      As R Studio is backed by Chromium (the same web engine for Chrome and
      Edge),
      <em>Erie</em>'s web player may need to be extended slightly to support
      this environment. To support server-side production of data sonifications,
      direct generation of raw pulse-code modulation data (digital
      representation of analog signals) <Cite content="pcm"></Cite> would be useful.
    </p>
    <p aria-roledescription="paragraph">
      <em>Intelligent authoring tools for data sonification</em>. As a
      declarative grammar, <em>Erie</em> can make it easier to create data
      sonifications by allowing developers to declare sonification designs with
      a few keywords rather than leaving them tedious jobs like inspecting
      online code and adjusting it to get ad-hoc solutions. To design effective
      data sonifications, developers still need to learn relevant knowledge from
      empirical studies, just as being able to use visualization grammars like
      D3.js <Cite content="battle2022:d3"></Cite>, Vega-Lite <Cite
        content="satyanarayan:vega-lite2017"
      ></Cite>, and ggplot2 <Cite content="wickham:ggplot22010"></Cite> do not necessarily
      mean one can easily create effective visualizations. To support developers
      in authoring useful sonifications, future work could explore more intelligent
      approaches like automated design recommenders for different purposes like data
      analytics, data journalism, and data art.
    </p>

    <h3 aria-roledescription="subsection title">
      <a
        class="anchor"
        name="discussion-limitations"
        href="#discussion-limitations">8.4. Limitations</a
      >
    </h3>

    <p aria-roledescription="paragraph">
      While our primary contribution is the <em>Erie</em> grammar, a usable
      player could make it easier to learn the grammar and apply it to different
      applications. We provide an online player for sonifications backed by
      <em>Erie</em>
      with baseline functionalities like playing a single queue and showing audio
      queue tables. As <em>Erie</em> is an open-source project, extensions for
      more player controls (e.g., playing a single sound) could benefit
      sonification developers and users with respect to debugging and
      navigation. Next, intending <em>Erie</em> as a low-level toolkit for
      sonification developers to use, we prioritized independence from
      visualization, expressiveness, and compatibility with audio programming
      standards. As <em>Erie</em> is not a walk-up-and-use tool, future work could
      benefit from reflecting on use cases from longer term observations of developer
      communities.
    </p>
  {/if}
</section>
