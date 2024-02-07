<script>
	import * as Erie from "erie-web";
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import { onMount } from "svelte";
	import Sound_V1QEIG from "$lib/example_sounds/erie-rec-V1QEIG.webm";
	import Sound_ZV4YD2 from "$lib/example_sounds/erie-rec-ZV4YD2.webm";
	import Sound_ikosxg from "$lib/example_sounds/erie-rec-ikosxg.webm";
	import Sound_Dh1zQ2 from "$lib/example_sounds/erie-rec-Dh1zQ2.webm";
	import Sound_IvQOOD from "$lib/example_sounds/erie-rec-IvQOOD.webm";
	import Sound_rCABLj from "$lib/example_sounds/erie-rec-rCABLj.webm";
	import Sound_419KKM from "$lib/example_sounds/erie-rec-419KKM.webm";

	const Stream = Erie.Stream;
	const SynthTone = Erie.SynthTone;

	let data = [
		{
			res: -1.51132524088671,
			obs: 1,
		},
		{
			res: -0.200948396243484,
			obs: 2,
		},
		{
			res: -0.0270186066856043,
			obs: 3,
		},
		{
			res: 0.83774723107552,
			obs: 4,
		},
		{
			res: -0.0988391405506756,
			obs: 5,
		},
		{
			res: 0.155211621537222,
			obs: 6,
		},
		{
			res: 0.341281487800859,
			obs: 7,
		},
		{
			res: 0.673065237705618,
			obs: 8,
		},
		{
			res: -0.569843067840906,
			obs: 9,
		},
		{
			res: 0.0823213580537481,
			obs: 10,
		},
		{
			res: -0.662343336045146,
			obs: 11,
		},
		{
			res: 0.123255379118017,
			obs: 12,
		},
		{
			res: 0.707531000683552,
			obs: 13,
		},
		{
			res: 1.00105349629083,
			obs: 14,
		},
		{
			res: -1.03560588166218,
			obs: 15,
		},
		{
			res: 0.284264817618631,
			obs: 16,
		},
		{
			res: -0.495425954718096,
			obs: 17,
		},
		{
			res: -1.38055688056799,
			obs: 18,
		},
		{
			res: -0.621356547285316,
			obs: 19,
		},
		{
			res: -0.833279474549912,
			obs: 20,
		},
		{
			res: 0.249297739711936,
			obs: 21,
		},
		{
			res: 0.193968009835662,
			obs: 22,
		},
		{
			res: 0.859250243108367,
			obs: 23,
		},
		{
			res: 0.0413546785510161,
			obs: 24,
		},
		{
			res: -1.03236715402939,
			obs: 25,
		},
		{
			res: 0.649514411303802,
			obs: 26,
		},
		{
			res: -0.696920164210697,
			obs: 27,
		},
		{
			res: -0.0120860911255935,
			obs: 28,
		},
		{
			res: 0.702973283374633,
			obs: 29,
		},
		{
			res: 2.18082824239861,
			obs: 30,
		},
		{
			res: -0.866589388375863,
			obs: 31,
		},
		{
			res: 1.43781633914181,
			obs: 32,
		},
		{
			res: 0.18153567160338,
			obs: 33,
		},
		{
			res: -0.159682551756527,
			obs: 34,
		},
		{
			res: 0.188674462361994,
			obs: 35,
		},
		{
			res: 0.733712017209794,
			obs: 36,
		},
		{
			res: -0.639229830225557,
			obs: 37,
		},
		{
			res: 0.17101466577714,
			obs: 38,
		},
		{
			res: -0.678806192728165,
			obs: 39,
		},
		{
			res: 0.416154640560005,
			obs: 40,
		},
		{
			res: -0.237152226957702,
			obs: 41,
		},
		{
			res: -0.6101795140442,
			obs: 42,
		},
		{
			res: 0.769200466849206,
			obs: 43,
		},
		{
			res: -0.465318057264809,
			obs: 44,
		},
		{
			res: 0.684595897794717,
			obs: 45,
		},
		{
			res: 0.114249082117444,
			obs: 46,
		},
		{
			res: 0.361709610813988,
			obs: 47,
		},
		{
			res: 0.33123808632964,
			obs: 48,
		},
		{
			res: -0.91992227873951,
			obs: 49,
		},
		{
			res: -0.615538837670135,
			obs: 50,
		},
		{
			res: -1.21664248854692,
			obs: 51,
		},
		{
			res: 0.881235599102611,
			obs: 52,
		},
		{
			res: 0.208363245111636,
			obs: 53,
		},
		{
			res: -0.419793264509491,
			obs: 54,
		},
		{
			res: -0.547301705189575,
			obs: 55,
		},
		{
			res: 0.28105322983487,
			obs: 56,
		},
		{
			res: 0.65765653711958,
			obs: 57,
		},
		{
			res: -0.554425230986296,
			obs: 58,
		},
		{
			res: 0.282028645041767,
			obs: 59,
		},
		{
			res: -0.354999639292158,
			obs: 60,
		},
		{
			res: -2.272195911886,
			obs: 61,
		},
		{
			res: 0.690553800872848,
			obs: 62,
		},
		{
			res: 1.73617305186214,
			obs: 63,
		},
		{
			res: 0.501351219140728,
			obs: 64,
		},
		{
			res: -0.519760340998206,
			obs: 65,
		},
		{
			res: -0.706230467278532,
			obs: 66,
		},
		{
			res: 0.118593128137462,
			obs: 67,
		},
		{
			res: 1.04695430816896,
			obs: 68,
		},
		{
			res: -0.461286486433766,
			obs: 69,
		},
		{
			res: 0.537819531619265,
			obs: 70,
		},
		{
			res: 0.404815945693671,
			obs: 71,
		},
		{
			res: 1.46921374000068,
			obs: 72,
		},
		{
			res: 0.311416953980874,
			obs: 73,
		},
		{
			res: 0.379221711618303,
			obs: 74,
		},
		{
			res: 0.616847655770166,
			obs: 75,
		},
		{
			res: -0.712429354605459,
			obs: 76,
		},
		{
			res: -0.20977164266041,
			obs: 77,
		},
		{
			res: -0.539418648847524,
			obs: 78,
		},
		{
			res: 0.910726282539573,
			obs: 79,
		},
		{
			res: -0.137506693382201,
			obs: 80,
		},
		{
			res: 0.489673061606475,
			obs: 81,
		},
		{
			res: -0.951470804473713,
			obs: 82,
		},
		{
			res: 0.590554602110204,
			obs: 83,
		},
		{
			res: 1.41184415048101,
			obs: 84,
		},
		{
			res: -0.833722682623673,
			obs: 85,
		},
		{
			res: -0.507316765031226,
			obs: 86,
		},
		{
			res: -0.435208682735568,
			obs: 87,
		},
		{
			res: 0.977895726714249,
			obs: 88,
		},
		{
			res: 1.57588533142825,
			obs: 89,
		},
		{
			res: 0.900487570634347,
			obs: 90,
		},
		{
			res: 0.0766197504861843,
			obs: 91,
		},
		{
			res: -0.87527748197629,
			obs: 92,
		},
		{
			res: 1.45627248518142,
			obs: 93,
		},
		{
			res: 0.584025553445945,
			obs: 94,
		},
		{
			res: 1.10092763893581,
			obs: 95,
		},
		{
			res: -0.452840349840843,
			obs: 96,
		},
		{
			res: -0.834810871581875,
			obs: 97,
		},
		{
			res: -1.00932045218067,
			obs: 98,
		},
		{
			res: -0.289912610885603,
			obs: 99,
		},
		{
			res: 0.226333566857316,
			obs: 100,
		},
		{
			res: 1.20625472252575,
			obs: 101,
		},
		{
			res: -0.659839596922609,
			obs: 102,
		},
		{
			res: -1.21402901018134,
			obs: 103,
		},
		{
			res: -0.676498187422252,
			obs: 104,
		},
		{
			res: 1.04420867576455,
			obs: 105,
		},
		{
			res: -0.605230688969303,
			obs: 106,
		},
		{
			res: 0.730835613111979,
			obs: 107,
		},
		{
			res: -0.881485319838854,
			obs: 108,
		},
		{
			res: -0.60054681367254,
			obs: 109,
		},
		{
			res: -0.817878189392851,
			obs: 110,
		},
		{
			res: 0.0763789227063512,
			obs: 111,
		},
		{
			res: -1.01643104366109,
			obs: 112,
		},
		{
			res: 1.11102268166533,
			obs: 113,
		},
		{
			res: -1.05132497593812,
			obs: 114,
		},
		{
			res: 0.680211691706017,
			obs: 115,
		},
		{
			res: -1.1673687472447,
			obs: 116,
		},
		{
			res: -0.771388415334491,
			obs: 117,
		},
		{
			res: 1.19099363162726,
			obs: 118,
		},
		{
			res: -0.00755516139745249,
			obs: 119,
		},
		{
			res: 0.601707312236941,
			obs: 120,
		},
		{
			res: -1.092976661957,
			obs: 121,
		},
		{
			res: 0.412528352910335,
			obs: 122,
		},
		{
			res: -0.0360168245648455,
			obs: 123,
		},
		{
			res: -0.863115551035072,
			obs: 124,
		},
		{
			res: -0.091647218304397,
			obs: 125,
		},
		{
			res: 0.545800578051963,
			obs: 126,
		},
		{
			res: 0.447764329408756,
			obs: 127,
		},
		{
			res: -0.111361475720434,
			obs: 128,
		},
		{
			res: 0.554643795974785,
			obs: 129,
		},
		{
			res: 0.487390206121634,
			obs: 130,
		},
		{
			res: 0.437308222557118,
			obs: 131,
		},
		{
			res: 0.736880725661479,
			obs: 132,
		},
		{
			res: 0.682287949734568,
			obs: 133,
		},
		{
			res: -0.250157260941019,
			obs: 134,
		},
		{
			res: -0.383748634688102,
			obs: 135,
		},
		{
			res: -0.490995134010681,
			obs: 136,
		},
		{
			res: 0.0891394529459453,
			obs: 137,
		},
		{
			res: -0.100551260769695,
			obs: 138,
		},
		{
			res: 1.04424494868853,
			obs: 139,
		},
		{
			res: 0.209258310683475,
			obs: 140,
		},
		{
			res: 0.479987728297254,
			obs: 141,
		},
		{
			res: -1.25472737830396,
			obs: 142,
		},
		{
			res: -0.0586179061558893,
			obs: 143,
		},
		{
			res: -1.81787252293482,
			obs: 144,
		},
		{
			res: 0.978767939330531,
			obs: 145,
		},
		{
			res: -0.538134112049773,
			obs: 146,
		},
		{
			res: 0.32496333440315,
			obs: 147,
		},
		{
			res: 1.35636074353068,
			obs: 148,
		},
		{
			res: 0.0788836626787524,
			obs: 149,
		},
		{
			res: -1.83448176777272,
			obs: 150,
		},
	];
	let jsonSpec = {
		name: "The residuals of a linear regression model.",
		data: {
			values: data,
		},
		synth: [
			{
				name: "Fm1",
				type: "FM",
			},
		],
		tone: {
			type: "Fm1",
			continued: false,
		},
		encoding: {
			time: {
				field: "obs",
				type: "quantitative",
				scale: {
					timing: "absolute",
					length: 5,
					band: 0.15,
					title: "Observations",
				},
				format: ".4",
			},
			pan: {
				field: "res",
				type: "quantitative",
				scale: {
					domain: [-2.5, 0, 2.5],
					range: [-1, 0, 1],
					title: "Residuals",
				},
				format: ".4",
			},
			modulation: {
				field: "res",
				type: "quantitative",
				scale: {
					domain: [-2.5, 0, 2.5],
					range: [4, 0.001, 4],
					title: "Residuals",
				},
				format: ".4",
			},
		},
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let spec = new Stream();
spec.description('The residuals of a linear regression model.');
spec.data.set('values', ${JSON.stringify(data)});
let fm1 = new SynthTone('Fm1');
fm1.type('FM');
spec.synth.add(fm1);
spec.tone.type('Fm1').continued(false);
spec.encoding.time.field('obs', 'quantitative')
                  .scale('timing', 'absolute')
                  .scale('length', 5)
                  .scale('band', 0.15)
									.scale('title', 'Observations')
                  .format('.4');
spec.encoding.pan.field('res', 'quantitative')
                 .scale('domain', [-2.5, 0, 2.5])
                 .scale('range', [-1, 0, 1])
								 .scale('title', 'Residuals')
                 .format('.4');
spec.encoding.modulation.field('res', 'quantitative')
                   .scale('domain', [-2.5, 0, 2.5])
                   .scale('range', [4, 0.001, 4])
							  	 .scale('title', 'Residuals')
                   .format('.4');
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let spec = new Stream();
		spec.description(
			"The residuals of a linear regression model of Sepal Length on Petal Length.",
		);
		spec.data.set("values", data);
		let fm1 = new SynthTone("Fm1");
		fm1.type("FM");
		spec.synth.add(fm1);
		spec.tone.type("Fm1").continued(false);
		spec.encoding.time
			.field("obs", "quantitative")
			.scale("timing", "absolute")
			.scale("length", 5)
			.scale("band", 0.15)
			.scale("title", "Observations")
			.format(".4");
		spec.encoding.pan
			.field("res", "quantitative")
			.scale("domain", [-2.5, 0, 2.5])
			.scale("range", [-1, 0, 1])
			.scale("title", "Residuals")
			.format(".4");
		spec.encoding.modulation
			.field("res", "quantitative")
			.scale("domain", [-2.5, 0, 2.5])
			.scale("range", [4, 0.001, 4])
			.scale("title", "Residuals")
			.format(".4");
		spec.config.set("speechRate", 1.75);
		console.log(spec.get());
	}
	let formalSpec = `Spec=(
	description='The residuals of a linear regression model of Sepal Length on Petal Length.',
	data=(values=${JSON.stringify(data)}),
  synth=[(name='Fm1', type='FM')],
	tone=(type='Fm1', continued=false),
	encoding=(
		time=(
			field='obs',
			type='quantitative',
			scale=(timing='absolute', band=0.15, length=5, title='Observations'),
      format='.4'
		),
		pan=(
			field='res',
			type='quantitative',
			scale=(domain=[-2.5, 0, 2.5], range=[-1, 0, 1], title='Residuals'),
      format='.4'
		),
		modulation=(
			field='res',
			type='quantitative',
			scale=(domain=[-2.5, 0, 2.5], range=[4, 0.001, 4], title='Residuals'),
      format='.4'
		)
	),
	config=(speechRate=1.75)
)`;

	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Residual Plot (Good) Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Residual Plot (Good) Example</h1>
	<p>
		<a href="../../?ex=residuals-2&showVis=true" target="_blank">Open in the online editor</a>
	</p>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-cRuFx1" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-g48xy8" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-4hrnCK" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The SepalLength is mapped to time. The duration of the stream is 5 seconds
		</p>
		<p id="speech-RoiAxq" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The residual is mapped to pan. residual values are mapped as −2.5
		</p>
		<section>
			<audio id="audio-V1QEIG" controls>
				<source src={Sound_V1QEIG} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-ML2Rn3" style="speech-rate: 315;" data-web-speech-rate="1.75">
			0
		</p>
		<section>
			<audio id="audio-ZV4YD2" controls>
				<source src={Sound_ZV4YD2} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-T7CVWg" style="speech-rate: 315;" data-web-speech-rate="1.75">
			2.5
		</p>
		<section>
			<audio id="audio-ikosxg" controls>
				<source src={Sound_ikosxg} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-mG4qRv" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The residual is mapped to modulation. residual values are mapped as −2.5
		</p>
		<section>
			<audio id="audio-Dh1zQ2" controls>
				<source src={Sound_Dh1zQ2} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-GpvwbC" style="speech-rate: 315;" data-web-speech-rate="1.75">
			0
		</p>
		<section>
			<audio id="audio-IvQOOD" controls>
				<source src={Sound_IvQOOD} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-YIJq7c" style="speech-rate: 315;" data-web-speech-rate="1.75">
			2.5
		</p>
		<section>
			<audio id="audio-rCABLj" controls>
				<source src={Sound_rCABLj} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-8lGtlf" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-419KKM" controls>
				<source src={Sound_419KKM} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-Ixrkkz" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
