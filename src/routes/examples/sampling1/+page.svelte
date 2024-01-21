<script>
	import * as Erie from "erie-web";
	import SpecView from '../specView.svelte';
	import Player from '../player.svelte';
	
	const Stream = Erie.Stream;
	const Dataset = Erie.Dataset;
	const Overlay = Erie.Overlay;
	const SampledTone = Erie.SampledTone;

	let animalData = [
			{
				animal: 'Cow',
				value: 5
			},
			{
				animal: 'Bird',
				value: 3
			},
			{
				animal: 'Dog',
				value: 2
			},
			{
				animal: 'Cat',
				value: 6
			}
		],
		backgroundData = [
			{
				duration: 2
			}
		];
	let jsonSpec = {
		description: 'The value of animal.',
		datasets: [
			{
				name: 'data',
				values: animalData
			},
			{
				name: 'background',
				values: backgroundData
			}
		],
		sampling: [
			{
				name: 'cow',
				sample: {
					mono: 'external_audio/cow.mp3'
				}
			},
			{
				name: 'cat',
				sample: {
					mono: 'external_audio/cat.mp3'
				}
			},
			{
				name: 'dog',
				sample: {
					mono: 'external_audio/dog.mp3'
				}
			},
			{
				name: 'bird',
				sample: {
					mono: 'external_audio/bird.mp3'
				}
			},
			{
				name: 'rain',
				sample: {
					mono: 'external_audio/rain.mp3'
				}
			}
		],
		overlay: [
			{
				data: {
					name: 'data'
				},
				tone: {
					continued: false
				},
				encoding: {
					time: {
						field: 'animal',
						type: 'nominal',
						scale: {
							timing: 'simultaneous'
						}
					},
					tapSpeed: {
						field: 'value',
						type: 'quantitative',
						scale: {
							domain: [2, 6],
							range: [1, 3],
							band: 2
						}
					},
					timbre: {
						field: 'animal',
						type: 'nominal',
						scale: {
							domain: ['Cow', 'Bird', 'Dog', 'Cat'],
							range: ['cow', 'bird', 'dog', 'cat'],
							description: 'skip'
						}
					}
				}
			},
			{
				data: {
					name: 'background'
				},
				tone: {
					type: 'rain',
					continued: false
				},
				encoding: {
					time: {
						value: 0
					},
					duration: {
						field: 'duration',
						scale: {
							times: 1
						},
						description: 'skip'
					},
					loudness: {
						value: 0.2
					}
				},
				config: {
					skipScaleSpeech: true
				}
			}
		],
		config: {
			speechRate: 1.75
		}
	};

	let jsCode = `let animalData = ${JSON.stringify(animalData)};
let animalDataset = new Dataset("animal");
animalDataset.set("values", animalData);
let backgroundData = ${JSON.stringify(backgroundData)};
let backgroundDataset = new Dataset("background");
backgroundDataset.set("values", backgroundData);

let animal = new Stream();
animal.data.set(animalDataset);
animal.tone.continued(false);
animal.encoding.time.field('animal', 'nominal')
                    .scale('timing', 'simultaneous');
animal.encoding.tapSpeed.field('value', 'quantitative')
                        .scale('domain', [2, 6])
                        .scale('range', [1, 3])
                        .scale('band', 2)
animal.encoding.timbre.field('animal', 'nominal')
                      .scale('domain', ['Cow', 'Bird', 'Dog', 'Cat'])
                      .scale('range', ['cow', 'bird', 'dog', 'cat'])
                      .scale('description', 'skip');

let background = new Stream();
background.data.set(backgroundDataset);
background.tone.continued(true);
background.encoding.time.value(0);
background.encoding.duration.field('duration', 'quantitative')
                            .scale('description', 'skip')
                            .scale('times', 1);                
background.encoding.loudness.value(0.2);

let spec = new Overlay(animal, background);
spec.description('The value of animal.');
spec.datasets.add(animalDataset).add(backgroundDataset);
let cowSample = new SampledTone('cow', { mono: 'external_audio/cow.mp3' });
let catSample = new SampledTone('cow', { mono: 'external_audio/cat.mp3' });
let dogSample = new SampledTone('cow', { mono: 'external_audio/dog.mp3' });
let birdSample = new SampledTone('cow', { mono: 'external_audio/bird.mp3' });
let rainSample = new SampledTone('cow', { mono: 'external_audio/rain.mp3' });
spec.sampling.add(cowSample)
             .add(catSample)
             .add(dogSample)
             .add(birdSample)
             .add(rainSample);
spec.config.set('speechRate', 1.75);`;

	let animalDataset = new Dataset('animal');
	animalDataset.set('values', animalData);
	let backgroundDataset = new Dataset('background');
	backgroundDataset.set('values', backgroundData);

	let animal = new Stream();
	animal.data.set(animalDataset);
	animal.tone.continued(false);
	animal.encoding.time.field('animal', 'nominal').scale('timing', 'simultaneous');
	animal.encoding.tapSpeed
		.field('value', 'quantitative')
		.scale('domain', [2, 6])
		.scale('range', [1, 3])
		.scale('band', 2);
	animal.encoding.timbre
		.field('animal', 'nominal')
		.scale('domain', ['Cow', 'Bird', 'Dog', 'Cat'])
		.scale('range', ['cow', 'bird', 'dog', 'cat'])
		.scale('description', 'skip');

	let background = new Stream();
	background.data.set(backgroundDataset);
	background.tone.continued(true);
	background.encoding.time.value(0);
	background.encoding.duration
		.field('duration', 'quantitative')
		.scale('description', 'skip')
		.scale('times', 1);
	background.encoding.loudness.value(0.2);

	let spec = new Overlay(animal, background);
  spec.description('The value of animal.');
	spec.datasets.add(animalDataset).add(backgroundDataset);
	let cowSample = new SampledTone('cow', { mono: 'external_audio/cow.mp3' });
	let catSample = new SampledTone('cow', { mono: 'external_audio/cat.mp3' });
	let dogSample = new SampledTone('cow', { mono: 'external_audio/dog.mp3' });
	let birdSample = new SampledTone('cow', { mono: 'external_audio/bird.mp3' });
	let rainSample = new SampledTone('cow', { mono: 'external_audio/rain.mp3' });
	spec.sampling.add(cowSample).add(catSample).add(dogSample).add(birdSample).add(rainSample);
	spec.config.set('speechRate', 1.75);
	console.log(spec.get());

	let formalSpec = `Spec=(
	description='The value of animal.',
	datasets=[
    (name='animal', values=${JSON.stringify(animalData)}),
    (name='background', values=${JSON.stringify(backgroundData)})
  ],
  sampling=[
    (name='cow', mono='external_audio/cow.mp3'),
    (name='cat', mono='external_audio/cat.mp3'),
    (name='dog', mono='external_audio/dog.mp3'),
    (name='bird', mono='external_audio/bird.mp3'),
    (name='rain', mono='external_audio/rain.mp3')
  ],
  overlay=[stream(
    data=(name='animal'),
    tone=(continued=false),
    encoding=(
      time=(
        field='animal',
        type='nominal',
        scale=(timing='simultaneous')
      ),
      tapSpeed=(
        field='value',
        type='quantitative',
        scale=(domain=[2, 6], range=[1, 3], band=2)
      ),
      timbre=(
        field='animal',
        type='nominal',
        scale=(domain=['Cow', 'Bird', 'Dog', 'Cat'], range=['cow', 'bird', 'dog', 'cat'], description=skip)
      )
    )
  ),
  stream(
    data=(name='background'),
    tone=(type='rain', continued=false),
    encoding=(
      time=(value=0),
      duration=(field='duration', type='quantitative', scale=(times=1))
    )
  )],
	config=(speechRate=1.75)
)`;
</script>

<svelte:head>
	<title>Erie Sonification Recording for Time Series Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Time Series Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-GgYd0z" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-vXEFrL" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has 2 overlaid sounds.
		</p>
		<p id="speech-EX6CmU" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-9TkyUF" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The animal is mapped to time
		</p>
		<p id="speech-8A7cNs" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The value is mapped to tapSpeed. The minimum value 2 is mapped to
		</p>
		<section>
			<audio id="audio-MHdmBC" controls>
				<source src="/example_sounds/erie-rec-MHdmBC.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-zUkeJV" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 6 is mapped to
		</p>
		<section>
			<audio id="audio-MAfLWN" controls>
				<source src="/example_sounds/erie-rec-MAfLWN.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-vIgCTE" style="speech-rate: 315;" data-web-speech-rate="1.75">Start playing.</p>
		<section>
			<audio id="audio-DJmv9p" controls>
				<source src="/example_sounds/erie-rec-DJmv9p.webm" type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-UueDnQ" style="speech-rate: 315;" data-web-speech-rate="1.75">Finished.</p>
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
