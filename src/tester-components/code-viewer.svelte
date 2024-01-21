<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

	export let containerId = 'monaco-container',
		code = '{}',
		language = 'json';

	let monaco, editor;

	if (browser) {
		self.MonacoEnvironment = {
			getWorker: function (workerId, label) {
				switch (label) {
					case 'json':
						return new jsonWorker();
					case 'javascript':
						return new tsWorker();
					default:
						return new editorWorker();
				}
			}
		};
	}

	let editorSpace;
	onMount(async () => {
		monaco = (await import('monaco-editor')).editor;
		editorSpace = document.getElementById(containerId);
		editor = monaco.create(document.getElementById(containerId), {
			value: code,
			languages: [language],
			automaticLayout: true
		});
	});
</script>

<div id={containerId} style="height: 100%;" />

<style>
	div :global(*) {
		font-family: var(--monospace);
	}
</style>
