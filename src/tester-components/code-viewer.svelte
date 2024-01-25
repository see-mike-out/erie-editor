<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
	import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
	import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

	export let containerId = "monaco-container",
		code = "{}",
		language = "json",
		height = "100%",
		autoHeight = false;
	let lineCount = 50;

	let monaco, editor;

	if (browser) {
		self.MonacoEnvironment = {
			getWorker: function (workerId, label) {
				switch (label) {
					case "json":
						return new jsonWorker();
					case "javascript":
						return new tsWorker();
					default:
						return new editorWorker();
				}
			},
		};
	}

	let editorSpace;
	onMount(async () => {
		lineCount = (code.match(/\n/gi)?.length || 0) + 1;
		monaco = (await import("monaco-editor")).editor;
		editorSpace = document.getElementById(containerId);
		editor = monaco.create(document.getElementById(containerId), {
			value: code,
			language,
			automaticLayout: true,
		});
	});
</script>

<div
	id={containerId}
	style={`height: ${autoHeight ? lineCount * 18 + "px" : height};`}
/>

<style>
	div :global(*) {
		font-family: var(--monospace);
	}
</style>
