<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { writable } from "svelte/store";
	import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
	import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
	import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

	export let containerId = "monaco-container",
		code = writable("{}"),
		language = "json",
		onchange = (e) => {};

	let monaco, editor;

	if (browser) {
		self.MonacoEnvironment = {
			getWorker: function (workerId, label) {
				const getWorkerModule = (moduleUrl, label) => {
					return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleUrl), {
						name: label,
						type: "module",
					});
				};

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
		monaco = (await import("monaco-editor")).editor;
		editorSpace = document.getElementById(containerId);
		editor = monaco.create(document.getElementById(containerId), {
			value: $code,
			language,
			automaticLayout: true,
		});
		editor.onDidChangeModelContent(() => {
			onchange(editor.getValue());
		});
		code.subscribe((c) => {
			editor.setValue(c);
		});
	});
</script>

<div id={containerId} style="height: 100%; font-family: var(--monospace);" />
