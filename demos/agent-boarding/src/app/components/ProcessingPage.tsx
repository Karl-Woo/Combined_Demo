/**
 * ProcessingPage — full-screen white "purchase processing" state.
 *
 * Renders for ~2s after the user clicks "Checkout now":
 *   phase 1 (~1s): centered loading spinner
 *   phase 2 (~1s): green checkmark + "Purchase successful"
 * Then calls `onDone` to advance to the final confirmation page.
 */
import { useEffect, useState } from 'react';

const ICON_SIZE = 'size-[80px]';

function Spinner() {
  return (
    <div className={`${ICON_SIZE} flex items-center justify-center`}>
      <svg
        className="size-full animate-spin"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="#e5e5e5"
          strokeWidth="5"
        />
        <path
          d="M58 32a26 26 0 0 0-26-26"
          stroke="#228800"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div className={`${ICON_SIZE} rounded-full bg-[#228800] flex items-center justify-center`}>
      <svg
        className="size-[44px]"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ProcessingPage({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'success'>('loading');

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase('success'), 1000);
    const t2 = window.setTimeout(() => onDone(), 2000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      className="bg-white w-full flex flex-col items-center justify-center gap-[24px]"
      style={{ minHeight: 'calc(100vh / var(--design-scale, 1))' }}
      data-name="Processing page"
      data-phase={phase}
    >
      {phase === 'loading' ? <Spinner /> : <SuccessCheck />}
      <p className="font-['Graphik:Semibold',sans-serif] leading-[40px] text-[32px] text-black m-0">
        {phase === 'loading' ? 'Processing your purchase...' : 'Purchase successful'}
      </p>
    </div>
  );
}
