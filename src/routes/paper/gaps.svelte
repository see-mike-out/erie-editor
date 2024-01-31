<script>
  import Cite from "./cite.svelte";
  let collapse = false;
</script>

<section
  id="background"
  aria-roledescription="Gaps in Sonification Development Practices"
  class={collapse ? "section-gaps" : ""}
>
  <h2 aria-roledescription="section title">
    <a class="anchor" name="gaps" href="#gaps"
      >3. Gaps in Sonification Development Practices</a
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
    To motivate our design of <em>Erie</em> with awareness of existing practices
    used in developing data sonification, we surveyed recently published data
    sonification tutorials and designs. To understand practices being shared
    among sonification developers, we collected nine online tutorials for coding
    sonifications by searching with keywords like "sonification tutorial,"
    "audio graph tutorial," or "sonification code." To see techniques beyond
    tutorials, we inspected 24 data sonifications with code or detailed
    methodology descriptions from
    <a href="https://sonification.design/" target="_blank"
      >Data Sonification Archive</a
    >
    that were published from 2021 through 2023. This collection included tutorials
    and designs created by active sonification contributors like
    <a href="https://www.system-sounds.com/" target="_blank">Systems Sound</a>
    and <a href="https://www.loudnumbers.net/" target="_blank">Loud Numbers</a>.
    We include the list of the sonification tutorials and designs we collected
    in Supplementary Material. We tagged sonification tutorials and designs in
    terms of software or libraries used, functionality of code written by the
    creators (e.g., scale functions, audio environment settings), and output
    formats (e.g., replicability of designs, file formats). Overall, this
    preliminary survey identified that
    <strong
      >developers currently rely on ad-hoc approaches due to the lack of
      expressive sonification approaches</strong
    >.
  </p>
  <p aria-roledescription="paragraph">
    <strong
      >Converting to auditory values then connecting to music software.</strong
    >
    Most tutorials (7 out of 9) introduced <em>music programming libraries</em>
    like music21, PyGame, Tone.js, sequenceR, Max, Sonic Pi, and MIDIFile, and most
    (15 out of 24) sonification designs used them. These libraries take as input
    auditory values like pitch notes or frequencies, volumes, and time durations.
    That is, developers still need to define scale functions that convert data values
    to auditory values, requiring an understanding of physical properties of different
    auditory variables. For example, the
    <a
      href="https://medium.com/@astromattrusso/sonification-101-how-to-convert-data-into-music-with-python-71a6dd67751c"
      target="_blank">"Sonification 101" tutorial</a
    >
    describes how to map data points to notes with a four-step procedure. First,
    a developer normalizes the data point into a range from 0 to 1, then multiples
    by a scalar to keep them in a certain range. Third, the developer specifies a
    list of notes to map data points to. Last, they write a for loop to convert each
    data point to the corresponding note from the list. On the other hand,
    <a
      href="https://propolis.io/articles/making-animated-dataviz-sonification.html"
      target="_blank">a tutorial by Propolis</a
    > introduces a linear scale function.
  </p>
  <p aria-roledescription="paragraph">
    Then, developers need to connect those computed values to other music
    libraries by configuring custom instruments. To be able to create custom
    instruments using low-level libraries like MIDITime or Tone.js, the
    developer needs to have professional skills like how to import and control
    audio samples and what audio nodes to control to adjust different audio
    properties. For instance, common sonification encodings like gain, pitch,
    and distortion level are governed by different audio nodes. More experienced
    professional creators chose to use more advanced music software like Ableton
    Live, Supercollider, and Touch Designer that enable live performances or art
    installations.
  </p>
  <p aria-roledescription="paragraph">
    <strong>Difficulty in reusing sonification designs.</strong>
    Whether created programmatically or not, many existing sonification cases are
    shared as multimedia files (audios or videos). This practice makes it harder
    to inspect how they were created in terms of data-to-music scales, instrument
    details, etc. Even if a sonification's codes are available, it is often hard
    to reuse the custom code because developers have to manually inspect the code
    in terms of different variable names to locate where to make changes for their
    designs. For example, to change the domain, range, and transformation type (e.g.,sqrt,
    log) of a certain scale, then they have to find the relevant lines and manually
    change them by writing something like a linear scale function (e.g.,
    <code
      >{`aScaleFunction(x) {return min(1600, max((log(x)-log(30))/(log(500)-log(30))*1600, 200);}`}</code
    >), which is not always straightforward, particularly for less experienced
    sonification developers. This difficulty in reusing custom code is also
    widely known among visualization practitioners<Cite content="battle2022:d3"
    ></Cite>.
  </p>
</section>
