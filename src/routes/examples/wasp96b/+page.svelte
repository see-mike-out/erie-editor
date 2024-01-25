<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	const Stream = Erie.Stream;
	const Filter = Erie.Filter;
	const Overlay = Erie.Overlay;
	const SampledTone = Erie.SampledTone;

	if (browser) {
		window.Stream = Stream;
	}

	let x_field = "wavelength",
		y_field = "blocked";
	let data = [
		{
			blocked: 14304.11403508772,
			wavelength: 0.619,
			water: false,
		},
		{
			blocked: 14195.754385964912,
			wavelength: 0.6251403409090909,
			water: false,
		},
		{
			blocked: 14510.982456140351,
			wavelength: 0.6374210227272727,
			water: false,
		},
		{
			blocked: 14422.32456140351,
			wavelength: 0.6435613636363636,
			water: false,
		},
		{
			blocked: 14520.833333333334,
			wavelength: 0.6497017045454545,
			water: false,
		},
		{
			blocked: 14520.833333333334,
			wavelength: 0.6558420454545455,
			water: false,
		},
		{
			blocked: 14313.964912280702,
			wavelength: 0.6681227272727273,
			water: false,
		},
		{
			blocked: 14373.070175438597,
			wavelength: 0.6619823863636364,
			water: false,
		},
		{
			blocked: 14176.052631578947,
			wavelength: 0.6742630681818182,
			water: false,
		},
		{
			blocked: 14235.157894736842,
			wavelength: 0.68654375,
			water: false,
		},
		{
			blocked: 14254.859649122807,
			wavelength: 0.6926840909090909,
			water: false,
		},
		{
			blocked: 14156.350877192983,
			wavelength: 0.6988244318181819,
			water: false,
		},
		{
			blocked: 13890.377192982456,
			wavelength: 0.7049647727272728,
			water: false,
		},
		{
			blocked: 13959.333333333334,
			wavelength: 0.7172454545454545,
			water: false,
		},
		{
			blocked: 14176.052631578947,
			wavelength: 0.7233857954545455,
			water: false,
		},
		{
			blocked: 14185.90350877193,
			wavelength: 0.7295261363636364,
			water: false,
		},
		{
			blocked: 14215.456140350878,
			wavelength: 0.7356664772727273,
			water: false,
		},
		{
			blocked: 13969.184210526315,
			wavelength: 0.7479471590909091,
			water: false,
		},
		{
			blocked: 14235.157894736842,
			wavelength: 0.7540875,
			water: false,
		},
		{
			blocked: 14057.842105263158,
			wavelength: 0.7602278409090909,
			water: false,
		},
		{
			blocked: 14176.052631578947,
			wavelength: 0.7663681818181819,
			water: false,
		},
		{
			blocked: 14284.412280701754,
			wavelength: 0.7786488636363638,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 0.7847892045454545,
			water: false,
		},
		{
			blocked: 14018.438596491229,
			wavelength: 0.7909295454545455,
			water: false,
		},
		{
			blocked: 13939.631578947368,
			wavelength: 0.8032102272727273,
			water: false,
		},
		{
			blocked: 14392.771929824561,
			wavelength: 0.8093505681818183,
			water: false,
		},
		{
			blocked: 14304.11403508772,
			wavelength: 0.82163125,
			water: false,
		},
		{
			blocked: 14284.412280701754,
			wavelength: 0.827771590909091,
			water: false,
		},
		{
			blocked: 14215.456140350878,
			wavelength: 0.8400522727272728,
			water: false,
		},
		{
			blocked: 14038.140350877193,
			wavelength: 0.8461926136363637,
			water: false,
		},
		{
			blocked: 14264.71052631579,
			wavelength: 0.8523329545454547,
			water: false,
		},
		{
			blocked: 14343.517543859649,
			wavelength: 0.8646136363636364,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 0.8707539772727273,
			water: false,
		},
		{
			blocked: 14560.236842105263,
			wavelength: 0.8830346590909093,
			water: false,
		},
		{
			blocked: 14442.026315789473,
			wavelength: 0.895315340909091,
			water: false,
		},
		{
			blocked: 14304.11403508772,
			wavelength: 0.9014556818181818,
			water: false,
		},
		{
			blocked: 14225.307017543859,
			wavelength: 0.9137363636363638,
			water: false,
		},
		{
			blocked: 14156.350877192983,
			wavelength: 0.9260170454545456,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 0.9321573863636364,
			water: false,
		},
		{
			blocked: 14077.543859649122,
			wavelength: 0.9444380681818183,
			water: true,
		},
		{
			blocked: 14156.350877192983,
			wavelength: 0.9567187500000001,
			water: false,
		},
		{
			blocked: 14205.605263157895,
			wavelength: 0.9689994318181818,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 0.9751397727272729,
			water: false,
		},
		{
			blocked: 14146.5,
			wavelength: 0.9874204545454546,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 0.9997011363636364,
			water: false,
		},
		{
			blocked: 14235.157894736842,
			wavelength: 1.0119818181818183,
			water: false,
		},
		{
			blocked: 14225.307017543859,
			wavelength: 1.0242625,
			water: false,
		},
		{
			blocked: 14116.947368421053,
			wavelength: 1.036543181818182,
			water: false,
		},
		{
			blocked: 14205.605263157895,
			wavelength: 1.0426835227272728,
			water: false,
		},
		{
			blocked: 14176.052631578947,
			wavelength: 1.0549642045454546,
			water: false,
		},
		{
			blocked: 14264.71052631579,
			wavelength: 1.0672448863636366,
			water: false,
		},
		{
			blocked: 14254.859649122807,
			wavelength: 1.0795255681818183,
			water: false,
		},
		{
			blocked: 14205.605263157895,
			wavelength: 1.0918062500000003,
			water: false,
		},
		{
			blocked: 14087.394736842105,
			wavelength: 1.104086931818182,
			water: false,
		},
		{
			blocked: 14087.394736842105,
			wavelength: 1.1163676136363638,
			water: false,
		},
		{
			blocked: 14116.947368421053,
			wavelength: 1.1286482954545456,
			water: false,
		},
		{
			blocked: 14067.692982456141,
			wavelength: 1.1409289772727274,
			water: false,
		},
		{
			blocked: 14038.140350877193,
			wavelength: 1.1532096590909093,
			water: true,
		},
		{
			blocked: 14136.649122807017,
			wavelength: 1.165490340909091,
			water: false,
		},
		{
			blocked: 14097.245614035088,
			wavelength: 1.1777710227272729,
			water: false,
		},
		{
			blocked: 14225.307017543859,
			wavelength: 1.1961920454545456,
			water: false,
		},
		{
			blocked: 14284.412280701754,
			wavelength: 1.2084727272727274,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 1.2207534090909093,
			water: false,
		},
		{
			blocked: 14304.11403508772,
			wavelength: 1.233034090909091,
			water: false,
		},
		{
			blocked: 14156.350877192983,
			wavelength: 1.2453147727272729,
			water: false,
		},
		{
			blocked: 14185.90350877193,
			wavelength: 1.2575954545454548,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 1.2760164772727276,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 1.2882971590909094,
			water: false,
		},
		{
			blocked: 14422.32456140351,
			wavelength: 1.3435602272727274,
			water: false,
		},
		{
			blocked: 14284.412280701754,
			wavelength: 1.3005778409090911,
			water: false,
		},
		{
			blocked: 14225.307017543859,
			wavelength: 1.3189988636363639,
			water: false,
		},
		{
			blocked: 14176.052631578947,
			wavelength: 1.3312795454545456,
			water: false,
		},
		{
			blocked: 14116.947368421053,
			wavelength: 1.3619812500000004,
			water: false,
		},
		{
			blocked: 13988.88596491228,
			wavelength: 1.3742619318181821,
			water: false,
		},
		{
			blocked: 14028.28947368421,
			wavelength: 1.3926829545454549,
			water: false,
		},
		{
			blocked: 13959.333333333334,
			wavelength: 1.4049636363636366,
			water: false,
		},
		{
			blocked: 14008.587719298246,
			wavelength: 1.4233846590909094,
			water: true,
		},
		{
			blocked: 13998.736842105263,
			wavelength: 1.4356653409090914,
			water: false,
		},
		{
			blocked: 13979.035087719298,
			wavelength: 1.454086363636364,
			water: false,
		},
		{
			blocked: 14077.543859649122,
			wavelength: 1.4663670454545457,
			water: false,
		},
		{
			blocked: 14156.350877192983,
			wavelength: 1.4847880681818184,
			water: false,
		},
		{
			blocked: 14136.649122807017,
			wavelength: 1.515489772727273,
			water: false,
		},
		{
			blocked: 14087.394736842105,
			wavelength: 1.5339107954545457,
			water: false,
		},
		{
			blocked: 14245.008771929824,
			wavelength: 1.5032090909090914,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 1.5523318181818184,
			water: false,
		},
		{
			blocked: 14304.11403508772,
			wavelength: 1.5646125000000004,
			water: false,
		},
		{
			blocked: 14382.921052631578,
			wavelength: 1.583033522727273,
			water: false,
		},
		{
			blocked: 14392.771929824561,
			wavelength: 1.6014545454545457,
			water: false,
		},
		{
			blocked: 14343.517543859649,
			wavelength: 1.6198755681818182,
			water: false,
		},
		{
			blocked: 14353.368421052632,
			wavelength: 1.638296590909091,
			water: false,
		},
		{
			blocked: 14550.38596491228,
			wavelength: 1.650577272727273,
			water: false,
		},
		{
			blocked: 14481.429824561403,
			wavelength: 1.6689982954545457,
			water: false,
		},
		{
			blocked: 14530.684210526315,
			wavelength: 1.6874193181818185,
			water: false,
		},
		{
			blocked: 14343.517543859649,
			wavelength: 1.7242613636363642,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 1.7426823863636367,
			water: false,
		},
		{
			blocked: 14373.070175438597,
			wavelength: 1.7611034090909095,
			water: false,
		},
		{
			blocked: 14481.429824561403,
			wavelength: 1.7795244318181822,
			water: false,
		},
		{
			blocked: 14392.771929824561,
			wavelength: 1.8040857954545457,
			water: false,
		},
		{
			blocked: 14471.578947368422,
			wavelength: 1.8225068181818185,
			water: false,
		},
		{
			blocked: 14097.245614035088,
			wavelength: 1.8409278409090912,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 1.8593488636363642,
			water: false,
		},
		{
			blocked: 14097.245614035088,
			wavelength: 1.877769886363637,
			water: false,
		},
		{
			blocked: 14185.90350877193,
			wavelength: 1.9023312500000003,
			water: false,
		},
		{
			blocked: 14166.201754385966,
			wavelength: 1.920752272727273,
			water: true,
		},
		{
			blocked: 13988.88596491228,
			wavelength: 1.9391732954545458,
			water: false,
		},
		{
			blocked: 13979.035087719298,
			wavelength: 1.9821556818181822,
			water: false,
		},
		{
			blocked: 14215.456140350878,
			wavelength: 1.9637346590909095,
			water: false,
		},
		{
			blocked: 14304.11403508772,
			wavelength: 2.000576704545455,
			water: false,
		},
		{
			blocked: 14343.517543859649,
			wavelength: 2.0251380681818185,
			water: false,
		},
		{
			blocked: 14510.982456140351,
			wavelength: 2.0496994318181825,
			water: false,
		},
		{
			blocked: 14865.61403508772,
			wavelength: 2.068120454545455,
			water: false,
		},
		{
			blocked: 14737.552631578947,
			wavelength: 2.0926818181818185,
			water: false,
		},
		{
			blocked: 14895.166666666666,
			wavelength: 2.111102840909091,
			water: false,
		},
		{
			blocked: 14550.38596491228,
			wavelength: 2.135664204545455,
			water: false,
		},
		{
			blocked: 14461.728070175439,
			wavelength: 2.178646590909091,
			water: false,
		},
		{
			blocked: 14708,
			wavelength: 2.203207954545455,
			water: false,
		},
		{
			blocked: 14451.877192982456,
			wavelength: 2.2277693181818186,
			water: false,
		},
		{
			blocked: 14215.456140350878,
			wavelength: 2.276892045454546,
			water: false,
		},
		{
			blocked: 13988.88596491228,
			wavelength: 2.3014534090909096,
			water: false,
		},
		{
			blocked: 13979.035087719298,
			wavelength: 2.326014772727273,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 2.350576136363637,
			water: false,
		},
		{
			blocked: 14156.350877192983,
			wavelength: 2.399698863636364,
			water: false,
		},
		{
			blocked: 13811.570175438597,
			wavelength: 2.3751375,
			water: false,
		},
		{
			blocked: 13614.552631578947,
			wavelength: 2.4979443181818186,
			water: false,
		},
		{
			blocked: 13772.166666666666,
			wavelength: 2.448821590909091,
			water: false,
		},
		{
			blocked: 13604.701754385966,
			wavelength: 2.553207386363637,
			water: false,
		},
		{
			blocked: 13585,
			wavelength: 2.5777687500000006,
			water: false,
		},
		{
			blocked: 14038.140350877193,
			wavelength: 2.633031818181819,
			water: false,
		},
		{
			blocked: 13939.631578947368,
			wavelength: 2.7496982954545457,
			water: false,
		},
		{
			blocked: 14323.815789473683,
			wavelength: 2.718996590909091,
			water: false,
		},
		{
			blocked: 14343.517543859649,
			wavelength: 2.694435227272728,
			water: false,
		},
		{
			blocked: 14471.578947368422,
			wavelength: 2.6637335227272736,
			water: false,
		},
		{
			blocked: 14658.745614035088,
			wavelength: 2.7804,
			water: false,
		},
		{
			blocked: 13821.421052631578,
			wavelength: 2.5286460227272736,
			water: false,
		},
		{
			blocked: 13762.315789473685,
			wavelength: 2.608470454545455,
			water: false,
		},
		{
			blocked: 14284.412280701754,
			wavelength: 2.424260227272728,
			water: false,
		},
		{
			blocked: 14146.5,
			wavelength: 2.473382954545455,
			water: false,
		},
		{
			blocked: 14639.043859649122,
			wavelength: 2.252330681818182,
			water: false,
		},
		{
			blocked: 14274.561403508771,
			wavelength: 2.1602255681818185,
			water: false,
		},
		{
			blocked: 14579.938596491229,
			wavelength: 1.7058403409090912,
			water: false,
		},
	];

	let jsonSpec = {
		description: `Exoplanet WASP-96 b infrared transmission data.`,
		data: {
			values: data,
		},
		overlay: [
			{
				tone: {
					type: "default",
					continued: false,
				},
				encoding: {
					time: {
						field: x_field,
						type: "quantitative",
						scale: {
							timing: "absolute",
							domain: [0.6, 2.8],
							length: 18,
						},
						format: "d",
					},
					loudness: {
						field: y_field,
						type: "quantitative",
						scale: {
							title: "Amount of Light Blocked (unit, parts per million)",
							polarity: "negative",
							range: [0.2, 0.75],
						},
						format: "d",
					},
					pitch: {
						field: x_field,
						type: "quantitative",
						scale: {
							title: "Wavelength of Light (unit, microns)",
							polarity: "negative",
						},
					},
				},
			},
			{
				transform: [
					{
						filter: "datum.water",
					},
				],
				tone: {
					type: "water",
					continued: false,
				},
				encoding: {
					time: {
						field: x_field,
						type: "quantitative",
						scale: {
							timing: "absolute",
							domain: [0.6, 2.8],
							length: 18,
						},
					},
					loudness: {
						value: 2,
					},
				},
			},
		],
		sampling: [
			{
				name: "water",
				sample: {
					mono: "external_audio/water.mp3",
				},
			},
		],
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let data = ${JSON.stringify(data, null, 2)};
let main = new Stream();
main.tone.type('default').continued(false);
main.encoding.time.field('${x_field}', 'quantitative')
                  .scale('timing', 'absolute')
                  .scale('domain', [0.6, 2.8])
                  .scale('length', 18)
                  .format('d');
main.encoding.loudness.field('${y_field}', 'quantitative')
                 .scale('polarity', 'negative')
                 .scale('range', [0.2, 0.75])
                 .scale('title', 'Amount of Light Blocked (unit, parts per million)')
                 .format('d');
main.encoding.pitch.field('${x_field}', 'quantitative')
                   .scale('polarity', 'negative')
                   .scale('title', 'Wavelength of Light (unit, microns)');
let water = new Stream();
let filter = new Filter('datum.water');
water.transform.add(filter);
water.tone.type('water').continued(false);
water.encoding.time.field('${x_field}', 'quantitative')
                   .scale('timing', 'absolute')
                   .scale('domain', [0.6, 2.8])
                   .scale('length', 18)
                   .format('d');
let spec = new Overlay(main, water);
spec.data.set('values', data);
let waterSample = new SampledTone('water', { mono: 'external_audio/water.mp3' });
spec.sampling.add(waterSample)
spec.config.set('speechRate', 1.75);
spec.description('Exoplanet WASP-96 b infrared transmission data');`;

	function runSpec() {
		let main = new Stream();
		// main.data.set('values', data);
		main.tone.type("default").continued(false);
		main.encoding.time
			.field(x_field, "quantitative")
			.scale("timing", "absolute")
			.scale("domain", [0.6, 2.8])
			.scale("length", 18)
			.format("d");
		main.encoding.loudness
			.field(y_field, "quantitative")
			.scale("polarity", "negative")
			.scale("range", [0.2, 0.75])
			.scale("title", "Amount of Light Blocked (unit, parts per million)")
			.format("d");
		main.encoding.pitch
			.field(x_field, "quantitative")
			.scale("polarity", "negative")
			.scale("title", "Wavelength of Light (unit, microns)");
		let water = new Stream();
		// water.data.set('values', data);
		water.tone.type("water").continued(false);
		water.encoding.time
			.field(x_field, "quantitative")
			.scale("timing", "absolute")
			.scale("domain", [0.6, 2.8])
			.scale("length", 18)
			.format("d");
		let filter = new Filter("datum.water");
		water.transform.add(filter);
		let spec = new Overlay(main, water);
		spec.data.set("values", data);
		let waterSample = new SampledTone("water", {
			mono: "external_audio/water.mp3",
		});
		spec.sampling.add(waterSample);
		spec.config.set("speechRate", 1.75);
		spec.description("Exoplanet WASP-96 b infrared transmission data");

		console.log(spec.get());
	}

	let formalSpec = `Spec=(
	description='Exoplanet WASP-96 b infrared transmission data.',
	data=(values=[...]),
  overlay=[(
    tone=(type='default', continued=false),
	  encoding=(
      time=(
        field='wavelength',
        type='quantitative',
        scale=(
          timing='absolute', 
          domain=[0.6, 2.8], 
          length=18
        )
      ),
      loudness=(
        field='blocked',
        type='quantitative',
        scale=(
          range=[0.2, 0.75],
          title='Amount of Light Blocked (unit, parts per million)'
          polarity='negative'
        ),
        format='d'
      ),
      pitch=(
        field='wavelength',
        type='quantitative',
        scale=(
          title='Wavelength of Light (unit, microns)',
          polarity='negative'
        )
      )
    )
  ), (
    transform=(filter='datum.water'),
    tone=(type='water', continued=false),
	  encoding=(
      time=(
        field='wavelength',
        type='quantitative',
        scale=(
          timing='absolute', 
          domain=[0.6, 2.8], 
          length=18
        )
      )
    )
  )],
  sampling=[(
    name='water',
    url='external_audio/water.mp3'
  )],
	config=(speechRate=1.75)
)`;
	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Exoplanet WASP-96b</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Interval Example</h1>
	<h2>Sonification</h2>
	<p>
		Note: This is a replication of <a
			href="https://webbtelescope.org/contents/media/videos/2022/040/01GA960MD71VJ5ZE3EDFRT72NE"
			target="_blank"
			>Exoplanet WASP-96 b Sonification (NIRISS Transmission Spectrum)</a
		>.
	</p>
	<Player>
		<p id="speech-KKIpF9" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-uziTW5" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has 2 overlaid sounds.
		</p>
		<p id="speech-2jfSVQ" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-mkYueL" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The wavelength is mapped to time. The duration of the stream is 18 seconds
		</p>
		<p id="speech-JDc1bW" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Amount of Light Blocked (unit, parts per million) is mapped to
			loudness. The minimum value 13585 is mapped to
		</p>
		<section>
			<audio id="audio-gXQSuk" controls>
				<source
					src="/example_sounds/erie-rec-gXQSuk.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-d3iirt" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 14895 is mapped to
		</p>
		<section>
			<audio id="audio-KwsDDT" controls>
				<source
					src="/example_sounds/erie-rec-KwsDDT.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-yCLTcG" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Wavelength of Light (unit, microns) is mapped to pitch. The minimum
			value 0.619 is mapped to
		</p>
		<section>
			<audio id="audio-wGLRMQ" controls>
				<source
					src="/example_sounds/erie-rec-wGLRMQ.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-s60DCe" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 2.7804 is mapped to
		</p>
		<section>
			<audio id="audio-zwf8Kt" controls>
				<source
					src="/example_sounds/erie-rec-zwf8Kt.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-CkRxJe" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-mQ3263" controls>
				<source
					src="/example_sounds/erie-rec-mQ3263.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-7GedkJ" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
