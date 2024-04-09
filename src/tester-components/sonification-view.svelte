<script>
	import { writable } from "svelte/store";
	import { CurrentData, ExampleCase, getStringed, tryParse } from "../storage";
	import MonacoEditor from "./monaco-editor.svelte";
	import { onMount } from "svelte";
	import * as Erie from "erie-web";

	const compileAudioGraph = Erie.compileAudioGraph;

	let content = "",
		codeStore = writable(),
		queue = [],
		audio,
		playAt;
	let specError = false;

	function updatePlayAt() {
		playAt = audio?.queue?.playAt;
	}
	document.body.addEventListener("erieOnStatusChange", updatePlayAt);

	function renderAudio(s) {
		specError = false;
		let parsed = tryParse(s);
		if (!parsed) {
			specError = true;
			return;
		}
		compileAudioGraph(parsed)
			.then((audio_graph) => {
				audio = audio_graph;
				audio.prerender().then((q) => {
					queue = q;
				});
				window.audioPlayer = audio;
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
	onMount(() => {
		content = getStringed($CurrentData?.sonification);
		codeStore.set(content);
		renderAudio($CurrentData?.sonification);
		ExampleCase.subscribe((c) => {
			if (c?.sonification) {
				content = getStringed(c.sonification);
				codeStore.set(content);
				renderAudio(c.sonification);
			}
		});
	});
	CurrentData.subscribe((c) => {
		renderAudio(c.sonification);
	});
</script>

<h2>Audio graph</h2>
<div class="divider">
	<section id="sonification-editor">
		<h3 class="sr-only">Audio graph specification</h3>
		<MonacoEditor
			containerId="audio-graph-json"
			code={codeStore}
			onchange={(d) => {
				CurrentData.update((c) => {
					c.sonification = d;
					return c;
				});
			}}
		/>
	</section>
	<section id="sonification-viewer">
		<div id="player-wrap">
			<h3>Audio Graph Player</h3>
			{#if specError}
				<div>See the console for error!</div>
			{:else}
				<div id="player">
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
		<div id="tone-graph-wrap">
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
									{#if item.type === "tone-series" || item.type === "tone-overlay-series"}
										<button
											on:click={() => {
												audio?.queue?.queue?.[i]?.getPCM().then((p) => {
													console.log(p);
												});
											}}>Get PCM data</button
										>
									{/if}
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
																<td
																	>{item[key] === undefined
																		? "-"
																		: item[key].patternString}</td
																>
															{:else}
																<td
																	>{item[key] === undefined
																		? "-"
																		: item[key]}</td
																>
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
																	<td
																		>{tone[key] === undefined
																			? "-"
																			: tone[key].patternString}</td
																	>
																{:else}
																	<td
																		>{tone[key] === undefined
																			? "-"
																			: tone[key]}</td
																	>
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
																				>{tone[key] === undefined
																					? "-"
																					: tone[key].patternString}</td
																			>
																		{:else}
																			<td
																				>{tone[key] === undefined
																					? "-"
																					: tone[key]}</td
																			>
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
</div>

<style>
	.divider {
		width: 100%;
		display: flex;
		height: calc(100% - 2rem);
		margin: 0;
	}
	h2 {
		padding: 0.5rem;
		margin: 0;
		height: 2rem;
		border-bottom: 1px solid #dddddd;
		line-height: 100%;
	}
	h3 {
		padding: 0.25rem 0.5rem;
		border-bottom: 1px solid #dddddd;
		font-size: 0.8rem;
		margin: 0;
	}
	h4 {
		padding: 0;
		margin: 0 0 0.25rem;
		font-size: 0.9rem;
	}
	#sonification-editor {
		width: 450px;
		border-right: 1px solid #dddddd;
		height: 100%;
		font-family: var(--font-mono);
		overflow-y: scroll;
	}
	#sonification-editor :global(*) {
		font-family: var(--monospace);
	}
	#sonification-viewer {
		width: calc(100% - 450px);
		height: 100%;
		border-left: 1px solid #dddddd;
		overflow-y: scroll;
	}
	#player-wrap {
		display: block;
		position: sticky;
		top: 0;
		height: 67px;
		background-color: white;
		z-index: 10;
	}
	#player {
		padding: 0.5rem;
		border-bottom: 1px solid #dddddd;
	}
	#tone-graph-wrap {
		display: block;
		position: relative;
	}
	#tone-graph-wrap h3 {
		position: sticky;
		top: 67px;
		background-color: white;
		z-index: 7;
	}
	.tone-graph h4 {
		position: sticky;
		top: 92px;
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
	@media screen and (max-width: 750px) {
		#sonification-editor,
		#sonification-viewer {
			width: 50%;
			max-width: 50%;
		}
	}
	@media screen and (max-width: 400px) {
		.divider {
			display: block;
		}
		#sonification-editor,
		#sonification-viewer {
			width: 100%;
			max-width: 100%;
			height: 50%;
		}
	}
</style>
