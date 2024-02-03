<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import MonacoEditor from "../../tester-components/monaco-editor.svelte";
  import * as Erie from "erie-web";
  import { writable } from "svelte/store";
  import { renderVLChart } from "../../chart-control/run-vega";
  import {
    dehighlightAll,
    highlightVLChartByDatum,
    preparseVLChartForHighlight,
  } from "../../chart-control/highlight-mark";

  const readyRecording = Erie.readyRecording;
  const compileAuidoGraph = Erie.compileAuidoGraph;

  export let spec = {},
    key = "audio-snippet",
    visSpec;

  let codeStore = writable(),
    queue = [],
    audio,
    playAt;
  let specError = false;
  let doUpdate = writable(false);

  function updatePlayAt() {
    playAt = audio?.queue?.playAt;
  }

  function renderAudio(s) {
    specError = false;
    let parsed = tryParse(s);
    if (!parsed) {
      specError = true;
      return;
    }
    compileAuidoGraph(parsed)
      .then((audio_graph) => {
        audio = audio_graph;
        audio.prerender().then((q) => {
          queue = q;
        });
      })
      .catch((e) => {
        specError = true;
        console.warn(e);
      });
  }
  function playQueue() {
    audio?.playQueue();
  }
  function stopQueue() {
    audio?.stopQueue();
  }
  function playScale() {
    audio?.playScaleDescription();
  }
  function stopScale() {
    audio?.stopScaleDescription();
  }
  const tone_columns = [
    "start",
    "end",
    "timbre",
    "duration",
    "pitch",
    "detune",
    "loudness",
    "pan",
    "postReverb",
    "tap",
    "modulation",
  ];
  const tone_columns2 = [
    "time",
    "duration",
    "timbre",
    "pitch",
    "detune",
    "loudness",
    "pan",
    "postReverb",
    "speech",
    "tap",
    "modulation",
  ];

  function getStringed(o) {
    if (o?.constructor.name !== "String") {
      return JSON.stringify(o || {}, null, 2);
    } else {
      return o;
    }
  }
  function tryParse(o) {
    try {
      return JSON.parse(o);
    } catch {
      console.warn(o);
      console.warn("Wrong JSON format");
      return null;
    }
  }
  let lastTimeout;
  function updateAudio() {
    doUpdate.set(true);
  }

  let visError = false;
  let pl = "#vis-" + key + " .chart-area";
  let ppChart;
  function renderVis() {
    visError = false;
    if (document.querySelector(pl)) {
      let parsed =
        visSpec.constructor.name === "Object" ? visSpec : tryParse(visSpec);
      if (!parsed) {
        visError = true;
        return;
      }
      renderVLChart(pl, parsed, {})
        .then((result) => {
          visError = false;
          ppChart = preparseVLChartForHighlight(pl);
        })
        .catch((e) => {
          visError = true;
          console.warn(e);
        });
    }
  }

  onMount(() => {
    readyRecording();
    codeStore.set(getStringed(spec));
    renderAudio($codeStore);
    doUpdate.subscribe((d) => {
      if (d) {
        codeStore.set(getStringed(spec));
        renderAudio($codeStore);
      }
    });
    renderVis();

    if (browser) {
      document.body.addEventListener("erieOnStatusChange", updatePlayAt);
      document.body.addEventListener("erieOnNotePlay", (e) => {
        if (ppChart && e.detail.type === "tone")
          highlightVLChartByDatum(ppChart, e.detail.note.__datum);
      });
      document.body.addEventListener("erieOnNoteStop", (e) => {
        if (ppChart && e.detail.type === "tone")
          highlightVLChartByDatum(ppChart, e.detail.note.__datum, true);
      });
      document.body.addEventListener("erieOnFinishTone", (e) => {
        if (ppChart) dehighlightAll(ppChart);
      });
    }
  });

  function tidyNumber(v) {
    if (v === undefined || v === null) {
      return "-";
    } else if (v.constructor.name === "Number") {
      return Math.round(v * 100) / 100;
    } else {
      return v;
    }
  }
</script>

<div class="divider">
  <section class="sonification-editor">
    <h3 class="sr-only">Audio graph specification</h3>
    <MonacoEditor
      containerId={key}
      code={codeStore}
      onchange={(d) => {
        doUpdate.set(false);
        spec = d;
        if (lastTimeout) clearTimeout(lastTimeout);
        lastTimeout = setTimeout(updateAudio, 1500);
      }}
    />
  </section>
  <section class="sonification-viewer">
    <div class="player-wrap">
      <h3>Audio Graph Player</h3>
      {#if specError}
        <div>See the console for error!</div>
      {:else}
        <div class="player">
          <div class="buttons">
            <button
              erie-label="erie-player-play-button"
              on:click={() => {
                playQueue();
              }}>Play</button
            >
            <button
              erie-label="erie-player-stop-button"
              on:click={() => {
                stopQueue();
              }}
              >Stop
            </button>
            <button
              erie-label="erie-player-play-button"
              on:click={() => {
                playScale();
              }}>Play scales</button
            >
            <button
              erie-label="erie-player-stop-button"
              on:click={() => {
                stopScale();
              }}
              >Stop playing scales
            </button>
          </div>
        </div>
      {/if}
    </div>
    <div class="tone-graph-wrap">
      <h3>Audio queue list {playAt !== undefined ? `(at ${playAt})` : ""}</h3>
      <div class="tone-graph">
        {#if queue?.queue}
          <ul>
            {#each queue.queue || [] as item, i}
              <li class={playAt == i ? "active" : ""}>
                <h4>
                  {i + 1}. {item.type.replace(/\-/gi, " ")}
                  <button
                    on:click={() => {
                      audio?.queue?.play(i, i + 1);
                    }}>Play this only</button
                  >
                  <button
                    on:click={() => {
                      audio?.queue?.play(i);
                    }}>Play from this</button
                  >
                </h4>
                {#if item.type === "text"}
                  <p>
                    (<span class="sr-only"
                      >Speech rate:
                    </span>{item.speechRate}x)
                    <span class="sr-only">Speech text: </span>{item.text.speech}
                  </p>
                {:else if item.type === "tone"}
                  <p style="padding-bottom: 0.25rem;">
                    Instrument: {item.instrument_type}
                  </p>
                  <div class="stream-tab">
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          {#each tone_columns as key}
                            {#if key !== "type"}
                              <th>{key}</th>
                            {/if}
                          {/each}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          {#each tone_columns as key}
                            {#if key !== "type"}
                              {#if key === "tap"}
                                <td>{tidyNumber(item[key]?.patternString)}</td>
                              {:else}
                                <td>{tidyNumber(item[key])}</td>
                              {/if}
                            {/if}
                          {/each}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                {:else if item.type === "tone-series" || item.type === "tone-speech-series"}
                  <p style="padding-bottom: 0.25rem;">
                    Instrument: {item.instrument_type}
                  </p>
                  {#if item.config.tick}
                    <p style="padding-bottom: 0.25rem;">
                      Tick: {item.config.tick.name}
                    </p>
                  {/if}
                  <div class="stream-tab">
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          {#each tone_columns2 as key}
                            {#if key !== "type"}
                              <th>{key}</th>
                            {/if}
                          {/each}
                        </tr>
                      </thead>
                      <tbody>
                        {#each item.sounds as tone, j}
                          <tr>
                            <th>{j}</th>
                            {#each tone_columns2 as key}
                              {#if key !== "type"}
                                {#if key === "tap"}
                                  <td>{tidyNumber(tone[key]?.patternString)}</td
                                  >
                                {:else}
                                  <td>{tidyNumber(tone[key])}</td>
                                {/if}
                              {/if}
                            {/each}
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                {:else if item.type === "tone-overlay-series"}
                  <div class="overlays">
                    {#each item.overlays as overlay, k}
                      <div>
                        <h5>Overlay #{k + 1}</h5>
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              {#each tone_columns2 as key}
                                {#if key !== "type"}
                                  <th>{key}</th>
                                {/if}
                              {/each}
                            </tr>
                          </thead>
                          <tbody>
                            {#each overlay.sounds as tone, j}
                              <tr>
                                <th>{j}</th>
                                {#each tone_columns2 as key}
                                  {#if key !== "type"}
                                    {#if key === "tap"}
                                      <td
                                        >{tidyNumber(
                                          tone[key]?.patternString,
                                        )}</td
                                      >
                                    {:else}
                                      <td>{tidyNumber(tone[key])}</td>
                                    {/if}
                                  {/if}
                                {/each}
                              </tr>
                            {/each}
                          </tbody>
                        </table>
                      </div>
                    {/each}
                  </div>
                {:else if item.type === "pause"}
                  <p>
                    <span class="sr-only">Pause duration: </span>{item.duration}
                    seconds
                  </p>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </section>
  <section class="visualization-viewer" id={"vis-" + key}>
    <h3>Visualization</h3>
    {#if visSpec}
      <div>
        <div class="chart-area"></div>
      </div>
    {:else}
      <p>Visualization not provided.</p>
    {/if}
  </section>
</div>

<style>
  .divider {
    height: 90vh;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0 2rem 0;
    border: 1px solid #ddd;
    font-family: initial !important;
  }

  .sonification-editor {
    width: 50%;
    height: 50%;
  }
  .sonification-viewer {
    width: 50%;
    height: 50%;
    border-left: 1px solid #dddddd;
    overflow-y: scroll;
    padding: 0;
  }
  .visualization-viewer {
    width: 100%;
    height: 50%;
    border-left: 1px solid #dddddd;
    overflow-y: scroll;
    padding: 0;
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 750px) {
    .divider {
      display: block;
      margin: 0.5rem 0 2rem 0;
    }

    .sonification-editor {
      width: 100%;
      height: 30vh;
    }
    .sonification-viewer {
      width: 100%;
      height: 30vh;
      border-top: 1px solid #dddddd;
      border-left: 0;
      overflow-y: scroll;
      padding: 0;
    }
    .visualization-viewer {
      width: 100%;
      height: 30vh;
      border-top: 1px solid #dddddd;
      border-left: 0;
      overflow-y: scroll;
      padding: 0;
    }
  }

  .sonification-editor :global(*) {
    font-family: var(--monospace);
  }
  .player-wrap {
    display: block;
    position: sticky;
    top: 0;
    height: 70px;
    background-color: white;
    z-index: 10;
  }
  h3 {
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin: 0;
    font-size: 1rem;
    line-height: 100%;
  }
  .player {
    padding: 0.5rem;
    border-bottom: 1px solid #dddddd;
  }
  .tone-graph-wrap {
    display: block;
    position: relative;
  }
  .tone-graph-wrap h3 {
    position: sticky;
    top: 66px;
    background-color: white;
    z-index: 7;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }
  .tone-graph h4 {
    position: sticky;
    top: 96px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: white;
    z-index: 5;
  }
  .tone-graph ul {
    margin: 0;
    padding: 0;
  }
  .tone-graph ul li {
    margin: 0;
    padding: 0.5rem;
    list-style: none;
    border-bottom: 1px solid #ddd;
  }
  .tone-graph ul li h4 {
    font-weight: 600;
    color: #454545;
    margin: 0 0 0.15rem 0;
  }
  .tone-graph ul li h4 button {
    margin-left: 0.5rem;
    padding: 0.15rem 0.35rem;
    font-size: 0.75rem;
  }
  .tone-graph ul li p {
    margin: 0;
    font-size: 0.85rem;
    color: #454545;
    line-height: 1.1;
    font-family: var(--monospace);
  }
  .tone-graph ul li table {
    font-size: 0.85rem;
    color: #454545;
    line-height: 1.1;
    font-family: var(--monospace);
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  .tone-graph ul li table th {
    font-weight: 600;
    background-color: #f3f3f3;
  }
  .tone-graph ul li table td {
    background-color: white;
  }
  .tone-graph ul li table td,
  .tone-graph ul li table th {
    border: 1px solid #ddd;
    padding: 0.25rem;
  }
  .tone-graph .active {
    background-color: #a6ffab;
  }
  .tone-graph .active h4 {
    background-color: #a6ffab;
  }
  .overlays {
    width: 100%;
    overflow-x: scroll;
    padding: 0.5rem;
    border-radius: 0.15rem;
    background-color: rgba(0, 0, 0, 0.015);
    display: flex;
    column-gap: 1rem;
  }
  .overlays h5 {
    margin-top: 0;
  }
  .stream-tab {
    width: 100%;
    overflow-x: scroll;
  }
  .visualization-viewer h3 {
    position: sticky;
    top: 0;
    padding-bottom: 0.5rem;
    background-color: white;
    border-bottom: 1px solid #ddd;
  }
  .visualization-viewer p {
    padding: 0.5rem;
  }
  .visualization-viewer > div {
    width: fit-content;
    border: 1px solid #dddddd;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    padding: 0.25rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
  :global(.erie-note-hl) {
    outline: 3px solid #ff006a;
    outline-offset: 3px;
  }
</style>
