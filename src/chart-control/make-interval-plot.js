export function makeIntervalPlotSpec(overall_data, variable, type, groupby_data, groupby, ci_width) {
  let data = [];
  if (!groupby) groupby = "Group"
  if (overall_data && groupby_data) {
    overall_data.forEach(d => { d[groupby] = 'Total'; d.total = true })
    groupby_data.forEach(d => { d.total = false });
    data.push(...overall_data, ...groupby_data);
  } else if (overall_data) {
    overall_data.forEach(d => { d[groupby] = 'Total'; d.total = true })
    data.push(...overall_data);
  } else if (groupby_data) {
    groupby_data.forEach(d => { d.total = false });
    data.push(...groupby_data);
  } else {
    console.warn("No input data provided.")
    return null;
  }
  data.forEach((d) => {
    d.ci_low = d.ci[0];
    d.ci_high = d.ci[1];
  })
  let color = { field: groupby, type: 'nominal' }, x = { field: groupby, type: 'nominal', sort: { order: data.map((d) => d[groupby]) } };
  let spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Compatability interval(s) of ' + variable + (groupby ? ' by ' + groupby : ''),
    data: { values: data },
    layer: [{
      mark: { type: "rule", opacity: 0.9 },
      encoding: {
        x,
        y: { field: 'ci_low', type: 'quantitative', scale: { zero: false }, axis: { title: variable } },
        y2: { field: 'ci_high' },
        color
      }
    }, {
      mark: { type: "point", size: 50, filled: true, opacity: 1 },
      encoding: {
        x,
        y: { field: 'mean', type: 'quantitative', scale: { zero: false } },
        color
      }
    }]
  };
  return spec;
}