let x_field = 'date', y_field = 'wounds';
export const ExTimeSeries1 = {
  name: "Time Series",
  id: "time-series-1",
  route: "examples/timeSeries1",
  visualization: {
    name: `A time-series of ${y_field} variable over ${x_field}.`,
    data: {
      url: "data/crimea.json"
    },
    layer: [
      {
        mark: { type: "bar" },
        encoding: {
          x: {
            field: x_field,
            type: 'temporal',
            axis: { title: x_field }
          },
          y: {
            field: y_field,
            type: 'quantitative',
            axis: { title: y_field }
          }
        }
      }
    ]
  },
  sonification: {
    description: `A time-series of ${y_field} variable over ${x_field}.`,
    data: {
      url: "data/crimea.json"
    },
    tone: {
      continued: false
    },
    encoding: {
      time: {
        field: x_field,
        type: 'temporal',
        scale: {
          band: 0.15,
          timing: 'absolute',
          length: 3
        },
        tick: {
          interval: 0.5
        }
      },
      loudness: {
        field: y_field,
        type: 'quantitative',
        scale: {
          range: [0, 1]
        }
      }
    },
    config: {
      speechRate: 1.75
    }
  }
}