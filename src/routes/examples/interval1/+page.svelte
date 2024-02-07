<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { onMount } from "svelte";

	import Sound_OtqLt0 from "$lib/example_sounds/erie-rec-OtqLt0.webm";
	import Sound_VJTNVm from "$lib/example_sounds/erie-rec-VJTNVm.webm";
	import Sound_K8uw3J from "$lib/example_sounds/erie-rec-K8uw3J.webm";
	import Sound_bpDflu from "$lib/example_sounds/erie-rec-bpDflu.webm";
	import Sound_MNG9JN from "$lib/example_sounds/erie-rec-MNG9JN.webm";
	import Sound_d34ECm from "$lib/example_sounds/erie-rec-d34ECm.webm";
	import Sound_6R6ght from "$lib/example_sounds/erie-rec-6R6ght.webm";
	import Sound_TfG5pM from "$lib/example_sounds/erie-rec-TfG5pM.webm";
	import Sound_u32Vm4 from "$lib/example_sounds/erie-rec-u32Vm4.webm";
	import Sound_UN2fqr from "$lib/example_sounds/erie-rec-UN2fqr.webm";
	import Sound_MvhP1c from "$lib/example_sounds/erie-rec-MvhP1c.webm";
	import Sound_ijxVS4 from "$lib/example_sounds/erie-rec-ijxVS4.webm";
	import Sound_1wqPZ4 from "$lib/example_sounds/erie-rec-1wqPZ4.webm";
	import Sound_knj6ot from "$lib/example_sounds/erie-rec-knj6ot.webm";
	import Sound_khEt2F from "$lib/example_sounds/erie-rec-khEt2F.webm";
	import Sound_N8upyL from "$lib/example_sounds/erie-rec-N8upyL.webm";

	const Stream = Erie.Stream;
	const Calculate = Erie.Calculate;
	const Fold = Erie.Fold;
	const Aggregate = Erie.Aggregate;

	let jsonSpec = {
		description: "Mean and standard deviation of Miles_per_Gallon by Origin",
		data: {
			url: "data/cars.json",
		},
		transform: [
			{
				aggregate: [
					{
						op: "mean",
						field: "Miles_per_Gallon",
						as: "Miles_per_Gallon_mean",
					},
					{
						op: "stdevp",
						field: "Miles_per_Gallon",
						as: "Miles_per_Gallon_stdevp",
					},
				],
				groupby: ["Origin"],
			},
			{
				calculate:
					"datum.Miles_per_Gallon_mean - datum.Miles_per_Gallon_stdevp",
				as: "Miles_per_Gallon_lower",
			},
			{
				calculate:
					"datum.Miles_per_Gallon_mean + datum.Miles_per_Gallon_stdevp",
				as: "Miles_per_Gallon_upper",
			},
			{
				fold: [
					"Miles_per_Gallon_lower",
					"Miles_per_Gallon_mean",
					"Miles_per_Gallon_upper",
				],
				by: "Origin",
				exclude: true,
				as: ["measure", "statistics"],
			},
		],
		tone: {
			continued: false,
		},
		encoding: {
			time: {
				field: "measure",
				type: "nominal",
				scale: {
					band: 0.5,
					order: [
						"Miles_per_Gallon_lower",
						"Miles_per_Gallon_mean",
						"Miles_per_Gallon_upper",
					],
				},
			},
			pan: {
				field: "statistics",
				type: "quantitative",
				scale: {
					polarity: "positive",
					maxDistinct: true,
				},
				format: ".4",
			},
			pitch: {
				field: "statistics",
				type: "quantitative",
				scale: {
					polarity: "positive",
					range: ["C2", "C5"],
				},
				format: ".4",
			},
			timbre: {
				field: "measure",
				type: "nominal",
				scale: {
					domain: [
						"Miles_per_Gallon_lower",
						"Miles_per_Gallon_mean",
						"Miles_per_Gallon_upper",
					],
					range: ["piano", "violin", "piano"],
				},
			},
			repeat: {
				field: "Origin",
				type: "nominal",
				speech: true,
				scale: {
					description: "skip",
				},
			},
		},
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let spec = new Stream();
spec.description('Mean and standard deviation of Miles_per_Gallon by Origin');
spec.data.set('url', 'data/cars.json');
let aggregate = new Aggregate();
aggregate.add('mean', 'Miles_per_Gallon', 'Miles_per_Gallon_mean')
         .add('stdevp', 'Miles_per_Gallon', 'Miles_per_Gallon_stdevp')
         .groupby(['Origin']);
let lower = new Calculate('datum.Miles_per_Gallon_mean - datum.Miles_per_Gallon_stdevp', 'Miles_per_Gallon_lower');
let upper = new Calculate('datum.Miles_per_Gallon_mean + datum.Miles_per_Gallon_stdevp', 'Miles_per_Gallon_upper');
let fold = new Fold(['Miles_per_Gallon_lower', 'Miles_per_Gallon_mean', 'Miles_per_Gallon_upper'], 'Origin')
fold.exclude(true).as(['measure', 'statistics'])
spec.transform.add(aggregate).add(lower).add(upper).add(fold);
spec.tone.type('default').continued(false);
spec.encoding.time.field('measure', 'nominal')
                  .scale('order', ['Miles_per_Gallon_lower', 'Miles_per_Gallon_mean', 'Miles_per_Gallon_upper'])
                  .scale('band', 0.5);
spec.encoding.pan.field('statistics', 'quantitative')
                 .scale('polarity', 'positive')
                 .scale('maxDistinct', true)
                 .format('.4');
spec.encoding.pitch.field('statistics', 'quantitative')
                   .scale('polarity', 'positive')
                   .scale('range', ['C2', 'C5'])
                   .format('.4');
spec.encoding.timbre.field('measure', 'nominal')
                    .scale('domain', ['Miles_per_Gallon_lower', 'Miles_per_Gallon_mean', 'Miles_per_Gallon_upper'],)
                    .scale('range', ['piano', 'violin', 'piano']);
spec.encoding.repeat.field('Origin', 'nominal')
                    .speech(true)
                    .scale('description', 'skip');
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let spec = new Stream();
		spec.description(
			"Mean and standard deviation of Miles_per_Gallon by Origin",
		);
		spec.data.set("url", "data/cars.json");
		let aggregate = new Aggregate();
		aggregate
			.add("mean", "Miles_per_Gallon", "Miles_per_Gallon_mean")
			.add("stdevp", "Miles_per_Gallon", "Miles_per_Gallon_stdevp")
			.groupby(["Origin"]);
		let lower = new Calculate(
			"datum.Miles_per_Gallon_mean - datum.Miles_per_Gallon_stdevp",
			"Miles_per_Gallon_lower",
		);
		let upper = new Calculate(
			"datum.Miles_per_Gallon_mean + datum.Miles_per_Gallon_stdevp",
			"Miles_per_Gallon_upper",
		);
		let fold = new Fold(
			[
				"Miles_per_Gallon_lower",
				"Miles_per_Gallon_mean",
				"Miles_per_Gallon_upper",
			],
			"Origin",
		);
		fold.exclude(true).as(["measure", "statistics"]);
		spec.transform.add(aggregate).add(lower).add(upper).add(fold);
		spec.tone.type("default").continued(false);
		spec.encoding.time
			.field("measure", "nominal")
			.scale("order", [
				"Miles_per_Gallon_lower",
				"Miles_per_Gallon_mean",
				"Miles_per_Gallon_upper",
			])
			.scale("band", 0.5);
		spec.encoding.pan
			.field("statistics", "quantitative")
			.scale("polarity", "positive")
			.scale("maxDistinct", true)
			.format(".4");
		spec.encoding.pitch
			.field("statistics", "quantitative")
			.scale("polarity", "positive")
			.scale("range", ["C2", "C5"])
			.format(".4");
		spec.encoding.timbre
			.field("measure", "nominal")
			.scale("domain", [
				"Miles_per_Gallon_lower",
				"Miles_per_Gallon_mean",
				"Miles_per_Gallon_upper",
			])
			.scale("range", ["piano", "violin", "piano"]);
		spec.encoding.repeat
			.field("Origin", "nominal")
			.speech(true)
			.scale("description", "skip");
		spec.config.set("speechRate", 1.75);
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
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Interval Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Interval Example</h1>
	<p>
		<a href="../../?ex=interval-1&showVis=true" target="_blank">Open in the online editor</a>
	</p>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-rDoHqq" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-4BJ26k" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Mean and standard deviation of Miles_per_Gallon by Origin
		</p>
		<p id="speech-7cZm3u" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This sonification sequence consists of 3 parts.
		</p>
		<p id="speech-v8PQTj" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The first stream has the following sound mappings.
		</p>
		<p id="speech-MqqQB0" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The measure is mapped to time
		</p>
		<p id="speech-BRBDu3" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The statistics is mapped to pan. The minimum value 13.69 is mapped to
		</p>
		<section>
			<audio id="audio-OtqLt0" controls>
				<source src={Sound_OtqLt0} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-eb6BZD" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 36.5 is mapped to
		</p>
		<section>
			<audio id="audio-VJTNVm" controls>
				<source src={Sound_VJTNVm} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-527ZYQ" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The statistics is mapped to pitch. The minimum value 13.69 is mapped to
		</p>
		<section>
			<audio id="audio-K8uw3J" controls>
				<source src={Sound_K8uw3J} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-Q0NZpf" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 36.5 is mapped to
		</p>
		<section>
			<audio id="audio-bpDflu" controls>
				<source src={Sound_bpDflu} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-wkgxz2" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The measure is mapped to timbre. The value Miles_per_Gallon_lower is
		</p>
		<section>
			<audio id="audio-MNG9JN" controls>
				<source src={Sound_MNG9JN} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-YROoox" style="speech-rate: 315;" data-web-speech-rate="1.75">
			. The value Miles_per_Gallon_mean is
		</p>
		<section>
			<audio id="audio-d34ECm" controls>
				<source src={Sound_d34ECm} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-YQEKoA" style="speech-rate: 315;" data-web-speech-rate="1.75">
			. The value Miles_per_Gallon_upper is
		</p>
		<section>
			<audio id="audio-6R6ght" controls>
				<source src={Sound_6R6ght} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-4e5Uw4" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 1. USA.
		</p>
		<p id="speech-Z78XdZ" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-TfG5pM" controls>
				<source src={Sound_TfG5pM} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<section>
			<audio id="audio-u32Vm4" controls>
				<source src={Sound_u32Vm4} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<section>
			<audio id="audio-UN2fqr" controls>
				<source src={Sound_UN2fqr} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-XtNOv5" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 2. Europe.
		</p>
		<p id="speech-i57qf3" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-MvhP1c" controls>
				<source src={Sound_MvhP1c} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<section>
			<audio id="audio-ijxVS4" controls>
				<source src={Sound_ijxVS4} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<section>
			<audio id="audio-1wqPZ4" controls>
				<source src={Sound_1wqPZ4} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-ofhen2" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 3. Japan.
		</p>
		<p id="speech-Rm9VQf" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-knj6ot" controls>
				<source src={Sound_knj6ot} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<section>
			<audio id="audio-khEt2F" controls>
				<source src={Sound_khEt2F} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<section>
			<audio id="audio-N8upyL" controls>
				<source src={Sound_N8upyL} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-8N7PkM" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
