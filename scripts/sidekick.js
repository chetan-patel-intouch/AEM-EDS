// Production
// import runExp from 'http://da.live/nx/public/plugins/exp/exp.js';

// Branch dev
import runExp from 'http://exp--nexter--da-sites.aem.live/nx/public/plugins/exp/exp.js';

// Local dev
// import runExp from 'http://localhost:6456/nx/public/plugins/exp/exp.js';

runExp();

(async function sidekick() {
  const sk = document.querySelector('aem-sidekick');
  if (!sk) return;
  sk.addEventListener('custom:experimentation', runExp);
}());
