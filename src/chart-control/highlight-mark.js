const hlClassName = 'erie-note-hl';

export function highlightVLChartByDatum(ppChart, d, dehl) {
  // if (ppChart._current_) {
  //   ppChart._current_.forEach((m) => {
  //     if (m && m.classList) {
  //       m.classList.remove(hlClassName);
  //     }
  //   });
  // }
  let keys = {}
  uniqueArray(Object.keys(d || {})).forEach(p => { if (p !== 'Symbol(vega_id)') keys[p] = d[p] });
  let selected = ppChart.query(keys, 'mark');
  // console.log(d, selected)
  selected.forEach((m) => {
    if (m && m.classList) {
      if (!dehl) m.classList.add(hlClassName)
      else m.classList.remove(hlClassName)
    }
  })
  ppChart._current_ = selected;
}

export function dehighlightAll(ppChart) {
  Object.values(ppChart._current_).forEach((m) => {
    if (m && m.classList) m.classList.remove(hlClassName);
  })
}

export function preparseVLChartForHighlight(chartPL) {
  let pp = new HLQT();
  let marks = document.querySelectorAll(chartPL + " svg g.role-mark");
  for (const markGroup of marks) {
    for (const mark of markGroup.children) {
      let d = mark.__data__?.datum;
      let item = {};
      uniqueArray(Object.keys(d || {})).forEach(p => { if (p !== 'Symbol(vega_id)') item[p] = d[p] });
      item.mark = mark;
      pp.add(item);
    }
  }
  return pp;
}

function uniqueArray(a) {
  return Array.from(new Set(a));
}

class HLQT { // highlight query table
  constructor() {
    this.table = {};
    this.size = 0;
    this.index = [];
  }
  add(item) { // item: object
    Object.keys(item || {}).forEach((key) => {
      if (this.table[key] === undefined) {
        this.table[key] = [];
      }
      this.table[key][this.size] = item?.[key];
    });
    this.index[this.size] = this.size;
    this.size += 1;
  }
  query(keys, out) { // keys: object, out: output item name (string)
    let indices = this.index.map((d) => d);
    Object.keys(keys).forEach((col) => {
      if (this.table[col]) {
        let temp = this.table[col]?.map((d, i) => d == keys[col] ? i : undefined).filter(d => d !== undefined);
        indices = indices.filter((d) => temp.includes(d));
      }
    });
    return this.table[out]?.filter((d, i) => indices.includes(i));
  }
}