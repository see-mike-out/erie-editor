let x_field = 'start', x2_field = 'length', y_field = 'note';
const note = [
  {
    "start": 0,
    "length": 0.25,
    "note": "E4"
  },
  {
    "start": 0.25,
    "length": 0.5,
    "note": "E4"
  },
  {
    "start": 0.75,
    "length": 0.25,
    "note": "E4"
  },
  {
    "start": 1.25,
    "length": 0.25,
    "note": "C4"
  },
  {
    "start": 1.5,
    "length": 0.5,
    "note": "E4"
  },
  {
    "start": 2,
    "length": 1,
    "note": "G4"
  },
  {
    "start": 3,
    "length": 1,
    "note": "G3"
  },
  {
    "start": 4,
    "length": 0.5,
    "note": "C4"
  },
  {
    "start": 4.75,
    "length": 0.25,
    "note": "G3"
  },
  {
    "start": 5.5,
    "length": 0.5,
    "note": "E3"
  },
  {
    "start": 6.25,
    "length": 0.25,
    "note": "A3"
  },
  {
    "start": 6.75,
    "length": 0.25,
    "note": "B3"
  },
  {
    "start": 7.25,
    "length": 0.25,
    "note": "B3b"
  },
  {
    "start": 7.5,
    "length": 0.5,
    "note": "A3"
  },
  {
    "start": 8,
    "length": 0.33,
    "note": "G3"
  },
  {
    "start": 8.33,
    "length": 0.33,
    "note": "E4"
  },
  {
    "start": 8.66,
    "length": 0.34,
    "note": "G4"
  },
  {
    "start": 9,
    "length": 0.5,
    "note": "A4"
  },
  {
    "start": 9.5,
    "length": 0.25,
    "note": "F4"
  },
  {
    "start": 9.75,
    "length": 0.25,
    "note": "G4"
  },
  {
    "start": 10.25,
    "length": 0.25,
    "note": "E4"
  },
  {
    "start": 10.75,
    "length": 0.25,
    "note": "C4"
  },
  {
    "start": 11,
    "length": 0.25,
    "note": "D4"
  },
  {
    "start": 11.25,
    "length": 0.25,
    "note": "B3"
  },
  {
    "start": 12,
    "length": 0.5,
    "note": "C4"
  },
  {
    "start": 12.75,
    "length": 0.25,
    "note": "G3"
  },
  {
    "start": 13.5,
    "length": 0.5,
    "note": "E3"
  },
  {
    "start": 14.25,
    "length": 0.25,
    "note": "A3"
  },
  {
    "start": 14.75,
    "length": 0.25,
    "note": "B3"
  },
  {
    "start": 15.25,
    "length": 0.25,
    "note": "B3b"
  },
  {
    "start": 15.5,
    "length": 0.5,
    "note": "A3"
  },
  {
    "start": 16,
    "length": 0.33,
    "note": "G3"
  },
  {
    "start": 16.33,
    "length": 0.33,
    "note": "E4"
  },
  {
    "start": 16.66,
    "length": 0.34,
    "note": "G4"
  },
  {
    "start": 17,
    "length": 0.5,
    "note": "A4"
  },
  {
    "start": 17.5,
    "length": 0.25,
    "note": "F4"
  },
  {
    "start": 17.75,
    "length": 0.25,
    "note": "G4"
  },
  {
    "start": 18.25,
    "length": 0.25,
    "note": "E4"
  },
  {
    "start": 18.75,
    "length": 0.25,
    "note": "C4"
  },
  {
    "start": 19,
    "length": 0.25,
    "note": "D4"
  },
  {
    "start": 19.25,
    "length": 0.25,
    "note": "B3"
  }
];
export const ExMario = {
  name: "Super Mario Opening",
  id: "mario-1",
  route: "examples/mario",
  visualization: {
    name: `mario-opening`,
    data: {
      values: note
    },
    transform: [
      { calculate: `datum.${x_field} + datum.${x2_field}`, as: 'end' }
    ],
    layer: [
      {
        mark: { type: "rule" },
        encoding: {
          x: {
            field: x_field,
            type: 'quantitative',
            axis: { title: "Time" }
          },
          x2: {
            field: 'end',
            type: 'quantitative',
          },
          y: {
            field: y_field,
            axis: { title: "Note" }
          }
        }
      }
    ]
  },
  sonification: {
    description: `Super Mario Opening`,
    data: {
      values: note
    },
    tone: {
      type: "piano",
      continued: false
    },
    encoding: {
      time: {
        field: x_field,
        type: "quantitative",
        scale: {
          timing: 'absolute',
          times: 1,
          description: "skip"
        }
      },
      duration: {
        field: x2_field,
        type: "quantitative",
        scale: {
          times: 1,
          description: "skip"
        }
      },
      pitch: {
        field: y_field,
        scale: {
          range: { field: y_field }
        }
      }
    },
    config: {
      speechRate: 1.75,
      timeUnit: { unit: "beat", rounding: 'never', tempo: 30 },
      skipScaleSpeech: true
    }
  }
}