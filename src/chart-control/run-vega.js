import { browser } from '$app/environment';
// import { default as VegaLiteImport } from "./vega-lite.js";
import { default as vegaEmbed } from "vega-embed"

export async function renderVLChart(pl, spec, opt) {
  if (browser) {
    opt["renderer"] = "svg";
    return await vegaEmbed(pl, spec, opt);
  }
}
