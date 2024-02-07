<script>
	import { onMount } from "svelte";
	import ExampleTab from "../tester-components/example-tab.svelte";
	import VisualizationView from "../tester-components/visualization-view.svelte";
	import {
		loadSpecs,
		CurrentData,
		showVis,
		setShowVis,
		setExample,
	} from "../storage";
	import SonificationView from "../tester-components/sonification-view.svelte";
	import * as Erie from "erie-web";
	import Icon from "../tester-components/icon.svelte";
	import { browser } from "$app/environment";
	import { example_ids, example_list } from "../examples/example_list";
	const readyRecording = Erie.readyRecording;

	let showExampleTab = true;
	function toggleExampleTab() {
		showExampleTab = !showExampleTab;
	}
	function findExample() {
		let querySettings = {};
		if (browser) {
			let qs = window.location.search;
			let query = new Map();
			qs.replace("?", "")
				.split("&")
				.forEach((q) => query.set(...q.split("=")));
			let exid = query.get("ex");
			let exiloc = example_ids.indexOf(exid);

			if (query.get("showVis") === "true") {
				showVis.set(true);
				querySettings.showVis = true;
			}
			if (exiloc >= 0) {
				setExample(example_list[exiloc]);
				querySettings.example = true;
			}
		}
		return querySettings;
	}
	onMount(() => {
		let querySettings = findExample();
		if (!querySettings.example) loadSpecs();
		if (!querySettings.showVis) setShowVis();
		readyRecording();
	});
</script>

<svelte:head>
	<title>Erie Editor</title>
</svelte:head>

<header>
	<div class="header-wrap">
		<h1>Erie Editor</h1>
		<nav>
			<button
				on:click={() => {
					toggleExampleTab();
				}}>{!showExampleTab ? "See examples" : "Hide examples"}</button
			>
			<a
				href="https://chromewebstore.google.com/detail/erie-recorder-for-chrome/efbafkmjeinnnkjlkipfmpcbglbjgedc"
				target="_blank"
				><Icon
					name="record"
					rightMargin="0.25rem"
					width="16"
					height="16"
					alt="Recorder Extension (only for Chrome)"
				></Icon><span class="mob-sr">Recorder Extension (only for Chrome)</span
				></a
			>
			<a href="https://github.com/see-mike-out/erie-web" target="_blank"
				><Icon
					name="github"
					rightMargin="0.25rem"
					width="16"
					height="16"
					alt="GitHub"
				></Icon><span class="mob-sr">GitHub</span></a
			>
			<a
				href="https://see-mike-out.github.io/erie-documentation/"
				target="_blank"
				><Icon
					name="documentation"
					rightMargin="0.25rem"
					width="16"
					height="16"
					alt="documentation"
				></Icon><span class="mob-sr">Documentation</span></a
			>
			<a href="./paper/" target="_blank"
				><Icon
					name="paper"
					rightMargin="0.25rem"
					width="16"
					height="16"
					alt="online interactive paper"
				></Icon><span class="mob-sr">Online interactive paper</span></a
			>
		</nav>
	</div>
</header>
<div class="main-frame">
	{#if showExampleTab}
		<section id="example-tab">
			<ExampleTab />
		</section>
	{/if}
	<div id="tester-area" class={showExampleTab ? "with-example" : "no-example"}>
		<section id="sonification-tester">
			{#if $CurrentData}
				<SonificationView />
			{/if}
		</section>
		{#if $showVis}
			<section id="visualization-tester">
				{#if $CurrentData}
					<VisualizationView
						closer={() => {
							showVis.set(false);
						}}
					/>
				{/if}
			</section>
		{:else}
			<section>
				<h2>
					Visual graph <button
						on:click={() => {
							showVis.set(true);
						}}>Show</button
					>
				</h2>
			</section>
		{/if}
	</div>
</div>

<style>
	header {
		height: 2rem;
		padding: 0.5rem;
		border-bottom: 1px solid #dddddd;
		line-height: 100%;
		width: 100%;
		margin: 0;
	}
	.header-wrap {
		display: flex;
	}
	h1 {
		margin: 0;
		line-height: 100%;
	}
	nav {
		margin-left: 0.5rem;
		font-size: 1rem;
	}
	nav button {
		background-color: transparent;
		margin: 0 0.5rem 0 0;
		padding: 0;
		color: black;
		line-height: 100%;
		font-size: 1rem;
	}
	nav a {
		margin: 0 0.5rem 0 0;
	}
	.main-frame {
		display: flex;
		height: calc(100vh - 2rem);
	}
	#example-tab {
		width: 250px;
		border-right: 1px solid #dddddd;
		overflow-y: scroll;
	}
	#tester-area {
		display: flex;
		flex-direction: column;
	}
	#tester-area.with-example {
		width: calc(100% - 250px);
	}
	#tester-area.no-example {
		width: 100vw;
	}
	#sonification-tester {
		border-bottom: 1px solid #dddddd;
	}
	#sonification-tester,
	#visualization-tester {
		max-height: 100%;
		min-height: 50%;
		overflow-y: scroll;
	}

	/* responsive */
	@media screen and (max-width: 800px) {
		.main-frame {
			display: block;
		}
		header {
			width: 100%;
			overflow-x: scroll;
		}
		.header-wrap {
			width: fit-content;
			max-width: 200%;
		}
		h1 {
			width: 80px;
		}
		nav {
			width: 730px;
		}
		.mob-sr {
			font-size: 0;
		}

		#example-tab {
			width: 100%;
			height: 150px;
			overflow-y: scroll;
		}
		#tester-area {
			display: flex;
			width: 100% !important;
			border-top: 1px solid #ddd;
		}
		#tester-area.with-example {
			width: 100%;
			height: calc(100vh - 182px);
		}
		#tester-area.no-example {
			width: 100%;
			height: calc(100vh - 32px);
		}
		#sonification-tester,
		#visualization-tester {
			max-height: 100%;
			min-height: 50%;
			overflow-y: scroll;
		}
	}

	h2 {
		padding: 0.5rem;
		margin: 0;
		height: 2rem;
		border-bottom: 1px solid #dddddd;
		line-height: 100%;
	}
	:global(.erie-note-hl) {
		outline: 3px solid #ff006a;
		outline-offset: 3px;
	}
</style>
