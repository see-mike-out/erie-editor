let x_field = 'animal', y_field = 'value';

let data = [
  { animal: 'Cow', value: 5 },
  { animal: 'Bird', value: 3 },
  { animal: 'Dog', value: 2 },
  { animal: 'Cat', value: 6 }
], background = [
  { duration: 2 }
];

export const ExSampling1 = {
  name: "Sampling",
  id: "sampling-1",
  route: "examples/sampling1",
  visualization: {
    name: `The value of ${x_field}.`,
    data: {
      values: data
    },
    layer: [
      {
        mark: { type: "bar" },
        encoding: {
          x: {
            field: x_field,
            type: 'nominal',
            axis: { title: x_field }
          },
          y: {
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
    description: `The value of ${x_field}.`,
    datasets: [
      { name: 'data', values: data },
      { name: 'background', values: background }
    ],
    sampling: [{
      name: 'cow',
      sample: {
        mono: 'external_audio/cow.mp3'
      }
    }, {
      name: 'cat',
      sample: {
        mono: 'external_audio/cat.mp3'
      }
    }, {
      name: 'dog',
      sample: {
        mono: 'external_audio/dog.mp3'
      }
    }, {
      name: 'bird',
      sample: {
        mono: 'external_audio/bird.mp3'
      }
    }, {
      name: 'rain',
      sample: {
        mono: 'external_audio/rain.mp3'
      }
    }],
    overlay: [
      {
        data: { name: 'data' },
        tone: {
          continued: false,
        },
        encoding: {
          time: {
            field: x_field,
            type: 'nominal',
            scale: {
              timing: 'simultaneous',
            }
          },
          tapSpeed: {
            field: y_field,
            type: 'quantitative',
            scale: {
              domain: [2, 6],
              range: [1, 3],
              band: 2
            }
          },
          timbre: {
            field: x_field,
            type: 'nominal',
            scale: {
              domain: ['Cow', 'Bird', 'Dog', 'Cat'],
              range: ['cow', 'bird', 'dog', 'cat'],
              description: 'skip'
            }
          }
        }
      },
      {
        data: { name: 'background' },
        tone: {
          type: 'rain',
          continued: false,
        },
        encoding: {
          time: {
            value: 0
          },
          duration: {
            field: 'duration',
            scale: {
              times: 1
            },
            description: 'skip'
          },
          loudness: {
            value: 0.2
          }
        },
        config: {
          skipScaleSpeech: true
        }
      }
    ],
    config: {
      speechRate: 1.75
    }
  }
}