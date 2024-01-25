<script>
  import Cite from "./cite.svelte";
  import Reference from "./ref.svelte";
  import Table1 from "./tables/table1.svelte";
  let collapse = false;
</script>

<section
  id="background"
  aria-roledescription="Background and Related Work"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="background" href="#background"
      >2. Background and Related Work</a
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
    This work is grounded in research on data sonification and declarative
    grammars for data representation.
  </p>

  <h3 aria-roledescription="subsection title">
    <a
      class="anchor"
      name="background-sonification"
      href="#background-sonification">2.1. Data Sonification</a
    >
  </h3>
  <p aria-roledescription="paragraph">
    Data sonification or audio graph encodes data values as auditory values <Cite
      content="hermann2008:taxonomy,kramer1997:sonification,scaletti1994:sound"
    ></Cite>. For example, Geiger counter maps ionizing radiation to the
    loudness of a sound. Sonification is considered as one of the primary
    methods for data accessibility or accessible data visualization for people
    with Blindness and Vision Impairment (BVI). For instance, web-based data
    visualization can be coupled with sonification along with alternative text
    descriptions. Yet, accessibility is not the only venue for sonification, but
    various fields, such as scientific data representation
    <Cite content="andrea2005:meteorology,john1999:lifemusic,ghosh2010:particle"
    ></Cite>, data-driven art <Cite content="sonificationArt"></Cite>, and
    public engagement with science (e.g., learning <Cite
      content="tomlinson2017solar"
    ></Cite>, museums <Cite content="walker2006aquarium,dini2023:museum"
    ></Cite>), use data sonification.
  </p>

  <p aria-roledescription="paragraph">
    <strong>Auditory channels.</strong>
    Different auditory channels, such as pitch or volume, are physicalized into a
    waveform. We first describe a few core concepts related to a sound wave:
    <em>frequency</em>
    and <em>amplitude</em>. The frequency of a sound wave refers to the number
    of wave cycles (e.g., a local peak to the next local peak) per second, and
    its unit is hertz (Hz). A sound with a higher frequency has shorter wave
    cycles, and people tend to perceive it as a higher pitch. The amplitude of a
    sound wave means the extent or depth of a waveform. A larger amplitude makes
    a louder sound.
  </p>

  <p aria-roledescription="paragraph">
    Commonly used channels in prior work include pitch, loudness (or volume),
    tapping, timing, panning, timbre, speech, and modulation index <Cite
      content="dubus2013:review"
    ></Cite>.
    <em>Pitch</em> refers to how sound frequency is perceived with an ordered
    scale (low to high; e.g., Do-C, Re-D, Mi-E).
    <em>Loudness</em> means how loud or intense a sound is, often physically
    measured using the unit of decibel.
    <em>Timing</em> is when a sound starts and stops being played; the time
    interval is termed <em>duration</em> (or length).
    <em>(Stereo) panning</em> refers to the unidimensional spatial (left to
    right) position of a sound by controlling the left and right volume of
    two-channel stereo audio.
    <em>Timbre</em> (or instrument, put more casually) means the quality of a
    sound, such as piano sound, synthesizer, bird sound, etc. Modulation-based
    synthesizers (or synths), such as frequency modulation (FM) and amplitude
    modulation (AM), have two oscillators, a carrier for the main sound and a
    modulator that changes the carrier's waveform through some signal processing
    (simply put). A <em>modulation index</em> (MI) for such synths refers to the
    degree of modulation in signal processing. The frequencies of two
    oscillators generate the <em>harmonicity</em> between them.
  </p>

  <p aria-roledescription="paragraph">
    An audio mapping of a non-categorical variable can have a positive or
    negative <em>polarity</em>. A positive polarity scale maps a higher data
    value to a higher audio value (e.g., high pitch, high volume), and a
    negative polarity scale maps a higher data value to a lower audio value.
    While a sonification designer should be able to specify the range of an
    audio scale, audio scales are capped by the physical space. For example, the
    common audible frequency spectrum is known to range from 20 Hz to 20,000 Hz <Cite
      content="audibleSpectrum"
    ></Cite>.
  </p>

  <p aria-roledescription="paragraph">
    <strong>Empirical studies in data sonification for accessibility</strong>
    focus on how people with BVI interpret different auditory mappings. Walker et
    al. <Cite
      content="walker2010:universal,walker2002:magnitude,walker2007:consistency"
    ></Cite> extensively compared how sighted and BVI people perceive various auditory
    channels and the polarity of mappings for different quantitative data variables
    (e.g., dollars, temperature). Recent work extends focus to other qualities of
    auditory mappings. For instance, Hoque et al. <Cite
      content="hoque2023:naturalsound"
    ></Cite> used natural sound (e.g., bird sound) to support enhanced distinction
    between categorical values. Wang et al. <Cite
      content="wang2022:intuitiveness"
    ></Cite> show that BVI readers find certain audio channels to be more intuitive
    given visual encodings (e.g., pitch for bar heights) and given data type (e.g.,
    quantitative, ordinal). In their experiment, participants indicated a need for
    an overview of auditory scales <Cite content="wang2022:intuitiveness"
    ></Cite>. Thus, a sonification grammar should be able to express such
    aspects of an audio graph design definition.
  </p>

  <Table1 key="tab-comparison"></Table1>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="background-toolkits" href="#background-toolkits"
      >2.2. Sonification Tools and Toolkits</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    Prior work has proposed <strong>sonification tools</strong> for
    accessibility support for data visualizations. For example, iSonic <Cite
      content="sonification:zhao2008"
    ></Cite>, a geospatial data analytic tool, offers various audio feedback for
    browsing maps, such as using stereo panning to provide a spatial sense of
    the geospatial data point that a user is browsing. iGraph-Lite <Cite
      content="iGraphLite:ferres2013"
    ></Cite> provides keyboard interaction for reading line charts, and Chart Reader
    <Cite content="thompson2023:chartreader"></Cite> extends this approach to other
    position-based charts and supports author-specified "data insights" that highlight
    certain parts of a given visualization and read out text-based insight descriptions.
    Siu et al. <Cite content="audioNarrative:siu2022"></Cite> propose an automated
    method for splitting a line chart into several sequences and adding a template-based
    alternative text to each sequence. Agarwal et al. <Cite
      content="agarwal:sonify"
    ></Cite> provide a touch-based interaction method for browsing data sonifications
    on mobile phones. While prior sonification research has focused on use of non-speech
    sound, accessibility studies underscore combining speech and non-speech sound
    to design audio charts.
  </p>

  <p aria-roledescription="paragraph">
    Beyond supporting accessibility, others proposed <strong
      >sonification toolkits</strong
    >
    created for developers or creators to directly make data sonifications. This
    prior tooling motivates a design space for sonification toolkits, such as the
    distinction between instrument and audio channels, needs for programming interfaces,
    and the utility of audio filters. However, existing tools often provide compartmentalized
    support for creating expressive and data-driven sonifications as summarized in
    <Reference key="tab-comparison"></Reference>. For example, sonification
    designs supported by DataGoBoop <Cite content="datagoboop"></Cite> and PlayItByR
    <Cite content="playitbyr"></Cite> are strongly tied to underlying chart type
    (e.g., histogram, box plot), limiting the freedom in choosing auditory encoding
    channels. Sonifier.js <Cite content="sonifier,sharif2022:sonifier"></Cite> offers
    limited audio channels, time and pitch. Sonification Sandbox
    <Cite content="walker2003:sandbox"></Cite> and its successors <Cite
      content="walker2021:highchart,wss:kondak2017"
    ></Cite> support more encoding channels, but developers need to use external
    sound editors to sequence or overlay multiple sonifications that they created
    using the interface, requiring a different stack of skills. Furthermore, many
    existing tools lack application programming interface (API) support, making it
    difficult for users to personalize or customize sonification designs with their
    preferred encoding channels or instruments. To achieve greater expressiveness
    with APIs, developers could use audio programming libraries, such as Tone.js
    <Cite content="tonejs"></Cite>, but they have to manually scale data values
    to auditory values, which can be a substantial hurdle for those with limited
    audio skills. These tools also lack support for scale references (e.g.,
    tick, scale description), making it harder to decode audio graphs they
    generate.
  </p>

  <p aria-roledescription="paragraph">
    Our work provides a declarative grammar for data sonification, <em>Erie</em
    >, as a programmatic toolkit and abstraction that developers can use to
    express a wide range of sonification designs.
    <em>Erie</em> supports various common encoding channels (time, duration, pitch,
    loudness, tapping, panning, reverb, and speech), verbal descriptions, tone sampling,
    and composition methods (repeat, sequence, and overlay), making it a good basis
    for use in the development of future sonification software.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="background-grammar" href="#background-grammar"
      >2.3. Declarative Grammar</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    Declarative programming is a programming paradigm where a programmer
    provides an abstract specification (or spec) describing the intended outcome
    and a compiler executes to generate the outcome. In this paradigm,
    declarative grammar defines rules for how to write a program. Many
    data-related fields, such as data visualization and statistics, have widely
    adopted declarative grammars. In data visualization, Wilkinson <Cite
      content="wilkinson:2012grammar"
    ></Cite> proposed the <em>grammar of graphics</em> as a systematic way to
    describe a visualization design specification. Based on the
    <em>grammar of graphics</em>, ggplot2 <Cite content="wickham:ggplot22010"
    ></Cite> for R and D3.js <Cite content="bostock:d32011"></Cite> and Vega stacks
    (Vega <Cite content="satyanarayan:vega2016"></Cite>, Vega-Lite <Cite
      content="satyanarayan:vega-lite2017"
    ></Cite>) for JavaScript are widely used declarative grammars for creating
    general-purpose data visualizations.
  </p>

  <p aria-roledescription="paragraph">
    Declarative grammars add value by providing internal representations and
    compilers for user applications, particularly when directly manipulating the
    targeted physical space is challenging like audio environments for
    sonification <Cite content="joyner2022:challenge"></Cite>. For example, some
    sonification toolkits (e.g., <Cite content="istk:pauletto"></Cite>) adopt
    visual programming languages to allow for visually and interactively
    authoring data sonification, and those visual programming languages are
    backed by some kind of declarative expressions. For example, Quick and Hudak <Cite
      content="donya:haskell2013"
    ></Cite> provide graph-based expressions that allow for specifying constraints
    to automatically generate music. Implementing a sonification from scratch requires
    a sophisticated skill set for controlling electronic audio spaces (e.g., connecting
    audio filters, timing sounds, etc.). To facilitate sonification software development,
    our work contributes a declarative grammar for data sonification,
    <em>Erie</em>, and compilers for web environments built on standard audio
    APIs.
  </p>
</section>
