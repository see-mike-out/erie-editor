<script>
	import { ExampleCase, setExample } from '../storage';
	import { example_list, replication_list } from '../examples/example_list';
</script>

<div class="tab-container">
	<h2>Examples</h2>
	<p>Choose an example sonification from the below</p>
	<ul>
		{#each example_list as example}
			<li>
				<button
					class={$ExampleCase?.id === example.id ? 'current' : ''}
					on:click={() => {
						setExample(example);
					}}
					on:keypress={(event) => {
						if (event.key === 'Enter') {
							setExample(example);
						}
					}}>{example.name}</button
				>
				{#if example.route && $ExampleCase?.id === example.id}
					<a class="btn-recording" href={example.route} target="_blank"
						>Go to the pre-recorded version</a
					>
				{/if}
			</li>
		{/each}
		{#each replication_list as example}
			<li>
				<a class="rep-case" href={example.route} target="_blank"
					>{example.title}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						fill="currentColor"
						class="bi bi-box-arrow-up-right"
						viewBox="0 0 16 16"
					>
						<title>Open in a new tab</title>
						<path
							fill-rule="evenodd"
							d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
						/>
						<path
							fill-rule="evenodd"
							d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
						/>
					</svg></a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.tab-container {
		padding: 0.5rem;
	}
	h2 {
		margin: 0 0 0.5rem 0;
	}
	h2 + p {
		font-size: 0.9rem;
		color: #454545;
	}
	ul {
		margin: 0.5rem 0 0 0;
		padding: 0;
	}
	li {
		list-style: none;
		margin: 0.25rem 0 0.25rem 0;
	}
	li > button,
	li > a.rep-case {
		display: block;
		width: 100%;
		border: 1px solid #dddddd;
		border-radius: 0.5rem;
		padding: 0.5rem;
		cursor: pointer;
		background-color: white;
		font-size: 0.9rem;
		text-decoration: none;
		color: #000;
		text-align: left;
		line-height: 100%;
	}
	li > button:hover,
	li > a.rep-case:hover {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	}
	li > button.current {
		border-color: #2196f3;
	}

	.btn-recording {
		display: block;
		width: 100%;
		margin-top: 0.25rem;
		border: 1px solid #dddddd;
		border-radius: 0.5rem;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		background-color: #f0f0f0;
		font-size: 0.85rem;
		text-align: left;
		text-decoration: none;
		color: #212121;
	}
	.btn-recording:hover {
		background-color: #deebff;
	}
	.bi {
		margin-left: 0.25rem;
	}

	@media screen and (max-width: 800px) {
		.tab-container {
			padding-top: 0;
		}
		h2 {
			position: sticky;
			top: 0;
			background-color: white;
			padding-top: 0.35rem;
			padding-bottom: 0.35rem;
		}
	}
</style>
