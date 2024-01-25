<script>
	import { onMount } from "svelte";
	import ExampleTab from "../tester-components/example-tab.svelte";
	import VisualizationView from "../tester-components/visualization-view.svelte";
	import { loadSpecs, CurrentData, showVis, setShowVis } from "../storage";
	import SonificationView from "../tester-components/sonification-view.svelte";
	import * as Erie from "erie-web";
	
	const readyRecording = Erie.readyRecording;
	

	let showExampleTab = true;
	function toggleExampleTab() {
		showExampleTab = !showExampleTab;
	}
	onMount(() => {
		loadSpecs();
		setShowVis();
		readyRecording();
	});
</script>

<svelte:head>
	<title>Erie Editor</title>
</svelte:head>

<header>
	<h1>Erie Editor</h1>
	<nav>
		<button
			on:click={() => {
				toggleExampleTab();
			}}>{!showExampleTab ? "See examples" : "Hide examples"}</button
		>
		<a href="https://chromewebstore.google.com/detail/erie-recorder-for-chrome/efbafkmjeinnnkjlkipfmpcbglbjgedc" target="_blank">Recorder Extension (only for Chrome)</a>
		<a href="https://github.com/see-mike-out/erie-web" target="_blank">GitHub</a>
		<a href="https://see-mike-out.github.io/erie-documentation/" target="_blank">Documentation</a>
		<a href="./paper/" target="_blank">Online interactive paper</a>
	</nav>
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
	h2 {
		padding: 0.5rem;
		margin: 0;
		height: 2rem;
		border-bottom: 1px solid #dddddd;
		line-height: 100%;
	}
</style>
