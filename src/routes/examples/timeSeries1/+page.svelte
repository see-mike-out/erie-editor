<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { onMount } from "svelte";

	const Stream = Erie.Stream;

	let jsonSpec = {
		description: "A time-series of wounds variable over date.",
		data: {
			url: "data/crimea.json",
		},
		tone: {
			continued: false,
		},
		encoding: {
			time: {
				field: "date",
				type: "temporal",
				scale: {
					band: 0.15,
					timing: "absolute",
					length: 3,
				},
				tick: {
					interval: 0.5,
				},
			},
			loudness: {
				field: "wounds",
				type: "quantitative",
				scale: {
					range: [0, 1],
				},
			},
		},
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let spec = new Erie.Stream();
spec.description('A time-series of wounds variable over date.');
spec.data.set('url', 'data/crimea.json');
spec.tone.continued(false);
spec.encoding.time.field('date', 'temporal')
                  .scale('timing', 'absolute')
                  .scale('band', 0.15)
                  .scale('length', 3)
                  .tick('interval', 0.5);
spec.encoding.loudness.field('wounds', 'quantitative')
                      .scale('range', [0, 1]);
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let spec = new Stream();
		spec.description("A time-series of wounds variable over date.");
		spec.data.set("url", "data/crimea.json");
		spec.tone.continued(false);
		spec.encoding.time
			.field("date", "temporal")
			.scale("timing", "absolute")
			.scale("band", 0.15)
			.scale("length", 3)
			.tick("interval", 0.5);
		spec.encoding.loudness
			.field("wounds", "quantitative")
			.scale("range", [0, 1]);
		spec.config.set("speechRate", 1.75);
		console.log(spec.get());
	}
	let formalSpec = `Spec=(
	description='A time-series of wounds variable over date.',
	data=(url='data/crimea.json'),
	tone=(type='default', continued=false),
	encoding=(
		time=(
			field='date',
			type='temporal',
			scale=(timing='absolute', band=0.15, length=3),
      tick=(interval=0.5)
		),
		loudness=(
			field='wounds',
			type='quantitative',
			scale=(range=[0, 1])
		)
	),
	config=(speechRate=1.75)
)`;

	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Time Series Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Time Series Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-AvIgvO" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-bcsQFu" style="speech-rate: 315;" data-web-speech-rate="1.75">
			A time-series of wounds variable over date.
		</p>
		<p id="speech-Jn4CKl" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-kBU4Tr" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The date is mapped to time. A tick sound is played every 0.5 seconds.
		</p>
		<p id="speech-nl0tKP" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The wounds is mapped to loudness. The minimum value 0 is mapped to
		</p>
		<section>
			<audio id="audio-dIr4hj" controls>
				<source
					src="/example_sounds/erie-rec-dIr4hj.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-sLZofz" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 480 is mapped to
		</p>
		<section>
			<audio id="audio-gNHyRQ" controls>
				<source
					src="/example_sounds/erie-rec-gNHyRQ.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-OLbxiy" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-d7DhKr" controls>
				<source
					src="/example_sounds/erie-rec-d7DhKr.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-USmRHp" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Finished.
		</p>
	</Player>

	<h2>Expression</h2>

	<SpecView spec={jsonSpec} {jsCode} {formalSpec} />
</main>

<style>
	main {
		padding: 2rem;
	}
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 1.5rem;
		margin-top: 2rem;
	}
</style>
