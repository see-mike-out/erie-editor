let x_field = 'name', y_field = 'sparsity', y2_field = 'length';

let data = [
  { name: 'A', sparsity: 0.5, length: 5 },
  { name: 'B', sparsity: 0.1, length: 4 },
  { name: 'C', sparsity: 0.9, length: 3 },
  { name: 'D', sparsity: 0, length: 6 },
  { name: 'E', sparsity: 0.75, length: 7 }
];

export const ExSparsity2 = {
  name: "Sparsity and Length",
  id: "sparsity-2",
  route: "examples/sparsity2",
  visualization: {
    name: `The sparsity and length of data tables.`,
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
          y: {
            field: y2_field,
            type: 'quantitative',
            axis: { title: y2_field }
          },
          fill: {
            field: y_field,
            type: 'quantitative',
            legend: { title: y_field },
            scale: { zero: true }
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
      tapCount: {
        field: y2_field,
        type: 'quantitative',
        scale: {
          domain: [0, 7],
          range: [0, 7],
          band: 0.15
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
          playAtTime0: "middle"
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