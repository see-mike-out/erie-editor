export function makeDensityPlotSpec(data, variable, type, bandwidth) {
  let x, x_2, y, y_2, tooltip, transform = [], transform_2 = [];
  if (bandwidth === undefined) bandwidth = 0.5;
  if (type === "quantitative") {
    transform.push(
      { density: variable, bandwidth, as: [variable + "_value", 'density'] }
    );
    transform_2.push({
      density: variable + "_inverted", bandwidth, as: [variable + "_inverted_value", 'density_inverted']
    });
    x = { field: variable + "_value", type: 'quantitative', axis: { title: variable } };
    x_2 = { field: variable + "_inverted_value", type: 'quantitative', axis: { title: '' } };
    y = { field: 'density', type: 'quantitative', axis: { title: "Density" } };
    y_2 = { field: 'density_inverted', type: 'quantitative', axis: { title: "Density" } };
    tooltip = [
      {
        field: variable + "_value",
        title: variable + " value"
      },
      {
        field: 'density'
      }
    ];
  } else {
    return null;
  }
  let dmax = Math.max(...data), dmin = Math.min(...data);
  let spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A histogram of ' + variable + ' variable.',
    data: {
      values: data.map((d) => { return { [variable]: d, [variable + "_inverted"]: dmax - d + dmin } })
    },
    layer: [{
      transform: transform_2,
      mark: { type: 'area', fill: 'orange', opacity: 0.7 },
      encoding: {
        x: x_2, y: y_2
      }
    }, {
      transform,
      mark: { type: 'area', fill: 'steelblue', opacity: 0.7 },
      encoding: {
        x, y, tooltip
      }
    }]
  };
  return spec;
}