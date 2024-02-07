<script>
	import * as Erie from "erie-web";
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import { onMount } from "svelte";
	import Sound_XRI3Yk from "$lib/example_sounds/erie-rec-XRI3Yk.webm";

	const Stream = Erie.Stream;

	let x_field = "start",
		x2_field = "length",
		y_field = "note";

	const data = [
		{
			start: 0,
			length: 0.25,
			note: "E4",
		},
		{
			start: 0.25,
			length: 0.5,
			note: "E4",
		},
		{
			start: 0.75,
			length: 0.25,
			note: "E4",
		},
		{
			start: 1.25,
			length: 0.25,
			note: "C4",
		},
		{
			start: 1.5,
			length: 0.5,
			note: "E4",
		},
		{
			start: 2,
			length: 1,
			note: "G4",
		},
		{
			start: 3,
			length: 1,
			note: "G3",
		},
		{
			start: 4,
			length: 0.5,
			note: "C4",
		},
		{
			start: 4.75,
			length: 0.25,
			note: "G3",
		},
		{
			start: 5.5,
			length: 0.5,
			note: "E3",
		},
		{
			start: 6.25,
			length: 0.25,
			note: "A3",
		},
		{
			start: 6.75,
			length: 0.25,
			note: "B3",
		},
		{
			start: 7.25,
			length: 0.25,
			note: "B3b",
		},
		{
			start: 7.5,
			length: 0.5,
			note: "A3",
		},
		{
			start: 8,
			length: 0.33,
			note: "G3",
		},
		{
			start: 8.33,
			length: 0.33,
			note: "E4",
		},
		{
			start: 8.66,
			length: 0.34,
			note: "G4",
		},
		{
			start: 9,
			length: 0.5,
			note: "A4",
		},
		{
			start: 9.5,
			length: 0.25,
			note: "F4",
		},
		{
			start: 9.75,
			length: 0.25,
			note: "G4",
		},
		{
			start: 10.25,
			length: 0.25,
			note: "E4",
		},
		{
			start: 10.75,
			length: 0.25,
			note: "C4",
		},
		{
			start: 11,
			length: 0.25,
			note: "D4",
		},
		{
			start: 11.25,
			length: 0.25,
			note: "B3",
		},
		{
			start: 12,
			length: 0.5,
			note: "C4",
		},
		{
			start: 12.75,
			length: 0.25,
			note: "G3",
		},
		{
			start: 13.5,
			length: 0.5,
			note: "E3",
		},
		{
			start: 14.25,
			length: 0.25,
			note: "A3",
		},
		{
			start: 14.75,
			length: 0.25,
			note: "B3",
		},
		{
			start: 15.25,
			length: 0.25,
			note: "B3b",
		},
		{
			start: 15.5,
			length: 0.5,
			note: "A3",
		},
		{
			start: 16,
			length: 0.33,
			note: "G3",
		},
		{
			start: 16.33,
			length: 0.33,
			note: "E4",
		},
		{
			start: 16.66,
			length: 0.34,
			note: "G4",
		},
		{
			start: 17,
			length: 0.5,
			note: "A4",
		},
		{
			start: 17.5,
			length: 0.25,
			note: "F4",
		},
		{
			start: 17.75,
			length: 0.25,
			note: "G4",
		},
		{
			start: 18.25,
			length: 0.25,
			note: "E4",
		},
		{
			start: 18.75,
			length: 0.25,
			note: "C4",
		},
		{
			start: 19,
			length: 0.25,
			note: "D4",
		},
		{
			start: 19.25,
			length: 0.25,
			note: "B3",
		},
	];

	let jsonSpec = {
		description: `Super Mario Opening`,
		data: {
			values: data,
		},
		tone: {
			type: "piano",
			continued: false,
		},
		encoding: {
			time: {
				field: x_field,
				type: "quantitative",
				scale: {
					timing: "absolute",
					times: 1,
					description: "skip",
				},
			},
			duration: {
				field: x2_field,
				type: "quantitative",
				scale: {
					times: 1,
					description: "skip",
				},
			},
			pitch: {
				field: y_field,
				scale: {
					range: { field: y_field },
				},
			},
		},
		config: {
			speechRate: 1.75,
			timeUnit: { unit: "beat", rounding: "never", tempo: 30 },
			skipScaleSpeech: true,
		},
	};

	let jsCode = `let data = ${JSON.stringify(data)};
let spec = new Stream();
spec.description('Super Mario Opening');
spec.data.set('values', data);
spec.tone.type('piano').continued(false);
spec.encoding.time.field('${x_field}', 'quantitative')
                  .scale('timing', 'absolute')
                  .scale('times', 1)
                  .scale('description', 'skip');
spec.encoding.duration.field('${x2_field}', 'quantitative')
                      .scale('times', 1)
                      .scale('description', 'skip');
spec.encoding.pitch.field('${y_field}')
                   .scale('range', {'field': '${y_field}'});
spec.config.set('speechRate', 1.75);
spec.config.set('timeUnit', { unit: 'beat', rounding: 'never', tempo: 30});
spec.config.set('skipScaleSpeech', true);`;

	function runSpec() {
		let spec = new Stream();
		spec.description("Super Mario Opening");
		spec.data.set("values", data);
		spec.tone.type("piano").continued(false);
		spec.encoding.time
			.field(x_field, "quantitative")
			.scale("timing", "absolute")
			.scale("times", 1)
			.scale("description", "skip");
		spec.encoding.duration
			.field(x2_field, "quantitative")
			.scale("times", 1)
			.scale("description", "skip");
		spec.encoding.pitch.field(y_field).scale("range", { field: y_field });
		spec.config.set("speechRate", 1.75);
		spec.config.set("timeUnit", { unit: "beat", rounding: "never", tempo: 30 });
		spec.config.set("skipScaleSpeech", true);
		console.log(spec.get());
	}
	let formalSpec = `Spec=(
	description='A histogram of Major Genre variable.',
	data=(url='data/movies.json'),
	tone=(type='clap', continued=false),
	encoding=(
		time=(
			field='Major Genre',
			type='nominal',
			scale=(timing='relative')
		),
		tapCount=(
			aggregate='count',
			type='quantitative',
			scale=(
				range=[0, 20],
				title='Movie Count'
				polarity='positive',
				maxDistinct=true,
			)
		),
		speechBefore=(
			field='Major Genre',
			scale=(description='skip')
		)
	),
	config=(speechRate=1.75)
)`;
	onMount(() => {
		runSpec;
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Super Mario Opening Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Super Mario Opening Example</h1>
	<p>
		<a href="../../?ex=mario-1&showVis=true" target="_blank">Open in the online editor</a>
	</p>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-uLPnSp" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-yGfCXP" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Super Mario Opening
		</p>
		<p id="speech-Dk22A0" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-XRI3Yk" controls>
				<source
					src={Sound_XRI3Yk}
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-pvva4X" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
