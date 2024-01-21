export function makeScatterplotSpec(variableX, dataX, typeX, variableY, dataY, typeY, option) {
  let x = {
    field: variableX,
    type: typeX,
    scale: {}
  }, y = {
    field: variableY,
    type: typeY,
    scale: {}
  }, tooltip = [
    {
      field: variableX,
      type: typeX
    },
    {
      field: variableY,
      type: typeY
    }
  ];
  if (option.x_zero === false) x.scale.zero = false;
  if (option.y_zero === false) y.scale.zero = false;
  let data = dataX.map((d, i) => {
    return { [variableX]: d, [variableY]: dataY[i] };
  })
  let spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A scatterplot of ' + variableX + ' by ' + variableY + '.',
    data: {
      values: data
    },
    mark: { type: 'point' },
    encoding: {
      x, y, tooltip
    }
  };

  if (option.include_diagonal_line) {
    let layer = [];
    layer.push({
      data: {
        values: data
      },
      mark: { type: 'point' },
      encoding: {
        x, y, tooltip
      }
    });
    let min_x = Math.min(...dataX),
      max_x = Math.max(...dataX),
      min_y = Math.min(...dataY),
      max_y = Math.max(...dataY);
    layer.push({
      data: {
        values: [
          { [variableX]: min_x, [variableY]: min_y },
          { [variableX]: max_x, [variableY]: max_y }
        ]
      },
      mark: { type: 'line', stroke: 'orange' },
      encoding: {
        x: { field: variableX, type: typeX },
        y: { field: variableY, type: typeY }
      }
    });
    spec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A histogram of ' + variableX + ' by ' + variableY + '.',
      layer
    };
  }
  return spec;
}