<script>
	import { writable } from "svelte/store";
	import { CurrentData, ExampleCase, getStringed, tryParse } from "../storage";
	import MonacoEditor from "./monaco-editor.svelte";
	import { onMount } from "svelte";
	import { renderVLChart } from "../chart-control/run-vega";
	import { browser } from "$app/environment";
	import {
		dehighlightAll,
		highlightVLChartByDatum,
		preparseVLChartForHighlight,
	} from "../chart-control/highlight-mark";

	export let closer = () => {};
	let content = "",
		codeStore = writable();
	const pl = "#visualization-viewer .chart-area";
	let visError = false;
	let ppChart;
	function renderVis() {
		visError = false;
		if (document.querySelector(pl)) {
			let parsed = tryParse($CurrentData?.visualization);
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
		content = getStringed($CurrentData?.visualization);
		codeStore.set(content);
		renderVis();
		ExampleCase.subscribe((c) => {
			if (c?.visualization) {
				content = getStringed(c.visualization);
				codeStore.set(content);
				renderVis();
			}
		});

		if (browser) {
			document.body.addEventListener("erieOnNotePlay", (e) => {
				highlightVLChartByDatum(ppChart, e.detail.note.__datum);
			});
			document.body.addEventListener("erieOnNoteStop", (e) => {
				highlightVLChartByDatum(ppChart, e.detail.note.__datum, true);
			});
			document.body.addEventListener("erieOnFinishTone", (e) => {
				dehighlightAll(ppChart);
			});
		}
	});
	CurrentData.subscribe((c) => {
		renderVis();
	});
</script>

<h2>Visual graph<button on:click={closer}>Close</button></h2>
<div class="divider">
	<section id="visualization-editor">
		<h3 class="sr-only">Visual graph specification</h3>
		<MonacoEditor
			containerId="visual-graph-json"
			code={codeStore}
			onchange={(d) => {
				CurrentData.update((c) => {
					c.visualization = d;
					return c;
				});
			}}
		/>
	</section>
	<section id="visualization-viewer">
		<h3 class="sr-only">Visual graph</h3>
		{#if visError}
			<div>See the console for error!</div>
		{:else}
			<div>
				<div class="chart-area" />
			</div>
		{/if}
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
	#visualization-editor {
		width: 450px;
		border-right: 1px solid #dddddd;
		height: 100%;
		font-family: var(--font-mono);
		overflow-y: scroll;
	}
	#visualization-editor :global(*) {
		font-family: var(--monospace);
	}
	#visualization-viewer {
		width: calc(100% - 450px);
		height: 100%;
		padding: 0.5rem;
		background-color: #eeeeee;
		overflow-y: scroll;
	}
	#visualization-viewer > div {
		width: fit-content;
		border: 1px solid #dddddd;
		background-color: white;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
</style>
