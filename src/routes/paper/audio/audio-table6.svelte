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
    },
    config: {
      speechRate: 1.75,
      skipDescription: true,
      skipTitle: true,
    },
  };
</script>

<AudioSnippet {spec} key="audio-table-6"></AudioSnippet>
