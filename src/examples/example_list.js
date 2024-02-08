import { ExHistogram1 } from "./example-histogram-1";
import { ExCount1 } from "./example-count-1";
import { ExSparsity1 } from "./example-sparsity-1";
import { ExCI1 } from "./example-regCI-1";
import { ExInterval1 } from "./example-interval-1";
import { ExDensity1 } from "./example-density-1";
import { ExTimeSeries1 } from "./example-time-series-1";
import { ExResiduals1 } from "./example-residual-1";
import { ExRegOutput1 } from "./example-regOut-1";
import { ExResiduals2 } from "./example-residual-2";
import { ExSparsity2 } from "./example-sparsity-2";
import { ExSampling1 } from "./example-sampling-1";
import { ExWasp96b } from "./example-wasp96b";
import { ExMario } from "./example-super-mario";
import { ExSparsity3 } from "./example-sparsity-3";

export const example_list = [
  // to be published (needs testings)
  // - Histogram (discrete/time+pan/pitch)
  ExHistogram1,
  // - Counts (time/tap-count/clap) => reuse existing
  ExCount1,
  // - Sparsity (time-simultaneous/tap-speed/sampling)
  ExSparsity1,
  ExSparsity3,
  ExSparsity2,
  // - Regression CI (time+pan/pitch/overlay)
  ExCI1,
  // - Interval (time/pan+pitch/fold)
  ExInterval1,
  // - Kernel density (time+pan/pitch/density)
  ExDensity1,
  // - Residual (time+pan/modulation index)
  ExResiduals1,
  ExResiduals2,
  // - Sequence: linear regression output (overlay/regression line (pitch) + raw data), qqplot, residual plot
  ExRegOutput1,
  // - time series
  ExTimeSeries1,
  // - sampling
  ExSampling1,
  // - WASP-96b
  ExWasp96b,
  // - Mario
  ExMario
];

export const example_ids = example_list.map((e) => e.id);

export const replication_list = [
  // - Audio Narrative
  { title: "Audio Narrative", route: "examples/audioNarrative" },
  // - Chart Reader
  { title: "Chart Reader", route: "examples/chartReader" },
  // - Sonification arts/journalism
  { title: "War Casualties", route: "examples/warCasualties" },
  { title: "Covid-19 Death Adds Up", route: "examples/covidAddUp" },
  { title: "Nine Rounds a Second", route: "examples/lasVegasGunMan" }
];