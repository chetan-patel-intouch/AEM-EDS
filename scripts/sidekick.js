import runExp from '../tools/sidekick/plugins/experimentation/experimentation.js';

runExp();

const openExp = async () => { runExp(); };

(async function sidekick() {
  const sk = document.querySelector('aem-sidekick');
  if (!sk) return;
  sk.addEventListener('custom:experimentation', openExp);
}());
