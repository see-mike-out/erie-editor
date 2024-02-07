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
	];
	let jsonSpec = {
		name: "The residuals of a linear regression model of Sepal Length on Petal Length.",
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
				field: "SepalLength",
				type: "quantitative",
				scale: {
					timing: "absolute",
					length: 5,
					band: 0.15,
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
		config: {
			speechRate: 1.75,
		},
	};

	let jsCode = `let spec = new Stream();
spec.description('The residuals of a linear regression model of Sepal Length on Petal Length.');
spec.data.set('values', ${JSON.stringify(data)});
let fm1 = new SynthTone('Fm1');
fm1.type('FM');
spec.synth.add(fm1);
spec.tone.type('Fm1').continued(false);
spec.encoding.time.field('SepalLength', 'quantitative')
                  .scale('timing', 'absolute')
                  .scale('length', 5)
                  .scale('band', 0.15)
                  .format('.4');
spec.encoding.pan.field('residual', 'quantitative')
                 .scale('domain', [-2.5, 0, 2.5])
                 .scale('range', [-1, 0, 1])
                 .format('.4');
spec.encoding.modulation.field('residual', 'quantitative')
                   .scale('domain', [-2.5, 0, 2.5])
                   .scale('range', [4, 0.001, 4])
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
			.field("SepalLength", "quantitative")
			.scale("timing", "absolute")
			.scale("length", 5)
			.scale("band", 0.15)
			.format(".4");
		spec.encoding.pan
			.field("residual", "quantitative")
			.scale("domain", [-2.5, 0, 2.5])
			.scale("range", [-1, 0, 1])
			.format(".4");
		spec.encoding.modulation
			.field("residual", "quantitative")
			.scale("domain", [-2.5, 0, 2.5])
			.scale("range", [4, 0.001, 4])
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
	),
	config=(speechRate=1.75)
)`;

	onMount(() => {
		runSpec();
	});
</script>

<svelte:head>
	<title>Erie Sonification Recording for Residual Plot (Bad) Example</title>
</svelte:head>
<main>
	<h1>Erie Sonification Recording for Residual Plot (Bad) Example</h1>
	<p>
		<a href="../../?ex=residuals-1&showVis=true" target="_blank">Open in the online editor</a>
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
