const fs = require('fs');

const css = fs.readFileSync('src/gohighlevel/homepage-sections/compiled-inline.css', 'utf8');

const js = `<!-- 3. Global JS for Animations -->
<script>
  (function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px' });

    function observeElements() {
      document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        el.classList.add('observed');
        const delay = el.getAttribute('data-delay');
        if (delay) {
          el.style.transitionDelay = \`\${delay}ms\`;
        }
        observer.observe(el);
      });
    }

    observeElements();
    
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldObserve = false;
      for (let m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldObserve = true;
          break;
        }
      }
      if (shouldObserve) {
        observeElements();
      }
    });

    mutationObserver.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true
    });
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeElements);
    }
  })();
</script>`;

const finalHtml = `<!-- ASAP AI - GLOBAL SETUP FOR GOHIGHLEVEL -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${css}
</style>
${js}`;

fs.writeFileSync('src/gohighlevel/homepage-sections/global-setup.html', finalHtml);
console.log('Successfully updated global-setup.html');
