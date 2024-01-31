<script>
	import * as Erie from "erie-web";
	import SpecView from "../specView.svelte";
	import Player from "../player.svelte";
	import { onMount } from "svelte";
	import Sound_y0Znqj from "$lib/example_sounds/erie-rec-y0Znqj.webm";
	import Sound_Ypmom5 from "$lib/example_sounds/erie-rec-Ypmom5.webm";
	import Sound_PCNQ6t from "$lib/example_sounds/erie-rec-PCNQ6t.webm";
	import Sound_RfN0sy from "$lib/example_sounds/erie-rec-RfN0sy.webm";
	import Sound_HlzxyV from "$lib/example_sounds/erie-rec-HlzxyV.webm";
	import Sound_uitONW from "$lib/example_sounds/erie-rec-uitONW.webm";
	import Sound_ABONJO from "$lib/example_sounds/erie-rec-ABONJO.webm";
	import Sound_QaCZKu from "$lib/example_sounds/erie-rec-QaCZKu.webm";
	import Sound_1VJx4D from "$lib/example_sounds/erie-rec-1VJx4D.webm";
	import Sound_Cvx70p from "$lib/example_sounds/erie-rec-Cvx70p.webm";
	import Sound_QLaZdu from "$lib/example_sounds/erie-rec-QLaZdu.webm";
	import Sound_ApagAN from "$lib/example_sounds/erie-rec-ApagAN.webm";
	import Sound_JkPwR3 from "$lib/example_sounds/erie-rec-JkPwR3.webm";

	const Stream = Erie.Stream;
	const SynthTone = Erie.SynthTone;
	const Dataset = Erie.Dataset;
	const Calculate = Erie.Calculate;
	const Sequence = Erie.Sequence;

	let residualData = [
			{
				SepalLength: 5.1,
				PetalLength: 1.4,
				fit: 2.37656481949724,
				residual: -0.976564819497235,
			},
			{
				SepalLength: 4.9,
				PetalLength: 1.4,
				fit: 2.00487822384627,
				residual: -0.604878223846268,
			},
			{
				SepalLength: 4.7,
				PetalLength: 1.3,
				fit: 1.6331916281953,
				residual: -0.3331916281953,
			},
			{
				SepalLength: 4.6,
				PetalLength: 1.5,
				fit: 1.44734833036981,
				residual: 0.0526516696301855,
			},
			{
				SepalLength: 5,
				PetalLength: 1.4,
				fit: 2.19072152167175,
				residual: -0.790721521671752,
			},
			{
				SepalLength: 5.4,
				PetalLength: 1.7,
				fit: 2.93409471297369,
				residual: -1.23409471297369,
			},
			{
				SepalLength: 4.6,
				PetalLength: 1.4,
				fit: 1.44734833036981,
				residual: -0.0473483303698146,
			},
			{
				SepalLength: 5,
				PetalLength: 1.5,
				fit: 2.19072152167175,
				residual: -0.690721521671751,
			},
			{
				SepalLength: 4.4,
				PetalLength: 1.4,
				fit: 1.07566173471885,
				residual: 0.324338265281152,
			},
			{
				SepalLength: 4.9,
				PetalLength: 1.5,
				fit: 2.00487822384627,
				residual: -0.504878223846268,
			},
			{
				SepalLength: 5.4,
				PetalLength: 1.5,
				fit: 2.93409471297369,
				residual: -1.43409471297369,
			},
			{
				SepalLength: 4.8,
				PetalLength: 1.6,
				fit: 1.81903492602078,
				residual: -0.219034926020783,
			},
			{
				SepalLength: 4.8,
				PetalLength: 1.4,
				fit: 1.81903492602078,
				residual: -0.419034926020783,
			},
			{
				SepalLength: 4.3,
				PetalLength: 1.1,
				fit: 0.889818436893363,
				residual: 0.210181563106637,
			},
			{
				SepalLength: 5.8,
				PetalLength: 1.2,
				fit: 3.67746790427562,
				residual: -2.47746790427562,
			},
			{
				SepalLength: 5.7,
				PetalLength: 1.5,
				fit: 3.49162460645014,
				residual: -1.99162460645014,
			},
			{
				SepalLength: 5.4,
				PetalLength: 1.3,
				fit: 2.93409471297369,
				residual: -1.63409471297369,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.4,
				fit: 2.37656481949724,
				residual: -0.976564819497235,
			},
			{
				SepalLength: 5.7,
				PetalLength: 1.7,
				fit: 3.49162460645014,
				residual: -1.79162460645014,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.5,
				fit: 2.37656481949724,
				residual: -0.876564819497235,
			},
			{
				SepalLength: 5.4,
				PetalLength: 1.7,
				fit: 2.93409471297369,
				residual: -1.23409471297369,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.5,
				fit: 2.37656481949724,
				residual: -0.876564819497235,
			},
			{
				SepalLength: 4.6,
				PetalLength: 1,
				fit: 1.44734833036981,
				residual: -0.447348330369814,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.7,
				fit: 2.37656481949724,
				residual: -0.676564819497235,
			},
			{
				SepalLength: 4.8,
				PetalLength: 1.9,
				fit: 1.81903492602078,
				residual: 0.0809650739792169,
			},
			{
				SepalLength: 5,
				PetalLength: 1.6,
				fit: 2.19072152167175,
				residual: -0.590721521671751,
			},
			{
				SepalLength: 5,
				PetalLength: 1.6,
				fit: 2.19072152167175,
				residual: -0.590721521671751,
			},
			{
				SepalLength: 5.2,
				PetalLength: 1.5,
				fit: 2.56240811732272,
				residual: -1.06240811732272,
			},
			{
				SepalLength: 5.2,
				PetalLength: 1.4,
				fit: 2.56240811732272,
				residual: -1.16240811732272,
			},
			{
				SepalLength: 4.7,
				PetalLength: 1.6,
				fit: 1.6331916281953,
				residual: -0.0331916281952995,
			},
			{
				SepalLength: 4.8,
				PetalLength: 1.6,
				fit: 1.81903492602078,
				residual: -0.219034926020783,
			},
			{
				SepalLength: 5.4,
				PetalLength: 1.5,
				fit: 2.93409471297369,
				residual: -1.43409471297369,
			},
			{
				SepalLength: 5.2,
				PetalLength: 1.5,
				fit: 2.56240811732272,
				residual: -1.06240811732272,
			},
			{
				SepalLength: 5.5,
				PetalLength: 1.4,
				fit: 3.11993801079917,
				residual: -1.71993801079917,
			},
			{
				SepalLength: 4.9,
				PetalLength: 1.5,
				fit: 2.00487822384627,
				residual: -0.504878223846268,
			},
			{
				SepalLength: 5,
				PetalLength: 1.2,
				fit: 2.19072152167175,
				residual: -0.990721521671752,
			},
			{
				SepalLength: 5.5,
				PetalLength: 1.3,
				fit: 3.11993801079917,
				residual: -1.81993801079917,
			},
			{
				SepalLength: 4.9,
				PetalLength: 1.4,
				fit: 2.00487822384627,
				residual: -0.604878223846268,
			},
			{
				SepalLength: 4.4,
				PetalLength: 1.3,
				fit: 1.07566173471885,
				residual: 0.224338265281152,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.5,
				fit: 2.37656481949724,
				residual: -0.876564819497235,
			},
			{
				SepalLength: 5,
				PetalLength: 1.3,
				fit: 2.19072152167175,
				residual: -0.890721521671751,
			},
			{
				SepalLength: 4.5,
				PetalLength: 1.3,
				fit: 1.26150503254433,
				residual: 0.0384949674556689,
			},
			{
				SepalLength: 4.4,
				PetalLength: 1.3,
				fit: 1.07566173471885,
				residual: 0.224338265281152,
			},
			{
				SepalLength: 5,
				PetalLength: 1.6,
				fit: 2.19072152167175,
				residual: -0.590721521671751,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.9,
				fit: 2.37656481949724,
				residual: -0.476564819497235,
			},
			{
				SepalLength: 4.8,
				PetalLength: 1.4,
				fit: 1.81903492602078,
				residual: -0.419034926020783,
			},
			{
				SepalLength: 5.1,
				PetalLength: 1.6,
				fit: 2.37656481949724,
				residual: -0.776564819497235,
			},
			{
				SepalLength: 4.6,
				PetalLength: 1.4,
				fit: 1.44734833036981,
				residual: -0.0473483303698146,
			},
			{
				SepalLength: 5.3,
				PetalLength: 1.5,
				fit: 2.7482514151482,
				residual: -1.2482514151482,
			},
			{
				SepalLength: 5,
				PetalLength: 1.4,
				fit: 2.19072152167175,
				residual: -0.790721521671752,
			},
			{
				SepalLength: 7,
				PetalLength: 4.7,
				fit: 5.90758747818143,
				residual: -1.20758747818143,
			},
			{
				SepalLength: 6.4,
				PetalLength: 4.5,
				fit: 4.79252769122853,
				residual: -0.292527691228529,
			},
			{
				SepalLength: 6.9,
				PetalLength: 4.9,
				fit: 5.72174418035595,
				residual: -0.82174418035595,
			},
			{
				SepalLength: 5.5,
				PetalLength: 4,
				fit: 3.11993801079917,
				residual: 0.880061989200828,
			},
			{
				SepalLength: 6.5,
				PetalLength: 4.6,
				fit: 4.97837098905401,
				residual: -0.378370989054013,
			},
			{
				SepalLength: 5.7,
				PetalLength: 4.5,
				fit: 3.49162460645014,
				residual: 1.00837539354986,
			},
			{
				SepalLength: 6.3,
				PetalLength: 4.7,
				fit: 4.60668439340304,
				residual: 0.0933156065969563,
			},
			{
				SepalLength: 4.9,
				PetalLength: 3.3,
				fit: 2.00487822384627,
				residual: 1.29512177615373,
			},
			{
				SepalLength: 6.6,
				PetalLength: 4.6,
				fit: 5.1642142868795,
				residual: -0.564214286879497,
			},
			{
				SepalLength: 5.2,
				PetalLength: 3.9,
				fit: 2.56240811732272,
				residual: 1.33759188267728,
			},
			{
				SepalLength: 5,
				PetalLength: 3.5,
				fit: 2.19072152167175,
				residual: 1.30927847832825,
			},
			{
				SepalLength: 5.9,
				PetalLength: 4.2,
				fit: 3.86331120210111,
				residual: 0.336688797898892,
			},
			{
				SepalLength: 6,
				PetalLength: 4,
				fit: 4.04915449992659,
				residual: -0.0491544999265923,
			},
			{
				SepalLength: 6.1,
				PetalLength: 4.7,
				fit: 4.23499779775208,
				residual: 0.465002202247924,
			},
			{
				SepalLength: 5.6,
				PetalLength: 3.6,
				fit: 3.30578130862466,
				residual: 0.294218691375345,
			},
			{
				SepalLength: 6.7,
				PetalLength: 4.4,
				fit: 5.35005758470498,
				residual: -0.950057584704981,
			},
			{
				SepalLength: 5.6,
				PetalLength: 4.5,
				fit: 3.30578130862466,
				residual: 1.19421869137534,
			},
			{
				SepalLength: 5.8,
				PetalLength: 4.1,
				fit: 3.67746790427562,
				residual: 0.422532095724376,
			},
			{
				SepalLength: 6.2,
				PetalLength: 4.5,
				fit: 4.42084109557756,
				residual: 0.0791589044224397,
			},
			{
				SepalLength: 5.6,
				PetalLength: 3.9,
				fit: 3.30578130862466,
				residual: 0.594218691375345,
			},
			{
				SepalLength: 5.9,
				PetalLength: 4.8,
				fit: 3.86331120210111,
				residual: 0.936688797898891,
			},
			{
				SepalLength: 6.1,
				PetalLength: 4,
				fit: 4.23499779775208,
				residual: -0.234997797752076,
			},
			{
				SepalLength: 6.3,
				PetalLength: 4.9,
				fit: 4.60668439340304,
				residual: 0.293315606596956,
			},
			{
				SepalLength: 6.1,
				PetalLength: 4.7,
				fit: 4.23499779775208,
				residual: 0.465002202247924,
			},
			{
				SepalLength: 6.4,
				PetalLength: 4.3,
				fit: 4.79252769122853,
				residual: -0.492527691228529,
			},
			{
				SepalLength: 6.6,
				PetalLength: 4.4,
				fit: 5.1642142868795,
				residual: -0.764214286879496,
			},
			{
				SepalLength: 6.8,
				PetalLength: 4.8,
				fit: 5.53590088253046,
				residual: -0.735900882530465,
			},
			{
				SepalLength: 6.7,
				PetalLength: 5,
				fit: 5.35005758470498,
				residual: -0.350057584704981,
			},
			{
				SepalLength: 6,
				PetalLength: 4.5,
				fit: 4.04915449992659,
				residual: 0.450845500073408,
			},
			{
				SepalLength: 5.7,
				PetalLength: 3.5,
				fit: 3.49162460645014,
				residual: 0.00837539354985983,
			},
			{
				SepalLength: 5.5,
				PetalLength: 3.8,
				fit: 3.11993801079917,
				residual: 0.680061989200828,
			},
			{
				SepalLength: 5.5,
				PetalLength: 3.7,
				fit: 3.11993801079917,
				residual: 0.580061989200829,
			},
			{
				SepalLength: 5.8,
				PetalLength: 3.9,
				fit: 3.67746790427562,
				residual: 0.222532095724376,
			},
			{
				SepalLength: 6,
				PetalLength: 5.1,
				fit: 4.04915449992659,
				residual: 1.05084550007341,
			},
			{
				SepalLength: 5.4,
				PetalLength: 4.5,
				fit: 2.93409471297369,
				residual: 1.56590528702631,
			},
			{
				SepalLength: 6,
				PetalLength: 4.5,
				fit: 4.04915449992659,
				residual: 0.450845500073408,
			},
			{
				SepalLength: 6.7,
				PetalLength: 4.7,
				fit: 5.35005758470498,
				residual: -0.650057584704981,
			},
			{
				SepalLength: 6.3,
				PetalLength: 4.4,
				fit: 4.60668439340304,
				residual: -0.206684393403044,
			},
			{
				SepalLength: 5.6,
				PetalLength: 4.1,
				fit: 3.30578130862466,
				residual: 0.794218691375344,
			},
			{
				SepalLength: 5.5,
				PetalLength: 4,
				fit: 3.11993801079917,
				residual: 0.880061989200828,
			},
			{
				SepalLength: 5.5,
				PetalLength: 4.4,
				fit: 3.11993801079917,
				residual: 1.28006198920083,
			},
			{
				SepalLength: 6.1,
				PetalLength: 4.6,
				fit: 4.23499779775208,
				residual: 0.365002202247924,
			},
			{
				SepalLength: 5.8,
				PetalLength: 4,
				fit: 3.67746790427562,
				residual: 0.322532095724376,
			},
			{
				SepalLength: 5,
				PetalLength: 3.3,
				fit: 2.19072152167175,
				residual: 1.10927847832825,
			},
			{
				SepalLength: 5.6,
				PetalLength: 4.2,
				fit: 3.30578130862466,
				residual: 0.894218691375345,
			},
			{
				SepalLength: 5.7,
				PetalLength: 4.2,
				fit: 3.49162460645014,
				residual: 0.70837539354986,
			},
			{
				SepalLength: 5.7,
				PetalLength: 4.2,
				fit: 3.49162460645014,
				residual: 0.70837539354986,
			},
			{
				SepalLength: 6.2,
				PetalLength: 4.3,
				fit: 4.42084109557756,
				residual: -0.120841095577561,
			},
			{
				SepalLength: 5.1,
				PetalLength: 3,
				fit: 2.37656481949724,
				residual: 0.623435180502765,
			},
			{
				SepalLength: 5.7,
				PetalLength: 4.1,
				fit: 3.49162460645014,
				residual: 0.60837539354986,
			},
			{
				SepalLength: 6.3,
				PetalLength: 6,
				fit: 4.60668439340304,
				residual: 1.39331560659696,
			},
			{
				SepalLength: 5.8,
				PetalLength: 5.1,
				fit: 3.67746790427562,
				residual: 1.42253209572438,
			},
			{
				SepalLength: 7.1,
				PetalLength: 5.9,
				fit: 6.09343077600692,
				residual: -0.193430776006916,
			},
			{
				SepalLength: 6.3,
				PetalLength: 5.6,
				fit: 4.60668439340304,
				residual: 0.993315606596956,
			},
			{
				SepalLength: 6.5,
				PetalLength: 5.8,
				fit: 4.97837098905401,
				residual: 0.821629010945987,
			},
			{
				SepalLength: 7.6,
				PetalLength: 6.6,
				fit: 7.02264726513434,
				residual: -0.422647265134337,
			},
			{
				SepalLength: 4.9,
				PetalLength: 4.5,
				fit: 2.00487822384627,
				residual: 2.49512177615373,
			},
			{
				SepalLength: 7.3,
				PetalLength: 6.3,
				fit: 6.46511737165789,
				residual: -0.165117371657885,
			},
			{
				SepalLength: 6.7,
				PetalLength: 5.8,
				fit: 5.35005758470498,
				residual: 0.449942415295019,
			},
			{
				SepalLength: 7.2,
				PetalLength: 6.1,
				fit: 6.2792740738324,
				residual: -0.179274073832402,
			},
			{
				SepalLength: 6.5,
				PetalLength: 5.1,
				fit: 4.97837098905401,
				residual: 0.121629010945987,
			},
			{
				SepalLength: 6.4,
				PetalLength: 5.3,
				fit: 4.79252769122853,
				residual: 0.507472308771471,
			},
			{
				SepalLength: 6.8,
				PetalLength: 5.5,
				fit: 5.53590088253046,
				residual: -0.0359008825304645,
			},
			{
				SepalLength: 5.7,
				PetalLength: 5,
				fit: 3.49162460645014,
				residual: 1.50837539354986,
			},
			{
				SepalLength: 5.8,
				PetalLength: 5.1,
				fit: 3.67746790427562,
				residual: 1.42253209572438,
			},
			{
				SepalLength: 6.4,
				PetalLength: 5.3,
				fit: 4.79252769122853,
				residual: 0.507472308771471,
			},
			{
				SepalLength: 6.5,
				PetalLength: 5.5,
				fit: 4.97837098905401,
				residual: 0.521629010945987,
			},
			{
				SepalLength: 7.7,
				PetalLength: 6.7,
				fit: 7.20849056295982,
				residual: -0.508490562959822,
			},
			{
				SepalLength: 7.7,
				PetalLength: 6.9,
				fit: 7.20849056295982,
				residual: -0.308490562959822,
			},
			{
				SepalLength: 6,
				PetalLength: 5,
				fit: 4.04915449992659,
				residual: 0.950845500073408,
			},
			{
				SepalLength: 6.9,
				PetalLength: 5.7,
				fit: 5.72174418035595,
				residual: -0.0217441803559497,
			},
			{
				SepalLength: 5.6,
				PetalLength: 4.9,
				fit: 3.30578130862466,
				residual: 1.59421869137535,
			},
			{
				SepalLength: 7.7,
				PetalLength: 6.7,
				fit: 7.20849056295982,
				residual: -0.508490562959822,
			},
			{
				SepalLength: 6.3,
				PetalLength: 4.9,
				fit: 4.60668439340304,
				residual: 0.293315606596956,
			},
			{
				SepalLength: 6.7,
				PetalLength: 5.7,
				fit: 5.35005758470498,
				residual: 0.349942415295019,
			},
			{
				SepalLength: 7.2,
				PetalLength: 6,
				fit: 6.2792740738324,
				residual: -0.279274073832402,
			},
			{
				SepalLength: 6.2,
				PetalLength: 4.8,
				fit: 4.42084109557756,
				residual: 0.37915890442244,
			},
			{
				SepalLength: 6.1,
				PetalLength: 4.9,
				fit: 4.23499779775208,
				residual: 0.665002202247925,
			},
			{
				SepalLength: 6.4,
				PetalLength: 5.6,
				fit: 4.79252769122853,
				residual: 0.80747230877147,
			},
			{
				SepalLength: 7.2,
				PetalLength: 5.8,
				fit: 6.2792740738324,
				residual: -0.479274073832402,
			},
			{
				SepalLength: 7.4,
				PetalLength: 6.1,
				fit: 6.65096066948337,
				residual: -0.55096066948337,
			},
			{
				SepalLength: 7.9,
				PetalLength: 6.4,
				fit: 7.58017715861079,
				residual: -1.18017715861079,
			},
			{
				SepalLength: 6.4,
				PetalLength: 5.6,
				fit: 4.79252769122853,
				residual: 0.80747230877147,
			},
			{
				SepalLength: 6.3,
				PetalLength: 5.1,
				fit: 4.60668439340304,
				residual: 0.493315606596956,
			},
			{
				SepalLength: 6.1,
				PetalLength: 5.6,
				fit: 4.23499779775208,
				residual: 1.36500220224792,
			},
			{
				SepalLength: 7.7,
				PetalLength: 6.1,
				fit: 7.20849056295982,
				residual: -1.10849056295982,
			},
			{
				SepalLength: 6.3,
				PetalLength: 5.6,
				fit: 4.60668439340304,
				residual: 0.993315606596956,
			},
			{
				SepalLength: 6.4,
				PetalLength: 5.5,
				fit: 4.79252769122853,
				residual: 0.707472308771471,
			},
			{
				SepalLength: 6,
				PetalLength: 4.8,
				fit: 4.04915449992659,
				residual: 0.750845500073408,
			},
			{
				SepalLength: 6.9,
				PetalLength: 5.4,
				fit: 5.72174418035595,
				residual: -0.32174418035595,
			},
			{
				SepalLength: 6.7,
				PetalLength: 5.6,
				fit: 5.35005758470498,
				residual: 0.249942415295019,
			},
			{
				SepalLength: 6.9,
				PetalLength: 5.1,
				fit: 5.72174418035595,
				residual: -0.62174418035595,
			},
			{
				SepalLength: 5.8,
				PetalLength: 5.1,
				fit: 3.67746790427562,
				residual: 1.42253209572438,
			},
			{
				SepalLength: 6.8,
				PetalLength: 5.9,
				fit: 5.53590088253046,
				residual: 0.364099117469536,
			},
			{
				SepalLength: 6.7,
				PetalLength: 5.7,
				fit: 5.35005758470498,
				residual: 0.349942415295019,
			},
			{
				SepalLength: 6.7,
				PetalLength: 5.2,
				fit: 5.35005758470498,
				residual: -0.150057584704981,
			},
			{
				SepalLength: 6.3,
				PetalLength: 5,
				fit: 4.60668439340304,
				residual: 0.393315606596956,
			},
			{
				SepalLength: 6.5,
				PetalLength: 5.2,
				fit: 4.97837098905401,
				residual: 0.221629010945987,
			},
			{
				SepalLength: 6.2,
				PetalLength: 5.4,
				fit: 4.42084109557756,
				residual: 0.97915890442244,
			},
			{
				SepalLength: 5.9,
				PetalLength: 5.1,
				fit: 3.86331120210111,
				residual: 1.23668879789889,
			},
		],
		qqData = [
			{
				order: 1,
				residual: -2.47746790427562,
				normalQuantile: 0.00333333333333333,
			},
			{
				order: 2,
				residual: -1.99162460645014,
				normalQuantile: 0.01,
			},
			{
				order: 3,
				residual: -1.81993801079917,
				normalQuantile: 0.0166666666666667,
			},
			{
				order: 4,
				residual: -1.79162460645014,
				normalQuantile: 0.0233333333333333,
			},
			{
				order: 5,
				residual: -1.71993801079917,
				normalQuantile: 0.03,
			},
			{
				order: 6,
				residual: -1.63409471297369,
				normalQuantile: 0.0366666666666667,
			},
			{
				order: 7,
				residual: -1.43409471297369,
				normalQuantile: 0.0433333333333333,
			},
			{
				order: 8,
				residual: -1.43409471297369,
				normalQuantile: 0.05,
			},
			{
				order: 9,
				residual: -1.2482514151482,
				normalQuantile: 0.0566666666666667,
			},
			{
				order: 10,
				residual: -1.23409471297369,
				normalQuantile: 0.0633333333333333,
			},
			{
				order: 11,
				residual: -1.23409471297369,
				normalQuantile: 0.07,
			},
			{
				order: 12,
				residual: -1.20758747818143,
				normalQuantile: 0.0766666666666667,
			},
			{
				order: 13,
				residual: -1.18017715861079,
				normalQuantile: 0.0833333333333333,
			},
			{
				order: 14,
				residual: -1.16240811732272,
				normalQuantile: 0.09,
			},
			{
				order: 15,
				residual: -1.10849056295982,
				normalQuantile: 0.0966666666666667,
			},
			{
				order: 16,
				residual: -1.06240811732272,
				normalQuantile: 0.103333333333333,
			},
			{
				order: 17,
				residual: -1.06240811732272,
				normalQuantile: 0.11,
			},
			{
				order: 18,
				residual: -0.990721521671752,
				normalQuantile: 0.116666666666667,
			},
			{
				order: 19,
				residual: -0.976564819497235,
				normalQuantile: 0.123333333333333,
			},
			{
				order: 20,
				residual: -0.976564819497235,
				normalQuantile: 0.13,
			},
			{
				order: 21,
				residual: -0.950057584704981,
				normalQuantile: 0.136666666666667,
			},
			{
				order: 22,
				residual: -0.890721521671751,
				normalQuantile: 0.143333333333333,
			},
			{
				order: 23,
				residual: -0.876564819497235,
				normalQuantile: 0.15,
			},
			{
				order: 24,
				residual: -0.876564819497235,
				normalQuantile: 0.156666666666667,
			},
			{
				order: 25,
				residual: -0.876564819497235,
				normalQuantile: 0.163333333333333,
			},
			{
				order: 26,
				residual: -0.82174418035595,
				normalQuantile: 0.17,
			},
			{
				order: 27,
				residual: -0.790721521671752,
				normalQuantile: 0.176666666666667,
			},
			{
				order: 28,
				residual: -0.790721521671752,
				normalQuantile: 0.183333333333333,
			},
			{
				order: 29,
				residual: -0.776564819497235,
				normalQuantile: 0.19,
			},
			{
				order: 30,
				residual: -0.764214286879496,
				normalQuantile: 0.196666666666667,
			},
			{
				order: 31,
				residual: -0.735900882530465,
				normalQuantile: 0.203333333333333,
			},
			{
				order: 32,
				residual: -0.690721521671751,
				normalQuantile: 0.21,
			},
			{
				order: 33,
				residual: -0.676564819497235,
				normalQuantile: 0.216666666666667,
			},
			{
				order: 34,
				residual: -0.650057584704981,
				normalQuantile: 0.223333333333333,
			},
			{
				order: 35,
				residual: -0.62174418035595,
				normalQuantile: 0.23,
			},
			{
				order: 36,
				residual: -0.604878223846268,
				normalQuantile: 0.236666666666667,
			},
			{
				order: 37,
				residual: -0.604878223846268,
				normalQuantile: 0.243333333333333,
			},
			{
				order: 38,
				residual: -0.590721521671751,
				normalQuantile: 0.25,
			},
			{
				order: 39,
				residual: -0.590721521671751,
				normalQuantile: 0.256666666666667,
			},
			{
				order: 40,
				residual: -0.590721521671751,
				normalQuantile: 0.263333333333333,
			},
			{
				order: 41,
				residual: -0.564214286879497,
				normalQuantile: 0.27,
			},
			{
				order: 42,
				residual: -0.55096066948337,
				normalQuantile: 0.276666666666667,
			},
			{
				order: 43,
				residual: -0.508490562959822,
				normalQuantile: 0.283333333333333,
			},
			{
				order: 44,
				residual: -0.508490562959822,
				normalQuantile: 0.29,
			},
			{
				order: 45,
				residual: -0.504878223846268,
				normalQuantile: 0.296666666666667,
			},
			{
				order: 46,
				residual: -0.504878223846268,
				normalQuantile: 0.303333333333333,
			},
			{
				order: 47,
				residual: -0.492527691228529,
				normalQuantile: 0.31,
			},
			{
				order: 48,
				residual: -0.479274073832402,
				normalQuantile: 0.316666666666667,
			},
			{
				order: 49,
				residual: -0.476564819497235,
				normalQuantile: 0.323333333333333,
			},
			{
				order: 50,
				residual: -0.447348330369814,
				normalQuantile: 0.33,
			},
			{
				order: 51,
				residual: -0.422647265134337,
				normalQuantile: 0.336666666666667,
			},
			{
				order: 52,
				residual: -0.419034926020783,
				normalQuantile: 0.343333333333333,
			},
			{
				order: 53,
				residual: -0.419034926020783,
				normalQuantile: 0.35,
			},
			{
				order: 54,
				residual: -0.378370989054013,
				normalQuantile: 0.356666666666667,
			},
			{
				order: 55,
				residual: -0.350057584704981,
				normalQuantile: 0.363333333333333,
			},
			{
				order: 56,
				residual: -0.3331916281953,
				normalQuantile: 0.37,
			},
			{
				order: 57,
				residual: -0.32174418035595,
				normalQuantile: 0.376666666666667,
			},
			{
				order: 58,
				residual: -0.308490562959822,
				normalQuantile: 0.383333333333333,
			},
			{
				order: 59,
				residual: -0.292527691228529,
				normalQuantile: 0.39,
			},
			{
				order: 60,
				residual: -0.279274073832402,
				normalQuantile: 0.396666666666667,
			},
			{
				order: 61,
				residual: -0.234997797752076,
				normalQuantile: 0.403333333333333,
			},
			{
				order: 62,
				residual: -0.219034926020783,
				normalQuantile: 0.41,
			},
			{
				order: 63,
				residual: -0.219034926020783,
				normalQuantile: 0.416666666666667,
			},
			{
				order: 64,
				residual: -0.206684393403044,
				normalQuantile: 0.423333333333333,
			},
			{
				order: 65,
				residual: -0.193430776006916,
				normalQuantile: 0.43,
			},
			{
				order: 66,
				residual: -0.179274073832402,
				normalQuantile: 0.436666666666667,
			},
			{
				order: 67,
				residual: -0.165117371657885,
				normalQuantile: 0.443333333333333,
			},
			{
				order: 68,
				residual: -0.150057584704981,
				normalQuantile: 0.45,
			},
			{
				order: 69,
				residual: -0.120841095577561,
				normalQuantile: 0.456666666666667,
			},
			{
				order: 70,
				residual: -0.0491544999265923,
				normalQuantile: 0.463333333333333,
			},
			{
				order: 71,
				residual: -0.0473483303698146,
				normalQuantile: 0.47,
			},
			{
				order: 72,
				residual: -0.0473483303698146,
				normalQuantile: 0.476666666666667,
			},
			{
				order: 73,
				residual: -0.0359008825304645,
				normalQuantile: 0.483333333333333,
			},
			{
				order: 74,
				residual: -0.0331916281952995,
				normalQuantile: 0.49,
			},
			{
				order: 75,
				residual: -0.0217441803559497,
				normalQuantile: 0.496666666666667,
			},
			{
				order: 76,
				residual: 0.00837539354985983,
				normalQuantile: 0.503333333333333,
			},
			{
				order: 77,
				residual: 0.0384949674556689,
				normalQuantile: 0.51,
			},
			{
				order: 78,
				residual: 0.0526516696301855,
				normalQuantile: 0.516666666666667,
			},
			{
				order: 79,
				residual: 0.0791589044224397,
				normalQuantile: 0.523333333333333,
			},
			{
				order: 80,
				residual: 0.0809650739792169,
				normalQuantile: 0.53,
			},
			{
				order: 81,
				residual: 0.0933156065969563,
				normalQuantile: 0.536666666666667,
			},
			{
				order: 82,
				residual: 0.121629010945987,
				normalQuantile: 0.543333333333333,
			},
			{
				order: 83,
				residual: 0.210181563106637,
				normalQuantile: 0.55,
			},
			{
				order: 84,
				residual: 0.221629010945987,
				normalQuantile: 0.556666666666667,
			},
			{
				order: 85,
				residual: 0.222532095724376,
				normalQuantile: 0.563333333333333,
			},
			{
				order: 86,
				residual: 0.224338265281152,
				normalQuantile: 0.57,
			},
			{
				order: 87,
				residual: 0.224338265281152,
				normalQuantile: 0.576666666666667,
			},
			{
				order: 88,
				residual: 0.249942415295019,
				normalQuantile: 0.583333333333333,
			},
			{
				order: 89,
				residual: 0.293315606596956,
				normalQuantile: 0.59,
			},
			{
				order: 90,
				residual: 0.293315606596956,
				normalQuantile: 0.596666666666667,
			},
			{
				order: 91,
				residual: 0.294218691375345,
				normalQuantile: 0.603333333333333,
			},
			{
				order: 92,
				residual: 0.322532095724376,
				normalQuantile: 0.61,
			},
			{
				order: 93,
				residual: 0.324338265281152,
				normalQuantile: 0.616666666666667,
			},
			{
				order: 94,
				residual: 0.336688797898892,
				normalQuantile: 0.623333333333333,
			},
			{
				order: 95,
				residual: 0.349942415295019,
				normalQuantile: 0.63,
			},
			{
				order: 96,
				residual: 0.349942415295019,
				normalQuantile: 0.636666666666667,
			},
			{
				order: 97,
				residual: 0.364099117469536,
				normalQuantile: 0.643333333333333,
			},
			{
				order: 98,
				residual: 0.365002202247924,
				normalQuantile: 0.65,
			},
			{
				order: 99,
				residual: 0.37915890442244,
				normalQuantile: 0.656666666666667,
			},
			{
				order: 100,
				residual: 0.393315606596956,
				normalQuantile: 0.663333333333333,
			},
			{
				order: 101,
				residual: 0.422532095724376,
				normalQuantile: 0.67,
			},
			{
				order: 102,
				residual: 0.449942415295019,
				normalQuantile: 0.676666666666667,
			},
			{
				order: 103,
				residual: 0.450845500073408,
				normalQuantile: 0.683333333333333,
			},
			{
				order: 104,
				residual: 0.450845500073408,
				normalQuantile: 0.69,
			},
			{
				order: 105,
				residual: 0.465002202247924,
				normalQuantile: 0.696666666666667,
			},
			{
				order: 106,
				residual: 0.465002202247924,
				normalQuantile: 0.703333333333333,
			},
			{
				order: 107,
				residual: 0.493315606596956,
				normalQuantile: 0.71,
			},
			{
				order: 108,
				residual: 0.507472308771471,
				normalQuantile: 0.716666666666667,
			},
			{
				order: 109,
				residual: 0.507472308771471,
				normalQuantile: 0.723333333333333,
			},
			{
				order: 110,
				residual: 0.521629010945987,
				normalQuantile: 0.73,
			},
			{
				order: 111,
				residual: 0.580061989200829,
				normalQuantile: 0.736666666666667,
			},
			{
				order: 112,
				residual: 0.594218691375345,
				normalQuantile: 0.743333333333333,
			},
			{
				order: 113,
				residual: 0.60837539354986,
				normalQuantile: 0.75,
			},
			{
				order: 114,
				residual: 0.623435180502765,
				normalQuantile: 0.756666666666667,
			},
			{
				order: 115,
				residual: 0.665002202247925,
				normalQuantile: 0.763333333333333,
			},
			{
				order: 116,
				residual: 0.680061989200828,
				normalQuantile: 0.77,
			},
			{
				order: 117,
				residual: 0.707472308771471,
				normalQuantile: 0.776666666666667,
			},
			{
				order: 118,
				residual: 0.70837539354986,
				normalQuantile: 0.783333333333333,
			},
			{
				order: 119,
				residual: 0.70837539354986,
				normalQuantile: 0.79,
			},
			{
				order: 120,
				residual: 0.750845500073408,
				normalQuantile: 0.796666666666667,
			},
			{
				order: 121,
				residual: 0.794218691375344,
				normalQuantile: 0.803333333333333,
			},
			{
				order: 122,
				residual: 0.80747230877147,
				normalQuantile: 0.81,
			},
			{
				order: 123,
				residual: 0.80747230877147,
				normalQuantile: 0.816666666666667,
			},
			{
				order: 124,
				residual: 0.821629010945987,
				normalQuantile: 0.823333333333333,
			},
			{
				order: 125,
				residual: 0.880061989200828,
				normalQuantile: 0.83,
			},
			{
				order: 126,
				residual: 0.880061989200828,
				normalQuantile: 0.836666666666667,
			},
			{
				order: 127,
				residual: 0.894218691375345,
				normalQuantile: 0.843333333333333,
			},
			{
				order: 128,
				residual: 0.936688797898891,
				normalQuantile: 0.85,
			},
			{
				order: 129,
				residual: 0.950845500073408,
				normalQuantile: 0.856666666666667,
			},
			{
				order: 130,
				residual: 0.97915890442244,
				normalQuantile: 0.863333333333333,
			},
			{
				order: 131,
				residual: 0.993315606596956,
				normalQuantile: 0.87,
			},
			{
				order: 132,
				residual: 0.993315606596956,
				normalQuantile: 0.876666666666667,
			},
			{
				order: 133,
				residual: 1.00837539354986,
				normalQuantile: 0.883333333333333,
			},
			{
				order: 134,
				residual: 1.05084550007341,
				normalQuantile: 0.89,
			},
			{
				order: 135,
				residual: 1.10927847832825,
				normalQuantile: 0.896666666666667,
			},
			{
				order: 136,
				residual: 1.19421869137534,
				normalQuantile: 0.903333333333333,
			},
			{
				order: 137,
				residual: 1.23668879789889,
				normalQuantile: 0.91,
			},
			{
				order: 138,
				residual: 1.28006198920083,
				normalQuantile: 0.916666666666667,
			},
			{
				order: 139,
				residual: 1.29512177615373,
				normalQuantile: 0.923333333333333,
			},
			{
				order: 140,
				residual: 1.30927847832825,
				normalQuantile: 0.93,
			},
			{
				order: 141,
				residual: 1.33759188267728,
				normalQuantile: 0.936666666666667,
			},
			{
				order: 142,
				residual: 1.36500220224792,
				normalQuantile: 0.943333333333333,
			},
			{
				order: 143,
				residual: 1.39331560659696,
				normalQuantile: 0.95,
			},
			{
				order: 144,
				residual: 1.42253209572438,
				normalQuantile: 0.956666666666667,
			},
			{
				order: 145,
				residual: 1.42253209572438,
				normalQuantile: 0.963333333333333,
			},
			{
				order: 146,
				residual: 1.42253209572438,
				normalQuantile: 0.97,
			},
			{
				order: 147,
				residual: 1.50837539354986,
				normalQuantile: 0.976666666666667,
			},
			{
				order: 148,
				residual: 1.56590528702631,
				normalQuantile: 0.983333333333333,
			},
			{
				order: 149,
				residual: 1.59421869137535,
				normalQuantile: 0.99,
			},
			{
				order: 150,
				residual: 2.49512177615373,
				normalQuantile: 0.996666666666667,
			},
		];
	let jsonSpec = {
		description:
			"The residuals of a linear regression model of Sepal Length on Petal Length.",
		datasets: [
			{
				name: "qq",
				values: qqData,
			},
			{
				name: "residuals",
				values: residualData,
			},
		],
		synth: [
			{
				name: "Fm1",
				type: "FM",
			},
		],
		sequence: [
			{
				name: "Residual plot",
				data: {
					name: "residuals",
				},
				tone: {
					type: "Fm1",
					continued: false,
				},
				encoding: {
					time: {
						field: "SepalLength",
						type: "quantitative",
						scale: {
							timing: "absolute",
							length: 5,
							band: 0.15,
							title: "Sepal Length",
						},
						format: ".4",
					},
					pan: {
						field: "residual",
						type: "quantitative",
						scale: {
							domain: [-2.5, 0, 2.5],
							range: [-1, 0, 1],
						},
						format: ".4",
					},
					modulation: {
						field: "residual",
						type: "quantitative",
						scale: {
							domain: [-2.5, 0, 2.5],
							range: [4, 0.001, 4],
						},
						format: ".4",
					},
				},
			},
			{
				name: "QQ plot",
				data: {
					name: "qq",
				},
				transform: [
					{
						calculate: "(datum.residual + 2.477468)/(2.495122 + 2.477468)",
						as: "normalized",
					},
					{
						calculate: "(datum.normalized - datum.normalQuantile)",
						as: "deviation",
					},
				],
				tone: {
					continued: false,
				},
				encoding: {
					time: {
						field: "normalQuantile",
						type: "quantitative",
						scale: {
							length: 4,
							title: "Normal Quantile",
							band: 0.2,
						},
						format: ".4",
					},
					pan: {
						field: "deviation",
						type: "quantitative",
						scale: {
							polarity: "positive",
							title: "Deviation from normal distribution",
							domain: [-0.2, 0, 0.2],
							range: [-1, 0, 1],
						},
						format: ".4",
					},
					pitch: {
						field: "residual",
						type: "quantitative",
						scale: {
							polarity: "positive",
							title: "Residual",
						},
						format: ".4",
					},
				},
			},
		],
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let qqData = ${JSON.stringify(qqData)};
let qqDataset = new Dataset("qq");
qqDataset.set("values", qqData);
let residualData = ${JSON.stringify(residualData)};
let residualDataset = new Dataset("residuals");
residualDataset.set("values", residualData);

let residualSpec = new Stream();
residualSpec.name("Residuals");
residualSpec.data.set(residualData);
let synth = new SynthTone("fm1");
synth.type("FM");
residualSpec.tone.set(synth);
residualSpec.encoding.time.field("sepalLength", "quantitative")
                          .scale("timing", "absolute")
                          .scale("length", 5)
                          .scale("band", 0.15)
                          .format(".4");
residualSpec.encoding.modulation.field("residual", "quantitative")
                                .scale("domain", [-2.5, 0, 2.5])
                                .scale("range", [4, 0.001, 4])
                                .format(".4");
residualSpec.encoding.pan.field("residual", "quantitative")
                         .scale("domain", [-2.5, 0, 2.5])
                         .scale("range", [-1, 0, 1])
                         .format(".4");

let qqSpec = new Stream();
qqSpec.name("QQ plot");
qqSpec.data.set(residualData);
let noramlized = new Calculate("(datum.residual + 2.477468)/(2.495122 + 2.477468)", "normalized");
let deviation = new Calculate("datum.normalized - datum.normalQuantile", "deviation");
qqSpec.transform.add(normalized)
                .add(deviation);
qqSpec.tone.continued(false);
qqSpec.encoding.time.field("normalQuantile", "quantitative")
                    .scale("length", 4)
                    .scale("band", 0.2)
                    .scale("title", "Normal Quantile")
                    .format(".4");
qqSpec.encoding.pitch.field("residual", "quantitative")
                     .scale("polarity", "positive")
                     .scale("title", "Residual")
                     .format(".4");
qqSpec.encoding.pan.field("deviation", "quantitative")
                   .scale("domain", [-0.2, 0, 0.2])
                   .scale("range", [-1, 0, 1])
                   .scale("title", "Deviation from normal distribution")
                   .format(".4");

let modelFit = new Sequence(residualSpec , qqSpec);
modelFit.description("The residuals of a linear regression model of Sepal Length on Petal Length.");
modelFit.datasets.add(residualDataset).add(qqDataset);
modelFit.config.set('speechRate', 1.75);`;

	function runSpec() {
		let qqDataset = new Dataset("qq");
		qqDataset.set("values", qqData);
		let residualDataset = new Dataset("residuals");
		residualDataset.set("values", residualData);

		let residualSpec = new Stream();
		residualSpec.name("Residuals");
		residualSpec.data.set("name", "residuals");
		let synth = new SynthTone("fm1");
		synth.type("FM");
		residualSpec.tone.set(synth);
		residualSpec.encoding.time
			.field("sepalLength", "quantitative")
			.scale("timing", "absolute")
			.scale("length", 5)
			.scale("band", 0.15)
			.format(".4");
		residualSpec.encoding.modulation
			.field("residual", "quantitative")
			.scale("domain", [-2.5, 0, 2.5])
			.scale("range", [4, 0.001, 4])
			.format(".4");
		residualSpec.encoding.pan
			.field("residual", "quantitative")
			.scale("domain", [-2.5, 0, 2.5])
			.scale("range", [-1, 0, 1])
			.format(".4");

		let qqSpec = new Stream();
		qqSpec.name("QQ plot");
		qqSpec.data.set("name", "qq");
		let normalized = new Calculate(
			"(datum.residual + 2.477468)/(2.495122 + 2.477468)",
			"normalized",
		);
		let deviation = new Calculate(
			"datum.normalized - datum.normalQuantile",
			"deviation",
		);
		qqSpec.transform.add(normalized).add(deviation);
		qqSpec.tone.continued(false);
		qqSpec.encoding.time
			.field("normalQuantile", "quantitative")
			.scale("length", 4)
			.scale("band", 0.2)
			.scale("title", "Normal Quantile")
			.format(".4");
		qqSpec.encoding.pitch
			.field("residual", "quantitative")
			.scale("polarity", "positive")
			.scale("title", "Residual")
			.format(".4");
		qqSpec.encoding.pan
			.field("deviation", "quantitative")
			.scale("domain", [-0.2, 0, 0.2])
			.scale("range", [-1, 0, 1])
			.scale("title", "Deviation from normal distribution")
			.format(".4");

		let modelFit = new Sequence(residualSpec, qqSpec);
		modelFit.description(
			"The residuals of a linear regression model of Sepal Length on Petal Length.",
		);
		modelFit.datasets.add(residualDataset).add(qqDataset);
		modelFit.config.set("speechRate", 1.75);
		console.log(modelFit.get());
	}
	let formalSpec = `Spec=(
	description='The residuals of a linear regression model of Sepal Length on Petal Length.',
	ddatasets=[
    (name='residuals', values=${JSON.stringify(residualData)}),
    (name='qq', values=${JSON.stringify(qqData)})
  ],
  synth=[(name='Fm1', type='FM')],
  sequence=[stream(
    tone=(type='Fm1', continued=false),
    encoding=(
      data=(name='qq'),
      time=(
        field='SepalLength',
        type='quantitative',
        scale=(timing='absolute', band=0.15, length=5),
        format='.4'
      ),
      pan=(
        field='residual',
        type='quantitative',
        scale=(
          domain=[-2.5, 0, 2.5]
          range=[-1, 0, 1],
        ),
        format='.4'
      ),
      modulation=(
        field='residual',
        type='quantitative',
        scale=(
          domain=[-2.5, 0, 2.5]
          range=[4, 0.001, 4],
        ),
        format='.4'
      )
    )
  ),
  stream(
    data=(name='residuals'),
    tone=(type='default', continued=false),
    encoding=(
      time=(
        field='normalQuantile',
        type='quantitative',
        scale=(timing='absolute', band=0.2, length=4, title='Normal Quantile'),
        format='.4'
      ),
      pitch=(
        field='residual',
        type='quantitative',
        scale=(polarity='positive', title='Residual'),
        format='.4'
      ),
      pan=(
        field='deviation',
        type='quantitative',
        scale=(
          domain=[-0.2, 0, 0.2],
          range=[-1, 0, 1],
          title='Deviation from normal distribution'
        ),
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
	<title>Erie Sonification Recording for Model Fit Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Model Fit Example</h1>
	<h2>Sonification</h2>
	<Player>
		<p id="speech-ACLT3R" style="speech-rate: 315;" data-web-speech-rate="1.75">
			To stop playing the sonification, press the X key.
		</p>
		<p id="speech-o8ouvW" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The residuals of a linear regression model of Sepal Length on Petal
			Length.
		</p>
		<p id="speech-ubzzYk" style="speech-rate: 315;" data-web-speech-rate="1.75">
			This sonification sequence consists of 2 parts.
		</p>
		<p id="speech-oorLuI" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 1. Residual plot.
		</p>
		<p id="speech-3XIlh8" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The first stream has the following sound mappings.
		</p>
		<p id="speech-T8IteY" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Sepal Length is mapped to time. The duration of the stream is 5
			seconds
		</p>
		<p id="speech-xPdud1" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The residual is mapped to pan. residual values are mapped as −2.5
		</p>
		<section>
			<audio id="audio-y0Znqj" controls>
				<source src={Sound_y0Znqj} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-odpgRO" style="speech-rate: 315;" data-web-speech-rate="1.75">
			0
		</p>
		<section>
			<audio id="audio-Ypmom5" controls>
				<source src={Sound_Ypmom5} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-UStiTW" style="speech-rate: 315;" data-web-speech-rate="1.75">
			2.5
		</p>
		<section>
			<audio id="audio-PCNQ6t" controls>
				<source src={Sound_PCNQ6t} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-KAJrif" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The residual is mapped to modulation. residual values are mapped as −2.5
		</p>
		<section>
			<audio id="audio-RfN0sy" controls>
				<source src={Sound_RfN0sy} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-AbVIp1" style="speech-rate: 315;" data-web-speech-rate="1.75">
			0
		</p>
		<section>
			<audio id="audio-HlzxyV" controls>
				<source src={Sound_HlzxyV} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-wCWv0f" style="speech-rate: 315;" data-web-speech-rate="1.75">
			2.5
		</p>
		<section>
			<audio id="audio-uitONW" controls>
				<source src={Sound_uitONW} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-RjqQsH" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-ABONJO" controls>
				<source src={Sound_ABONJO} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-6QxWTB" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Stream 2. QQ plot.
		</p>
		<p id="speech-aaaaa0" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The second stream has the following sound mappings.
		</p>
		<p id="speech-aaaaa1" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Normal Quantile is mapped to time. The duration of the stream is 4
			seconds
		</p>
		<p id="speech-aaaaa2" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Deviation from normal distribution is mapped to pan. Deviation from
			normal distribution values are mapped as −0.2
		</p>
		<section>
			<audio id="audio-QaCZKu" controls>
				<source src={Sound_QaCZKu} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aaaaa3" style="speech-rate: 315;" data-web-speech-rate="1.75">
			0
		</p>
		<section>
			<audio id="audio-1VJx4D" controls>
				<source src={Sound_1VJx4D} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aaaaa4" style="speech-rate: 315;" data-web-speech-rate="1.75">
			0.2
		</p>
		<section>
			<audio id="audio-Cvx70p" controls>
				<source src={Sound_Cvx70p} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aaaaa5" style="speech-rate: 315;" data-web-speech-rate="1.75">
			The Residual is mapped to pitch. The minimum value −2.477 is mapped to
		</p>
		<section>
			<audio id="audio-QLaZdu" controls>
				<source src={Sound_QLaZdu} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aaaaa5" style="speech-rate: 315;" data-web-speech-rate="1.75">
			, and the maximum value 2.495 is mapped to
		</p>
		<section>
			<audio id="audio-ApagAN" controls>
				<source src={Sound_ApagAN} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aaaaa6" style="speech-rate: 315;" data-web-speech-rate="1.75">
			Start playing.
		</p>
		<section>
			<audio id="audio-JkPwR3" controls>
				<source src={Sound_JkPwR3} type="audio/webm;codecs=opus" />
				Your browser does not support the audio element.
			</audio>
		</section>
		<p id="speech-aaaaa7" style="speech-rate: 315;" data-web-speech-rate="1.75">
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
