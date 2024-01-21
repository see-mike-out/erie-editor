<script>
	import { Stream } from 'erie-web';

	import SpecView from '../specView.svelte';
	import Player from '../player.svelte';
	import { Density } from 'erie-web';

	let jsonSpec = {
		description: 'The kernel density estimation of body mass by species and island',
		data: {
			url: 'data/penguins.json'
		},
		transform: [
			{
				density: 'Body Mass (g)',
				groupby: ['Species', 'Island'],
				extent: [2500, 6500]
			}
		],
		tone: {
			continued: true
		},
		encoding: {
			time: {
				field: 'value',
				type: 'quantitative',
				scale: {
					length: 3,
					title: 'Body Mass value'
				}
			},
			pan: {
				field: 'value',
				type: 'quantitative',
				scale: {
					polarity: 'positive',
					title: 'Body Mass value'
				}
			},
			pitch: {
				field: 'density',
				type: 'quantitative',
				scale: {
					polarity: 'positive',
					range: [0, 700],
					title: 'Kernel density'
				},
				format: '.4'
			},
			repeat: {
				field: ['Species', 'Island'],
				type: 'nominal',
				speech: true,
				scale: {
					description: 'skip'
				}
			}
		},
		config: {
			speechRate: 1.75
		}
	};

	let jsCode = `let spec = new Stream();
spec.description('The kernel density estimation of body mass by species and island');
spec.data.set('url', 'data/penguins.json');
let density = new Density('Body Mass (g)');
density.groupby(['Species', 'Island'])
       .extent([2500, 6500]);
spec.transform.add(density);
spec.tone.type('default').continued(true);
spec.encoding.time.field('value', 'quantitative')
                  .scale('length', 3)
                  .scale('title', 'Body Mass value');
spec.encoding.pan.field('value', 'quantitative')
                 .scale('polarity', 'positive')
                 .scale('title', 'Body Mass value');
spec.encoding.pitch.field('density', 'quantitative')
                   .scale('polarity', 'positive')
                   .scale('range', [0, 700])
                   .scale('title', 'Kernel density')
                   .format('.4');
spec.encoding.repeat.field(['Species', 'Island'], 'nominal')
                    .speech(true)
                    .scale('description', 'skip');
spec.config.set('speechRate', 1.75);`;
	let spec = new Stream();
	spec.description('The kernel density estimation of body mass by species and island');
	spec.data.set('url', 'data/penguins.json');
	let density = new Density('Body Mass (g)');
	density.groupby(['Species', 'Island']).extent([2500, 6500]);
	spec.transform.add(density);
	spec.tone.type('default').continued(true);
	spec.encoding.time
		.field('value', 'quantitative')
		.scale('length', 3)
		.scale('title', 'Body Mass value');
	spec.encoding.pan
		.field('value', 'quantitative')
		.scale('polarity', 'positive')
		.scale('title', 'Body Mass value');
	spec.encoding.pitch
		.field('density', 'quantitative')
		.scale('polarity', 'positive')
		.scale('range', [0, 700])
		.scale('title', 'Kernel density')
		.format('.4');
	spec.encoding.repeat
		.field(['Species', 'Island'], 'nominal')
		.speech(true)
		.scale('description', 'skip');
	spec.config.set('speechRate', 1.75);
	console.log(spec.get());

	let formalSpec = `Spec=(
	description='The kernel density estimation of body mass by species and island.',
	data=(url='data/penguins.json'),
	tone=(type='default', continued=true),
	encoding=(
		time=(
			field='value',
			type='nominal',
			scale=(length=3, title='Body Mass value')
		),
		pan=(
			field='value',
			type='quantitative',
			scale=(
				title='Body Mass value',
				polarity='positive'
			)
		),
		pitch=(
			field='density',
			type='quantitative',
			scale=(
				title='Kernel density',
				polarity='positive',
        range=[0, 700]
			)
		),
		repeat=(
			field=['Species', 'Island'],
			type='quantitative',
      speech=true,
			scale=(description=skip)
		)
	),
	config=(speechRate=1.75)
)`;
</script>

<svelte:head>
	<title>Erie Sonification Recording for Kernel Density Estimate Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Kernel Density Estimate Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-NcL43R" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-OI7Rj3" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The kernel density estimation of body mass by species and island
		</p>
		<p id="speech-WkBQFh" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This sonification sequence consists of 5 parts.
		</p>
		<p id="speech-kP1xkn" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The first stream has the following sound mappings.
		</p>
		<p id="speech-TOeTvL" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Body Mass value is mapped to time. The duration of the stream is 3 seconds
		</p>
		<p id="speech-5qm4QH" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Body Mass value is mapped to pan. The domains values from 2500 to 6500 are mapped to
		</p>
		<section>
			<audio id="audio-4rnV3r" controls>
				<source src="/example_sounds/erie-rec-4rnV3r.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-Q2ukfe" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Kernel density is mapped to pitch. The domains values from 1.654e-30 to 0.001057 are
			mapped to
		</p>
		<section>
			<audio id="audio-PfeSNG" controls>
				<source src="/example_sounds/erie-rec-PfeSNG.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-XjnUsM" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 1. Adelie and Torgersen.
		</p>
		<p id="speech-53AkCO" style="speech-rate: 315;" data-web-speech-rate="1.75">Start playing.</p>
		<section>
			<audio id="audio-Dz8CV6" controls>
				<source src="/example_sounds/erie-rec-Dz8CV6.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-JRugCA" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 2. Adelie and Biscoe.
		</p>
		<p id="speech-LHykUv" style="speech-rate: 315;" data-web-speech-rate="1.75">Start playing.</p>
		<section>
			<audio id="audio-iMDkYQ" controls>
				<source src="/example_sounds/erie-rec-iMDkYQ.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-iMFXUP" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 3. Adelie and Dream.
		</p>
		<p id="speech-diwzc2" style="speech-rate: 315;" data-web-speech-rate="1.75">Start playing.</p>
		<section>
			<audio id="audio-wg5AKy" controls>
				<source src="/example_sounds/erie-rec-wg5AKy.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-sMpWot" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 4. Chinstrap and Dream.
		</p>
		<p id="speech-71zjgi" style="speech-rate: 315;" data-web-speech-rate="1.75">Start playing.</p>
		<section>
			<audio id="audio-1PXbW6" controls>
				<source src="/example_sounds/erie-rec-1PXbW6.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-Qrgozs" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 5. Gentoo and Biscoe.
		</p>
		<p id="speech-3YY2lm" style="speech-rate: 315;" data-web-speech-rate="1.75">Start playing.</p>
		<section>
			<audio id="audio-mLgx50" controls>
				<source src="/example_sounds/erie-rec-mLgx50.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-XIaCxf" style="speech-rate: 315;" data-web-speech-rate="1.75">Finished.</p>
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
