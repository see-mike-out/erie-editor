let data = [
  {
    "SepalLength": 4,
    "fit": 0.332288543416911,
    "ci_lower": -0.0103684307593896,
    "ci_upper": 0.674945517593211
  },
  {
    "SepalLength": 4.25,
    "fit": 0.796896787980621,
    "ci_lower": 0.492458396304423,
    "ci_upper": 1.10133517965682
  },
  {
    "SepalLength": 4.5,
    "fit": 1.26150503254433,
    "ci_lower": 0.994017116607356,
    "ci_upper": 1.52899294848131
  },
  {
    "SepalLength": 4.75,
    "fit": 1.72611327710804,
    "ci_lower": 1.49370210162501,
    "ci_upper": 1.95852445259108
  },
  {
    "SepalLength": 5,
    "fit": 2.19072152167175,
    "ci_lower": 1.99052601153806,
    "ci_upper": 2.39091703180544
  },
  {
    "SepalLength": 5.25,
    "fit": 2.65532976623546,
    "ci_lower": 2.48287789313124,
    "ci_upper": 2.82778163933968
  },
  {
    "SepalLength": 5.5,
    "fit": 3.11993801079917,
    "ci_lower": 2.96828322759797,
    "ci_upper": 3.27159279400038
  },
  {
    "SepalLength": 5.75,
    "fit": 3.58454625536288,
    "ci_lower": 3.44363203865769,
    "ci_upper": 3.72546047206807
  },
  {
    "SepalLength": 6,
    "fit": 4.04915449992659,
    "ci_lower": 3.9066322976469,
    "ci_upper": 4.19167670220629
  },
  {
    "SepalLength": 6.25,
    "fit": 4.5137627444903,
    "ci_lower": 4.35766515230242,
    "ci_upper": 4.66986033667818
  },
  {
    "SepalLength": 6.5,
    "fit": 4.97837098905401,
    "ci_lower": 4.79943396968061,
    "ci_upper": 5.15730800842742
  },
  {
    "SepalLength": 6.75,
    "fit": 5.44297923361772,
    "ci_lower": 5.23496823874292,
    "ci_upper": 5.65099022849252
  },
  {
    "SepalLength": 7,
    "fit": 5.90758747818143,
    "ci_lower": 5.6665131959642,
    "ci_upper": 6.14866176039867
  },
  {
    "SepalLength": 7.25,
    "fit": 6.37219572274514,
    "ci_lower": 6.09549522839161,
    "ci_upper": 6.64889621709867
  },
  {
    "SepalLength": 7.5,
    "fit": 6.83680396730885,
    "ci_lower": 6.52278543907269,
    "ci_upper": 7.15082249554502
  },
  {
    "SepalLength": 7.75,
    "fit": 7.30141221187256,
    "ci_lower": 6.94892075517197,
    "ci_upper": 7.65390366857316
  },
  {
    "SepalLength": 8,
    "fit": 7.76602045643627,
    "ci_lower": 7.37424126289814,
    "ci_upper": 8.15779964997441
  }
]

let x_field = 'SepalLength', y0 = 'fit', y1 = 'ci_lower', y2 = 'ci_upper';

export const ExCI1 = {
  name: "Confidence Interval (regression)",
  id: "ci-1",
  route: "examples/ci1",
  visualization: {
    name: `The confidence interval of a model prediction of Sepal Length on Petal Length.`,
    data: {
      values: data
    },
    layer: [
      {
        mark: { type: "area", opacity: 0.3 },
        encoding: {
          x: {
            field: x_field,
            type: 'nominal',
            axis: { title: x_field }
          },
          y: {
            field: y1,
            type: 'quantitative',
            axis: { title: 'Petal Length' }
          },
          y2: {
            field: y2,
            type: 'quantitative'
          }
        }
      },
      {
        mark: { type: "line" },
        encoding: {
          x: {
            field: x_field,
            type: 'nominal',
            axis: { title: x_field }
          },
          y: {
            field: y0,
            type: 'quantitative',
            axis: { title: 'Petal Length' }
          }
        }
      }
    ]
  },
  sonification: {
    description: `The prediction and confidence interval for a regreession model of Sepal Length on Petal Length.`,
    data: {
      values: data
    },
    overlay: [{
      name: 'Prediction',
      tone: {
        continued: true
      },
      encoding: {
        time: {
          field: x_field,
          type: 'quantitative',
          scale: {
            length: 2,
            title: 'Petal Length'
          },
          format: ".4"
        },
        pan: {
          field: y0,
          type: 'quantitative',
          scale: {
            polarity: 'positive',
            title: 'Predicted Sepal Length'
          },
          format: ".4"
        },
        pitch: {
          field: y0,
          type: 'quantitative',
          scale: {
            polarity: 'positive',
            title: 'Predicted Sepal Length'
          },
          format: ".4"
        }
      }
    }, {
      name: 'Lower bound',
      tone: {
        continued: true
      },
      encoding: {
        time: {
          field: x_field,
          type: 'quantitative',
          format: ".4"
        },
        pan: {
          field: y1,
          type: 'quantitative',
          scale: { title: 'Confidence interval lower bound' },
          format: ".4"
        },
        pitch: {
          field: y1,
          type: 'quantitative',
          scale: { title: 'Confidence interval lower bound' },
          format: ".4"
        },
        loudness: {
          value: 0.3
        }
      }
    },
    {
      name: 'Upper bound',
      tone: {
        continued: true
      },
      encoding: {
        time: {
          field: x_field,
          type: 'quantitative',
          format: ".4"
        },
        pan: {
          field: y2,
          type: 'quantitative',
          scale: { title: 'Confidence interval upper bound' },
          format: ".4"
        },
        pitch: {
          field: y2,
          type: 'quantitative',
          scale: { title: 'Confidence interval upper bound' },
          format: ".4"
        },
        loudness: {
          value: 0.3
        }
      }
    }],
    config: {
      speechRate: 1.75
    }
  }
}