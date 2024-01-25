<script>
  import { onMount } from "svelte";

  let spec = {
    description:
      "The kernel density estimation of body mass by species and island",
    data: {
      url: "../data/penguins.json",
    },
    transform: [
      {
        density: "Body Mass (g)",
        groupby: ["Species", "Island"],
        extent: [2500, 6500],
      },
    ],
    tone: {
      continued: true,
    },
    encoding: {
      time: {
        field: "value",
        type: "quantitative",
        scale: {
          length: 3,
          title: "Body Mass value",
        },
      },
      pan: {
        field: "value",
        type: "quantitative",
        scale: {
          polarity: "positive",
          title: "Body Mass value",
        },
      },
      pitch: {
        field: "density",
        type: "quantitative",
        scale: {
          polarity: "positive",
          range: [0, 700],
          title: "Kernel density",
        },
        format: ".4",
      },
      repeat: {
        field: ["Species", "Island"],
        type: "nominal",
        speech: true,
        scale: {
          description: "skip",
        },
      },
    },
    config: {
      speechRate: 1.75,
    },
  };
  let queue
  onMount(() => {
    Erie.compileAuidoGraph(spec).then((audio_graph) => {
      audio_graph.prerender().then((q) => {
        queue = q;
        console.log(queue)
      });
    });
  });
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/arquero@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
  <script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"
  ></script>
  <script src="../erie-web.js"></script>
</svelte:head>
