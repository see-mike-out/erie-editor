export function makeHistogramSpec(data, variable, type) {
  let x, y, tooltip, transform = [];
  if (type === "nominal" || type === "temporal") {
    x = { field: variable, type: 'nominal', axis: { title: variable }, sort: "-y" };
    y = { aggregate: 'count', type: 'quantitative', axis: { title: "Count" } };
    tooltip = [
      {
        field: variable,
        title: variable
      },
      {
        aggregate: 'count'
      }
    ];
  } else if (type === "ordinal") {
    x = { field: variable, type: 'ordinal', axis: { title: variable }, sort: true };
    y = { aggregate: 'count', type: 'quantitative', axis: { title: "Count" } };
    tooltip = [
      {
        field: variable,
        title: variable
      },
      {
        aggregate: 'count'
      }
    ];
  } else if (type === "quantitative") {
    x = { field: variable, bin: true, type: 'quantitative', axis: { title: variable + " (bin)" } };
    y = { aggregate: 'count', type: 'quantitative', axis: { title: "Count" } };
    tooltip = [
      {
        field: variable,
        bin: true,
        title: variable
      },
      {
        aggregate: 'count'
      }
    ];
  }
  let spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A histogram of ' + variable + ' variable.',
    data: {
      values: data.map((d) => { return { [variable]: d } })
    },
    transform,
    mark: { type: 'bar' },
    encoding: {
      x, y, tooltip
    },
    config: {
      speechRate: 1.75
    }
  };
  return spec;
}