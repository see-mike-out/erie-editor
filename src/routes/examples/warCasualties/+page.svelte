<script>
	import { onMount } from 'svelte';
	import { renderVLChart } from '../../../chart-control/run-vega';
	import { browser } from '$app/environment';
	import { data } from './data';
	import * as d3 from 'd3';
	import * as Erie from "erie-web";

	const compileAudioGraph = Erie.compileAudioGraph;

	let sonification_spec = {
		data: { values: data },
		synth: [
			{
				name: 'FM1',
				type: 'FM',
				attackTime: 0.2,
				releaseTime: 0.2,
				sustain: 0.2
			}
		],
		tone: {
			type: 'FM1',
			continued: false
		},
		encoding: {
			time: {
				field: 'year',
				type: 'quantitative',
				scale: {
					length: 20,
					description: null
				}
			},
			pitch: {
				field: 'fatalities',
				type: 'quantitative',
				scale: {
					type: 'log',
					description: null,
					range: [0, 900]
				}
			},
			loudness: {
				field: 'fatalities',
				type: 'quantitative',
				scale: {
					type: 'log',
					description: null,
					range: [0, 1]
				}
			}
		},
		config: {
			skipStartSpeech: true,
			skipStartPlaySpeech: true,
			skipFinishSpeech: true,
			skipScaleSpeech: true
		}
	};
	let vis_spec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'Stock prices of 5 Tech Companies over Time.',
		data: {
			values: data
		},
		view: { stroke: null, fill: 'black' },
		width: 'container',
		height: 'container',
		mark: { type: 'tick' },
		encoding: {
			x: {
				field: 'year',
				type: 'ordinal',
				scale: { zero: false },
				axis: null
			},
			y: {
				field: 'fatalities',
				scale: { type: 'log'},
				type: 'quantitative',
				axis: null
			},
			color: {
				field: 'fatalities',
				scale: { type: 'log', range: ['#ffef78', '#f53900']  },
				type: 'quantitative',
				legend: null
			}
		},
		config: { tick: { thickness: 3 } }
	};
	let audio;
	onMount(() => {
		renderVLChart('#vis', vis_spec, { actions: false });
		compileAudioGraph(sonification_spec)
			.then((audio_graph) => {
				audio = audio_graph;
				audio.prerender();
				window.audioPlayer = audio;
			})
			.catch((e) => {
				specError = true;
				console.warn(e);
			});
		if (browser) {
			function stopEvent(event) {
				if (event.key == 'x') {
					stop();
				}
			}
			window.addEventListener('keypress', stopEvent);
		}
	});

	let status = false;
	function play() {
		if (audio) {
			audio.playQueue();
			status = true;
			d3.select('#timer')
				.style('left', 0)
				.transition()
				.duration(20000)
				.ease(d3.easeLinear)
				.style('left', '100%');
		}
	}
	function stop() {
		audio?.stopQueue();
		status = false;
		d3.select('#timer').interrupt();
		d3.select('#timer').style('left', 0);
	}
</script>

<svelte:head>
	<title>Erie Example -- Audio Art</title>
</svelte:head>

<svelte:body />

<main>
	<h1>War Casualties in 20th century</h1>

	<button
		on:click={(e) => {
			play();
			e.target.blur();
		}}
		disabled={status}>Play</button
	>
	<button
		on:click={() => {
			stop();
		}}
		disabled={!status}>Stop</button
	>
	<div id="vis-wrap">
		<div id="vis" />
		<div id="timer" />
	</div>
</main>

<style>
	:global(body) {
		background-color: black !important;
	}
	main {
		max-width: calc(1000px + 2rem);
		margin: 0 auto;
		padding: 2rem 1rem;
	}
	#vis-wrap {
		position: relative;
		margin-top: 1rem;
	}
	#vis {
		width: 100%;
		height: 80vh;
		background-color: black;
	}
	#timer {
		position: absolute;
		width: 1px;
		height: 80vh;
		top: 0;
		left: 0;
		border-left: 2px solid rgba(255, 255, 255, 0.25);
	}
	button {
		color: white;
		background-color: #222222;
	}
	h1 {
		font-size: 3rem;
		font-weight: 400;
		color: white;
	}
	:global(svg) {
		background-color: transparent !important;
	}
</style>
