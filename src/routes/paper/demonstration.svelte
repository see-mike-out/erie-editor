<script>
  import Cite from "./cite.svelte";
  import Ref from "./ref.svelte";
  import Footnote from "./footnote.svelte";
  import CodeViewer from "../../tester-components/code-viewer.svelte";
  import Table7 from "./tables/table7.svelte";
  import Table8 from "./tables/table8.svelte";
  import Table9 from "./tables/table9.svelte";
  import Table10 from "./tables/table10.svelte";
  import Figure2 from "./figures/figure2.svelte";
  import Figure3 from "./figures/figure3.svelte";
  import Figure4 from "./figures/figure4.svelte";
  import LineNo from "./lineNo.svelte";
  import Eq from "./eq.svelte";

  let collapse = false;
</script>

<section
  id="demonstration"
  aria-roledescription="Demonstration"
  class={collapse ? "section-collapse" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="demonstration" href="#demonstration"
      >7. Demonstration</a
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
    To demonstrate <em>Erie</em> grammar's
    <strong>independence from visualization (C1)</strong>
    and <strong>expressiveness (C2)</strong>, we walk through novel examples. We
    also replicated and extended prior sonifications to show the feasibility of
    our compiler and player for sonification development. In addition to the
    below examples, more use cases, such as a confidence interval, histogram,
    and sonification of COVID-19 death tolls, are available in the Supplementary
    Material.
  </p>

  <h3 aria-roledescription="subsection title">
    <a class="anchor" name="demonstration-example" href="#demonstration-example"
      >7.1. Example Sonification Designs</a
    >
  </h3>

  <p aria-roledescription="paragraph">
    We show three representative example cases to show how <em>Erie</em> can be used.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="demonstration-example-sparsity"
      href="#demonstration-example-sparsity">7.1.1. Data sparsity</a
    >
  </h4>

  <div class="code-paragraph">
    <div class="paragraph">
      <p aria-roledescription="paragraph">
        Given five data tables named A to E, suppose we want to identify and
        compare their sparsity (the portion of cells that are empty) using a
        tap-speed channel. We have a nominal variable, dataset <code>name</code
        >, and a quantitative variable, <code>sparsity</code>, and the data
        looks like <LineNo>1–6</LineNo>.
      </p>

      <p aria-roledescription="paragraph">
        Now, we want to map the <code>name</code> field to the <code>time</code>
        channel of a sonification and the <code>sparsity</code> to the
        <code>tapSpeed</code>
        channel, so that a sparse dataset with a higher sparsity value has slower
        tapping. First, we create a single-stream sonification spec object and set
        a description text (<LineNo>7–9</LineNo>). Then, we assign the
        <code>data</code>
        to this spec (<LineNo>9</LineNo>). With a default sine-wave oscillator,
        we need a discrete tone to represent separate data tables, which can be
        specified as <LineNo>10</LineNo>.
      </p>

      <p aria-roledescription="paragraph">
        Next, we set the <code>time</code> encoding channel as described earlier
        (<LineNo>11</LineNo>). This <code>time</code> channel should use
        relative timing to allow for playing each data table name before the
        sound for the corresponding sparsity value (<LineNo>12</LineNo>). We
        then specify the <code>tapSpeed</code> channel for the quantitative
        sparsity channel (<LineNo>13</LineNo>). This <code>tapSpeed</code>
        channel has the domain of <Eq math="[0, 1]"></Eq>. We want to map this
        domain to the range of <Eq math="[0, 5]"></Eq> (i.e., zero to five taps per
        second) for 2 seconds (<LineNo>14</LineNo>). Since a higher sparsity
        value should have a lower speed, we need negative
        <code>polarity</code> (<LineNo>15</LineNo>). This results in a single
        tap sound for the sparsity value of <Eq math="0.1"></Eq>. To play this
        sound in the middle of the time <code>band</code> (two seconds), we set
        the
        <code>singleTappingPosition</code>
        property as <code>middle</code> (<LineNo>16</LineNo>). To support
        identifying these tapping sounds at different speeds, we need a
        <code>speechBefore</code>
        channel for the <code>name</code> channel (<LineNo>17</LineNo>) We do
        not need a scale description for this <code>speechBefore</code>
        channel in this case (<LineNo>18</LineNo>).
        <Ref key="tab-demo-sparsity"></Ref> shows the audio queue compiled from this
        spec.
      </p>
    </div>
    <div class="code">
      <h5 aria-roledescription="code snippet title">Code</h5>
      <CodeViewer
        autoHeight={true}
        containerId="code-demo-1"
        language="javascript"
        code={`let data = [
{ "name": "A", "sparsity": 0.4 },
{ "name": "B", "sparsity": 0.6 },
{ "name": "C", "sparsity": 0.2 },
{ "name": "D", "sparsity": 0 },
{ "name": "E", "sparsity": 0.9 }];
let spec = new Stream();
spec.description("The sparsity of different datasets.");
spec.data("values", data);
spec.tone.type("default").continued(false);
spec.encoding.time.field("name", "nominal");
spec.encoding.time.scale("timing", "relative");
spec.encoding.tapSpeed.field("sparsity", "quantitative");
spec.encoding.tapSpeed.scale("domain", [0, 1]).scale("range", [0, 5]).scale("band", 2);
spec.encoding.tapSpeed.scale("polarity", "negative");
spec.encoding.tapSpeed.scale("singleTappingPosition", "middle");
spec.encoding.speechBefore.field("name", "nominal");
spec.encoding.speechBefore.scale("description", "skip");`}
      ></CodeViewer>
    </div>
  </div>

  <Table7 key="tab-demo-sparsity"></Table7>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="demonstration-example-kde"
      href="#demonstration-example-kde">7.1.2. Kernel density estimation</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    In exploratory data analysis pipelines, examining the distributions of
    variables of interest is a common first step. It is important to observe the
    entirety of a distribution because some distributional information, such as
    multi-modality, are not captured by summary statistics like mean and
    variance. In addition to histograms, data analysts often estimate the
    probability density of a quantitative variable using a kernel smoothing
    function (i.e., kernel density estimation or KDE). In this example, we want
    to sonify a KDE of the <code>bodyMass</code> variable of the
    <code>penguins.json</code>
    data <Cite content="vegadataset"></Cite>. This sonification will encode the
    density by pitch and the variable's value by time and panning. Then, we
    repeat this sonification design for different <code>species</code> and
    <code>island</code>s of penguins.
  </p>

  <p aria-roledescription="paragraph">
    The <code>penguins.json</code> dataset consists of <code>species</code>,
    <code>island</code>, and <code>bodyMass</code> fields. The nominal
    <code>species</code>
    and <code>island</code> fields form five combinations as shown in the first
    two columns of <Ref key="tab-demo-kde-data"></Ref>. The
    <code>bodyMass</code> field roughly ranges from 2,500 to 6,500.
  </p>

  <Table8 key="tab-demo-kde-data"></Table8>

  <div class="code-paragraph">
    <div class="paragraph">
      <p aria-roledescription="paragraph">
        First, we create a single-stream spec object, set the description, and
        assign the data (<LineNo>1–3</LineNo>). Next, we need to add a
        <code>density</code>
        transform for the KDE of the
        <code>bodyMass</code>
        field grouped by <code>species</code> and <code>island</code> (<LineNo
          >4–6</LineNo
        >). This transform results in a new data table that has four columns:
        <code>value</code>
        (evenly distributed <code>bodyMass</code> values, e.g., 2500, 2550, ...,
        6450, 6500), <code>density</code> (the density estimate of each
        <code>value</code>
        element), <code>species</code>, and <code>island</code>. Third, we use a
        <code>continued</code>
        tone because we want to sonify continuous KDEs (<LineNo>7</LineNo>).
      </p>

      <p aria-roledescription="paragraph">
        Given this <code>tone</code> design, we set the <code>time</code>,
        <code>pan</code>, and <code>pitch</code> channels. We map the
        <code>value</code>
        field to <code>time</code> and <code>pan</code> to give both temporal
        and spatial senses of sound progression (<LineNo>8–9</LineNo>). Then, we
        detail the <code>scale</code> of the <code>time</code> channel by
        setting the <code>length</code> of each repeated sound to three seconds
        and indicating the <code>title</code> of this <code>scale</code> in the
        scale description (<LineNo>10</LineNo>). Similarly, we set the
        <code>polarity</code>
        of the <code>pan</code> channel to <code>positive</code> and note the
        same scale <code>title</code> (<LineNo>11</LineNo>). We encode the
        <code>density</code>
        field to the <code>pitch</code> channel with <code>positive</code>
        <code>polarity</code>
        and a pitch range of
        <code>[0, 700]</code>
        (Hz) (<LineNo>12–14</LineNo>). KD estimates usually have infinite
        decimals (e.g., <Eq math={`0.0124 \\ldots`}></Eq>), which makes it hard
        to understand when read out (e.g., in the scale description). To prevent
        reading all the decimals, we specify the read <code>format</code> of the
        density estimates so that they are only read up to the fourth decimal.
        <em>Erie</em> uses format expressions supported by D3.js <Cite
          content="bostock:d32011"
        ></Cite> (<LineNo>15</LineNo>). Now, we repeat this spec design by the
        <code>species</code>
        and
        <code>island</code>
        fields using a <code>repeat</code> channel (<LineNo>16–17</LineNo>).
      </p>
      <p aria-roledescription="paragraph">
        <Ref key="tab-demo-kde"></Ref> illustrates the audio queue compiled from
        this spec. Sub-queue 4 to Sub-queue 8 are the scale descriptions for the
        <code>time</code>, <code>pan</code>, and <code>pitch</code> channels
        with audio legends. Sub-queues 10 to 24 represent the specified KDE
        sonification for each combination of the <code>species</code> and
        <code>island</code> values.
      </p>
    </div>
    <div class="code">
      <CodeViewer
        autoHeight={true}
        containerId="code-demo-13"
        language="javascript"
        code={`let spec = new Stream();
spec.description("The kernel density estimation of body mass by species and island.");
spec.data("url", "penguins.json");
let density = new Density();
density.field("bodyMass").extent([2500, 6500]).groupby(["species", "island"]);
spec.transform.add(density);
spec.tone.type("default").continued(true);
spec.encoding.time.field("value", "quantitative");
spec.encoding.pan.field("value", "quantitative");
spec.encoding.time.scale("length", 3).scale("title", "Body Mass values");
spec.encoding.pan.scale("polarity", "positive").scale("title", "Body Mass values");
spec.encoding.pitch.field("density", "quantitative")
                   .scale("polarity", "positive").scale("range", [0, 700])
                   .scale("title", "kernel density");
spec.encoding.pitch.format(".4");
spec.encoding.repeat.field(["species", "island"], "nominal")
                    .speech(true).scale("description", "skip");`}
      ></CodeViewer>
    </div>
  </div>

  <Table9 key="tab-demo-kde"></Table9>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="demonstration-example-fit"
      href="#demonstration-example-fit">7.1.3. Model fit sequence</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    After fitting a linear regression model, a necessary task is to check the
    model fit by examining the residuals. Common methods for residual analysis
    include a residual plot (residual vs. independent variable) and a QQ plot
    (residual vs. normal quantile). For this task, we assume that we have
    already fitted a linear regression model of Sepal Length on Petal Length (<Eq
      math={`\\textit{Petal Length} \\sim \\textit{Sepal Length}`}
    ></Eq>
    ), and computed the residuals. For the residual plot, we use a
    <code>residuals</code>
    dataset with two fields:
    <code>sepalLength</code>
    (independent variable) and <code>residuals</code>. For the QQ plot, we use a
    <code>qq</code>
    dataset with two fields: <code>normalQuantile</code> and
    <code>residuals</code><Footnote
      content="Alternatively, these two datasets can be a single dataset. Here, we use two datasets for demonstration purposes."
    ></Footnote>. With these datasets, we want to create two sequenced
    sonifications for residuals and comparison to normal quantiles (i.e.,
    recognizing their trends).
  </p>

  <div class="code-paragraph">
    <div class="paragraph">
      <p aria-roledescription="paragraph">
        We first register the datasets (<LineNo>1–6</LineNo>). Second, we define
        a sonification for a residual plot. When errors of a model fit are
        unbiased, the residuals are evenly distributed along values of the
        independent variable and on both sides of the central line indicating 0
        error. With this residual plot sonification, we want to capture the
        evenness of residual distribution by mapping the residuals to
        <code>modulation</code>
        index and <code>pan</code> channel. In this way, a larger residual is
        mapped to a more warped sound, and a negative residual is played on the
        left side and a positive residual is played on the right side. A good
        model fit will generate a sonification where the sound quickly (e.g.,
        150 sound points within 5 seconds) moves between different modulation
        index and pan values, making it harder to differentiate their degrees of
        warping and spatial positions. In contrast, a bad model fit will
        generate an audio graph where listeners can easily sense some groups of
        sounds sharing the same degree of warping on a certain spatial position.
        We use a <code>time</code> channel for the <code>sepalLength</code> field.
      </p>

      <p aria-roledescription="paragraph">
        To do so, we create a single stream with the <code>residuals</code>
        dataset (<LineNo>7–9</LineNo>). For the tone, we use an FM synth, named
        <code>fm1</code>
        (<LineNo>10–12</LineNo>). The residual sonification uses a
        <code>time</code>
        channel for the
        <code>sepalLength</code>
        values and <code>modulation</code> index and <code>pan</code> channels
        for the residuals that roughly range from <Eq math="-2.5"></Eq> to <Eq
          math="2.5"
        ></Eq>. This design is specified as <LineNo>13–18</LineNo>.
      </p>

      <p aria-roledescription="paragraph">
        Next, we specify a QQ plot sonification. A good model fit should also
        exhibit normally distributed residuals. By plotting the quantiles of the
        residuals against the expected quantiles of a normal distribution (range
        from 0 to 1), we want to observe how much the residuals deviate from the
        expectation that they are normallly distributed. A visual QQ plot shows
        the gap between the theoretical and observed distribution by plotting
        them in a Cartesian space, which is the same format used for a residual
        plot at high level. However, a sonification author may need to directly
        encode the gap because overlaying the normal and residual distributions
        with different pitches or volumes may make it harder to decode the gap,
        indicating the need for specifying a sonification design <strong
          >independently from visualization (C1)</strong
        >. Thus, we compute the normalized residuals' <code>deviation</code>
        (within 0 to 1) from normal quantiles to directly encode the gap. This
        transform is done using the below <code>calculate</code> transforms,
        resulting in two additional fields: <code>normalized</code> and
        <code>deviation</code>
        (<LineNo>19–25</LineNo>).
      </p>

      <p aria-roledescription="paragraph">
        Then, we map the <code>normalQuantile</code> to <code>time</code>, the
        magnitude of the <code>residual</code> to <code>pitch</code>, and the
        <code>deviation</code>
        to <code>pan</code>. These mappings will produce sounds that are
        spatially centered when the deviation is smaller but are played from
        left or right when the signed deviation is bigger (<LineNo>26–33</LineNo
        >).
      </p>

      <p aria-roledescription="paragraph">
        Lastly, we merge the residual and QQ streams (<code>residualSpec</code>,
        <code>qqSpec</code>) into a sequenced stream (<LineNo>34–35</LineNo>).
        This spec results in the sonification described in <Ref
          key="tab-demo-fit"
        ></Ref>.
      </p>
    </div>
    <div class="code">
      <CodeViewer
        autoHeight={true}
        containerId="code-demo-22"
        language="javascript"
        code={`let qqData = [...];
let qqDataset = new Dataset("qq");
qqDataset.set("values", qqData);
let residualData = [...];
let residualDataset = new Dataset("residuals");
residualDataset.set("values", residualData);
let residualSpec = new Stream();
residualSpec.name("Residuals");
residualSpec.data.set(residualData);
let synth = new SynthTone("fm1");
synth.type("FM");
residualSpec.tone.set(synth);
residualSpec.encoding.time.field("sepalLength", "quantitative")
            .scale("timing", "absolute").scale("legnth", 5).scale("band", 0.15).format(".4");
residualSpec.encoding.modulation.field("residual", "quantitative")
            .scale("domain", [-2.5, 0, 2.5]).scale("range", [4, 0.001, 4]).format(".4");
residualSpec.encoding.pan.field("residual", "quantitative")
            .scale("domain", [-2.5, 0, 2.5]).scale("range", [-1, 0, 1]).format(".4");
let qqSpec = new Stream();
qqSpec.name("QQ plot");
qqSpec.data.set(residualData);
// normalize residuals using its minimum (-2.477468) and maximum (2.495122).
let noramlized = new Calculate("(datum.residual + 2.477468)/(2.495122 + 2.477468)", "normalized");
let deviation = new Calculate("datum.normalized - datum.normalQuantile", "deviation");
qqSpec.transform.add(normalized).add(deviation);
qqSpec.tone.continued(false);
qqSpec.encoding.time.field("normalQuantile", "quantitative")
               .scale("length", 4).scale("band", 0.2).scale("title", "Normal Quantile").format(".4");
qqSpec.encoding.pitch.field("residual", "quantitative")
               .scale("polarity", "positive").scale("title", "Residual").format(".4");
qqSpec.encoding.pan.field("deviation", "quantitative")
               .scale("domain", [-0.2, 0, 0.2]).scale("range", [-1, 0, 1])
               .scale("title", "Deviation from normal distribution") .format(".4");
  let modelFit = new Sequence(residualSpec, qqSpec);
modelFit.description("The residuals of a linear regression model of Sepal Length on Petal Length.");`}
      ></CodeViewer>
    </div>
  </div>

  <Table10 key="tab-demo-fit"></Table10>

  <h3 aria-roledescription="subsection title">
    <a
      class="anchor"
      name="demonstration-replication"
      href="#demonstration-replication">7.2. Replication of Prior Use Cases</a
    >
  </h3>
  <p aria-roledescription="paragraph">
    We replicate several sonification use cases (e.g., applications and data
    stories) and extend their features to demonstrate how feasibly creators can
    use <em>Erie</em> in development settings. We include the <em>Erie</em> specs
    used for the below replications in Supplementary Material.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="demonstration-replication-narrative"
      href="#demonstration-replication-narrative">7.2.1. Audio Narrative</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    Audio Narrative <Cite content="audioNarrative:siu2022"></Cite> divides a temporal
    line chart into segments that represent different data patterns, such as increase,
    decrease, and no change, and offers a sonification and speech description for
    each segment. To show how <em>Erie</em> can be used in such applications to
    generate sonifications, we created an example case that Audio Narrative
    could create by using <em>Erie</em> for sonification and speech generation,
    as shown in <Ref key="fig-demo-narrative"></Ref>. We used a
    <em>'stocks.json'</em>
    dataset <Cite content="vegadataset"></Cite> for this replication. We use two
    variables, <code>stock price</code> and <code>date</code>, from this
    dataset.
  </p>

  <Figure2 key="fig-demo-narrative"></Figure2>

  <p aria-roledescription="paragraph">
    Suppose an Audio Narrative-like application already has a line chart
    segmented and relevant speech texts generated. The next task is to create
    sounds for those segments and speech texts. Using <em>Erie</em>, the
    application can simply write a sonification spec for each segment as below:
    <CodeViewer
      autoHeight={true}
      containerId="code-demo-29"
      language="json"
      code={`{ "description": "...",
  "data": [ /* Segment i data */ ],
  "tone": { "continued": true },
  "encoding": {
    "time": { "field": "date", ... },
    "pitch": { "field": "stock price", ... } } }`}
    ></CodeViewer>
    By setting a <code>description</code>, the application can play the speech
    for each segment. Having the above as a template, the application then merge
    the specs for all the segments as a <code>sequence</code>:
    <CodeViewer
      autoHeight={true}
      containerId="code-demo-30"
      language="json"
      code={`{ "sequence": [{ /* Segment 1 stream */ }, ... { /* Segment N stream */ }],
  "config": { 
    "forceSequenceScaleConsistency": { "pitch": true },
    "skipScaleSpeech": true
  }}`}
    ></CodeViewer>
    The <code>forceSequenceScaleConsistency</code> in the <code>config</code>
    forces the segment streams to use the same <code>pitch</code> scale. As
    sonifications can benefit from the user's ability to personalize design
    choices <Cite content="sharif2022:sonifier"></Cite>, we extend this Audio
    Narrative case by allowing for using a loudness or pan channel to encode a
    variable and adjusting the scale range of those channels. Furthermore, we
    add an option that separately plays the scale descriptions of a
    sonification.
    <em>Erie</em> supports this by using a <code>skipScaleSpeech</code> option
    in the <code>config</code>.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="demonstration-replication-reader"
      href="#demonstration-replication-reader">7.2.2. Chart Reader</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    Given a visualization, Chart Reader <Cite content="thompson2023:chartreader"
    ></Cite> enables hover interaction that reads out values and generates a sonification
    for the selected data mark(s). Furthermore, Chart Reader supports creating several
    "data insights" that allow a sonification author to draft more customized text
    messages, similar to the chart segments supported by Audio Narrative. We replicate
    this use case by reusing the above Audio Narrative replication, given their underlying
    structural similarity (segmentation of a chart with descriptive text), as shown
    in <Ref key="fig-demo-reader"></Ref>.
  </p>

  <Figure3 key="fig-demo-reader"></Figure3>

  <p aria-roledescription="paragraph">
    In this case, the sonification and description text of a chart segment is
    played whenever the corresponding part in the chart is selected, or the
    button for the segment is triggered via a mouse or keyboard. This uses the
    same segment template spec as Audio Narrative replication, but they are not
    sequenced. We set the pitch scale's <code>domain</code> as the minimum and maximum
    values of the sonified variable so that the segments can share the same pitch
    scale even though they are not sequenced in the same specification. This technique
    is often used in data visualization cases as well. We further include several
    customization options for toggling the hover interaction and data aggregation.
    By reusing the above sequence, we also include an option to play all the `data
    insight' segments.
  </p>

  <h4 aria-roledescription="sub-subsection title">
    <a
      class="anchor"
      name="demonstration-replication-gunman"
      href="#demonstration-replication-gunman">7.2.3. Nine Rounds a Second</a
    >
  </h4>

  <p aria-roledescription="paragraph">
    The <em>Nine Rounds a Second</em> article <Cite content="vegas"></Cite> covers
    the mass shooting case in Las Vegas in 2017 where the gunman was known to have
    had a rapid-fire gun. This article compares the Las Vegas case with the mass
    shooting case in Orlando in 2016 and the use of automatic weapons. In this article,
    a dot plot visualizes the shooting count over time to show how fast shots were
    fired. To make it even more realistic, the authors of this article included a
    sonification that mimics actual gun sounds.
  </p>
  <p aria-roledescription="paragraph">
    We replicate this news article sonification by mapping the shooting time to
    a <code>time</code> channel and the three cases (Las Vegas, Orlando, and
    automatic weapon) to a <code>repeat</code> channel, as shown in <Ref
      key="fig-demo-gunman"
    ></Ref>. We use an electronic drum's <code>clap</code> sound that
    <em>Erie</em>'s player supports as a preset because it sounds similar to a
    gunshot sound. The original article had an interaction that when the name of
    a case is selected, it plays only the relevant part. To support that, we use
    the <code>audioQueue.play(i, j)</code> method, so that the player only plays
    from the <code>i</code>-th sub-queue to <code>j</code>-th sub-queue. In this
    case, the first sub-queue is the name of a case, and the last sub-queue is
    the sonification sound (two sub-queues in total).
  </p>

  <Figure4 key="fig-demo-gunman"></Figure4>
</section>

<style>
  @media screen and (min-width: 850px) {
    .code-paragraph {
      display: flex;
    }
    .code-paragraph .paragraph {
      width: 50%;
    }
    .code-paragraph .code {
      width: 50%;
    }
  }
</style>
