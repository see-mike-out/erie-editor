<script>
	import { onMount } from "svelte";
	import { deepcopy } from "../../../storage";
	import compileAuidoGraph from "erie-web";
	import * as d3 from "d3";
	import { browser } from "$app/environment";
	import CodeViewer from "../../../tester-components/code-viewer.svelte";

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
				symbol: "AAPL",
				date: "Jan 1 2000",
				price: 25.94,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2000",
				price: 28.66,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2000",
				price: 33.95,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2000",
				price: 31.01,
			},
			{
				symbol: "AAPL",
				date: "May 1 2000",
				price: 21,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2000",
				price: 26.19,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2000",
				price: 25.41,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2000",
				price: 30.47,
			},
		],
		[
			{
				symbol: "AAPL",
				date: "Aug 1 2000",
				price: 30.47,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2000",
				price: 12.88,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2000",
				price: 9.78,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2000",
				price: 8.25,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2000",
				price: 7.44,
			},
		],
		[
			{
				symbol: "AAPL",
				date: "Dec 1 2000",
				price: 7.44,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2001",
				price: 10.81,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2001",
				price: 9.12,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2001",
				price: 11.03,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2001",
				price: 12.74,
			},
			{
				symbol: "AAPL",
				date: "May 1 2001",
				price: 9.98,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2001",
				price: 11.62,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2001",
				price: 9.4,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2001",
				price: 9.27,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2001",
				price: 7.76,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2001",
				price: 8.78,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2001",
				price: 10.65,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2001",
				price: 10.95,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2002",
				price: 12.36,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2002",
				price: 10.85,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2002",
				price: 11.84,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2002",
				price: 12.14,
			},
			{
				symbol: "AAPL",
				date: "May 1 2002",
				price: 11.65,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2002",
				price: 8.86,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2002",
				price: 7.63,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2002",
				price: 7.38,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2002",
				price: 7.25,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2002",
				price: 8.03,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2002",
				price: 7.75,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2002",
				price: 7.16,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2003",
				price: 7.18,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2003",
				price: 7.51,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2003",
				price: 7.07,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2003",
				price: 7.11,
			},
			{
				symbol: "AAPL",
				date: "May 1 2003",
				price: 8.98,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2003",
				price: 9.53,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2003",
				price: 10.54,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2003",
				price: 11.31,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2003",
				price: 10.36,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2003",
				price: 11.44,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2003",
				price: 10.45,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2003",
				price: 10.69,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2004",
				price: 11.28,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2004",
				price: 11.96,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2004",
				price: 13.52,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2004",
				price: 12.89,
			},
			{
				symbol: "AAPL",
				date: "May 1 2004",
				price: 14.03,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2004",
				price: 16.27,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2004",
				price: 16.17,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2004",
				price: 17.25,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2004",
				price: 19.38,
			},
		],
		[
			{
				symbol: "AAPL",
				date: "Sep 1 2004",
				price: 19.38,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2004",
				price: 26.2,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2004",
				price: 33.53,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2004",
				price: 32.2,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2005",
				price: 38.45,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2005",
				price: 44.86,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2005",
				price: 41.67,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2005",
				price: 36.06,
			},
			{
				symbol: "AAPL",
				date: "May 1 2005",
				price: 39.76,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2005",
				price: 36.81,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2005",
				price: 42.65,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2005",
				price: 46.89,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2005",
				price: 53.61,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2005",
				price: 57.59,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2005",
				price: 67.82,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2005",
				price: 71.89,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2006",
				price: 75.51,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2006",
				price: 68.49,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2006",
				price: 62.72,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2006",
				price: 70.39,
			},
			{
				symbol: "AAPL",
				date: "May 1 2006",
				price: 59.77,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2006",
				price: 57.27,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2006",
				price: 67.96,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2006",
				price: 67.85,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2006",
				price: 76.98,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2006",
				price: 81.08,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2006",
				price: 91.66,
			},
		],
		[
			{
				symbol: "AAPL",
				date: "Nov 1 2006",
				price: 91.66,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2006",
				price: 84.84,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2007",
				price: 85.73,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2007",
				price: 84.61,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2007",
				price: 92.91,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2007",
				price: 99.8,
			},
			{
				symbol: "AAPL",
				date: "May 1 2007",
				price: 121.19,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2007",
				price: 122.04,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2007",
				price: 131.76,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2007",
				price: 138.48,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2007",
				price: 153.47,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2007",
				price: 189.95,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2007",
				price: 182.22,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2007",
				price: 198.08,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2008",
				price: 135.36,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2008",
				price: 125.02,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2008",
				price: 143.5,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2008",
				price: 173.95,
			},
			{
				symbol: "AAPL",
				date: "May 1 2008",
				price: 188.75,
			},
		],
		[
			{
				symbol: "AAPL",
				date: "May 1 2008",
				price: 188.75,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2008",
				price: 167.44,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2008",
				price: 158.95,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2008",
				price: 169.53,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2008",
				price: 113.66,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2008",
				price: 107.59,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2008",
				price: 92.67,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2008",
				price: 85.35,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2009",
				price: 90.13,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2009",
				price: 89.31,
			},
		],
		[
			{
				symbol: "AAPL",
				date: "Feb 1 2009",
				price: 89.31,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2009",
				price: 105.12,
			},
			{
				symbol: "AAPL",
				date: "Apr 1 2009",
				price: 125.83,
			},
			{
				symbol: "AAPL",
				date: "May 1 2009",
				price: 135.81,
			},
			{
				symbol: "AAPL",
				date: "Jun 1 2009",
				price: 142.43,
			},
			{
				symbol: "AAPL",
				date: "Jul 1 2009",
				price: 163.39,
			},
			{
				symbol: "AAPL",
				date: "Aug 1 2009",
				price: 168.21,
			},
			{
				symbol: "AAPL",
				date: "Sep 1 2009",
				price: 185.35,
			},
			{
				symbol: "AAPL",
				date: "Oct 1 2009",
				price: 188.5,
			},
			{
				symbol: "AAPL",
				date: "Nov 1 2009",
				price: 199.91,
			},
			{
				symbol: "AAPL",
				date: "Dec 1 2009",
				price: 210.73,
			},
			{
				symbol: "AAPL",
				date: "Jan 1 2010",
				price: 192.06,
			},
			{
				symbol: "AAPL",
				date: "Feb 1 2010",
				price: 204.62,
			},
			{
				symbol: "AAPL",
				date: "Mar 1 2010",
				price: 223.02,
			},
		],
	];
	let n_data_points = data_chunks.map((d) => d.length);
	let descriptions = [
		"From January first, 2000 to August first, Apple's stock price fluctuates between 21 dollars and 34 dollars.",
		"From August first, 2000 to December first, the stock price suddenly droped from 30.47 dollars to 7.44 dollars.",
		"From December first, 2000 to September first, 2004, the stock price was mostly steady with a slight increase from 12.88 dollars to 19.38 dollars.",
		"From Septemer first, 2004 to November first, 2006, the stock price increased from 19.38 dollars to 91.66 dollars.",
		"From November first, 2006 to May first, 2008, the stock price more rapidly increased from 91.66 dollars to 198.08, and then suddenly dropped to 125.92 dollars. Then, it increased rapidly to 188.75 dollars.",
		"From May first, 2008 to February first, 2009, the stock price droped from 188.75 dollars to 89.31 dollars.",
		"From February first, 2009 to March first, 2010, the stock price steadily increased from 89.31 dollars to 233.02 dollars.",
	];
	let son_speec_temp = {
		description: "",
		data: { values: [] },
		tone: {
			continued: true,
		},
		encoding: {
			time: {
				field: "date",
				type: "temporal",
				scale: {
					length: 1,
					description: null,
				},
			},
			pitch: {
				field: "price",
				type: "quantitative",
				scale: {
					polarity: "positive",
					domain: [0, 230],
					range: [200, 1600],
					description: null,
				},
			},
		},
		config: {
			speechRate: 1.75,
			skipTitle: true,
			skipStartPlaySpeech: true,
			skipScaleSpeech: true,
		},
	};

	let son_agg_spec_temp = {
		description: "",
		data: { values: [] },
		transform: [
			{
				aggregate: [{ op: "mean", field: "price", as: "mean_price" }],
				groupby: "symbol",
			},
		],
		tone: {
			continued: false,
		},
		encoding: {
			time: {
				field: "symbol",
				scale: {
					timing: "relative",
					band: 0.5,
				},
			},
			pitch: {
				field: "mean_price",
				type: "quantitative",
				scale: {
					polarity: "positive",
					domain: [0, 230],
					range: [200, 1600],
					description: null,
				},
			},
		},
		config: {
			speechRate: 1.75,
			skipTitle: true,
			skipStartPlaySpeech: true,
			skipScaleSpeech: true,
		},
	};

	const sizing = {
		width: 1000,
		height: 450,
		marginBottom: 50,
		marginLeft: 50,
		marginRight: 15,
		marginTop: 10,
	};
	let chart;
	function drawVis() {
		let area = d3.select("#vis");
		chart = area.append("svg");
		chart
			.attr("width", sizing.width)
			.attr("height", sizing.height)
			.attr("viewBox", `0 0 ${sizing.width} ${sizing.height}`);
		let xDomain = [new Date("Jan 1 2000"), new Date("Mar 1 2010")],
			yDomain = [0, 230];
		let scaleX = d3
				.scaleTime()
				.domain(xDomain)
				.range([0, sizing.width - sizing.marginLeft - sizing.marginRight]),
			scaleY = d3
				.scaleLinear()
				.domain(yDomain)
				.range([sizing.height - sizing.marginBottom - sizing.marginTop, 0]);
		let yGrid = chart
			.append("g")
			.attr("transform", `translate(${sizing.marginLeft}, ${sizing.marginTop})`)
			.call(
				d3
					.axisRight(scaleY)
					.tickSize(sizing.width - sizing.marginLeft - sizing.marginRight)
					.tickFormat(""),
			);
		yGrid.selectAll("line").attr("stroke", "#dddddd");
		yGrid.selectAll("path").attr("stroke", "#dddddd");
		let yAxis = chart
			.append("g")
			.attr("transform", `translate(${sizing.marginLeft}, ${sizing.marginTop})`)
			.call(d3.axisLeft(scaleY));
		let xAxis = chart
			.append("g")
			.attr(
				"transform",
				`translate(${sizing.marginLeft}, ${
					sizing.height - sizing.marginBottom
				})`,
			)
			.call(d3.axisBottom(scaleX));
		data_chunks.forEach((d, i) => {
			drawLineSeg(d, i, scaleX, scaleY);
		});
	}
	let showTooltip = false,
		hoverPlay = false,
		tooltipInfo = { x: 0, y: 0 };
	function findInsight(e, i) {
		d3.selectAll(".line-segment").attr("opacity", 0.3);
		d3.selectAll("#line-seg-" + i).attr("opacity", 1);
		d3.selectAll(".avg-segment").attr("opacity", 0);
		if (useAgg) {
			d3.selectAll("#avg-seg-" + i).attr("opacity", 1);
		}
		showTooltip = true;
		tooltipInfo.x = e.clientX;
		tooltipInfo.y = e.clientY;
		tooltipInfo.i = i;
		tooltipInfo.text = descriptions[i];
		if (hoverPlay || e.button) playSonification(i, true, true);
	}
	function tooltipMove(e, i) {
		tooltipInfo.x = e.clientX;
		tooltipInfo.y = e.clientY;
	}
	function unfindInsight(i) {
		d3.selectAll(".line-segment").attr("opacity", 1);
		d3.selectAll("#annotation").remove();
		d3.selectAll(".avg-segment").attr("opacity", 0);
		showTooltip = false;
		if (audio) {
			audio.stopQueue();
			audio = undefined;
			curr = undefined;
		}
	}
	function showInsight(e, i) {
		let visBBox = document.querySelector("#vis").getBoundingClientRect();
		let clientX = visBBox.x + sizing.marginLeft,
			clientY = visBBox.y + sizing.marginTop;
		findInsight({ clientX, clientY, button: true }, i);
	}
	function drawLineSeg(data, i, scaleX, scaleY) {
		let seg = chart.append("g");
		let xValues = data.map((d) => new Date(d.date));
		let xMin = d3.min(xValues),
			xMax = d3.max(xValues),
			xBase = scaleX(xMin);
		seg.attr(
			"transform",
			`translate(${sizing.marginLeft + xBase}, ${sizing.marginTop})`,
		);
		seg.attr("id", "line-seg-wrap-" + i);
		seg
			.append("path")
			.datum(data)
			.attr("id", "line-seg-" + i)
			.attr("class", "line-segment")
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.attr("stroke-width", 1.5)
			.attr(
				"d",
				d3
					.line()
					.x(function (d) {
						return scaleX(new Date(d.date)) - xBase;
					})
					.y(function (d) {
						return scaleY(d.price);
					}),
			);
		let avg = d3.mean(data.map((d) => d.price));
		seg
			.append("line")
			.attr("id", "avg-seg-" + i)
			.attr("class", "avg-segment")
			.attr("stroke", "black")
			.attr("stroke-width", 2)
			.attr("x1", 0)
			.attr("x2", scaleX(xMax) - xBase)
			.attr("y1", scaleY(avg))
			.attr("y2", scaleY(avg))
			.attr("opacity", 0);
		let eventOverlay = chart
			.append("g")
			.attr(
				"transform",
				`translate(${sizing.marginLeft + xBase}, ${sizing.marginTop})`,
			);
		eventOverlay
			.append("rect")
			.attr("id", "interaction-overlay-" + i)
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", scaleX(xMax) - scaleX(xMin))
			.attr("height", sizing.height - sizing.marginTop - sizing.marginBottom)
			.attr("fill", "transparent");
		eventOverlay.on("mouseover", (event) => {
			findInsight(event, i);
		});
		eventOverlay.on("mousemove", (event) => {
			tooltipMove(event, i);
		});
		eventOverlay.on("mouseout", (event) => {
			unfindInsight(i);
		});
		return seg;
	}

	let audio,
		curr,
		useAgg = false;
	async function playSonification(i, isFirst, isLast) {
		if (curr == i) return;
		if (audio) {
			audio.stopQueue();
			audio.destroy();
			audio = undefined;
			curr = undefined;
		}
		curr = i;
		let spec = deepcopy(useAgg ? son_agg_spec_temp : son_speec_temp);
		spec.data.values = data_chunks[i];
		spec.description = descriptions[i];
		if (!useAgg) spec.encoding.time.length = 0.15 * n_data_points[i];
		spec.config.skipFinishSpeech = isLast ? false : true;
		spec.config.skipStartSpeech = isFirst ? false : true;
		audio = await compileAuidoGraph(spec);
		await audio.playQueue();
		audio?.destroy();
		audio = undefined;
		curr = undefined;
	}

	let globalStop = false;
	async function playChain() {
		globalStop = false;
		let visBBox = document.querySelector("#vis").getBoundingClientRect();
		for (let i = 0; i < data_chunks.length; i++) {
			if (globalStop) {
				return;
			}
			d3.selectAll(".line-segment").attr("opacity", 0.3);
			d3.selectAll("#line-seg-" + i).attr("opacity", 1);
			showTooltip = true;
			tooltipInfo.x = visBBox.x + sizing.marginLeft;
			tooltipInfo.y = visBBox.y + sizing.marginTop;
			tooltipInfo.i = i;
			tooltipInfo.text = descriptions[i];
			await playSonification(i, i == 0, i == data_chunks.length - 1);
		}
		return;
	}

	onMount(() => {
		drawVis();
		if (browser) {
			function stop(event) {
				if (event.key == "x") {
					globalStop = true;
					if (audio) {
						audio.stopQueue();
						audio.destroy();
						audio = undefined;
						curr = undefined;
					}
				}
			}
			window.addEventListener("keypress", stop);
		}
	});

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
	transform: [ // added when "aggregate data" is selected.
		{
			aggregate: [
				{
					op: 'mean',
					field: 'price',
					as: 'mean_price'
				}
			],
			groupby: 'symbol'
		},
	],
	tone: {
		continued: true
	},
	encoding: {
		time: {
			field: 'date',
			type: 'temporal',
			scale: {
				length: 1, // the length changes based on the number of data points in each segment.
				description: null
			}
		},
		pitch: {
			field: 'price',
			type: 'quantitative',
			scale: {
				polarity: 'positive',
				domain: [0, 230],
				range: [200, 1600],
				description: null
			}
		}
	},
	config: {
		speechRate: 1.75,
		skipTitle: true,
		skipStartPlaySpeech: true,
		skipScaleSpeech: true
	}
};`;
</script>

<svelte:head>
	<title>Erie Example -- Chart Reader</title>
</svelte:head>
<main>
	<h1>Data Insights for Apple's Stock Price Change from 2000 to 2010</h1>
	<p>
		This is a replication of the "interface" of <a
			href="https://dl.acm.org/doi/10.1145/3544548.3581186"
			target="_blank">Chart Reader by Thompson et al. (2023, CHI '23)</a
		> (c.f., Figure 4)
	</p>
	<div id="insights">
		<span
			><input
				type="checkbox"
				bind:checked={hoverPlay}
				id="hover-play"
				aria-labelledby="hover-play-label"
			/><label id="hover-play-label" for="hover-play"
				>Play sound when selected</label
			></span
		>
		<span
			><input
				type="checkbox"
				bind:checked={useAgg}
				id="use-aggregate"
				aria-labelledby="use-aggregate-label"
			/><label id="use-aggregate-label" for="use-aggregate"
				>Aggregate data (mean)</label
			></span
		>

		<span>
			<button
				on:click={() => {
					playChain(0).then(() => {
						if (audio) {
							audio.stopQueue();
							audio.destroy();
							audio = undefined;
							curr = undefined;
							globalStop = false;
						}
					});
				}}>Play all</button
			>
			<button
				on:click={() => {
					globalStop = true;
					if (audio) {
						audio.stopQueue();
						audio.destroy();
						audio = undefined;
						curr = undefined;
					}
				}}>Stop</button
			>
		</span>
		<span>Data Insights</span>
		{#each data_chunks as d, i}
			<button class="insight" on:click={(e) => showInsight(e, i)}>{i}</button>
		{/each}
	</div>
	<div id="vis" />
	{#if showTooltip}
		<div
			id="tooltip"
			style={`top: ${tooltipInfo.y + 5}px; left: ${tooltipInfo.x + 5}px;`}
		>
			<p class="tooltip-title">Data Insights #{tooltipInfo.i + 1}</p>
			<p>{tooltipInfo.text}</p>
		</div>
	{/if}

	<section id="specs">
		<h2>Erie specs used for this replication</h2>
		<p>
			These specs assume that the segmentation was done by manually or
			algorithmically.
		</p>
		<div style="height: 300px;">
			<CodeViewer
				containerId="json-expr"
				code={template_spec}
				language="javascript"
			/>
		</div>
	</section>
</main>

<style>
	main {
		max-width: calc(1000px + 2rem);
		margin: 0 auto;
		padding: 2rem 1rem;
	}
	#insights {
		margin-top: 1.5rem;
		text-align: right;
	}
	#insights button.insight {
		margin-right: 1rem;
		padding: 0.5rem;
		text-align: center;
		width: 2rem;
		height: 2rem;
		border-radius: 1rem;
		border: 1px solid #ddd;
		background-color: white;
		line-height: 90%;
		font-size: 1rem;
	}
	#insights button.insight:hover {
		border-color: #1dc2bb;
	}
	#insights span {
		color: #666;
		margin-right: 1rem;
	}
	#tooltip {
		position: fixed;
		font-size: 0.9rem;
		padding: 0.5rem;
		width: 200px;
		background-color: white;
		border-radius: 0.5rem;
		border: 1px solid #ddd;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	}
	#tooltip .tooltip-title {
		font-weight: 700;
	}
</style>
