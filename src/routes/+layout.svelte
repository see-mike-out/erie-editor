<script>
	import './styles.css';
	import { initiateKeyboardShortcuts } from '../controls/shortcuts';
	import { onMount } from 'svelte';
	onMount(() => {
		initiateKeyboardShortcuts();
	});
</script>

<main>
	<slot />
</main>
