import { loadCSS } from './aem.js';

const SECTION_SELECTOR = '.section';
const EDITABLE_SELECTORS = 'h1, h2, p';

const overlay = document.createElement('div');
overlay.className = 'nx-overlay';

const editor = document.createElement('div');
editor.className = 'nx-editor';
overlay.append(editor);

document.body.append(overlay);

function handleEditable(editable) {
  const childEdits = editable.querySelectorAll(EDITABLE_SELECTORS);
  if (childEdits.length > 0) return;
  editable.dataset.edit = true;
  editable.addEventListener('click', (e) => {
    // If it's already editable, do nothing
    const isEditable = e.target.getAttribute('contenteditable');
    if (isEditable) return;

    // Turn off all other editables
    const prevEditables = document.body.querySelectorAll('[contenteditable]');
    prevEditables.forEach((prev) => { prev.removeAttribute('contenteditable'); });

    // Set the editable attr and set focus
    editable.setAttribute('contenteditable', true);
    setTimeout(() => { editable.focus(); }, 100);
  });
}

function handleSection(section) {
  section.addEventListener('mouseenter', (e) => {
    const rect = section.getBoundingClientRect();

    const { scrollTop, scrollLeft } = document.documentElement;
    const top = scrollTop + rect.top;
    const left = scrollLeft + rect.left;

    // Position relative to the document
    editor.style = `left: ${left}px; top: ${top}px; width: ${rect.width}px; height: ${rect.height}px`;
  });
  section.addEventListener('mouseleave', (e) => {
    editor.style = '';
  });
}

export default async function init() {
  await loadCSS('/styles/context.css');
  const sections = document.body.querySelectorAll(SECTION_SELECTOR);
  sections.forEach((section) => { handleSection(section); });

  const editables = document.body.querySelectorAll(EDITABLE_SELECTORS);
  editables.forEach((editable) => { handleEditable(editable); });
}