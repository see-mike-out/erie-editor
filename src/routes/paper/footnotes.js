import { get, writable } from "svelte/store";

export let footnoteCount = writable(0);
export let footnotes = writable([]);
export function registerFootnote(content) {
  footnoteCount.update((i) => i + 1);
  let index = get(footnoteCount);
  footnotes.update((notes) => {
    notes.push({
      index,
      content
    });
    return notes;
  });
  return index;
}