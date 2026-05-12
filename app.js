/* ─────────────────────────────────────────────────────────────
   Combined Clover Demo — wrapper navigation.
   Linear sequence: intro-1 → demo-1 → intro-2 → demo-2 →
                    intro-3 → demo-3 → end.
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  const SEQUENCE = [
    'intro-1',
    'demo-1',
    'intro-2',
    'demo-2',
    'intro-3',
    'demo-3',
    'end',
  ];

  const screens = new Map();
  document.querySelectorAll('.screen').forEach((el) => {
    screens.set(el.dataset.screen, el);
  });

  const nextBtn = document.getElementById('nextOverlay');

  // Keep in sync with the .intro.exiting animation timing in styles.css.
  const INTRO_EXIT_MS = 420;

  let currentIndex = 0;
  let loaded = new Set(); // iframe src we've already injected
  let advanceInFlight = false;

  // Helper: poke the iframe so its deferred entrance animation runs.
  // Each demo's IIFE listens for { kind: 'show' } and ignores
  // duplicates internally, so it's safe to call this every time the
  // screen becomes active or the iframe finishes loading.
  function postShow(iframe) {
    if (!iframe || !iframe.contentWindow) return;
    try { iframe.contentWindow.postMessage({ kind: 'show' }, '*'); } catch {}
  }

  function loadDemoIframe(name) {
    if (loaded.has(name)) return null;
    const screen = screens.get(name);
    if (!screen) return null;
    const iframe = screen.querySelector('iframe');
    if (!iframe || !iframe.dataset.src) return null;
    iframe.src = iframe.dataset.src;
    loaded.add(name);
    attachIframeMouseTracker(iframe);
    // Once it lands, replay the show signal in case the screen is
    // already active (or has been activated while it was still
    // loading) — the iframe's listener wasn't registered yet on
    // first activation, so the original postMessage is lost
    // otherwise.
    iframe.addEventListener('load', () => {
      const currentName = SEQUENCE[currentIndex];
      if (currentName === name) postShow(iframe);
    }, { once: true });
    return iframe;
  }

  function setActive(index) {
    currentIndex = Math.max(0, Math.min(SEQUENCE.length - 1, index));
    const name = SEQUENCE[currentIndex];
    const isDemo = name.startsWith('demo-');

    // Clear any in-progress exit animation state from prior advances.
    screens.forEach((el) => el.classList.remove('exiting'));

    // Toggle screens.
    screens.forEach((el, key) => {
      el.classList.toggle('active', key === name);
    });

    // Body mode controls overlay visibility.
    document.body.classList.toggle('is-demo', isDemo);

    // Lazy-load demo iframes the first time they're shown so the
    // initial page load is just the wrapper, not three demos at
    // once. Subsequent visits keep state in the already-mounted
    // iframe — important for the Onboard demo, which holds chat
    // history mid-flow. The first demo is preloaded earlier (see
    // preloadFirstDemo below) so the map is already mounted by
    // the time the user advances into it.
    if (isDemo) {
      const screen = screens.get(name);
      const iframe = loaded.has(name)
        ? screen.querySelector('iframe')
        : loadDemoIframe(name);
      // Signal the iframe that it's now visible. Demos defer their
      // entrance animation until this arrives so the reveal doesn't
      // get burned on a preloaded but hidden frame.
      postShow(iframe);
    }

    // Leaving a demo: clear any reveal state so the next intro
    // doesn't briefly flash the Next pill.
    if (!isDemo) document.body.classList.remove('show-next');

    // Update next-overlay label on the final demo so users know
    // they're wrapping up.
    if (name === 'demo-3') {
      nextBtn.querySelector('.next-label').textContent = 'Finish';
    } else if (isDemo) {
      nextBtn.querySelector('.next-label').textContent = 'Next';
    }
  }

  function advance() {
    if (advanceInFlight) return;
    const current = SEQUENCE[currentIndex];
    // When leaving an intro slide, play the exit animation first so
    // the slide slides out before the demo slides in.
    if (current.startsWith('intro-')) {
      const slide = screens.get(current);
      advanceInFlight = true;
      slide.classList.add('exiting');
      setTimeout(() => {
        advanceInFlight = false;
        setActive(currentIndex + 1);
      }, INTRO_EXIT_MS);
    } else {
      setActive(currentIndex + 1);
    }
  }

  // Intro slides are themselves the click target — click anywhere
  // on an intro (or press Enter/Space when it has focus) to advance
  // into the demo that follows.
  document.querySelectorAll('.intro[data-action="start"]').forEach((slide) => {
    slide.addEventListener('click', advance);
    slide.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advance();
      }
    });
  });

  // Wire the floating next overlay.
  nextBtn.addEventListener('click', advance);

  /* ──────────────────────────────────────────────────────────
     Center-bottom hover detection.
     The button only reveals when the cursor enters a CENTER bottom
     patch of the viewport — a horizontal band 90 px tall AND a
     horizontal slice 360 px wide centered on the viewport (clamped
     to the viewport on small screens). This keeps the trigger
     away from bottom-left and bottom-right demo controls (e.g. the
     chat input + send button in demo 3).

     The host never overlays a transparent hit-target on the demo.
     Mouse position is read from inside each iframe (same-origin)
     via capture-phase mousemove listeners so demo clicks are
     never absorbed.
     ────────────────────────────────────────────────────────── */
  const HOVER_BAND_PX = 90;       // bottom strip height
  const HOVER_CENTER_PX = 360;    // total width of the center patch

  function setShowNext(on) {
    if (!document.body.classList.contains('is-demo')) return;
    document.body.classList.toggle('show-next', !!on);
  }

  function handleMouseMove(viewportWidth, viewportHeight, clientX, clientY) {
    const inBottom = clientY >= viewportHeight - HOVER_BAND_PX;
    const cx = viewportWidth / 2;
    const half = Math.min(HOVER_CENTER_PX, viewportWidth) / 2;
    const inCenter = clientX >= cx - half && clientX <= cx + half;
    setShowNext(inBottom && inCenter);
  }

  // Host-document listener — fires when the cursor is over intro
  // screens or the visible Next button itself.
  window.addEventListener('mousemove', (e) => {
    handleMouseMove(window.innerWidth, window.innerHeight, e.clientX, e.clientY);
  });
  window.addEventListener('mouseleave', () => setShowNext(false));

  function attachIframeMouseTracker(iframe) {
    // Always wait for `load` — at the moment we set src, the iframe
    // briefly still has the previous (about:blank) contentDocument,
    // and wiring to that document would lose the listener when the
    // real document arrives.
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        const doc = iframe.contentDocument;
        if (!win || !doc) return;
        // Use capture so demo handlers can't stopPropagation us out.
        doc.addEventListener(
          'mousemove',
          (e) => handleMouseMove(win.innerWidth, win.innerHeight, e.clientX, e.clientY),
          true,
        );
        doc.addEventListener('mouseleave', () => setShowNext(false), true);
      } catch (err) {
        // Cross-origin iframe — fall back silently. The button
        // can still be revealed by tabbing to it.
      }
    });
  }

  // Keyboard convenience: arrow-right / space advances when on a
  // demo screen. Arrow-left steps back. Avoid hijacking keys when
  // the iframe has focus — the browser scopes keydown to the
  // wrapper anyway since iframes are different documents.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') advance();
    else if (e.key === 'ArrowLeft') setActive(currentIndex - 1);
  });

  // Initial render.
  setActive(0);

  // Preload all three demo iframes in the background so the maps,
  // videos, fonts, and any other heavy assets are warm by the
  // time the user advances into each one. Chained sequentially
  // (each demo waits for the previous one's iframe `load` event)
  // rather than fired in parallel so we don't saturate the
  // network — the combined payload across the three demos is
  // ~80MB (mostly the agent-boarding hero video and assets), and
  // parallel fetches would slow down demo-1's MapLibre tile
  // preload which is the one the user sees first.
  //
  // Each iframe stays visibility:hidden (per .screen rules) until
  // the user actually advances to it, so this happens entirely
  // off-screen. The chain self-corrects if the user advances
  // faster than the preload progresses — when setActive() runs
  // loadDemoIframe() for a demo that hasn't been preloaded yet,
  // it just loads then; the chain's step for that demo no-ops
  // because the demo is already in `loaded`.
  function preloadDemosChain() {
    const order = ['demo-1', 'demo-2', 'demo-3'];
    function step(i) {
      if (i >= order.length) return;
      const name = order[i];
      if (loaded.has(name)) { step(i + 1); return; }
      const iframe = loadDemoIframe(name);
      if (!iframe) { step(i + 1); return; }
      iframe.addEventListener('load', () => step(i + 1), { once: true });
    }
    step(0);
  }
  // Defer slightly so the intro paint isn't competing with the
  // iframe's network burst. requestIdleCallback when available so
  // we yield to anything more urgent first.
  if ('requestIdleCallback' in window) {
    requestIdleCallback(preloadDemosChain, { timeout: 1200 });
  } else {
    setTimeout(preloadDemosChain, 300);
  }
})();
