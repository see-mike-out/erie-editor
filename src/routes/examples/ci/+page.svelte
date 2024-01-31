<script>
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import * as Erie from "erie-web";
	import { onMount } from "svelte";

	import Sound_wIbQQk from "$lib/example_sounds/erie-rec-wIbQQk.webm";
	import Sound_FVlYPl from "$lib/example_sounds/erie-rec-FVlYPl.webm";
	import Sound_sAupoE from "$lib/example_sounds/erie-rec-sAupoE.webm";
	
	const Stream = Erie.Stream;
	const Overlay = Erie.Overlay;

	let data = [
		{
			SepalLength: 4,
			fit: 0.332288543416911,
			ci_lower: -0.0103684307593896,
			ci_upper: 0.674945517593211,
		},
		{
			SepalLength: 4.25,
			fit: 0.796896787980621,
			ci_lower: 0.492458396304423,
			ci_upper: 1.10133517965682,
		},
		{
			SepalLength: 4.5,
			fit: 1.26150503254433,
			ci_lower: 0.994017116607356,
			ci_upper: 1.52899294848131,
		},
		{
			SepalLength: 4.75,
			fit: 1.72611327710804,
			ci_lower: 1.49370210162501,
			ci_upper: 1.95852445259108,
		},
		{
			SepalLength: 5,
			fit: 2.19072152167175,
			ci_lower: 1.99052601153806,
			ci_upper: 2.39091703180544,
		},
		{
			SepalLength: 5.25,
			fit: 2.65532976623546,
			ci_lower: 2.48287789313124,
			ci_upper: 2.82778163933968,
		},
		{
			SepalLength: 5.5,
			fit: 3.11993801079917,
			ci_lower: 2.96828322759797,
			ci_upper: 3.27159279400038,
		},
		{
			SepalLength: 5.75,
			fit: 3.58454625536288,
			ci_lower: 3.44363203865769,
			ci_upper: 3.72546047206807,
		},
		{
			SepalLength: 6,
			fit: 4.04915449992659,
			ci_lower: 3.9066322976469,
			ci_upper: 4.19167670220629,
		},
		{
			SepalLength: 6.25,
			fit: 4.5137627444903,
			ci_lower: 4.35766515230242,
			ci_upper: 4.66986033667818,
		},
		{
			SepalLength: 6.5,
			fit: 4.97837098905401,
			ci_lower: 4.79943396968061,
			ci_upper: 5.15730800842742,
		},
		{
			SepalLength: 6.75,
			fit: 5.44297923361772,
			ci_lower: 5.23496823874292,
			ci_upper: 5.65099022849252,
		},
		{
			SepalLength: 7,
			fit: 5.90758747818143,
			ci_lower: 5.6665131959642,
			ci_upper: 6.14866176039867,
		},
		{
			SepalLength: 7.25,
			fit: 6.37219572274514,
			ci_lower: 6.09549522839161,
			ci_upper: 6.64889621709867,
		},
		{
			SepalLength: 7.5,
			fit: 6.83680396730885,
			ci_lower: 6.52278543907269,
			ci_upper: 7.15082249554502,
		},
		{
			SepalLength: 7.75,
			fit: 7.30141221187256,
			ci_lower: 6.94892075517197,
			ci_upper: 7.65390366857316,
		},
		{
			SepalLength: 8,
			fit: 7.76602045643627,
			ci_lower: 7.37424126289814,
			ci_upper: 8.15779964997441,
		},
	];

	let jsonSpec = {
		description:
			"The prediction and confidence interval for a regreession model of Sepal Length on Petal Length.",
		data: {
			values: data,
		},
		overlay: [
			{
				name: "Prediction",
				tone: {
					continued: true,
				},
				encoding: {
					time: {
						field: "SepalLength",
						type: "quantitative",
						scale: {
							length: 2,
							title: "Sepal Length",
						},
						format: ".4",
					},
					pan: {
						field: "fit",
						type: "quantitative",
						scale: {
							polarity: "positive",
							title: "Predicted Petal Length",
						},
						format: ".4",
					},
					pitch: {
						field: "fit",
						type: "quantitative",
						scale: {
							polarity: "positive",
							title: "Predicted Petal Length",
						},
						format: ".4",
					},
				},
			},
			{
				name: "Lower bound",
				tone: {
					continued: true,
				},
				encoding: {
					time: {
						field: "SepalLength",
						type: "quantitative",
						format: ".4",
					},
					pan: {
						field: "ci_lower",
						type: "quantitative",
						scale: {
							title: "Confidence interval lower bound",
						},
						format: ".4",
					},
					pitch: {
						field: "ci_lower",
						type: "quantitative",
						scale: {
							title: "Confidence interval lower bound",
						},
						format: ".4",
					},
					loudness: {
						value: 0.3,
					},
				},
			},
			{
				name: "Upper bound",
				tone: {
					continued: true,
				},
				encoding: {
					time: {
						field: "SepalLength",
						type: "quantitative",
						format: ".4",
					},
					pan: {
						field: "ci_upper",
						type: "quantitative",
						scale: {
							title: "Confidence interval upper bound",
						},
						format: ".4",
					},
					pitch: {
						field: "ci_upper",
						type: "quantitative",
						scale: {
							title: "Confidence interval upper bound",
						},
						format: ".4",
					},
					loudness: {
						value: 0.3,
					},
				},
			},
		],
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let predSpec = new Stream();
predSpec.name('Prediction');
predSpec.tone.continued(true);
predSpec.encoding.time.field('SepalLength', 'quantitative')
                      .scale('length', 2)
                      .scale('title', 'Sepal Length')
                      .format('.4');
predSpec.encoding.pan.field('fit', 'quantitative')
                     .scale('polarity', 'positive')
                     .scale('title', 'Predicted Petal Length')
                     .format('.4');
predSpec.encoding.pitch.field('fit', 'quantitative')
                       .scale('polarity', 'positive')
                       .scale('title', 'Predicted Petal Length')
                       .format('.4');

let lbSpec = new Stream();
lbSpec.name('Lower Bound');
lbSpec.tone.continued(true);
lbSpec.encoding.time.field('SepalLength', 'quantitative')
                      .format('.4');
lbSpec.encoding.pan.field('ci_lower', 'quantitative')
                   .scale('title', 'Confidence interval lower bound')
                   .format('.4');
lbSpec.encoding.pitch.field('ci_lower', 'quantitative')
                   .scale('title', 'Confidence interval lower bound')
                     .format('.4');                     
lbSpec.encoding.loudness.value(0.3);

let ubSpec = new Stream();
ubSpec.name('Upper Bound');
ubSpec.tone.continued(true);
ubSpec.encoding.time.field('SepalLength', 'quantitative')
                      .format('.4');
ubSpec.encoding.pan.field('ci_upper', 'quantitative')
                   .scale('title', 'Confidence interval upper bound')
                   .format('.4');
ubSpec.encoding.pitch.field('ci_upper', 'quantitative')
                   .scale('title', 'Confidence interval upper bound')
                     .format('.4');                     
ubSpec.encoding.loudness.value(0.3);

let spec = new Overlay(predSpec, lbSpec, ubSpec);
spec.data.set('values', ${JSON.stringify(data)});
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let predSpec = new Stream();
		predSpec.name("Prediction");
		predSpec.tone.continued(true);
		predSpec.encoding.time
			.field("SepalLength", "quantitative")
			.scale("length", 2)
			.scale("title", "Sepal Length")
			.format(".4");
		predSpec.encoding.pan
			.field("fit", "quantitative")
			.scale("polarity", "positive")
			.scale("title", "Predicted Sepal Length")
			.format(".4");
		predSpec.encoding.pitch
			.field("fit", "quantitative")
			.scale("polarity", "positive")
			.scale("title", "Predicted Sepal Length")
			.format(".4");

		let lbSpec = new Stream();
		lbSpec.name("Lower Bound");
		lbSpec.tone.continued(true);
		lbSpec.encoding.time.field("SepalLength", "quantitative").format(".4");
		lbSpec.encoding.pan
			.field("ci_lower", "quantitative")
			.scale("title", "Confidence interval lower bound")
			.format(".4");
		lbSpec.encoding.pitch
			.field("ci_lower", "quantitative")
			.scale("title", "Confidence interval lower bound")
			.format(".4");
		lbSpec.encoding.loudness.value(0.3);

		let ubSpec = new Stream();
		ubSpec.name("Upper Bound");
		ubSpec.tone.continued(true);
		ubSpec.encoding.time.field("SepalLength", "quantitative").format(".4");
		ubSpec.encoding.pan
			.field("ci_upper", "quantitative")
			.scale("title", "Confidence interval upper bound")
			.format(".4");
		ubSpec.encoding.pitch
			.field("ci_upper", "quantitative")
			.scale("title", "Confidence interval upper bound")
			.format(".4");
		ubSpec.encoding.loudness.value(0.3);

		let spec = new Overlay(predSpec, lbSpec, ubSpec);
		spec.description(
			"The prediction and confidence interval for a regreession model of Sepal Length on Petal Length.",
		);
		spec.data.set("values", data);
		spec.config.set("speechRate", 1.75);
		console.log(spec.get());
	}

	let formalSpec = `Spec=(
	description=The prediction and confidence interval for a regreession model of Sepal Length on Petal Length.',
	data=(values=${JSON.stringify(data)}),
  overlay=[stream(
    name='Prediction',
    tone=(type='default', continued=true),
    encoding=(
      time=(
        field='SepalLength', 
        type='quantitative',
        scale=(length=2, title='Sepal Length'),
        format='.4'
      ),
      pan=(
        aggregate='fit',
        type='quantitative',
        scale=(
          title='Predicted Petal Length'
          polarity='positive'
        ),
        format='.4'
      ),
      pitch=(
        aggregate='fit',
        type='quantitative',
        scale=(
          title='Predicted Petal Length'
          polarity='positive'
        ),
        format='.4'
      )
    )
  ), 
  stream(
    name='Lower Bound',
    tone=(type='default', continued=true),
    encoding=(
      time=(
        field='SepalLength', 
        type='quantitative',
        scale=(title='Sepal Length'),
        format='.4'
      ),
      pan=(
        aggregate='ci_lower',
        type='quantitative',
        scale=(title='Confidence interval lower bound'),
        format='.4'
      ),
      pitch=(
        aggregate='ci_lower',
        type='quantitative',
        scale=(title='Confidence interval lower bound'),
        format='.4'
      )
    )
  ), 
  stream(
    name='Upper Bound',
    tone=(type='default', continued=true),
    encoding=(
      time=(
        field='SepalLength', 
        type='quantitative',
        scale=(title='Sepal Length'),
        format='.4'
      ),
      pan=(
        aggregate='ci_upper',
        type='quantitative',
        scale=(title='Confidence interval upper bound'),
        format='.4'
      ),
      pitch=(
        aggregate='ci_upper',
        type='quantitative',
        scale=(title='Confidence interval upper bound'),
        format='.4'
      )
    )
  )],
	config=(speechRate=1.75)
)`;
	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Model CI Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Model CI Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-g8GFZ5" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-Z0DWPw" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has 3 overlaid sounds.
		</p>
		<p id="speech-t3jHUs" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Overlay 1. Prediction.
		</p>
		<p id="speech-gTiipv" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Overlay 2. Lower bound.
		</p>
		<p id="speech-jh3VAX" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Overlay 3. Upper bound.
		</p>
		<p id="speech-Z5PGna" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-7iPgKK" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Petal Length is mapped to time. The duration of the stream is 2
			seconds
		</p>
		<p id="speech-TpLvK6" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Predicted Sepal Length is mapped to pan. The domains values from
			−0.01037 to 8.158 are mapped to
		</p>
		<section>
			<audio id="audio-wIbQQk" controls>
				<source src={Sound_wIbQQk} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-8XlPXS" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Predicted Sepal Length is mapped to pitch. The domains values from
			−0.01037 to 8.158 are mapped to
		</p>
		<section>
			<audio id="audio-FVlYPl" controls>
				<source src={Sound_FVlYPl} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-0Fy4MJ" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-sAupoE" controls>
				<source src={Sound_sAupoE} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-j9d9fp" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
