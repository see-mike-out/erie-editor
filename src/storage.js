import { writable } from "svelte/store";
import { browser } from "$app/environment";
export let currentData = writable();

export const ExampleCase = writable(null);
export const CurrentData = writable();
export const showVis = writable();

export function setExample(data) {
  ExampleCase.set(deepcopy(data));
  CurrentData.update((d) => {
    d = deepcopy(data);
    d.sonification = getStringed(d.sonification);
    d.visualization = getStringed(d.visualization);
    return d;
  })
}

export function loadSpecs() {
  let spec = loadFromLocal("erie-spec");
  if (spec) {
    CurrentData.set(spec);
  } else {
    CurrentData.set({
      name: "Blank",
      id: "user-blank",
      visualization: {},
      sonification: {}
    });
  }
  CurrentData.subscribe((d) => {
    saveInLocal("erie-spec", d || {});
  })
}

export function deepcopy(o) {
  return JSON.parse(JSON.stringify(o));
}

export function getStringed(o) {
  if (o?.constructor.name !== "String") {
    return JSON.stringify(o || {}, null, 2);
  } else {
    return o;
  }
}

export function tryParse(o) {
  try {
    return JSON.parse(o);
  } catch {
    console.warn(o)
    console.warn("Wrong JSON format");
    return null;
  }
}

export function setShowVis() {
  showVis.set(loadFromLocal("erie-show-vis")?.show || false);

  showVis.subscribe((show) => {
    saveInLocal("erie-show-vis", {
      show
    });
  });
}

export async function loadData() {
  let file_info = loadFromLocal("erie-data");
  if (file_info?.filename && file_info?.ext) {
    updateData(file_info);
  }
}
function saveInLocal(k, v) {
  if (browser) {
    localStorage.setItem(k, JSON.stringify(v));
  }
}
function loadFromLocal(k) {
  if (browser) {
    return JSON.parse(localStorage.getItem(k));
  }
}