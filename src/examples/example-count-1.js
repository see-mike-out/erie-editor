let data_url = 'data/movies.json', x_field = 'Major Genre', x_type = 'nominal', y_type = 'quantitative';
export const ExCount1 = {
  name: "Nominal Histogram (Counts)",
  id: "count-1",
  route: "examples/count1",
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
            type: x_type,
            axis: { title: x_field }
          },
          y: {
            aggregate: 'count',
            type: y_type,
            axis: { title: "Movie Count" }
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
      type: 'clap',
      continued: false
    },
    encoding: {
      time: {
        field: x_field,
        type: x_type
      },
      tapCount: {
        aggregate: 'count',
        type: y_type,
        scale: {
          range: [0, 20],
          title: 'Movie Count',
          polarity: 'positive',
          maxDistinct: true
        }
      },
      speechBefore: {
        field: x_field,
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