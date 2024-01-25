<script>
  import Cite from "./cite.svelte";
  import Eq from "./eq.svelte";
  import Ref from "./ref.svelte";
  import Footnote from "./footnote.svelte";
  import Math from "./math.svelte";
  import Figure1 from "./figures/figure1.svelte";
  import Table2 from "./tables/table2.svelte";
  import Table3 from "./tables/table3.svelte";
  import Table4 from "./tables/table4.svelte";
  import Table5 from "./tables/table5.svelte";
  let collapse = false;
</script>

<section
  id="grammar"
  aria-roledescription="Erie Grammar"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="grammar" href="#grammar">5. <em>Erie</em> Grammar</a
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
    We formally describe the syntax of the<em>Erie</em> grammar to show how
    <em>Erie</em>
    is designed to be <strong>expressive (C2)</strong> and
    <strong>data-driven (C3)</strong>. At a high level, <em>Erie</em> expresses
    a sonification design using a sound instrument (<em>tone</em>) and mappings
    from data to auditory values (<em>encoding</em> channels). After walking
    through an example case, we describe how <em>Erie</em> expresses a data
    sonification design, including top-level specification, stream, data input
    and transform, tone, encoding, stream composition, and configuration. The
    formal definition of <em>Erie</em> is provided in <Ref
      key="fig-grammar-formal"
    ></Ref>. In describing <em>Erie</em>, we distinguish <em>developer</em>s who
    create sonifications from <em>listener</em>s who listen to sonifications.
    For details, refer to the <Ref key="appendix"></Ref> and
    <a href="https://see-mike-out.github.io/erie-documentation/" target="_blank"
      >the documentation</a
    >. in the Supplementary Material.
  </p>

  <Figure1 key="fig-grammar-formal"></Figure1>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-walkthrough" href="#grammar-walkthrough"
      >5.1. A Walkthrough Example</a
    >
  </h3>
  <p aria-roledescription="paragraph">
    To help imagine how <em>Erie</em> works in specifying a sonification design,
    we introduce a simple auditory histogram for a quantitative data variable,
    <em>miles per gallon</em>
    with a range from five to 50, from a <em>'cars.json'</em> dataset <Cite
      content="vegadataset"
    ></Cite>. In this sonification, <em>miles per gallon</em> is discretized into
    nine bins by five miles, and the bins are communicated by mapping them to time.
    The count (aggregation) of each bin is mapped to pitch.
  </p>

  <p aria-roledescription="paragraph">
    To construct this example using <em>Erie</em>, we first specify the data to
    sonify by providing its URL:
    <Math
      content={`\\textit{data} = \\{ \\textit{url} = \\textit{\\textcolor{gray}{cars.json}} \\}`}
    ></Math>
    Then, we need data <em>transform</em>s for binning and count aggregation.
    The below expression creates bins for the <em>miles per gallon</em>
    <em>field</em>
    using default binning options (<em>auto</em>). This operation defines two
    additional fields for the start and end point of each bin. The expression
    further assigns <em>miles-per-gallon-bin</em> to the name of bucket start
    points (<em>as</em>) and <em>miles-per-gallon-bin-end</em> to the name of
    end points (<em>end</em>).
    <Math
      content={`\\textit{bin}=\\{ \\textit{field}=\\textit{\\textcolor{gray}{miles-per-gallon}}, 
 \\textit{auto}=\\textit{\\textcolor{gray}{true}}, 
  \\textit{as}=\\textit{\\textcolor{gray}{miles-per-gallon-bin}}, 
  \\textit{end}=\\textit{\\textcolor{gray}{miles-per-gallon-bin-end}} \\}`}
    ></Math>
    For the count aggregation, the below expression specifies doing a
    <em>count</em> <em>op</em>eration, and names the resulting field
    <em>count</em>. To count the values for each bucket, this expression sets a
    <em>group-by</em>
    field to the bin start point field (<em>miles-per-gallon-bin</em>) generated
    by the previous bin transform.
    <Math
      content={`\\textit{aggregate}=\\{ \\textit{op}=\\textit{\\textcolor{gray}{count}}, \\textit{as}=\\textit{\\textcolor{gray}{count}},
      \\textit{group-by}=\\textit{\\textcolor{gray}{miles-per-gallon-bin}} \\}`}
    ></Math>

    To have the results of the bin transform feed forward to the count
    aggregation, these two transforms are ordered as:
    <Math content={`\\textit{transform} = [\\textit{bin}, \\textit{aggregate}]`}
    ></Math>
    Applying these transforms to the <em>'cars.json'</em> data results <Ref
      key="tab-grammar-walkthrough-tab"
    ></Ref>.
  </p>

  <Table2 key="tab-grammar-walkthrough-tab"></Table2>

  <p aria-roledescription="paragraph">
    Second, we need to define how to sonify the specified data in terms of
    overall qualities (<em>tone</em>) and auditory mappings (<em>encoding</em>).
    We indicate that the sound should be segmented or discrete:
    <Math
      content={`\\textit{tone} = \\{ \\textit{continued} = \\textit{\\textcolor{gray}{false}} \\}`}
    ></Math>
    Then, we need three encoding channels: when to start each sound (<em
      >time</em
    >), when to end it (<em>time2</em>), and its <em>pitch</em>. The
    <em>time</em>
    channel encodes the bin start points (<em>miles-per-gallon-bin</em>):
    <Math
      content={`\\textit{time} = \\{ \\textit{field}=\\textit{\\textcolor{gray}{miles-per-gallon-bin}}, \\textit{type}=\\textit{\\textcolor{gray}{quantitative}}, \\textit{scale}=\\{\\textit{length}=\\textcolor{gray}{4.5}\\} \\}`}
    ></Math>
    The above expression also specifies that the <em>time</em> channel encodes a
    <em>quantitative</em>
    variable and that the total <em>length</em> of the auditory histogram is
    <em>4.5</em>
    seconds. We want to finish each bin's sound with respect to the bucket's endpoint.
    Because bins' start and end points are in the same unit and scale, we use an
    auxiliary <em>time2</em> channel:
    <Math
      content={`\\textit{time2} = \\{ \\textit{field} = \\textit{\\textcolor{gray}{miles-per-gallon-bin-end}}, \\textit{type}=\\textit{\\textcolor{gray}{quantitative}} \\}`}
    ></Math>
    Note that this <em>time2</em> channel has no <em>scale</em> expression
    because it uses the same scale as the <em>time</em> channel. Next, we encode
    the
    <em>count</em>
    of each bin to a <em>pitch</em> channel in a way that a higher count is
    mapped to a higher pitch (<em>positive</em> <em>polarity</em>), using the
    below expression:
    <Math
    displayMode={false}
      content={`\\textit{pitch} = \\{ \\textit{field} = \\textit{\\textcolor{gray}{count}},  \\textit{type}=\\textit{\\textcolor{gray}{quantitative}}, \\\\
      \\textit{scale}=\\{ \\textit{domain}=\textcolor{gray}{[0, 100]}, \\textit{range}=\\textit{\\textcolor{gray}{[220, 660]}}, \\textit{polarity}=\\textit{\\textcolor{gray}{positive}} \\} \\}`}
    ></Math>
    This expression further specifies that this <em>pitch</em> channel maps a
    <em>domain</em>
    (from 0 to 100) to a pitch frequency <em>range</em> (from 220Hz–A4 note to
    660Hz–A6 note). These three encoding channels are combined as:
    <Math
      content={`\\textit{encoding} = \\{ \\textit{time}, \\textit{time2}, \\textit{pitch} \\}`}
    ></Math>
  </p>

  <p aria-roledescription="paragraph">
    Lastly, the above expressions are combined into a <em>spec</em> as:
    <Math
      content={`\\textit{spec} = \\{ \\textit{data}, \\textit{transform}, \\textit{tone}, \\textit{encoding} \\}`}
    ></Math>
    This <em>spec</em> results in the sonification output shown in <Ref
      key="tab-grammar-walkthrough"
    ></Ref> (see Supplementary Material for the actual audio). The equally-sized
    bins are mapped to the start and end times, and the aggregated counts by each
    bin is mapped to the pitch frequencies.
  </p>

  <Table3 key="tab-grammar-walkthrough"></Table3>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-stream" href="#grammar-stream"
      >5.2. Top-Level Specification and Stream</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    We first define a simple, single data sonification specification in<em
      >Erie</em
    >
    (a <em>spec</em>, hereafter) as a tuple of <em>stream</em>,
    <em>dataset</em>,
    <em>tick</em>, <em>synth</em>, <em>wave</em>, <em>sampling</em>,
    <em>title</em>, <em>description</em>, and <em>config</em>:
    <Math
      content={`\textit{spec} := \\{ \\textit{stream}, \\textit{dataset}, \\textit{tick}, \\textit{synth}, \\textit{wave}, \\textit{sampling}, \\textit{title}, \\textit{description}, \\textit{config} \\}`}
    ></Math>
    The curly brackets <Eq math={`\\{`}></Eq>
    <Eq math={`\\}`}></Eq> indicate a tuple of elements. A <em>stream</em>
    represents a unit sonification design, consisting of <em>data</em> (what to
    sonify), <em>transform</em> (operations to the data), <em>tone</em> (overall
    sound quality), and <em>encoding</em> (mappings from data to sound values):
    <Math
      content={`\\textit{stream} := \\{ \\textit{data}, \\textit{transform}, \\textit{tone}, \\textit{encoding} \\}`}
    ></Math>
    To pre-define and reuse elements in multiple <em>stream</em>, a developer
    can use different lists of named objects for <em>dataset</em>,
    <em>tick</em>,
    <em>synth</em>
    (synthesizers), <em>wave</em> (periodic wave), and <em>sampling</em> (using
    external audio files as a <em>tone</em>). A developer can specify a
    speech-based <em>title</em> and <em>description</em> that are played before
    the audio graph. The <em>config</em> of a <em>spec</em> configures a
    sonification design, such as the speed of speech (<em>speech rate</em>) and
    whether to skip playing the <em>title</em> text (<em>skip title</em>).
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-data" href="#grammar-data"
      >5.3. Data, dataset, and Transform</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    A sonification<em>stream</em> must have data to sonify, and <em>Erie</em>
    supports three methods to do so: providing the <em>URL</em> of a data file,
    providing an array of <em>values</em>, or providing the <em>name</em> of a
    predefined dataset in the <em>dataset</em> object.
    <Math
      content={`\\textit{data} := \\textit{URL}~|~\\textit{values}~|~\\textit{name},`}
    ></Math>
    where the vertical bar sign <Eq math={`|`}></Eq> denotes 'or'. A
    <em>dataset</em>
    object consists of the named definitions of data items using <em>URL</em> or
    <em>values</em>.
    <Math
      content={`\\textit{dataset} := [ \\{ \\textit{name}, \\textit{URL} \\} ~|~ \\{ \\textit{name}, \\textit{values} \\} ]`}
    ></Math>
    The square brackets <Eq math={`[`}></Eq>
    <Eq math={`]`}></Eq> denote a list of elements. After pre-processing the data
    to sonify, a developer may need to perform additional, simple data transforms
    for sonification design purposes, such as the binning for the auditory histogram
    in the walkthrough. The developer can list transform definitions in a
    <em>transform</em>
    object. In the walkthrough, for example, the <em>bin</em> transform created
    new data variables for the start and end points of each bin, and the
    <em>count</em> <em>aggregate</em> reshaped the data with a new variable for the
    count of each bin.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-tone" href="#grammar-tone">5.4. Tone</a>
  </h3>

  <p aria-roledescription="paragraph">
    To set the baseline sound of a sonification stream, a developer needs to
    specify the sound<em>tone</em>. A tone is roughly analogous to a mark or
    glyph in a visualization given that data values are mapped to its properties
    like pitch.
    <em>Erie</em> expresses the <em>tone</em> of a stream using an instrument
    <em>type</em>
    (e.g., piano, FM or AM synth), an indicator of whether a sound is
    <em>continued</em>, and a set of audio <em>filter</em>s.
    <Math
      content={`\\textit{tone} := \\{ \\textit{type}, \\textit{continued}, \\textit{filter} \\}`}
    ></Math>
    An instrument <em>type</em> can be specified by its name, such as 'sawtooth'
    (oscillator) or 'violin', where default is a sinusoidal oscillator in our
    implementation. If a sound is <em>continued</em>, two sound points are
    connected without a pause. For more diverse audio expressions, the developer
    can provide audio <em>filter</em>s like distortion or equalizer.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-encoding" href="#grammar-encoding"
      >5.5. Encoding</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    The<em>encoding</em> of a stream defines how data variables are mapped to
    different auditory properties (e.g., pitch and loudness) of a <em>tone</em>.
    <em>Erie</em> supports three classes of channels: dynamic, conditioned, and
    static. A <em>d</em>ynamic <em>channel</em> encodes a data variable (or
    field) to the respective auditory property. It is defined in terms of a data
    <em>field</em>
    from the <em>stream</em>'s data, the data type of an encoding (<em
      >enc-type</em
    >), its <em>scale</em> details, its <em>ramp</em>ing method, and inline data
    transform options (<em>aggregate</em> and <em>bin</em>):
    <Math
      content={`\\textit{channel}_d := \\{ \\textit{field}, \\textit{enc-type}, \\textit{scale}, \\textit{ramp}, \\textit{aggregate}, \\textit{bin} \\}`}
    ></Math>
    The data type of encoding (<em>enc-type</em>) can be either
    <em>quantitative</em>, <em>ordinal</em>, <em>nominal</em>, or
    <em>temporal</em>, reflecting common data types. For a continuous tone, a
    <em>ramp</em>ing method specifies how to smoothly transition one auditory
    value to another. The transition can be abrupt (no-ramping), linear, and
    exponential. A developer may need to emphasize only certain data values by
    making them sound differently instead of encoding every data value using a
    scale. In the walkthrough, suppose that the developer wants to indicate bins
    with more than 80 counts using a louder sound. Supporting such cases, a
    <em>c</em>onditioned <em>channel</em> has a <em>condition</em> list for
    special values and a <em>value</em> for the others.
    <Math
      content={`\\textit{channel}_c := \\{ \\textit{condition}, \\textit{value}, \\textit{ramp} \\}`}
    ></Math>
    The <em>condition</em> is a list of <em>test</em> conditions and desired
    <em>value</em>s.
    <Math
      content={`\\textit{condition} := [ \\{ \\textit{test}, \\textit{value} \\} ],`}
    ></Math>
    where if a data value meets a <em>test</em> condition, then the specified
    <em>value</em>
    is assigned. Then, the above example can be expressed as:
    <Math
      content={`\\textit{loudness} = \\{ \\textit{value}=\\textit{\\textcolor{gray}{0.5}}, \\textit{condition}=[ \\{ \\textit{test}=\\textcolor{gray}{(\\textit{datum}.\\textit{count}>80)}, \\textit{value}=\\textcolor{gray}{1} \\} ] \\}`}
    ></Math>
    Lastly, a <em>s</em>tatic channel only needs a <em>value</em> (i.e., <Eq
      math={`{channel}_s := \\{ value \\}`}
    ></Eq>).}
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="grammar-encoding-scale"
      href="#grammar-encoding-scale">5.5.1. Scale</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    The<em>scale</em> of a dynamic encoding channel essentially consists of the
    <em>domain</em>
    (data values to map) and <em>range</em> (audio values to be mapped) of the
    mapping. From the walkthrough, the domain of <Eq math={`[0, 100]`}></Eq> and
    the range of <Eq math={`[220, 660]`}></Eq> of the pitch channel compose a linear
    function
    <Eq math={`f(x) = (660-220) \\times \\frac{x}{100} + 220`}></Eq>. There are
    shortcuts for defining a <em>range</em>. When <em>max-distinct</em> is set
    to
    <em>true</em>, then the widest possible range is used (e.g., the lowest to
    highest human-audible pitch). The <em>times</em> multiplies each data value
    by itself to compute auditory values. To verbally describe the scale, a
    developer can provide <em>description</em> using a markup expression (see <Ref
      key="appendix-encoding-reference"
    ></Ref>), analogous to a legend in a visualization. A baseline
    <em>scale</em>
    is formally defined as:
    <Math
      content={`\\textit{scale} := \\{ \\textit{domain}, ( \\textit{range}~|~\\textit{max-distinct}~|~\\textit{times}), \\textit{description} \\}`}
    ></Math>
    For a quantitative variable, the developer can further specify
    <em>scale-type</em>
    (e.g., square-root, log, and exponential), the inclusion of <em>zero</em>
    point, and <em>polarity</em>:
    <Math
      content={`\\textit{scale}_q := \\{ \ldots, \\textit{polarity}, \\textit{scale-type}, \\textit{zero} \\}`}
    ></Math>
    An ellipsis (<Eq math={`\ldots`}></Eq>) denotes the baseline properties.}
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-composition" href="#grammar-composition"
      >5.6. Composition</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    Combining multiple<em>stream</em>s is necessary to create rich auditory data
    narratives (e.g., <Cite
      content="thompson2023:chartreader,audioNarrative:siu2022"
    ></Cite>). For example, a stream for vote share can be repeated to provide
    statistics for different regions. Alternatively, two streams, one for vote
    shares and one for the number of elected officers in a certain region, can
    be sequenced to deliver more information about election results in the
    region. Streams for different polls can be overlaid to support synchronized
    comparison.
    <em>Erie</em> supports expressing data-driven repetition and concatenation-based
    composition.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="grammar-composition-repeat"
      href="#grammar-composition-repeat"
      >5.6.1. Data-driven repetition: Repeat channel</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    Data analysts commonly examine a measure conditional on one or more
    categorical variables. For instance, the developer may want to extend the
    walkthrough case by replicating the auditory histogram by the<em>origin</em>
    of manufacture (i.e., three histograms for U.S.A., Japan, and Europe). To support
    such cases, a <em>repeat</em> channel defines how to repeat a
    <em>stream</em>
    design by one or more data fields. From the previous example, the developer can
    repeat the auditory histogram by the <em>origin</em> and the number of
    <em>cylinders</em>
    (values: 3, 4, 5, 6, and 8):
    <Math
      content={`\\textit{repeat} = \\{ \\textit{field} = \textcolor{gray}{[ \\textit{origin}, \\textit{cylinders} ]} \\}`}
    ></Math>
    In this case, the repeat order is nested, such that the histograms for the cylinder
    values are played for each origin. A <em>repeat</em> channel has a
    <em>speech</em>
    property to indicate whether to speak out the value(s) for each repeated stream.
    If <em>speech</em> is set to <em>true</em> for this example, the repeated
    streams are played as shown in <Ref key="tab-grammar-repeat1"></Ref>.
  </p>

  <Table4 key="tab-grammar-repeat1"></Table4>

  <p aria-roledescription="paragraph">
    Suppose the developer now wants to simultaneously play (i.e., overlay) the
    auditory histograms for different cylinder values to reduce the playtime. To
    do so, the developer can use the <em>by</em> property in the
    <em>repeat</em>
    channel:
    <Math
      content={`\\textit{repeat} = \\{ \\textit{field} = \textcolor{gray}{[ \\textit{origin}, \\textit{cylinders} ]}, \\textit{by} = \textcolor{gray}{[ \\textit{sequence}, \\textit{overlay} ]}, \\textit{speech} = \\textit{\\textcolor{gray}{true}}\\}`}
    ></Math>
    This results in a sonification queue shown in <Ref key="tab-grammar-repeat2"
    ></Ref>.
  </p>

  <Table5 key="tab-grammar-repeat2"></Table5>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="grammar-composition-concat"
      href="#grammar-composition-concat"
      >5.6.2. Concatenation: Sequence and overlay</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    Two or more separate<em>stream</em>s can be combined as a <em>sequence</em>
    (playing one after another) or an <em>overlay</em> (playing all together at
    the same time). To enable these multi-stream compositions, we extend the
    definition of a stream:
    <Math
      content={`\\textit{stream} := \\{ \\textit{data}, \\textit{tone}, \\textit{encoding}, {\\color{blue} \\textit{title}, \\textit{description}, \\textit{config}} \\}`}
    ></Math>
    Consequently, a top-level spec is also redefined as:
    <Math
      content={`\\textit{spec} := \\{ {\\color{blue}(\\textit{stream}~|~\\textit{overlay}~|~\\textit{sequence}), \\textit{transform}}, 
      \\textit{dataset}, \\textit{tick}, \\textit{synth}, \\textit{wave}, \\textit{sampling}, 
      \\textit{title}, \\textit{description}, \\textit{config} \\}`}
    ></Math>
    These extensions allow for specifying the title, description, and configuration
    of each sub-<em>stream</em> as well as global data transforms. The
    <em>config</em>
    object in a sub-<em>stream</em> overrides the top-level <em>config</em>. The
    <em>transform</em>
    object defined in a <em>stream</em> of a <em>sequence</em> is applied after
    the top-level (global) <em>transform</em> object. Then, an <em>overlay</em>
    is formalized as a list of streams, and A <em>sequence</em> is defined as an
    ordered list of streams and overlays:
    <Math
    displayMode={false} content={`\\textit{overlay} := [ \\textit{stream} ] \\\\
\\textit{sequence} := [\\textit{stream} ~|~ \\textit{overlay} ]`}
    ></Math>
    Note that a nested sequence, <Eq math={`[{sequence}, {sequence}]`}></Eq>, is
    also a <em>sequence</em>.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="grammar-configuration" href="#grammar-configuration"
      >5.7. Configuration</a
    >
  </h3>
  <p aria-roledescription="paragraph">
    A<em>config</em> object specifies overall controls for the sonification. For
    example, when a sonification consists of multiple streams that use the same
    auditory encodings and scales, the developer can skip playing the scale
    descriptions for the non-first streams. When a sonification needs more
    musical representation, a developer can change the <em>time-unit</em> from
    seconds (default) to beats. For background, when BPM is 100, one beat
    corresponds to 0.6 seconds (<Eq math={`= 60/100`}></Eq>). In this case, the
    developer can specify the tempo (beat per minute, or BPM) and whether to
    round raw beats to integer beats (e.g., 3.224 to 3). When the time unit of
    sonification is set to beats, then other time-related units are also
    accordingly converted. For instance, the unit for a <em>tap-speed</em> channel
    becomes taps per beat.
  </p>
</section>
