let x_field = 'Origin', y_field = 'Miles_per_Gallon';
export const ExInterval1 = {
  name: "Interval",
  id: "interval-1",
  route: "examples/interval1",
  visualization: {
    name: `Mean and standard deviation of ${y_field} by ${x_field}`,
    data: {
      url: "data/cars.json"
    },
    transform: [
      {
        aggregate: [
          { op: 'mean', field: y_field, as: y_field + "_mean" },
          { op: 'stdevp', field: y_field, as: y_field + "_stdevp" },
        ],
        groupby: [x_field]
      }, {
        calculate: `datum.${y_field}_mean - datum.${y_field}_stdevp`, as: y_field + "_lower"
      }, {
        calculate: `datum.${y_field}_mean + datum.${y_field}_stdevp`, as: y_field + "_upper"
      }
    ],
    layer: [
      {
        mark: { type: "bar", opacity: 0.3 },
        encoding: {
          x: {
            field: x_field,
            type: 'nominal',
            axis: { title: x_field }
          },
          y: {
            field: y_field + "_upper",
            type: 'quantitative',
            axis: { title: y_field }
          },
          y2: {
            field: y_field + "_lower",
            type: 'quantitative',
          }
        }
      },
      {
        mark: { type: "tick", opacity: 1 },
        encoding: {
          x: {
            field: x_field,
            type: 'nominal',
            axis: { title: x_field }
          },
          y: {
            field: y_field + "_mean",
            type: 'quantitative',
            axis: { title: y_field }
          }
        }
      }
    ]
  },
  sonification: {
    description: `Mean and standard deviation of ${y_field} by ${x_field}`,
    data: {
      url: "data/cars.json"
    },
    transform: [
      {
        aggregate: [
          {
            op: "mean",
            field: "Miles_per_Gallon",
            as: "Miles_per_Gallon_mean"
          },
          {
            op: "stdevp",
            field: "Miles_per_Gallon",
            as: "Miles_per_Gallon_stdevp"
          }
        ],
        groupby: [
          'Origin'
        ]
      },
      {
        calculate: "datum.Miles_per_Gallon_mean - datum.Miles_per_Gallon_stdevp",
        as: "Miles_per_Gallon_lower"
      },
      {
        calculate: "datum.Miles_per_Gallon_mean + datum.Miles_per_Gallon_stdevp",
        as: "Miles_per_Gallon_upper"
      },
      {
        fold: ["Miles_per_Gallon_lower", "Miles_per_Gallon_mean", "Miles_per_Gallon_upper"],
        by: x_field,
        exclude: true,
        as: ["measure", "statistics"]
      }
    ],
    tone: {
      continued: false
    },
    encoding: {
      time: {
        field: "measure",
        type: "nominal",
        scale: {
          band: 0.5,
          order: ["Miles_per_Gallon_lower", "Miles_per_Gallon_mean", "Miles_per_Gallon_upper"]
        }
      },
      pan: {
        field: "statistics",
        type: "quantitative",
        scale: {
          polarity: "positive",
          maxDistinct: true,
          title: "value"
        },
        format: ".4"
      },
      pitch: {
        field: "statistics",
        type: "quantitative",
        scale: {
          polarity: "positive",
          range: ['C2', 'C5'],
          title: "value"
        },
        format: ".4"
      },
      timbre: {
        field: "measure",
        type: "nominal",
        scale: {
          domain: ["Miles_per_Gallon_lower", "Miles_per_Gallon_mean", "Miles_per_Gallon_upper"],
          range: ["piano", "violin", "piano"]
        }
      },
      repeat: {
        field: x_field,
        type: "nominal",
        speech: true,
        scale: {
          description: "skip"
        }
      }
    },
    config: {
      speechRate: 1.75
    }
  }
}