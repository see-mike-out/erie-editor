<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { onMount } from "svelte";

	const Stream = Erie.Stream;

	let data = [
		{ name: "A", sparsity: 0.5, length: 5 },
		{ name: "B", sparsity: 0.1, length: 4 },
		{ name: "C", sparsity: 0.9, length: 3 },
		{ name: "D", sparsity: 0, length: 6 },
		{ name: "E", sparsity: 0.75, length: 7 },
	];

	let jsonSpec = {
		description: "The sparsity and length of data tables.",
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
			tapCount: {
				field: "length",
				type: "quantitative",
				scale: {
					domain: [0, 7],
					range: [0, 7],
					band: 0.15,
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
spec.description('The sparsity and length of data tables.');
spec.data.set('values', ${JSON.stringify(data)});
spec.tone.type('default').continued(false);
spec.encoding.time.field('name', 'nominal')
                  .scale('timing', 'relative');
spec.encoding.tapCount.field('length', 'quantitative')
                      .scale('domain', [0, 7])
                      .scale('range', [0, 7])
                      .scale('band', 0.15);
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
		spec.description("The sparsity and length of data tables.");
		spec.data.set("values", data);
		spec.tone.type("default").continued(false);
		spec.encoding.time.field("name", "nominal").scale("timing", "relative");
		spec.encoding.tapCount
			.field("length", "quantitative")
			.scale("domain", [0, 7])
			.scale("range", [0, 7])
			.scale("band", 0.15);
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
	description='The sparsity and length of data tables.',
	data=(values=${JSON.stringify(data)}),
	tone=(type='default', continued=false),
	encoding=(
		time=(
			field='name',
			type='nominal',
			scale=(timing='relative')
		),
		tapCount=(
			field='sparsity',
			type='quantitative',
			scale=(
				domain=[0, 7],
        range=[0, 7],
        band=0.15
			)
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
	<title>Erie Sonification Recording for Sparsity and Lenght Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Sparsity and Lenght Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-vhogfG" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-PkBELE" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The sparsity of data tables.
		</p>
		<p id="speech-pPinEk" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-A0pN8Y" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The name is mapped to time
		</p>
		<p id="speech-B5Jlxp" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The length is mapped to tapCount. The minimum value 0 is mapped to
		</p>
		<section>
			<audio id="audio-OVyGPY" controls>
				<source
					src="/example_sounds/erie-rec-OVyGPY.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-op2vGq" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 7 is mapped to
		</p>
		<section>
			<audio id="audio-V5hTfW" controls>
				<source
					src="/example_sounds/erie-rec-V5hTfW.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-iblTNd" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The sparsity is mapped to tapSpeed. The minimum value 0 is mapped to
		</p>
		<section>
			<audio id="audio-yjHuu7" controls>
				<source
					src="/example_sounds/erie-rec-yjHuu7.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-sRjQqY" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 1 is mapped to
		</p>
		<section>
			<audio id="audio-p5VGS8" controls>
				<source
					src="/example_sounds/erie-rec-p5VGS8.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-QPIwjd" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<p
			id="speech-UADA3k"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			A
		</p>
		<section>
			<audio id="audio-F7e0lb" controls>
				<source
					src="/example_sounds/erie-rec-F7e0lb.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-FPgEzV"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			B
		</p>
		<section>
			<audio id="audio-0kY1bY" controls>
				<source
					src="/example_sounds/erie-rec-0kY1bY.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-xvyFvv"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			C
		</p>
		<section>
			<audio id="audio-ifgmU0" controls>
				<source
					src="/example_sounds/erie-rec-ifgmU0.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-4CHk34"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			D
		</p>
		<section>
			<audio id="audio-siNbnC" controls>
				<source
					src="/example_sounds/erie-rec-siNbnC.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-rj17I6"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			E
		</p>
		<section>
			<audio id="audio-SVUmpF" controls>
				<source
					src="/example_sounds/erie-rec-SVUmpF.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-k2Pde7" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
