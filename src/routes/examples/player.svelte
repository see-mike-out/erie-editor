<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let data = [],
		status = 'stopped',
		curr;
	let synth;
	async function playText(elem) {
		if (!synth) synth = window.speechSynthesis;
		return new Promise((resolve, reject) => {
			let utterance = new SpeechSynthesisUtterance(elem.text);
			utterance.rate = elem.speechRate;
			curr = synth;
			synth.speak(utterance);
			utterance.onend = () => {
				resolve();
			};
		});
	}

	async function playAudio(elem) {
		return new Promise((resolve, reject) => {
			curr = elem.sound;
			elem.sound.play();
			elem.sound.onended = () => {
				resolve();
			};
		});
	}

	async function playAll() {
		status = 'played';
		for (const elem of data) {
			if (status === 'stopped') return;
			if (elem.text) {
				await playText(elem);
			} else if (elem.sound) {
				await playAudio(elem);
			}
		}
		status = 'stopped';
		curr = undefined;
	}

	function stop() {
		if (curr.cancel) curr.cancel();
		else if (curr.pause) curr.pause();
		curr = undefined;
	}

	onMount(() => {
		if (browser) {
			synth = window.speechSynthesis;
			Array.from(document.querySelectorAll('main p, main audio')).forEach((elem) => {
				if (elem.tagName === 'P' && elem.id.startsWith('speech-')) {
					data.push({
						text: elem.innerHTML,
						speechRate: elem.getAttribute('data-web-speech-rate') || 1.75
					});
				} else if (elem.tagName === 'AUDIO' && elem.id.startsWith('audio-')) {
					data.push({ sound: elem });
				}
			});
		}
	});
</script>

<button
	on:click={() => {
		playAll();
	}}>Play</button
>

<button
	on:click={() => {
		stop();
	}}>Stop</button
>

<slot />

<style>
</style>
