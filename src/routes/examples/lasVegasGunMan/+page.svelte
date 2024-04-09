<!-- https://www.nytimes.com/interactive/2017/10/02/us/vegas-guns.html -->

<script>
	import { data } from "./data";
	import { renderVLChart } from "../../../chart-control/run-vega";
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import CodeViewer from "../../../tester-components/code-viewer.svelte";
	import * as Erie from "erie-web";
	
	const compileAudioGraph = Erie.compileAudioGraph;

	let visSpec = {
		$schema: "https://vega.github.io/schema/vega-lite/v5.json",
		data: {
			values: data,
		},
		width: 500,
		height: 150,
		mark: { type: "point", size: 10 },
		encoding: {
			x: { field: "time", type: "quantitative", axis: { title: "Seconds" } },
			y: {
				field: "shot",
				type: "quantitative",
				axis: {
					values: [0, 50, 100],
					title: "Shots",
					titleAngle: 0,
					titleY: 20,
				},
			},
			color: {
				value: "gray",
			},
			detail: {
				field: "class",
				type: "nominal",
			},
		},
	};

	let audioSpec = {
		data: {
			values: data,
		},
		title:
			"Nine Rounds a Second: How the Las Vegas Gunman Outfitted a Rifle to Fire Faster",
		tone: { continued: false, type: "clap" },
		encoding: {
			time: {
				field: "time",
				type: "quantitative",
				scale: {
					length: 10,
					domain: [0, 10],
				},
			},
			loudness: {
				value: 0.5,
			},
			repeat: {
				field: "class",
				speech: false,
			},
		},
		config: {
			speechRate: 1.5,
			skipScaleSpeech: true,
			skipStartPlaySpeech: true,
			skipTitle: true,
			skipSequenceTitle: true,
			skipSquenceIntro: true,
		},
	};

	let audio;
	let updatePlayAt;
	let playAt;
	onMount(() => {
		renderVLChart("#visualization", visSpec, { actions: false });
		compileAudioGraph(audioSpec, {
			baseUrl: "../../",
		})
			.then((audio_graph) => {
				audio = audio_graph;
				audio.prerender();
				window.audioPlayer = audio;
			})
			.catch((e) => {
				console.warn(e);
			});
		if (browser) {
			function stopEvent(event) {
				if (event.key == "x") {
					stop();
				}
			}
			window.addEventListener("keypress", stopEvent);
			updatePlayAt = (e) => {
				playAt = audio?.queue?.playAt;
				colorMarks(playAt);
			};
			document.body.addEventListener("erieOnStatusChange", updatePlayAt);
		}
	});

	let status = false;
	function play(i) {
		if (audio) {
			if (i === undefined) {
				audio.playQueue();
			} else {
				audio.queue.play(i, i + 1);
			}
			status = true;
		}
		colorMarks(playAt);
	}
	function stop() {
		audio?.stopQueue();
		status = false;
		colorMarks(playAt);
	}
	let cls;
	function colorMarks(p) {
		if ([1].includes(p)) {
			cls = "vegas";
		} else if ([2].includes(p)) {
			cls = "orlando";
		} else if ([3].includes(p)) {
			cls = "automatic weapon";
		}
		if (cls) {
			visSpec.encoding.color.condition = [
				{
					test: `datum.class === '${cls}'`,
					value: "#ff0000",
				},
			];
		} else {
			delete visSpec.encoding.color.condition;
		}
		renderVLChart("#visualization", visSpec, { actions: false });
	}

	let spec_text = {
		data: {
			values: [
				{ time: 0, class: "vegas", shot: 1 },
				{ time: 0.1, class: "vegas", shot: 2 },
				{ time: 0.18, class: "vegas", shot: 3 },
				{ time: 0.29, class: "vegas", shot: 4 },
				{ time: 0.56, class: "vegas", shot: 5 },
				{ time: 0.64, class: "vegas", shot: 6 },
				{ time: 0.75, class: "vegas", shot: 7 },
				{ time: 0.86, class: "vegas", shot: 8 },
				{ time: 0.96, class: "vegas", shot: 9 },
				{ time: 1.09, class: "vegas", shot: 10 },
				{ time: 1.2, class: "vegas", shot: 11 },
				{ time: 1.52, class: "vegas", shot: 12 },
				{ time: 1.57, class: "vegas", shot: 13 },
				{ time: 1.74, class: "vegas", shot: 14 },
				{ time: 1.82, class: "vegas", shot: 15 },
				{ time: 1.91, class: "vegas", shot: 16 },
				{ time: 2.02, class: "vegas", shot: 17 },
				{ time: 2.09, class: "vegas", shot: 18 },
				{ time: 2.25, class: "vegas", shot: 19 },
				{ time: 2.36, class: "vegas", shot: 20 },
				{ time: 2.49, class: "vegas", shot: 21 },
				{ time: 2.61, class: "vegas", shot: 22 },
				{ time: 2.78, class: "vegas", shot: 23 },
				{ time: 2.89, class: "vegas", shot: 24 },
				{ time: 2.97, class: "vegas", shot: 25 },
				{ time: 3.04, class: "vegas", shot: 26 },
				{ time: 3.23, class: "vegas", shot: 27 },
				{ time: 3.34, class: "vegas", shot: 28 },
				{ time: 3.46, class: "vegas", shot: 29 },
				{ time: 3.6, class: "vegas", shot: 30 },
				{ time: 3.72, class: "vegas", shot: 31 },
				{ time: 3.83, class: "vegas", shot: 32 },
				{ time: 4.05, class: "vegas", shot: 33 },
				{ time: 4.11, class: "vegas", shot: 34 },
				{ time: 4.17, class: "vegas", shot: 35 },
				{ time: 4.21, class: "vegas", shot: 36 },
				{ time: 4.26, class: "vegas", shot: 37 },
				{ time: 4.34, class: "vegas", shot: 38 },
				{ time: 4.46, class: "vegas", shot: 39 },
				{ time: 4.54, class: "vegas", shot: 40 },
				{ time: 4.66, class: "vegas", shot: 41 },
				{ time: 4.82, class: "vegas", shot: 42 },
				{ time: 4.92, class: "vegas", shot: 43 },
				{ time: 5.02, class: "vegas", shot: 44 },
				{ time: 5.11, class: "vegas", shot: 45 },
				{ time: 5.21, class: "vegas", shot: 46 },
				{ time: 5.35, class: "vegas", shot: 47 },
				{ time: 5.43, class: "vegas", shot: 48 },
				{ time: 5.51, class: "vegas", shot: 49 },
				{ time: 5.57, class: "vegas", shot: 50 },
				{ time: 5.64, class: "vegas", shot: 51 },
				{ time: 5.7, class: "vegas", shot: 52 },
				{ time: 5.96, class: "vegas", shot: 53 },
				{ time: 6.05, class: "vegas", shot: 54 },
				{ time: 6.15, class: "vegas", shot: 55 },
				{ time: 6.25, class: "vegas", shot: 56 },
				{ time: 6.36, class: "vegas", shot: 57 },
				{ time: 6.45, class: "vegas", shot: 58 },
				{ time: 6.55, class: "vegas", shot: 59 },
				{ time: 6.65, class: "vegas", shot: 60 },
				{ time: 6.75, class: "vegas", shot: 61 },
				{ time: 6.89, class: "vegas", shot: 62 },
				{ time: 7.34, class: "vegas", shot: 63 },
				{ time: 7.4, class: "vegas", shot: 64 },
				{ time: 7.49, class: "vegas", shot: 65 },
				{ time: 7.69, class: "vegas", shot: 66 },
				{ time: 7.76, class: "vegas", shot: 67 },
				{ time: 7.88, class: "vegas", shot: 68 },
				{ time: 8.16, class: "vegas", shot: 69 },
				{ time: 8.28, class: "vegas", shot: 70 },
				{ time: 8.38, class: "vegas", shot: 71 },
				{ time: 8.46, class: "vegas", shot: 72 },
				{ time: 8.56, class: "vegas", shot: 73 },
				{ time: 8.64, class: "vegas", shot: 74 },
				{ time: 8.81, class: "vegas", shot: 75 },
				{ time: 8.9, class: "vegas", shot: 76 },
				{ time: 8.97, class: "vegas", shot: 77 },
				{ time: 9.17, class: "vegas", shot: 78 },
				{ time: 9.27, class: "vegas", shot: 79 },
				{ time: 9.36, class: "vegas", shot: 80 },
				{ time: 9.45, class: "vegas", shot: 81 },
				{ time: 9.53, class: "vegas", shot: 82 },
				{ time: 9.62, class: "vegas", shot: 83 },
				{ time: 9.71, class: "vegas", shot: 84 },
				{ time: 9.8, class: "vegas", shot: 85 },
				{ time: 9.9, class: "vegas", shot: 86 },
				{ time: 9.97, class: "vegas", shot: 87 },

				// orlando
				{ time: 0, class: "orlando", shot: 0 },
				{ time: 0.35, class: "orlando", shot: 1 },
				{ time: 0.7, class: "orlando", shot: 2 },
				{ time: 1.02, class: "orlando", shot: 3 },
				{ time: 1.32, class: "orlando", shot: 4 },
				{ time: 1.64, class: "orlando", shot: 5 },
				{ time: 1.99, class: "orlando", shot: 6 },
				{ time: 2.34, class: "orlando", shot: 7 },
				{ time: 2.63, class: "orlando", shot: 8 },
				{ time: 2.99, class: "orlando", shot: 9 },
				{ time: 3.31, class: "orlando", shot: 10 },
				{ time: 3.63, class: "orlando", shot: 11 },
				{ time: 3.94, class: "orlando", shot: 12 },
				{ time: 4.28, class: "orlando", shot: 13 },
				{ time: 4.59, class: "orlando", shot: 14 },
				{ time: 5.01, class: "orlando", shot: 15 },
				{ time: 5.59, class: "orlando", shot: 16 },
				{ time: 6.07, class: "orlando", shot: 17 },
				{ time: 6.43, class: "orlando", shot: 18 },
				{ time: 6.9, class: "orlando", shot: 19 },
				{ time: 7.35, class: "orlando", shot: 20 },
				{ time: 7.85, class: "orlando", shot: 21 },
				{ time: 8.25, class: "orlando", shot: 22 },
				{ time: 8.68, class: "orlando", shot: 23 },

				// automatic weapon
				{ time: 0, class: "automatic weapon", shot: 0 },
				{ time: 0.09, class: "automatic weapon", shot: 1 },
				{ time: 0.19, class: "automatic weapon", shot: 2 },
				{ time: 0.27, class: "automatic weapon", shot: 3 },
				{ time: 0.36, class: "automatic weapon", shot: 4 },
				{ time: 0.44, class: "automatic weapon", shot: 5 },
				{ time: 0.53, class: "automatic weapon", shot: 6 },
				{ time: 0.61, class: "automatic weapon", shot: 7 },
				{ time: 0.69, class: "automatic weapon", shot: 8 },
				{ time: 0.77, class: "automatic weapon", shot: 9 },
				{ time: 0.86, class: "automatic weapon", shot: 10 },
				{ time: 0.94, class: "automatic weapon", shot: 11 },
				{ time: 1.02, class: "automatic weapon", shot: 12 },
				{ time: 1.1, class: "automatic weapon", shot: 13 },
				{ time: 1.18, class: "automatic weapon", shot: 14 },
				{ time: 1.26, class: "automatic weapon", shot: 15 },
				{ time: 1.34, class: "automatic weapon", shot: 16 },
				{ time: 1.42, class: "automatic weapon", shot: 17 },
				{ time: 1.5, class: "automatic weapon", shot: 18 },
				{ time: 1.57, class: "automatic weapon", shot: 19 },
				{ time: 1.65, class: "automatic weapon", shot: 20 },
				{ time: 1.73, class: "automatic weapon", shot: 21 },
				{ time: 1.81, class: "automatic weapon", shot: 22 },
				{ time: 1.89, class: "automatic weapon", shot: 23 },
				{ time: 1.97, class: "automatic weapon", shot: 24 },
				{ time: 2.04, class: "automatic weapon", shot: 25 },
				{ time: 2.12, class: "automatic weapon", shot: 26 },
				{ time: 2.19, class: "automatic weapon", shot: 27 },
				{ time: 2.27, class: "automatic weapon", shot: 28 },
				{ time: 2.34, class: "automatic weapon", shot: 29 },
				{ time: 2.43, class: "automatic weapon", shot: 30 },
				{ time: 2.5, class: "automatic weapon", shot: 31 },
				{ time: 2.58, class: "automatic weapon", shot: 32 },
				{ time: 2.65, class: "automatic weapon", shot: 33 },
				{ time: 2.73, class: "automatic weapon", shot: 34 },
				{ time: 2.8, class: "automatic weapon", shot: 35 },
				{ time: 2.88, class: "automatic weapon", shot: 36 },
				{ time: 2.95, class: "automatic weapon", shot: 37 },
				{ time: 3.03, class: "automatic weapon", shot: 38 },
				{ time: 3.1, class: "automatic weapon", shot: 39 },
				{ time: 3.17, class: "automatic weapon", shot: 40 },
				{ time: 3.24, class: "automatic weapon", shot: 41 },
				{ time: 3.32, class: "automatic weapon", shot: 42 },
				{ time: 3.39, class: "automatic weapon", shot: 43 },
				{ time: 3.46, class: "automatic weapon", shot: 44 },
				{ time: 3.54, class: "automatic weapon", shot: 45 },
				{ time: 3.61, class: "automatic weapon", shot: 46 },
				{ time: 3.68, class: "automatic weapon", shot: 47 },
				{ time: 3.75, class: "automatic weapon", shot: 48 },
				{ time: 3.82, class: "automatic weapon", shot: 49 },
				{ time: 3.89, class: "automatic weapon", shot: 50 },
				{ time: 3.96, class: "automatic weapon", shot: 51 },
				{ time: 4.03, class: "automatic weapon", shot: 52 },
				{ time: 4.1, class: "automatic weapon", shot: 53 },
				{ time: 4.17, class: "automatic weapon", shot: 54 },
				{ time: 4.24, class: "automatic weapon", shot: 55 },
				{ time: 4.31, class: "automatic weapon", shot: 56 },
				{ time: 4.37, class: "automatic weapon", shot: 57 },
				{ time: 4.44, class: "automatic weapon", shot: 58 },
				{ time: 4.51, class: "automatic weapon", shot: 59 },
				{ time: 4.58, class: "automatic weapon", shot: 60 },
				{ time: 4.65, class: "automatic weapon", shot: 61 },
				{ time: 4.72, class: "automatic weapon", shot: 62 },
				{ time: 4.78, class: "automatic weapon", shot: 63 },
				{ time: 4.85, class: "automatic weapon", shot: 64 },
				{ time: 4.92, class: "automatic weapon", shot: 65 },
				{ time: 4.99, class: "automatic weapon", shot: 66 },
				{ time: 5.06, class: "automatic weapon", shot: 67 },
				{ time: 5.13, class: "automatic weapon", shot: 68 },
				{ time: 5.2, class: "automatic weapon", shot: 69 },
				{ time: 5.26, class: "automatic weapon", shot: 70 },
				{ time: 5.33, class: "automatic weapon", shot: 71 },
				{ time: 5.4, class: "automatic weapon", shot: 72 },
				{ time: 5.47, class: "automatic weapon", shot: 73 },
				{ time: 5.53, class: "automatic weapon", shot: 74 },
				{ time: 5.6, class: "automatic weapon", shot: 75 },
				{ time: 5.66, class: "automatic weapon", shot: 76 },
				{ time: 5.73, class: "automatic weapon", shot: 77 },
				{ time: 5.8, class: "automatic weapon", shot: 78 },
				{ time: 5.86, class: "automatic weapon", shot: 79 },
				{ time: 5.93, class: "automatic weapon", shot: 80 },
				{ time: 5.99, class: "automatic weapon", shot: 81 },
				{ time: 6.06, class: "automatic weapon", shot: 82 },
				{ time: 6.12, class: "automatic weapon", shot: 83 },
				{ time: 6.19, class: "automatic weapon", shot: 84 },
				{ time: 6.26, class: "automatic weapon", shot: 85 },
				{ time: 6.32, class: "automatic weapon", shot: 86 },
				{ time: 6.39, class: "automatic weapon", shot: 87 },
				{ time: 6.46, class: "automatic weapon", shot: 88 },
				{ time: 6.53, class: "automatic weapon", shot: 89 },
				{ time: 6.59, class: "automatic weapon", shot: 90 },
				{ time: 6.66, class: "automatic weapon", shot: 91 },
				{ time: 6.72, class: "automatic weapon", shot: 92 },
				{ time: 6.79, class: "automatic weapon", shot: 93 },
				{ time: 6.86, class: "automatic weapon", shot: 94 },
				{ time: 6.92, class: "automatic weapon", shot: 95 },
				{ time: 6.99, class: "automatic weapon", shot: 96 },
				{ time: 7.05, class: "automatic weapon", shot: 97 },
			],
		},
		title:
			"Nine Rounds a Second: How the Las Vegas Gunman Outfitted a Rifle to Fire Faster",
		tone: {
			continued: false,
			type: "clap",
		},
		encoding: {
			time: {
				field: "time",
				type: "quantitative",
				scale: {
					length: 10,
					domain: [0, 10],
				},
			},
			loudness: {
				value: 0.5,
			},
			repeat: {
				field: "class",
				speech: false,
			},
		},
		config: {
			speechRate: 1.5,
			skipScaleSpeech: true,
			skipStartPlaySpeech: true,
			skipTitle: true,
			skipSequenceTitle: true,
			skipSquenceIntro: true,
		},
	};
</script>

<svelte:head>
	<title>Erie Example -- Las Vegas Gun Man</title>
</svelte:head>
<main>
	<h1>Las Vegas Gun Man</h1>
	<p>
		This is a replication of a news article
		<a
			href="https://www.nytimes.com/interactive/2017/10/02/us/vegas-guns.html"
			target="_blank"
			>"Nine Rounds a Second: How the Las Vegas Gunman Outfitted a Rifle to Fire
			Faster" by Larry Buchanan, Jon Huang and Adam Pearce</a
		>
		(New York Times)
	</p>
	<div>
		<button
			on:click={(e) => {
				playAt = undefined;
				play();
				e.target.blur();
			}}
			disabled={status}>Play</button
		>
		<button
			on:click={() => {
				stop();
				playAt = undefined;
			}}
			disabled={!status}>Stop</button
		>
	</div>

	<section id="vis">
		<div id="visualization" />
		<div class="markers">
			<button
				class={cls === "vegas" ? "active" : ""}
				on:click={(e) => {
					playAt = undefined;
					play(1);
					e.target.blur();
				}}>Las Vegas</button
			>
			<button
				class={cls === "orlando" ? "active" : ""}
				on:click={(e) => {
					playAt = undefined;
					play(2);
					e.target.blur();
				}}>Orlando</button
			>
			<button
				class={cls === "automatic weapon" ? "active" : ""}
				on:click={(e) => {
					playAt = undefined;
					play(3);
					e.target.blur();
				}}>Automatic Weapon</button
			>
		</div>
	</section>

	<section id="specs">
		<h2>Erie spec used for this replication</h2>

		<div style="height: 300px;">
			<CodeViewer
				containerId="seg-expr"
				code={JSON.stringify(spec_text, null, 2)}
				language="json"
			/>
		</div>
	</section>
</main>

<style>
	main {
		max-width: calc(1000px + 2rem);
		margin: 0 auto;
		padding: 2rem 1rem;
	}
	section#vis {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.markers button {
		display: inline-block;
		margin: 0 1rem;
		font-size: 1.5rem;
		color: #999999;
		background-color: white;
	}
	.markers button.active {
		color: #ff0000;
	}
</style>
