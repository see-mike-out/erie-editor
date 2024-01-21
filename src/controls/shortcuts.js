import { browser } from "$app/environment";

export function initiateKeyboardShortcuts() {
  if (browser) {
    window.addEventListener("keydown", (event) => {
    });
  }
}