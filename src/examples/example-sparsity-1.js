let x_field = 'name', y_field = 'sparsity';

let data = [
  { name: 'A', sparsity: 0.4 },
  { name: 'B', sparsity: 0.6 },
  { name: 'C', sparsity: 0.2 },
  { name: 'D', sparsity: 0 },
  { name: 'E', sparsity: 0.9 }
];

export const ExSparsity1 = {
  name: "Sparsity as density",
  id: "sparsity-1",
  route: "examples/sparsity1",
  note: "This example demonstrates how to use polarity in an audio scale. 'Sparsity (simple)' example diretly maps the degree of sparsity.",
  visualization: {
    name: `The sparsity of ${x_field}.`,
    data: {
      values: data
    },
    layer: [
      {
        mark: { type: "rect" },
        encoding: {
          x: {
            field: x_field,
            type: 'nominal',
            axis: { title: x_field }
          },
          fill: {
            field: y_field,
            type: 'quantitative',
            legend: { title: y_field },
            scale: { zero: true },
            legend: { title: "Density" },
            sort: "descending",
          }
        }
      }
    ]
  },
  sonification: {
    description: `The sparsity of data tables.`,
    data: {
      values: data
    },
    tone: {
      type: 'default',
      continued: false,
    },
    encoding: {
      time: {
        field: x_field,
        type: 'nominal',
        scale: {
          timing: 'relative',
        }
      },
      tapSpeed: {
        field: y_field,
        type: 'quantitative',
        scale: {
          domain: [0, 1],
          range: [0, 5],
          band: 2,
          polarity: "negative",
          singleTappingPosition: "middle",
          title: "Density"
        }
      },
      speechBefore: {
        field: x_field,
        type: 'nominal',
        scale: {
          description: 'skip'
        }
      }
    },
    config: {
      speechRate: 1.75
    }
  }
}