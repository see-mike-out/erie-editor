let data_url = 'data/cars.json', x_field = 'Miles_per_Gallon', x_type = 'quantitative'
export const ExHistogram1 = {
  name: "Quantitative Histogram",
  id: "histogram-1",
  route: "examples/histogram1",
  visualization: {
    name: `A histogram of ${x_field} variable.`,
    data: {
      url: data_url
    },
    layer: [
      {
        mark: { type: "bar" },
        encoding: {
          x: {
            field: x_field,
            bin: true,
            type: x_type,
            axis: { title: x_field + " (bin)" }
          },
          y: {
            aggregate: 'count',
            type: x_type,
            axis: { title: "Count" }
          }
        }
      }
    ]
  },
  sonification: {
    description: `A histogram of ${x_field} variable.`,
    data: {
      url: data_url
    },
    tone: {
      continued: false
    },
    encoding: {
      time: {
        field: x_field,
        type: x_type,
        bin: true,
        scale: {
          length: 4.5
        },
        tick: {
          interval: 0.5,
          playAtTime0: true
        }
      },
      pitch: {
        aggregate: 'count',
        type: x_type,
        scale: {
          polarity: 'positive',
          maxDistinct: true
        }
      }
    },
    config: {
      speechRate: 1.75
    }
  }
}