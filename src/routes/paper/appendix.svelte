<script>
  import Cite from "./cite.svelte";
  import Eq from "./eq.svelte";
  import Math from "./math.svelte";
  let collapse = false;
</script>

<section
  id="appendix"
  aria-roledescription="Technical Details of Erie"
  class={collapse ? "section-gaps" : ""}
>
  <h2 aria-roledescription="appendix title">
    <a class="anchor" name="appendix" href="#appendix"
      >Appendix A. Technical Details of <em>Erie</em></a
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
    This appendix details the <em>Erie</em> grammar.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="appendix-tone" href="#appendix-tone"
      >A.1. Customizing a Tone</a
    >
  </h3>
  <p aria-roledescription="paragraph">
    The <em>tone</em> of a single sonification design is defined in terms of
    instrument <em>type</em>, whether the sound is <em>continued</em>, and a set
    of audio <em>filter</em>s. To use custom instruments to express diverse
    sonification designs, a developer can define new instruments using
    <em>synth</em>
    (for FM and AM synthesizer), <em>wave</em> (directly defining a wave
    function), and <em>sampling</em> (importing external audio files) objects in
    a top-level spec. The developer can apply custom instruments to the
    <em>tone</em> <em>type</em> and a <em>timbre</em> encoding channel by referencing
    their names.
  </p>

  <p aria-roledescription="paragraph">
    A dataset typically exists as a set of data points; even if it represents a
    continuous distribution, its digital format is a set of approximated data
    points. Thus, a data representation should be able to capture the continuity
    or discreteness between data points (e.g., line chart vs. scatterplot). In
    the walkthrough, for example, we used a <em>discrete</em> (<Eq
      math={`\\textit{continued} = false`}
    ></Eq>) tone to indicate that each sound represents a discrete bin. On the
    other hand, a developer could use a <em>continuous</em> (<Eq
      math={`\\textit{continued} = true`}
    ></Eq>) tone for a sonification of a continuous distribution. A sound is
    <em>discrete</em>
    if it is paused and resumed as auditory values change (e.g., a sound "beep Beep
    BEEP" with varying loudness). A sound is <em>continuous</em> if it is not
    paused as its auditory values change (e.g., a sweeping sound "<Eq
      math={`bee^{C3}-ee^{C\\#3}-{eep}^{D3}`}
    ></Eq>" with increasing pitch).
  </p>

  <p aria-roledescription="paragraph">
    When more artistic sound effects (e.g., dynamic compression, distortion) are
    needed, a developer can apply them using the <em>filter</em> property of a
    <em>tone</em>. A <em>filter</em> object is an ordered list of filter names,
    and each filter is applied after the previous filter, reflecting how audio
    filters are commonly applied to electric sounds.
    <em>Erie</em> considers the properties of an audio filter (e.g., level of compression)
    as encoding channels so that a developer can configure audio filters both statically
    and dynamically (mapped to data variables). Our implementation offers several
    preset filters (e.g., dynamic compressor) and APIs for audio experts to define
    and use custom filters.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="appendix-encoding" href="#appendix-encoding"
      >A.2. Encoding</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    Below, we detail how to indicate specific properties for different encoding
    channels and auxiliary or shortcut properties for diverse sonification
    designs.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="appendix-encoding-time"
      href="#appendix-encoding-time">A.2.1. Expressing time as an encoding</a
    >
  </h4>
  <p aria-roledescription="paragraph">
    Time is to sonification as position is to visualization. An audio graph
    arranges its auditory values along a time axis.
    <em>Erie</em> expresses time as encoding to enable data-driven time control.
    For example, the start time of each sound can be mapped to a certain data variable.
  </p>
  <p aria-roledescription="paragraph">
    The time axis of a sonification encodes data either in terms of the start
    and end times of a sound (<em>time</em> and <em>time2</em>) or the start
    time and duration of a sound (<em>time</em> and <em>duration</em>). On the
    one hand, two data variables sharing the same unit (e.g., monthly lowest and
    highest temperature) can be mapped to start and end times. On the other
    hand, two data variables with different units (e.g., country names and CO2
    emissions) can be mapped to start time and duration.
    <em>Erie</em> supports expressing when a sound starts and ends (<em>time</em
    >
    + <em>time2</em>) or when and how long it is played (<em>time</em> +
    <em>duration</em>).
  </p>
  <p aria-roledescription="paragraph">
    The length of a sonification is also the <em>range</em> of its time channel.
    Thus, <em>Erie</em> provides another shortcut, <em>length</em>, for the
    <em>range</em>
    of time scale (i.e., <Eq math={`[0, \\textit{length}]`}></Eq>). When there
    is no need to encode end time or duration, <em>time</em> channel can have
    <em>band</em> to set the duration of each sound uniformly (for discrete tones).
  </p>
  <p aria-roledescription="paragraph">
    <em>Erie</em> makes a distinction between <em>when a sound starts</em> (the
    value of the <em>time</em> channel) and <em>how a sound is timed</em> in
    relation to other sounds (<em>timing</em>). For example, a developer wants a
    sound to be played after the previous sound (<em>relative</em>), to start on
    an exact time (<em>absolute</em>), or to start with the other sounds (<em
      >simultaneous</em
    >). To control how a <em>time</em> channel assigns times, the developer can
    use the <em>timing</em> property of the <em>time</em> channel's scale. The
    above extensions to the <em>time</em> channel's scale is formalized as:
    <Math
      content={`\\textit{scale}_{\\textit{time}} := \\{ \\ldots, \\textit{timing}, \\textit{length}, \\textit{band} \\}`}
    ></Math>
  </p>

  <p aria-roledescription="paragraph">
    These time-related channels and the <em>timing</em> option produce the following
    high-level combinations:
  </p>

  <p aria-roledescription="paragraph">
    <em>Case 1</em>: <Eq
      math={`\\textit{time}(\\textit{field}=x, \\textit{scale.band}=\\textit{n})`}
    ></Eq>. A <em>time</em> channel with a fixed <em>scale.band</em> value
    defines sounds with a fixed duration (<Eq math={`n`}></Eq>) and start times
    varied by the encoded data variable (<Eq math={`x`}></Eq>). If
    <em>scale.timing</em>
    is <em>simultaneous</em>, then all of the sounds are played at the same
    time.
  </p>

  <p aria-roledescription="paragraph">
    <em>Case 2</em>: <Eq
      math={`\\textit{time}(\\textit{field}=x) + \\textit{duration}(\\textit{field}=y)`}
    ></Eq>. Using both <em>time</em> and <em>duration</em> channels defines sounds
    with varying durations and start times.
  </p>

  <p aria-roledescription="paragraph">
    <em>Case 3</em>: <Eq
      math={`\\textit{time}(\\textit{field}=x, \\textit{scale.timing}=absolute)
    + \\textit{time2}(\\textit{field}=y)`}
    ></Eq>. A <em>time</em> channel with
    <em>absolute</em> <em>timing</em> and a <em>time2</em> channel specify
    sounds with varying start and end times. Note that the two fields mapped to
    the <em>time</em> and <em>time2</em> channel must be defined on the same data
    unit, such as bin start and endpoints.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="appendix-encoding-channel"
      href="#appendix-encoding-channel">A.2.2. Channel-specific properties</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    Specific auditory encoding channels may have different physical constraints
    that need channel-specific properties in addition to the above definition.
    <em>Erie</em> considers such physical constraints in defining encodings for
    canonical auditory channels. For example, <em>pitch</em> can have raw pitch
    frequency values or have them rounded to musical notes. To enable this
    rounding, a developer can set <em>round-to-note</em> to <em>true</em> for
    the <em>pitch</em> channel.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="appendix-encoding-reference"
      href="#appendix-encoding-reference"
      >A.2.3. Providing auditory reference elements</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    <em>Tick for time channel</em>. A longer sonification may need to provide a
    sense of the progression of time as Cartesian plots have axis ticks and
    grids. To do so, a developer could use a <em>tick</em> sound that repeats
    every certain time interval. The developer can define a <em>tick</em>
    directly in the <em>time</em> channel or refer to a tick definition in the
    top-level <em>tick</em>.
  </p>
  <p aria-roledescription="paragraph">
    <em>Scale description markup</em>. As we use legends for data
    visualizations, it is important to provide the overview of the scales used
    in a sonification~<Cite content="wang2022:intuitiveness"></Cite>. The
    <em>description</em>
    of a scale can be skipped, defined as a default audio legend set by a compiler,
    or customized. To customize a scale description, <em>Erie</em>
    employs a markup expression that can express literal texts, audio legends (<em
      ><sound></sound></em
    >), a list of items (<em><list></list></em>), and reserved keywords, such as
    <em><domain.min></domain.min></em>
    (for the minimum domain value) and <em><field></field></em> (for the data
    field's name). A developer can also pass a number or date-time
    <em>format</em> in the channel definition.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="appendix-encoding-inline"
      href="#appendix-encoding-inline">A.2.4. Inline transform</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    Inspired by Vega-Lite~<Cite content="satyanarayan:vega-lite2017"></Cite>, it
    is possible to provide an inline data transform: <em>aggregate</em> or
    <em>bin</em>. This is a shortcut for defining a corresponding
    <em>transform</em>
    item and use the resulting variables in the channel's <em>field</em>. For
    example, the separately defined transforms in the walkthrough can be
    rewritten as:
    <Math
      displayMode={false}
      content={`\\textit{time}  =\\{\\textit{field}=\\textit{\\textcolor{gray}{miles-per-gallon}}, \\textit{bin}=\\textit{\\textcolor{gray}{true}}, \\cdots\\} \\\\
\\textit{pitch} = \\{\\textit{aggregate}=\\textit{\\textcolor{gray}{count}}, \\cdots\\}`}
    ></Math>
  </p>
</section>
