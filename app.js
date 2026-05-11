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

  let currentIndex = 0;
  let loaded = new Set(); // iframe src we've already injected

  function setActive(index) {
    currentIndex = Math.max(0, Math.min(SEQUENCE.length - 1, index));
    const name = SEQUENCE[currentIndex];
    const isDemo = name.startsWith('demo-');

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
    // history mid-flow.
    if (isDemo) {
      const iframe = screens.get(name).querySelector('iframe');
      if (iframe && !loaded.has(name)) {
        iframe.src = iframe.dataset.src;
        loaded.add(name);
        attachIframeMouseTracker(iframe);
      }
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
    setActive(currentIndex + 1);
  }

  function restart() {
    // Reset iframes so the demos start from a clean state.
    screens.forEach((el, key) => {
      if (key.startsWith('demo-')) {
        const iframe = el.querySelector('iframe');
        if (iframe) {
          iframe.removeAttribute('src');
        }
      }
    });
    loaded = new Set();
    setActive(0);
  }

  // Wire intro-card buttons (Start / Restart).
  document.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action === 'start') advance();
      if (action === 'restart') restart();
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
})();
