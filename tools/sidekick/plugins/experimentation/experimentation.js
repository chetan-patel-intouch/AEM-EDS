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
  const title = document.createElement('p');
  title.innerText = 'Experimentation';
  title.id = `${MAIN_SELECTOR}-title`;

  // Iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://da.live/app/aemsites/da-block-collection/tools/sidekick/plugins/experimentation/mfe/mfe?ref=local';
  iframe.allow = 'clipboard-write *';

  // Append
  palette.append(title, iframe);

  makeDraggable(palette);
  document.body.append(palette);
}
