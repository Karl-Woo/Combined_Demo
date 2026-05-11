import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import HomePageRestaurantsDesktop from '../imports/HomePageRestaurantsDesktop';
import BuyThisSetupPage from './components/BuyThisSetupPage';
import ProcessingPage from './components/ProcessingPage';
import PurchaseCompletePage from './components/PurchaseCompletePage';
import { ChatbotWidget } from './components/ChatbotWidget';

// Design width from Figma. The component is authored at this width with
// fixed pixel dimensions everywhere, so for sub-1440 viewports we scale
// the whole thing down proportionally (down to 768px minimum).
const DESIGN_WIDTH = 1440;
const MIN_SUPPORTED_WIDTH = 768;

type Page = 'home' | 'checkout' | 'processing' | 'complete';

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | null>(null);
  const [page, setPage] = useState<Page>('home');

  // Compute scale factor from viewport width
  useLayoutEffect(() => {
    function updateScale() {
      const vw = document.documentElement.clientWidth;
      if (vw >= DESIGN_WIDTH) {
        setScale(1);
      } else {
        // Clamp: never scale below MIN_SUPPORTED_WIDTH / DESIGN_WIDTH
        const effectiveVw = Math.max(vw, MIN_SUPPORTED_WIDTH);
        setScale(effectiveVw / DESIGN_WIDTH);
      }
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // When scaled, transform doesn't affect layout flow, so we need to
  // reserve vertical space equal to the scaled content height.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (scale === 1) {
      setScaledHeight(null);
      return;
    }
    const observer = new ResizeObserver(() => {
      setScaledHeight(el.offsetHeight * scale);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [scale, page]);

  const isScaled = scale !== 1;

  // Expose the design scale as a CSS variable so scaled children (e.g. the
  // hero) can compensate for the transform — a child that wants to appear
  // at 100vh after the scale should use `calc(100vh / var(--design-scale))`.
  const cssVars = { '--design-scale': String(scale) } as React.CSSProperties;

  // Scroll to top when the page changes so the checkout page lands at the
  // top rather than inheriting the scroll position from the hero page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);

  return (
    <div
      className="w-full min-h-screen bg-[#ededed] overflow-x-hidden"
      style={{
        ...cssVars,
        ...(scaledHeight !== null ? { height: scaledHeight } : {}),
      }}
    >
      <div
        ref={contentRef}
        style={
          isScaled
            ? {
                width: DESIGN_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }
            : undefined
        }
      >
        {page === 'home' ? (
          <HomePageRestaurantsDesktop />
        ) : page === 'checkout' ? (
          <BuyThisSetupPage onCheckout={() => setPage('processing')} />
        ) : page === 'processing' ? (
          <ProcessingPage onDone={() => setPage('complete')} />
        ) : (
          <PurchaseCompletePage />
        )}
      </div>
      {/*
        The chatbot widget is rendered outside the transformed wrapper so
        `position: fixed` anchors to the viewport rather than the scaled
        ancestor.

        The widget is NOT remounted on page change — we want the chat
        session (messages, uploaded photos, selections) to persist across
        navigation. On the checkout page `collapseOnly` is flipped on,
        which triggers the pill → 80 × 80 shrink animation inside
        ChatButton, matching Figma node 40000383:6971.
      */}
      <ChatbotWidget
        collapseOnly={page !== 'home'}
        onBuySetup={() => setPage('checkout')}
      />
    </div>
  );
}
