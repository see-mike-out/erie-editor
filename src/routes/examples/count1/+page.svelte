<script>
	import * as Erie from "erie-web";
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import { onMount } from "svelte";

	const Stream = Erie.Stream;

	let jsonSpec = {
		description: `A histogram of Major Genre variable.`,
		data: {
			url: "data/movies.json",
		},
		tone: {
			type: "clap",
			continued: false,
		},
		encoding: {
			time: {
				field: "Major Genre",
				type: "nominal",
				scale: {
					timing: "relative",
				},
			},
			tapCount: {
				aggregate: "count",
				type: "quantitative",
				scale: {
					range: [0, 20],
					title: "Movie Count",
					polarity: "positive",
					maxDistinct: true,
				},
			},
			speechBefore: {
				field: "Major Genre",
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
spec.description('A histogram of Major Genre variable.');
spec.data.set('url', 'data/movies.json');
spec.tone.type('clap');
spec.tone.continued(false);
spec.encoding.time.field('Major Genre', 'nominal')
                  .scale('timing', 'relative');
spec.encoding.tapCount.aggregate('count')
                      .type('quantitative')
                      .scale('range', [0, 20])
                      .scale('title', 'Movie Count')
                      .scale('polarity', 'positive')
                      .scale('maxDistinct', true);
spec.encoding.speechBefore.field('Major Genre', 'nominal')
                          .scale('description', 'skip');
spec.config.set('speechRate', 1.75);`;

	function runSpec() {
		let spec = new Stream();
		spec.description("A histogram of Major Genre variable.");
		spec.data.set("url", "data/movies.json");
		spec.tone.type("clap");
		spec.tone.continued(false);
		spec.encoding.time
			.field("Major Genre", "nominal")
			.scale("timing", "relative");
		spec.encoding.tapCount
			.aggregate("count")
			.type("quantitative")
			.scale("range", [0, 20])
			.scale("title", "Movie Count")
			.scale("polarity", "positive")
			.scale("maxDistinct", true);
		spec.encoding.speechBefore
			.field("Major Genre", "nominal")
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
	<title>Erie Sonification Recording for Count Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Count Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-5h6Bxf" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-dikpC1" style="speech-rate: 315;" data-web-speech-rate="1.75">
			A histogram of Major Genre variable.
		</p>
		<p id="speech-oYhb3m" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This stream has the following sound mappings.
		</p>
		<p id="speech-nBUa4L" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Major Genre is mapped to time
		</p>
		<p id="speech-jnbM8u" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Count is mapped to tapCount. The minimum value 5 is mapped to
		</p>
		<section>
			<audio id="audio-WmVsZl" controls>
				<source
					src="/example_sounds/erie-rec-WmVsZl.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-iv8bdw" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 789 is mapped to
		</p>
		<section>
			<audio id="audio-V62chm" controls>
				<source
					src="/example_sounds/erie-rec-V62chm.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-gpfTeL" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<p
			id="speech-JobdeB"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			null
		</p>
		<section>
			<audio id="audio-xwcl6r" controls>
				<source
					src="/example_sounds/erie-rec-xwcl6r.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-ucZAGC"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Drama
		</p>
		<section>
			<audio id="audio-rqfYbV" controls>
				<source
					src="/example_sounds/erie-rec-rqfYbV.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-4hpJ0U"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Comedy
		</p>
		<section>
			<audio id="audio-05ecSB" controls>
				<source
					src="/example_sounds/erie-rec-05ecSB.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-dSV1mE"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Musical
		</p>
		<section>
			<audio id="audio-V8be0C" controls>
				<source
					src="/example_sounds/erie-rec-V8be0C.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-x4SYcc"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Thriller/Suspense
		</p>
		<section>
			<audio id="audio-ctqdzT" controls>
				<source
					src="/example_sounds/erie-rec-ctqdzT.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-RCBXWf"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Adventure
		</p>
		<section>
			<audio id="audio-JtLZ2Z" controls>
				<source
					src="/example_sounds/erie-rec-JtLZ2Z.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-dSyMHr"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Action
		</p>
		<section>
			<audio id="audio-bMqcky" controls>
				<source
					src="/example_sounds/erie-rec-bMqcky.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-963VhF"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Romantic Comedy
		</p>
		<section>
			<audio id="audio-gY83Xe" controls>
				<source
					src="/example_sounds/erie-rec-gY83Xe.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-CftXc7"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Horror
		</p>
		<section>
			<audio id="audio-WweiCO" controls>
				<source
					src="/example_sounds/erie-rec-WweiCO.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-fr1Jkl"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Western
		</p>
		<section>
			<audio id="audio-rOPrCJ" controls>
				<source
					src="/example_sounds/erie-rec-rOPrCJ.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-CE8i0L"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Documentary
		</p>
		<section>
			<audio id="audio-k86e0L" controls>
				<source
					src="/example_sounds/erie-rec-k86e0L.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-x0nSDR"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Black Comedy
		</p>
		<section>
			<audio id="audio-aAve7P" controls>
				<source
					src="/example_sounds/erie-rec-aAve7P.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p
			id="speech-smL7km"
			style="speech-rate: 180;"
			data-web-speech-rate="1"
			data-lang="en-US"
		>
			Concert/Performance
		</p>
		<section>
			<audio id="audio-Vjlecz" controls>
				<source
					src="/example_sounds/erie-rec-Vjlecz.webm"
					type="audio/webm;codecs=opus"
				/>
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-vF0QvN" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
