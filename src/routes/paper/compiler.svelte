<script>
  import Cite from "./cite.svelte";
  import Ref from "./ref.svelte";
  import Eq from "./eq.svelte";
  import Table6 from "./tables/table6.svelte";
  import CodeViewer from "../../tester-components/code-viewer.svelte";
  let collapse = false;
</script>

<section id="compiler" aria-roledescription="Erie Compiler and Player for Web">
  <h2 aria-roledescription="section title">
    <a class="anchor" name="compiler" href="#compiler"
      >6. <em>Erie</em> Compiler and Player for Web</a
    >
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
      A family of compilers and renderers for declarative grammar produces the
      output as expressed in a design spec. For<em>Erie</em>, a
      <em>queue compiler</em>
      compiles a spec to an <em>audio queue</em> representing a schedule of
      sounds to be played in terms of their physical values. Then, a
      <em>player</em>
      renders this audio queue into actual sounds. We separate the queue compiler
      from the player to allow listeners to control when to play or pause a sonification
      and to support developing players for different audio environments, such as
      CSound
      <Cite content="csound"></Cite>. We implemented and open-sourced a spec
      API, a queue compiler, and
      <a href="https://github.com/see-mike-out/erie-web" target="_blank"
        >a player for a web environment</a
      >
      using web standard APIs in JavaScript (<strong
        >C5: Compatibility with standards</strong
      >).
    </p>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="compiler-preset" href="#compiler-preset"
        >6.1. Supported Presets</a
      >
    </h3>

    <p aria-roledescription="paragraph">
      Compilers and renderers of declarative grammar often provide default
      presets.
      <em>Erie</em> compiler and player offer the following presets.
    </p>
    <p aria-roledescription="paragraph">
      <strong>Data and data transform.</strong>
      <em>Erie</em>'s compiler supports multidimensional data in a relational
      table form (e.g., CSV, JSON). Since we assume that a developer has done
      fundamental data processing and transforms (e.g., fitting a regression
      model), our compiler supports a minimum set of data transform types that
      include aggregation, binning, kernel density estimation, folding (columns
      to rows; e.g., <Eq
        math={`[\\{A: 1, B: 2\\}] \\rightarrow [\\{key: A, value: 1\\}, \\{key: B, value: e\\}]`}
      ></Eq>), filtering, and calculation.
    </p>
    <p aria-roledescription="paragraph">
      <strong>Instrument types.</strong>
      Our web player supports musical instruments (classical piano, electronic piano,
      violin, guitar, metal guitar, clap, hi-hat, high-kick, low-kick), noises (white,
      pink, and brown), simple oscillators (sine, sawtooth, triangle, and square
      forms), configurable FM and AM synths, and periodic waves.
    </p>
    <p aria-roledescription="paragraph">
      <strong>Audio filters.</strong>
      Our web player offers preset filters such as a dynamic compressor, a distortion
      filter, an envelope node, and various types of biquad filters. These filters
      can be chained in the <em>tone</em> of a <em>stream</em>.
    </p>
    <p aria-roledescription="paragraph">
      <strong>Encoding channels.</strong>
      Our queue compiler handles <em>time</em>, <em>time2</em>,
      <em>duration</em>,
      <em>tap-speed</em>, <em>tap-count</em>, <em>pitch</em>, <em>detune</em>,
      <em>pan</em>, <em>loudness</em>,
      <em>timbre</em>, <em>post-reverb</em>, <em>modulation</em> index,
      <em>harmonicity</em>, <em>speech-before</em>,
      <em>speech-after</em>, and <em>repeat</em> channels. Different audio
      filters can have extra encoding channels. For example, a lowpass biquad
      filter attenuates frequencies above a certain cutoff, and it can have a
      <em>biquad-frequency</em>
      channel to set the cutoff.
    </p>
    <p aria-roledescription="paragraph">
      <strong>Scale descriptions.</strong>
      <em>Erie</em>'s queue compiler generates a description of each scale to
      give an overview of the sonification. A scale description functions as an
      auditory legend in a sonification. For example, the scales of the
      <em>time</em>
      and
      <em>pitch</em>
      channels from the walkthrough is auditorily described as shown in <Ref
        key="tab-compiler-scale"
      ></Ref>.
    </p>

    <Table6 key="tab-compiler-scale"></Table6>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="compiler-specAPI" href="#compiler-specAPI"
        >6.2. Spec API</a
      >
    </h3>

    <p aria-roledescription="paragraph">
      We implemented<em>Erie</em> syntax in JavaScript. For example, the spec of
      the walkthrough can be written as below.
    </p>

    <CodeViewer
      autoHeight={true}
      containerId="code-compiler-1"
      code={`// Create a spec object as a single stream.
let spec = new Stream();
// Assign the data URL to the spec.
spec.data("url", "cars.json");
// Add the bin transform
let bin = new Bin("miles-per-gallon"); 
bin.as("miles-per-gallon-bin", "miles-per-gallon-bin-end").nice(true); // as/end names -> "auto" binnig
spec.transform.add(bin);
// Add the count aggregation
let aggregate = new Aggregate(); 
// setting operation and the new field name -> setting group-by
aggregate.add("count", "count").groupby(["miles-per-gallon"]);
spec.transform.add(aggregate);
// Set the tone of the stream.
spec.tone.continued(false);
// encodings
// Set the time channel for the "quantitative" field "miles-per-gallon-bin".
// Set the timing to absolute.
spec.encoding.time.field("miles-per-gallon-bin", "quantitative")
                  .scale("timing", "absolute").scale("length", 4.5);
// Set the time2 channel for the field "miles-per-gallon-bin-end".
spec.encoding.time2.field("miles-per-gallon-bin-end");
// Set the pitch channel for the "quantitative" field "count".
spec.encoding.pitch.field("count", "quantitative")
                    .scale("domain", [0, 100]).scale("range", [220, 660]).scale("polarity", "positive");`}
      language="javascript"
    />

    <p aria-roledescription="paragraph">
      This spec is equivalent to the following JSON object, which can be
      obtained via the <code>get</code> method of the spec API. This JSON syntax
      reuses some Vega-Lite <Cite content="satyanarayan:vega-lite2017"></Cite> expressions,
      supporting cases where visualization and sonification need to be provided concurrently.
    </p>

    <CodeViewer
      autoHeight={true}
      containerId="code-compiler-2"
      code={`// results of spec.get()
{ "data": { "url": "cars.json" },
  "transform": [{
    "bin": "miles-per-gallon",
    "as": "miles-per-gallon-bin",
    "end": "miles-per-gallon-bin-end",
    "nice": true,
  }, {
    "aggregate": [{ "op": "count", "as": "count" }],
    "groupby": ["miles-per-gallon-bin"] } ],
  "tone": { "continued": false },
  "encoding": {
    "time": {
      "field": "miles-per-gallon-bin",
      "type": "quantitative",
      "scale": { "timing": "absolute", "length": 4.5 } }, 
    "time2": { "field": "miles-per-gallon-bin-end" },
    "pitch": {
      "field": "count",
      "type": "quantitative",
      "scale": { "domain": [0, 100], "range": [220, 660] } } } }`}
      language="json"
    />

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="compiler-queue" href="#compiler-queue"
        >6.3. Queue Compiler</a
      >
    </h3>

    <p aria-roledescription="paragraph">
      Given a spec, our queue compiler converts data values to auditory values.
      The outcome audio queue is an ordered list of sub-queues, and each
      sub-queue item can have one of these four types:<em>speech</em>,
      <em>tone-series</em>,
      <em>tone-speech-series</em>, and <em>tone-overlay</em>. A <em>speech</em>
      queue consists of natural language sentences that are played one after another.
      A <em>tone-series</em> queue is a timed list of non-speech sounds, and a
      <em>tone-speech-series</em>
      queue is a timed list of sounds and speeches. Each sound in a sub-queue of
      these two types is expressed in terms of their actual auditory values (e.g.,
      Hz for pitch). Lastly, a
      <em>tone-overlay</em>
      queue consists of multiple <em>tone-series</em> queues that are played
      simultaneously. An audio queue is not nested except <em>tone-overlay</em>
      queues, and a <em>sequence</em> spec is compiled to multiple flattened
      sub-queues. To compile a spec into an audio queue, a developer can run
      <code>compileAudioGraph</code>
      function, which asynchronously compiles the spec to an audio queue:
    </p>
    <CodeViewer
      autoHeight={true}
      containerId="code-compiler-3"
      code={`let audioQueue = await compileAudioGraph(spec.get());`}
      language="javascript"
    ></CodeViewer>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="compiler-player" href="#compiler-player"
        >6.4. Player for Web</a
      >
    </h3>

    <p aria-roledescription="paragraph">
      We developed an<em>Erie</em> player for web environments using the
      standard Web Audio API <Cite content="webAudio"></Cite> and Web Speech API
      <Cite content="webSpeech"></Cite>. The player offers several playing
      options: play from the beginning, pause, resume, stop, play from a
      sub-queue, and play from one sub-queue to another.
    </p>
    <CodeViewer
      autoHeight={true}
      containerId="code-compiler-4"
      code={`audioQueue.queue.play(); // Play from the beginning
audioQueue.queue.pause(); // Pause
audioQueue.queue.resume(); // Resume from where it was paused
audioQueue.queue.stop(); // Stop playing
audioQueue.queue.play(i); // Play from the i-th sub-queue
audioQueue.queue.play(i, j); // Play the i-th to (j-1)-th sub-queues.`}
      language="javascript"
    ></CodeViewer>

    <h3 aria-roledescription="subsection title">
      <a class="anchor" name="compiler-extension" href="#compiler-extension"
        >6.5. Filter and Channel Extension</a
      >
    </h3>

    <p aria-roledescription="paragraph">
      To achieve certain sound effects, a developer could use audio filters in
      addition to custom instruments (e.g., configured synth, sampling).
      Furthermore, those audio filters can encode data variables (e.g., the
      amount of distortion to express air quality). To widen such design
      possibilities,<em>Erie</em>
      offers APIs for defining custom audio filters that can have additional encoding
      channels (<strong>C4: Extensibility</strong>). To describe the process of
      defining a custom filter, imagine that a developer wants to add an
      envelope filter with encodable <code>attack</code> and
      <code>release</code>
      times.
      <code>Attack</code> means the time duration from the zero volume at the
      beginning of a sound to the highest volume, and <code>release</code>
      refers to the time taken from the highest volume to the zero volume at the
      end of the sound <Cite content="appleEnvelope"></Cite>. The developer
      first needs to define the filter as a JavaScript <code>class</code> that
      can be chained from a sonification sound to an output audio device. This
      class should have
      <code>connect</code>
      and <code>disconnect</code> methods to enable the chaining, following the
      Web Audio API syntax <Cite content="MDN:audionode"></Cite>. Then, the
      developer needs to define an <code>encoder</code> function that assigns
      the
      <code>attack</code>
      value for each data value to the filter and a <code>finisher</code>
      function that assigns the <code>release</code> values to the filter. Refer
      to the documentation in our Supplementary Material for technical details.
    </p>
  {/if}
</section>
