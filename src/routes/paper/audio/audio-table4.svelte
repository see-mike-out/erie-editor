<script>
  import AudioSnippet from "../AudioSnippet.svelte";
  let spec = {
    description: "A histogram of Miles_per_Gallon variable.",
    data: {
      url: "../data/cars.json",
    },
    tone: {
      continued: false,
    },
    encoding: {
      time: {
        field: "Miles_per_Gallon",
        type: "quantitative",
        bin: true,
        scale: {
          length: 4.5,
        },
        tick: {
          interval: 0.5,
          playAtTime0: true,
        },
      },
      pitch: {
        aggregate: "count",
        type: "quantitative",
        scale: {
          polarity: "positive",
          maxDistinct: true,
        },
      },
      repeat: {
        field: ["Origin", "Cylinders"],
        type: "nominal",
        speech: true,
        scale: {
          description: "skip",
        },
      },
    },
    config: {
      speechRate: 1.75,
      skipDescription: true,
      skipTitle: true,
      skipScaleSpeech: true,
    },
  };
  let x_field = "Miles_per_Gallon",
    x_type = "quantitative";
  let visSpec = {
    name: "A histogram of Miles_per_Gallon variable.",
    data: {
      url: "../data/cars.json",
    },
    transform: [
      {
        bin: true,
        field: x_field,
        as: [x_field + "__bin", x_field + "__bin_end"],
      },
    ],

    mark: { type: "bar", stroke: "white" },
    encoding: {
      x: {
        field: x_field + "__bin",
        type: x_type,
        axis: { title: x_field + " (bin)" },
      },
      x2: {
        field: x_field + "__bin_end",
        type: x_type,
      },
      y: {
        aggregate: "count",
        type: x_type,
        axis: { title: "Count" },
      },
      row: {
        field: "Origin",
      },
      column: {
        field: "Cylinders",
      },
    },
  };
</script>

<AudioSnippet {spec} key="audio-table-4" {visSpec}></AudioSnippet>
