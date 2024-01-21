<script>
	import CodeViewer from '../../tester-components/code-viewer.svelte';
	import FormalExpressionViewer from '../../tester-components/formal-expression-viewer.svelte';

	export let spec = {},
		jsCode = '',
		formalSpec = '';
</script>

<div class="code-row">
	<div>
		<h3>JSON Specification</h3>
		<div class="code-wrap">
			<CodeViewer containerId="json-expr" code={JSON.stringify(spec, null, 2)} language="json" />
		</div>
	</div>
	<div>
		<h3>JS Spec API</h3>
		<div class="code-wrap">
			<CodeViewer containerId="js-expr" code={jsCode} language="javascript" />
		</div>
		See the results of this code in the browser console
	</div>
	<div>
		<h3>Formal Expression</h3>
		<div class="code-wrap">
			<FormalExpressionViewer content={formalSpec} />
		</div>
	</div>
</div>

<style>
	@media (min-width: 1000.1px) {
		.code-row {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
		.code-row > div {
			width: 33%;
		}
	}
	@media (max-width: 1000px) {
		.code-row {
			width: 100%;
			display: block;
		}
		.code-row > div {
			width: 100%;
		}
	}

	.code-wrap {
		height: 300px;
		font-family: var(--font-mono);
		border-radius: 0.5rem;
		border: 1px solid #ddd;
		padding: 0.5rem;
	}
</style>
