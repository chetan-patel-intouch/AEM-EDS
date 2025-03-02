// Production
// import runExp from 'https://da.live/nx/public/plugins/exp/exp.js';

// Branch dev
import runExp from 'https://exp--nexter--da-sites.aem.live/nx/public/plugins/exp/exp.js';

// Local dev
// import runExp from 'http://localhost:6456/nx/public/plugins/exp/exp.js';

(async function sidekick() {
  const sk = document.querySelector('aem-sidekick');
  if (!sk) return;
  sk.addEventListener('custom:experimentation', runExp);
}());
