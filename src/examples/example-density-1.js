let x_field = 'Species', y_field = 'Body Mass (g)', x_field_2 = 'Island';
export const ExDensity1 = {
  name: "Kernel Density",
  id: "density-1",
  route: "examples/density1",
  visualization: {
    name: `The kernel density estimation of body mass by species and island`,
    data: {
      url: "data/penguins.json"
    },
    transform: [{
      "density": y_field,
      "groupby": [x_field, x_field_2],
      "extent": [2500, 6500]
    }],
    mark: { type: "area" },
    encoding: {
      x: {
        field: 'value',
        type: 'quantitative',
        axis: { title: "Body Mass value" }
      },
      y: {
        field: 'density',
        type: 'quantitative',
        axis: { title: "Kernel density" }
      },
      column: {
        field: x_field,
        type: 'nominal'
      },
      row: {
        field: x_field_2,
        type: 'nominal'
      },
      color: {
        field: x_field,
        type: 'nominal'
      }
    }
  },
  sonification: {
    "description": `The kernel density estimation of body mass by species and island`,
    data: {
      url: "data/penguins.json"
    },
    transform: [{
      density: y_field,
      groupby: [x_field, x_field_2],
      extent: [2500, 6500]
    }],
    tone: {
      continued: true
    },
    encoding: {
      time: {
        field: 'value',
        type: 'quantitative',
        scale: {
          length: 3,
          title: "Body Mass value"
        }
      },
      pan: {
        field: 'value',
        type: 'quantitative',
        scale: {
          polarity: 'positive',
          title: "Body Mass value"
        }
      },
      pitch: {
        field: 'density',
        type: 'quantitative',
        scale: {
          polarity: 'positive',
          range: [0, 700],
          title: "Kernel density"
        },
        format: ".4"
      },
      repeat: {
        field: [x_field, x_field_2],
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