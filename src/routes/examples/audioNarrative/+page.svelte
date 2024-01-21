<script>
	import { onMount } from 'svelte';
	import { deepcopy } from '../../../storage';
	import { renderVLChart } from '../../../chart-control/run-vega';
	import { compileAuidoGraph } from 'erie-web';
	import CodeViewer from '../../../tester-components/code-viewer.svelte';
	/* chunks
  filter => APPL
  1. 2000-01-01 -- 2000-08-01: fluctuation between 21 dollas and 34 dollars.
  2. 2000-08-01 -- 2000-12-01: sudden drop from 30.47 to 7.44
  3. 2000-12-01 -- 2004-09-01: mostly steady, but slight increase from 12.88 to 19.38
  4. 2004-09-01 -- 2006-11-01: Increase from 19.38 to 91.66
  5. 2006-11-01 -- 2008-05-01: Rapid increase from 91.66 to 198.08, and then rapid drop to 125.02, then sudden increase to 188.75
  6. 2008-05-01 -- 2009-02-01: Decrease from 188.75 to 89.31
  7. 2009-02-01 -- 2010-03-01: Steady increase from 89.31 to 223.02
  */

	// length > datum * 0.15
	// width >  datum * 5.5
	let data_chunks = [
		[
			{
				symbol: 'AAPL',
				date: 'Jan 1 2000',
				price: 25.94
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2000',
				price: 28.66
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2000',
				price: 33.95
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2000',
				price: 31.01
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2000',
				price: 21
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2000',
				price: 26.19
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2000',
				price: 25.41
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2000',
				price: 30.47
			}
		],
		[
			{
				symbol: 'AAPL',
				date: 'Aug 1 2000',
				price: 30.47
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2000',
				price: 12.88
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2000',
				price: 9.78
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2000',
				price: 8.25
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2000',
				price: 7.44
			}
		],
		[
			{
				symbol: 'AAPL',
				date: 'Dec 1 2000',
				price: 7.44
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2001',
				price: 10.81
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2001',
				price: 9.12
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2001',
				price: 11.03
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2001',
				price: 12.74
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2001',
				price: 9.98
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2001',
				price: 11.62
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2001',
				price: 9.4
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2001',
				price: 9.27
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2001',
				price: 7.76
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2001',
				price: 8.78
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2001',
				price: 10.65
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2001',
				price: 10.95
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2002',
				price: 12.36
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2002',
				price: 10.85
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2002',
				price: 11.84
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2002',
				price: 12.14
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2002',
				price: 11.65
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2002',
				price: 8.86
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2002',
				price: 7.63
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2002',
				price: 7.38
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2002',
				price: 7.25
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2002',
				price: 8.03
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2002',
				price: 7.75
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2002',
				price: 7.16
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2003',
				price: 7.18
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2003',
				price: 7.51
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2003',
				price: 7.07
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2003',
				price: 7.11
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2003',
				price: 8.98
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2003',
				price: 9.53
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2003',
				price: 10.54
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2003',
				price: 11.31
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2003',
				price: 10.36
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2003',
				price: 11.44
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2003',
				price: 10.45
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2003',
				price: 10.69
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2004',
				price: 11.28
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2004',
				price: 11.96
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2004',
				price: 13.52
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2004',
				price: 12.89
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2004',
				price: 14.03
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2004',
				price: 16.27
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2004',
				price: 16.17
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2004',
				price: 17.25
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2004',
				price: 19.38
			}
		],
		[
			{
				symbol: 'AAPL',
				date: 'Sep 1 2004',
				price: 19.38
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2004',
				price: 26.2
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2004',
				price: 33.53
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2004',
				price: 32.2
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2005',
				price: 38.45
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2005',
				price: 44.86
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2005',
				price: 41.67
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2005',
				price: 36.06
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2005',
				price: 39.76
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2005',
				price: 36.81
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2005',
				price: 42.65
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2005',
				price: 46.89
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2005',
				price: 53.61
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2005',
				price: 57.59
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2005',
				price: 67.82
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2005',
				price: 71.89
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2006',
				price: 75.51
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2006',
				price: 68.49
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2006',
				price: 62.72
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2006',
				price: 70.39
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2006',
				price: 59.77
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2006',
				price: 57.27
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2006',
				price: 67.96
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2006',
				price: 67.85
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2006',
				price: 76.98
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2006',
				price: 81.08
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2006',
				price: 91.66
			}
		],
		[
			{
				symbol: 'AAPL',
				date: 'Nov 1 2006',
				price: 91.66
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2006',
				price: 84.84
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2007',
				price: 85.73
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2007',
				price: 84.61
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2007',
				price: 92.91
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2007',
				price: 99.8
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2007',
				price: 121.19
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2007',
				price: 122.04
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2007',
				price: 131.76
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2007',
				price: 138.48
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2007',
				price: 153.47
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2007',
				price: 189.95
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2007',
				price: 182.22
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2007',
				price: 198.08
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2008',
				price: 135.36
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2008',
				price: 125.02
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2008',
				price: 143.5
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2008',
				price: 173.95
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2008',
				price: 188.75
			}
		],
		[
			{
				symbol: 'AAPL',
				date: 'May 1 2008',
				price: 188.75
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2008',
				price: 167.44
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2008',
				price: 158.95
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2008',
				price: 169.53
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2008',
				price: 113.66
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2008',
				price: 107.59
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2008',
				price: 92.67
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2008',
				price: 85.35
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2009',
				price: 90.13
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2009',
				price: 89.31
			}
		],
		[
			{
				symbol: 'AAPL',
				date: 'Feb 1 2009',
				price: 89.31
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2009',
				price: 105.12
			},
			{
				symbol: 'AAPL',
				date: 'Apr 1 2009',
				price: 125.83
			},
			{
				symbol: 'AAPL',
				date: 'May 1 2009',
				price: 135.81
			},
			{
				symbol: 'AAPL',
				date: 'Jun 1 2009',
				price: 142.43
			},
			{
				symbol: 'AAPL',
				date: 'Jul 1 2009',
				price: 163.39
			},
			{
				symbol: 'AAPL',
				date: 'Aug 1 2009',
				price: 168.21
			},
			{
				symbol: 'AAPL',
				date: 'Sep 1 2009',
				price: 185.35
			},
			{
				symbol: 'AAPL',
				date: 'Oct 1 2009',
				price: 188.5
			},
			{
				symbol: 'AAPL',
				date: 'Nov 1 2009',
				price: 199.91
			},
			{
				symbol: 'AAPL',
				date: 'Dec 1 2009',
				price: 210.73
			},
			{
				symbol: 'AAPL',
				date: 'Jan 1 2010',
				price: 192.06
			},
			{
				symbol: 'AAPL',
				date: 'Feb 1 2010',
				price: 204.62
			},
			{
				symbol: 'AAPL',
				date: 'Mar 1 2010',
				price: 223.02
			}
		]
	];
	let n_data_points = data_chunks.map((d) => d.length);
	let descriptions = [
		"From January first, 2000 to August first, Apple's stock price fluctuates between 21 dollars and 34 dollars.",
		'From August first, 2000 to December first, the stock price suddenly droped from 30.47 dollars to 7.44 dollars.',
		'From December first, 2000 to September first, 2004, the stock price was mostly steady with a slight increase from 12.88 dollars to 19.38 dollars.',
		'From Septemer first, 2004 to November first, 2006, the stock price increased from 19.38 dollars to 91.66 dollars.',
		'From November first, 2006 to May first, 2008, the stock price more rapidly increased from 91.66 dollars to 198.08, and then suddenly dropped to 125.92 dollars. Then, it increased rapidly to 188.75 dollars.',
		'From May first, 2008 to February first, 2009, the stock price droped from 188.75 dollars to 89.31 dollars.',
		'From February first, 2009 to March first, 2010, the stock price steadily increased from 89.31 dollars to 233.02 dollars.'
	];
	let vis_spec_template = {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: '',
		data: { values: [] },
		width: 100,
		background: 'transparent',
		mark: { type: 'line' },
		encoding: {
			x: { field: 'date', type: 'temporal' },
			y: {
				field: 'price',
				type: 'quantitative',
				scale: {
					domain: [0, 230]
				}
			}
		}
	};
	let son_stream_template = {
		data: { values: [] },
		tone: {
			continued: true
		},
		encoding: {
			time: {
				field: 'date',
				type: 'temporal',
				scale: {
					length: 1
				}
			},
			pitch: {
				field: 'price',
				type: 'quantitative',
				scale: {
					polarity: 'positive',
					domain: [0, 230],
					range: [200, 1600]
				}
			}
		},
		config: {
			sequenceScaleConsistency: true,
			skipTitle: true,
			skipStartPlaySpeech: true,
			skipScaleSpeech: true
		}
	};

	let enc_template = {
		field: 'price',
		type: 'quantitative',
		scale: {
			polarity: 'positive',
			domain: [0, 230],
			range: [200, 1600]
		}
	};
	let visualization_specs,
		visError = false,
		glb_status = 'finished';
	let main_desc = `Apple's Stock Price Change from 2000 to 2010`;
	let sonificaiton_specs = {
			description: main_desc,
			sequence: [],
			config: {
				speechRate: 1.75
				// skipScaleSpeech: true
			}
		},
		specError = false;
	let audio, queue, playAt;
	let updatePlayAt = (e) => {};
	onMount(() => {
		visualization_specs = data_chunks.map((d, i) => {
			let spec = deepcopy(vis_spec_template);
			spec.description = descriptions[i];
			spec.data.values = d;
			spec.width = n_data_points[i] * 5.5;
			return spec;
		});
		visualization_specs.forEach((spec, i) => {
			renderVLChart('#vis-area-' + i, spec, { actions: false })
				.then((result) => {
					visError = false;
				})
				.catch((e) => {
					visError = true;
					console.warn(e);
				});
		});
		makeSonification();
	});

	async function makeSonification(j) {
		sonificaiton_specs.sequence = data_chunks
			.map((d, i) => {
				if (j === undefined || i == j) {
					let spec = deepcopy(son_stream_template);
					if (j !== undefined) sonificaiton_specs.description = descriptions[i];
					else {
						spec.description = descriptions[i];
						sonificaiton_specs.description = main_desc;
					}
					spec.data.values = d;
					spec.encoding.time.length = n_data_points[i] * 0.15;
					return spec;
				} else {
					return;
				}
			})
			.filter((d) => d);

		document.body.removeEventListener('erieOnStatusChange', updatePlayAt);
		if (j === undefined) {
			updatePlayAt = (e) => {
				playAt = Math.floor((audio?.queue?.playAt - 3) / 3);
				glb_status = e.detail.status;
			};
			document.body.addEventListener('erieOnStatusChange', updatePlayAt);
		} else {
			updatePlayAt = (e) => {
				playAt = Math.floor((audio?.queue?.playAt - 1) / 2);
				glb_status = e.detail.status;
			};
			document.body.addEventListener('erieOnStatusChange', updatePlayAt);
		}

		console.log(sonificaiton_specs);
		audio = await compileAuidoGraph(sonificaiton_specs);
		queue = await audio.prerender();
		window.audioPlayer = audio;
		return audio;
	}
	let audioChannel = 'pitch',
		range = [200, 1600];
	let defRanges = {
		pitch: [200, 1600],
		pan: [-1, 1],
		loudness: [0, 1]
	};
	function updateEncoding(enc) {
		delete son_stream_template.encoding[audioChannel];
		audioChannel = enc;
		range = [...defRanges[enc]];
		son_stream_template.encoding[audioChannel] = deepcopy(enc_template);
		son_stream_template.encoding[audioChannel].scale.range = [...range];
		makeSonification();
	}
	function updateRange(i, x) {
		range[i] = parseFloat(x);
		son_stream_template.encoding[audioChannel].scale.range = [...range];
		makeSonification();
	}

	let template_spec = `{
	description: "From January first, 2000 to August first, Apple's stock price fluctuates between 21 dollars and 34 dollars.", 
		// replaced with the description of each segment
	data: {
		values: [
			{
				symbol: 'AAPL',
				date: 'Jan 1 2000',
				price: 25.94
			},
			// ... data in array
		]
	},
	tone: {
		continued: true
	},
	encoding: {
		time: {
			field: 'date',
			type: 'temporal',
			scale: {
				length: 1 // the length changes based on the number of data points in each segment.
			}
		},
		pitch: { // this channel name can be changed using "Encoding" selected by users.
			field: 'price',
			type: 'quantitative',
			scale: {
				polarity: 'positive',
				domain: [0, 230],
				range: [200, 1600] // this value can be changed using "From" and "To" values input by users.
			}
		}
	},
	config: {
		sequenceScaleConsistency: true,
		skipTitle: true,
		skipStartPlaySpeech: true,
		skipScaleSpeech: true
	}
}`;
	let sequence_spec = `{
	description: "Apple's Stock Price Change from 2000 to 2010",
	sequence: [
		{
			description:
				"From January first, 2000 to August first, Apple's stock price fluctuates between 21 dollars and 34 dollars.",
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'Jan 1 2000',
						price: 25.94
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 1.2
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		},
		{
			description:
				'From August first, 2000 to December first, the stock price suddenly droped from 30.47 dollars to 7.44 dollars.',
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'Aug 1 2000',
						price: 30.47
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 0.75
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		},
		{
			description:
				'From December first, 2000 to September first, 2004, the stock price was mostly steady with a slight increase from 12.88 dollars to 19.38 dollars.',
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'Dec 1 2000',
						price: 7.44
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 6.8999999999999995
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		},
		{
			description:
				'From Septemer first, 2004 to November first, 2006, the stock price increased from 19.38 dollars to 91.66 dollars.',
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'Sep 1 2004',
						price: 19.38
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 4.05
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		},
		{
			description:
				'From November first, 2006 to May first, 2008, the stock price more rapidly increased from 91.66 dollars to 198.08, and then suddenly dropped to 125.92 dollars. Then, it increased rapidly to 188.75 dollars.',
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'Nov 1 2006',
						price: 91.66
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 2.85
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		},
		{
			description:
				'From May first, 2008 to February first, 2009, the stock price droped from 188.75 dollars to 89.31 dollars.',
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'May 1 2008',
						price: 188.75
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 1.5
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		},
		{
			description:
				'From February first, 2009 to March first, 2010, the stock price steadily increased from 89.31 dollars to 233.02 dollars.',
			data: {
				values: [
					{
						symbol: 'AAPL',
						date: 'Feb 1 2009',
						price: 89.31
					},
					// ... data in array
				]
			},
			tone: {
				continued: true
			},
			encoding: {
				time: {
					field: 'date',
					type: 'temporal',
					scale: {
						length: 1
					},
					length: 2.1
				},
				pitch: {
					field: 'price',
					type: 'quantitative',
					scale: {
						polarity: 'positive',
						domain: [0, 230],
						range: [200, 1600]
					}
				}
			},
			config: {
				sequenceScaleConsistency: true,
				skipTitle: true,
				skipStartPlaySpeech: true,
				skipScaleSpeech: true
			}
		}
	],
	config: {
		speechRate: 1.75
	}
}`;
</script>

<svelte:head>
	<title>Erie Example -- Audio Narrative</title>
</svelte:head>
<main>
	<h1>Audio Narrative for Apple's Stock Price Change from 2000 to 2010</h1>
	<p>
		This is a replication and extension of the "sonification design" of <a
			href="https://dl.acm.org/doi/abs/10.1145/3491102.3517678"
			target="_blank">Audio Narrative by Siu et al. (2022, CHI '22)</a
		>
	</p>
	<h2>Customization</h2>
	<section id="custom">
		<div>
			<label for="encoding" id="label-encoding">Encoding</label>
			<select
				id="encoding"
				name="encoding"
				aria-labelledby="label-encoding"
				on:change={(e) => {
					updateEncoding(e.target.value);
				}}
			>
				<option value="pitch" selected={audioChannel === 'pitch'}>Pitch</option>
				<option value="loudness" selected={audioChannel === 'loudness'}>Loudness</option>
				<option value="pan" selected={audioChannel === 'pan'}>Pan</option>
			</select>
		</div>
		<div>
			<label for="range0" id="label-range0">From (Stock price: 0)</label>
			<input
				type="number"
				id="range0"
				name="range0"
				aria-labelledby="label-range0"
				value={range[0]}
				on:change={(e) => {
					updateRange(0, e.target.value);
				}}
			/>
		</div>
		<div>
			<label for="range1" id="label-range1">To (Stock price: 230)</label>
			<input
				type="number"
				id="range1"
				name="range1"
				aria-labelledby="label-range1"
				value={range[1]}
				on:change={(e) => {
					updateRange(1, e.target.value);
				}}
			/>
		</div>
	</section>
	<h2>Sonification</h2>
	<section id="audio-view">
		<button
			on:click={() => {
				audio?.playScaleDescription(0);
			}}>Play scales</button
		>
		<button
			on:click={() => {
				audio?.playQueue().then(() => {
					playAt = undefined;
				});
			}}>Play audio narrative</button
		>
		<button
			on:click={() => {
				audio?.stopQueue();
				playAt = undefined;
			}}>Stop audio narrative</button
		>
	</section>
	<h2>Visualization</h2>
	<section id="vis-view">
		{#each data_chunks as d, i}
			<div id={'vis-wrap-' + i} class={'vis-wrap ' + (playAt == i ? 'current' : '')}>
				<div class="vis-title">
					#{i + 1}.
					{descriptions[i]}
				</div>
				<div id={'vis-area-' + i} />
				<button
					class="seg-play"
					disabled={glb_status !== 'finished'}
					on:click={() => {
						makeSonification(i).then((a) => {
							a.playQueue().then(() => {
								playAt = undefined;
							});
						});
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-play-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
						/>
					</svg>
				</button>
			</div>
		{/each}
	</section>

	<section id="specs">
		<h2>Erie specs used for this replication</h2>
		<p>These specs assume that the segmentation was done by manually or algorithmically.</p>
		<h3>Segment</h3>
		<div style="height: 300px;">
			<CodeViewer containerId="seg-expr" code={template_spec} language="javascript" />
		</div>
		<h3>Sequence</h3>
		<p>This sequence spec is generated by reusing the above segment spec.</p>
		<div style="height: 600px;">
			<CodeViewer containerId="seq-expr" code={sequence_spec} language="javascript" />
		</div>
	</section>
</main>

<style>
	main {
		max-width: calc(1000px + 2rem);
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	#audio-view {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	#vis-view {
		display: flex;
		flex-wrap: wrap;
		overflow-x: scroll;
		margin-top: 1rem;
	}
	.vis-wrap {
		position: relative;
		display: flex;
		padding: 1rem;
		border-radius: 1rem;
		background-color: #fafafa;
		margin-right: 1rem;
		margin-bottom: 1rem;
	}
	.vis-title {
		width: 150px;
		margin-right: 0.25rem;
		font-size: 0.9rem;
	}
	.vis-wrap.current {
		background-color: #d1fffd;
	}
	#custom {
		display: flex;
	}
	#custom > div {
		margin-right: 1rem;
	}
	#custom label,
	#custom input,
	#custom select {
		display: block;
		width: 100%;
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}
	#custom select {
		background-color: white;
		border: 1px solid #ddd;
	}
	.seg-play {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
	}
</style>
