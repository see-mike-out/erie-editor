<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { onMount } from "svelte";
	import Sound_J3wSXW from "$lib/example_sounds/erie-rec-J3wSXW.webm";
	import Sound_XkyZTp from "$lib/example_sounds/erie-rec-XkyZTp.webm";
	import Sound_K18fJt from "$lib/example_sounds/erie-rec-K18fJt.webm";
	import Sound_XDQl3i from "$lib/example_sounds/erie-rec-XDQl3i.webm";
	import Sound_6CwJce from "$lib/example_sounds/erie-rec-6CwJce.webm";
	import Sound_g39xw2 from "$lib/example_sounds/erie-rec-g39xw2.webm";
	import Sound_46Pjuh from "$lib/example_sounds/erie-rec-46Pjuh.webm";

	const Stream = Erie.Stream;

	let data = [
		{ name: "A", sparsity: 0.5, length: 5 },
		{ name: "B", sparsity: 0.1, length: 4 },
		{ name: "C", sparsity: 0.9, length: 3 },
		{ name: "D", sparsity: 0, length: 6 },
		{ name: "E", sparsity: 0.75, length: 7 },
	];

	let jsonSpec = {
		description: "The sparsity of data tables.",
		data: {
			values: data,
		},
		tone: {
			type: "default",
			continued: false,
		},
		encoding: {
			time: {
				field: "name",
				type: "nominal",
				scale: {
					timing: "relative",
				},
			},
			tapSpeed: {
				field: "sparsity",
				type: "quantitative",
				scale: {
					domain: [0, 1],
					range: [0, 5],
					band: 2,
					polarity: "negative",
					playAtTime0: "middle",
				},
			},
			speechBefore: {
				field: "name",
				type: "nominal",
				scale: {
					description: "skip",
				},
			},
		},
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let spec = new Erie.Stream();
spec.description('The sparsity of data tables.');
spec.data.set('values', ${JSON.stringify(data)});
spec.tone.type('default').continued(false);
spec.encoding.time.field('name', 'nominal')
                  .scale('timing', 'relative');
spec.encoding.tapSpeed.field('sparsity', 'quantitative')
                      .scale('domain', [0, 1])
                      .scale('range', [0, 5])
                      .scale('band', 2)
                      .scale('polarity', 'negative')
                      .scale('singleTappingPosition', 'middle');
spec.encoding.speechBefore.field('name', 'nominal')
                          .scale('description', 'skip');
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let spec = new Stream();
		spec.description("The sparsity of data tables.");
		spec.data.set("values", data);
		spec.tone.type("default").continued(false);
		spec.encoding.time.field("name", "nominal").scale("timing", "relative");
		spec.encoding.tapSpeed
			.field("sparsity", "quantitative")
			.scale("domain", [0, 1])
			.scale("range", [0, 5])
			.scale("band", 2)
			.scale("polarity", "negative")
			.scale("singleTappingPosition", "middle");
		spec.encoding.speechBefore
			.field("name", "nominal")
			.scale("description", "skip");
		spec.config.set("speechRate", 1.75);
		console.log(spec.get());
	}

	let formalSpec = `Spec=(
	description='The sparsity of data tables.',
	data=(values=${JSON.stringify(data)}),
	tone=(type='default', continued=false),
	encoding=(
		time=(
			field='name',
			type='nominal',
			scale=(timing='relative')
		),
		tapSpeed=(
			field='sparsity',
			type='quantitative',
			scale=(
				domain=[0, 1],
        range=[0, 5],
        band=2,
				polarity='negative',
				singleTappingPosition='middle'
			)
		),
		speechBefore=(
			field='sparsity',
			scale=(description='skip')
		)
	),
	config=(speechRate=1.75)
)`;
	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Sparsity (simple) Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Sparsity (simple) Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-fjnbAJ" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-4dSjip" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The sparsity of data tables.
		</p>
		<p id="speech-Sc2WzG" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-7Au1XO" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The name is mapped to time
		</p>
		<p id="speech-XEzN6D" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The sparsity is mapped to tapSpeed. The minimum value 0 is mapped to
		</p>
		<section>
			<audio id="audio-J3wSXW" controls>
				<source src={Sound_J3wSXW} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aMk96h" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 1 is mapped to
		</p>
		<section>
			<audio id="audio-XkyZTp" controls>
				<source src={Sound_XkyZTp} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-TVz4IJ" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<p
			id="speech-akWVGj"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			A
		</p>
		<section>
			<audio id="audio-K18fJt" controls>
				<source src={Sound_K18fJt} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-AwoRuy"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			B
		</p>
		<section>
			<audio id="audio-XDQl3i" controls>
				<source src={Sound_XDQl3i} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-9twmpB"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			C
		</p>
		<section>
			<audio id="audio-6CwJce" controls>
				<source src={Sound_6CwJce} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-y2kYpi"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			D
		</p>
		<section>
			<audio id="audio-g39xw2" controls>
				<source src={Sound_g39xw2} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-fb11iV"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			E
		</p>
		<section>
			<audio id="audio-46Pjuh" controls>
				<source src={Sound_46Pjuh} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-Xwaans" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
	h3 {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}
</style>
