<script>
  import AudioSnippet from "../AudioSnippet.svelte";
  let spec = {
    description: "The sparsity of data tables.",
    data: {
      values: [
        {
          name: "A",
          sparsity: 0.4,
        },
        {
          name: "B",
          sparsity: 0.6,
        },
        {
          name: "C",
          sparsity: 0.2,
        },
        {
          name: "D",
          sparsity: 0,
        },
        {
          name: "E",
          sparsity: 0.9,
        },
      ],
    },
    tone: {
      type: "default",
      continued: false,
    },
    encoding: {
      time: {
        field: "name",
        type: "nominal",
        scale: {
          timing: "relative",
        },
      },
      tapSpeed: {
        field: "sparsity",
        type: "quantitative",
        scale: {
          domain: [0, 1],
          range: [0, 5],
          band: 2,
          polarity: "negative",
          singleTappingPosition: "middle",
        },
      },
      speechBefore: {
        field: "name",
        type: "nominal",
        scale: {
          description: "skip",
        },
      },
    },
    config: {
      speechRate: 1.75,
    },
  };
  let x_field = "name",
    y_field = "sparsity";

  let data = [
    { name: "A", sparsity: 0.4 },
    { name: "B", sparsity: 0.6 },
    { name: "C", sparsity: 0.2 },
    { name: "D", sparsity: 0 },
    { name: "E", sparsity: 0.9 },
  ];
  let visSpec = {
    name: `The sparsity of ${x_field}.`,
    data: {
      values: data,
    },
    layer: [
      {
        mark: { type: "rect" },
        encoding: {
          x: {
            field: x_field,
            type: "nominal",
            axis: { title: x_field },
          },
          fill: {
            field: y_field,
            type: "quantitative",
            legend: { title: y_field },
            scale: { zero: true, domain: [0, 1] },
          },
        },
      },
    ],
  };
</script>

<AudioSnippet {spec} key="audio-table-7" {visSpec}></AudioSnippet>
