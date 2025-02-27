import { loadCSS } from '../../../../scripts/aem.js';
import makeDraggable from './drag.js';

await loadCSS(`${import.meta.url.replace('js', 'css')}`);

const MAIN_SELECTOR = 'aem-sidekick-exp';

export default async function runExp() {
  // If the palette exists, hide it.
  let palette = document.querySelector(`#${MAIN_SELECTOR}`);
  if (palette && palette.classList.contains('is-visible')) {
    palette.classList.remove('is-visible');
    return;
  }

  // Create a net new palette
  palette = document.createElement('div');
  palette.id = MAIN_SELECTOR;

  // Title
  const handle = document.createElement('div');
  handle.id = `${MAIN_SELECTOR}-handle`;

  // Iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://main--da-live--adobe.aem.live/plugins/exp?nx=exp';
  iframe.allow = 'clipboard-write *';

  // Append
  palette.append(handle, iframe);

  makeDraggable(palette);
  document.body.append(palette);
}
