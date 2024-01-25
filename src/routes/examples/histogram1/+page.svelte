<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { onMount } from "svelte";

	const Stream = Erie.Stream;

	let spec = {
		description: "A histogram of Miles_per_Gallon variable.",
		data: {
			url: "data/cars.json",
		},
		tone: {
			continued: false,
		},
		encoding: {
			time: {
				field: "Miles_per_Gallon",
				type: "quantitative",
				bin: true,
				scale: {
					length: 4.5,
				},
				tick: {
					interval: 0.5,
					playAtTime0: true,
				},
			},
			pitch: {
				aggregate: "count",
				type: "quantitative",
				scale: {
					polarity: "positive",
					maxDistinct: true,
				},
			},
		},
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let spec = new Erie.Stream();
spec.description('A histogram of Miles_per_Gallon variable.');
spec.data.set('url', 'data/cars.json');
spec.tone.continued(false);
spec.encoding.time.field('Miles_per_Gallon', 'quantitative')
                  .bin(true)
                  .scale('length', 4.5)
                  .tick('interval', 0.5)
                  .tick('playAtTime0', true);
spec.encoding.pitch.aggregate('count')
                   .type('quantitative')
                   .scale('polarity', 'positive')
                   .scale('maxDistinct', true);
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let spec2 = new Stream();
		spec2.description("A histogram of Miles_per_Gallon variable.");
		spec2.data.set("url", "data/cars.json");
		spec2.tone.continued(false);
		spec2.encoding.time
			.field("Miles_per_Gallon", "quantitative")
			.bin(true)
			.scale("length", 4.5)
			.tick("interval", 0.5)
			.tick("playAtTime0", true);
		spec2.encoding.pitch
			.aggregate("count")
			.type("quantitative")
			.scale("polarity", "positive")
			.scale("maxDistinct", true);
		spec2.config.set("speechRate", 1.75);
		console.log(spec2.get());
	}
	let formalSpec = `Spec=(
	description='A histogram of Miles_per_Gallon variable.',
	data=(url='data/cars.json'),
	tone=(type='default', continued=false),
	encoding=(
		time=(
			field='Miles_per_Gallon',
			type='quantitative',
			bin=true,
			scale=(length=4.5),
			tick=(interval=0.4, playAtTime0=true)
		),
		pitch=(
			aggregate='count',
			type='quantitative',
			polarity='positive',
			maxDistinct=true
		)
	),
	config=(speechRate=1.75)
)`;
	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Histogram Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Histogram Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-DWcFFX" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-LE1lQl" style="speech-rate: 315;" data-web-speech-rate="1.75">
			A histogram of Miles_per_Gallon variable.
		</p>
		<p id="speech-dV5aew" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-s9o7re" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Miles_per_Gallon (binned) is mapped to time. The duration of the
			stream is 4.5 seconds. A tick sound is played every 0.5 seconds.
		</p>
		<p id="speech-696Ekf" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Count is mapped to pitch. The minimum value 1 is mapped to
		</p>
		<section>
			<audio id="audio-CHeFW6" controls>
				<source
					src="/example_sounds/erie-rec-CHeFW6.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-CCVEQW" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 98 is mapped to
		</p>
		<section>
			<audio id="audio-VexApf" controls>
				<source
					src="/example_sounds/erie-rec-VexApf.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-08jKca" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-qeUHuP" controls>
				<source
					src="/example_sounds/erie-rec-qeUHuP.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-cyLvNy" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Finished.
		</p>
	</Player>
	<SpecView {spec} {jsCode} {formalSpec} />
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
