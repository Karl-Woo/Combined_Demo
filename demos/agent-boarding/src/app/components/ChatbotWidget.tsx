import { useState, useEffect, useRef } from 'react';
import svgPathsButton from '../../imports/svg-zbgk4xnzfr';
import svgPathsChat from '../../imports/svg-spuaibl1v2';
import svgPathsLocations from '../../imports/svg-nb69hp7zuw';
import svgPathsCard from '../../imports/svg-r9jwwc33f5';
import imgMapFidi from "@/assets/map-fidi.png";
import imgMapBrooklyn from "@/assets/map-brooklyn.png";
import imgDragAndDrop from "@/assets/drag-and-drop.png";
import imgEllipse53 from "@/assets/Ellipse 53.png";
import imgStationSolo from "@/assets/31218de414fc76777e1a234f4b7e4df8ff06ee32.png";
import imgFlex from "@/assets/930308e4e9c7cf19b0bb9638ade4dfb4f16111e1.png";
import imgMini from "@/assets/9e879022823ed79de83b0ae3e7918c31886019fe.png";
import imgKds from "@/assets/73cdc52eea9ba2fe886ed6994ec367f3152d4a25.png";
import iconDevices from "@/assets/devices.svg";
import iconUpload from "@/assets/upload.svg";
import iconSettings from "@/assets/settings.svg";
import iconAi from "@/assets/ai.svg";

function Frame8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="frame">
          <g id="vector">
            <path d={svgPathsChat.p143bf0} fill="var(--fill-0, white)" />
            <path d={svgPathsChat.p4527500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Organic easing curves. Designed to feel physical rather than robotic:
// - `INTRO_CURVE` is a strong ease-in-out (easeInOutQuint). Motion starts
//   near-stationary, accelerates through the middle, then decelerates back
//   to rest. This is how a hand moves an object — not linear, not bouncy.
// - `HOVER_CURVE` is a gentle decel (easeOutCubic) for responsive feedback
//   that should feel immediate but not abrupt.
// - `SILKY_SMOOTH` is a gentle decel for secondary properties (shadow,
//   opacity) that shouldn't compete with the lead motion.
const INTRO_CURVE = 'cubic-bezier(0.83, 0, 0.17, 1)';
const HOVER_CURVE = 'cubic-bezier(0.33, 1, 0.68, 1)';
const SILKY_SMOOTH = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

// Entry curve for chat bubbles. A decel curve (easeOutQuart) so the bubble
// "lands" into place — fast out of the gate, then slows to a rest. This is
// the same kind of motion you get when someone sets down an object.
const MESSAGE_ENTRY_CURVE = 'cubic-bezier(0.25, 1, 0.5, 1)';

// How long between each word appearing for the streaming effect.
// ~50 ms per word mimics modern AI token streaming.
const TYPEWRITER_CHAR_DELAY_MS = 50;

/**
 * Animated text that streams in word-by-word, mimicking modern AI response
 * rendering. Each word fades in smoothly without a cursor.
 *
 * - `text`       — the full message
 * - `startDelay` — milliseconds to wait before the first word appears.
 *                  Useful when chaining with an outer bubble animation.
 */
function TypewriterText({
  text,
  startDelay = 0,
}: {
  text: string;
  startDelay?: number;
}) {
  const words = text.split(' ');
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= words.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, TYPEWRITER_CHAR_DELAY_MS);
    return () => clearTimeout(timer);
  }, [started, visibleCount, words.length]);

  return (
    <span>
      {words.slice(0, visibleCount).map((word, i) => (
        <span
          key={i}
          style={{
            opacity: 1,
            animation: `chatbot-word-stream 0.3s ease-out both`,
          }}
        >
          {word}{i < visibleCount - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}

/**
 * Reusable entry animation wrapper for chat messages. Any new message type
 * (AI text, user text, rich content, cards, etc.) should be wrapped in this
 * so the animation language stays consistent across the conversation.
 *
 * - `variant="ai"`    — message fades in, rises from below, and comes into
 *                       focus from a slight blur. Mimics a chatbot thinking
 *                       the answer into existence.
 * - `variant="user"`  — message slides in from the right and pops into
 *                       place. Mimics an object being placed by the user.
 */
function MessageEnter({
  variant,
  children,
}: {
  variant: 'ai' | 'user';
  children: React.ReactNode;
}) {
  const animation =
    variant === 'ai'
      ? `chatbot-msg-enter-ai 0.5s ${MESSAGE_ENTRY_CURVE} both`
      : `chatbot-msg-enter-user 0.85s ${MESSAGE_ENTRY_CURVE} both`;
  return (
    <div
      className="w-full"
      style={{
        animation,
        transformOrigin: variant === 'user' ? 'bottom right' : 'bottom left',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

/**
 * ChatButton — matches Figma node 40000373:6239 (expanded) and
 * 40000373:6260 (collapsed / initial).
 *
 * Initial state: 88 × 80 rounded-16 pill showing only the AI sparkle icon.
 * The icon uses a local SVG with two stroke colors baked in:
 *   - large star: white
 *   - small star: #B6FB6F (bright Clover green)
 *
 * After 1200 ms: expands to 572 px (matching the chat panel width) and
 * reveals two lines of text + a trailing arrow-right icon.
 *
 * Hover: same moving-gradient flow as the rest of the chatbot motion
 * vocabulary, plus a subtle lift and deepened shadow.
 */
function ChatButton({
  onClick,
  collapseOnly = false,
}: {
  onClick: () => void;
  // When true, the button never auto-expands to the pill — it stays in
  // its 80 × 80 collapsed state. Used on the checkout page where the
  // widget should match Figma node 40000383:6971 (small button only).
  collapseOnly?: boolean;
}) {
  // The pill (expanded) state has been removed — the button always stays
  // 80×80. Intro flow lives in ChatbotWidget: hold the button for 1 s,
  // then auto-open the chat panel.
  const hasEntered = false;
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Chat panel is 572 px wide. Collapsed state is a perfect 80 × 80 square
  // (12 px padding each side around the 56 px icon).
  const EXPANDED_WIDTH = 572;
  const COLLAPSED_SIZE = 80;

  // EaseOutExpo — starts with energy, decelerates into a long settling tail.
  // This reads as "organic" compared to the symmetric easeInOut (which feels
  // evenly programmed). No overshoot, but the fast start gives momentum.
  const EXPAND_CURVE = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="cursor-pointer flex items-center rounded-[16px] relative overflow-hidden select-none"
      data-name="Button"
      style={{
        backgroundImage:
          'linear-gradient(110deg, #0f324a 0%, #185663 22%, #1f7566 50%, #185663 78%, #0f324a 100%)',
        backgroundSize: '300% 100%',
        width: hasEntered ? EXPANDED_WIDTH : COLLAPSED_SIZE,
        height: COLLAPSED_SIZE,
        // Collapsed: 12 px centers the 56 px icon inside 80 px.
        // Expanded: 16 px gives the text more breathing room.
        paddingLeft: hasEntered ? 16 : 12,
        paddingRight: hasEntered ? 16 : 12,
        paddingTop: 12,
        paddingBottom: 12,
        boxShadow: isHovered
          ? '0 10px 24px -10px rgba(15, 50, 74, 0.45), 0 3px 8px -3px rgba(15, 50, 74, 0.28)'
          : '0 8px 20px -8px rgba(15, 50, 74, 0.4), 0 2px 6px -2px rgba(15, 50, 74, 0.25)',
        transform: isPressed
          ? 'translateY(0) scale(0.99)'
          : isHovered
          ? 'translateY(-1.5px) scale(1.012)'
          : 'translateY(0) scale(1)',
        transition: [
          // easeOutExpo for the expand — burst of energy at the start,
          // then a long, smooth deceleration. Feels like something being
          // released rather than moved by a machine.
          `width 1.1s ${EXPAND_CURVE}`,
          `padding-left 1.1s ${EXPAND_CURVE}`,
          `padding-right 1.1s ${EXPAND_CURVE}`,
          `transform 0.45s ${HOVER_CURVE}`,
          `box-shadow 0.5s ${SILKY_SMOOTH}`,
        ].join(', '),
        animation: 'chatbot-gradient-flow 3.2s ease-in-out infinite',
        animationPlayState: isHovered ? 'running' : 'paused',
      }}
    >
      {/* AI sparkle icon — always visible. The SVG has two baked-in
          stroke colors: large star white, small star #B6FB6F. */}
      <img
        src={iconAi}
        alt=""
        aria-hidden="true"
        className="shrink-0 size-[56px]"
        draggable={false}
      />

      {/* Two-line label — expands in after the pill opens. Uses
          max-width + overflow-hidden for the reveal, just like the
          text in the old single-line ChatButton. */}
      <div
        className="flex flex-col gap-[2px] overflow-hidden"
        style={{
          maxWidth: hasEntered ? '500px' : '0px',
          marginLeft: hasEntered ? '8px' : '0px',
          opacity: hasEntered ? 1 : 0,
          transform: hasEntered ? 'translateX(0)' : 'translateX(-6px)',
          transition: [
            // Text reveal starts 100 ms into the width expansion so
            // the pill "opens" first, then the text slides in.
            `max-width 0.9s ${EXPAND_CURVE} 0.1s`,
            `margin-left 0.9s ${EXPAND_CURVE} 0.1s`,
            `opacity 0.6s ${SILKY_SMOOTH} 0.3s`,
            `transform 0.7s ${EXPAND_CURVE} 0.2s`,
          ].join(', '),
        }}
      >
        <p className="font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-white whitespace-nowrap m-0">
          Get custom hardware and software recommendations
        </p>
        <p className="font-['Graphik:Regular',sans-serif] text-[14px] leading-[20px] text-[#a3d1f7] whitespace-nowrap m-0">
          No guesswork. No overspending. Just the right tools.
        </p>
      </div>

      {/* Arrow-right trailing icon — fades in last. Also uses
          max-width so it takes zero layout space when collapsed,
          preventing it from pushing the sparkle icon off-screen. */}
      <div
        className="overflow-hidden"
        style={{
          maxWidth: hasEntered ? '24px' : '0px',
          marginLeft: hasEntered ? 'auto' : '0px',
          opacity: hasEntered ? 1 : 0,
          transition: [
            `max-width 0.7s ${EXPAND_CURVE} 0.25s`,
            `margin-left 0.7s ${EXPAND_CURVE} 0.25s`,
            `opacity 0.5s ${SILKY_SMOOTH} 0.55s`,
          ].join(', '),
        }}
      >
        <svg
          className="size-[24px] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function TopAppBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#10364f] relative shrink-0 w-full" data-name="TopAppBar">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="min-h-[48px] relative shrink-0 w-full" data-name="Contents" style={{ backgroundImage: "linear-gradient(-5.39702deg, rgb(16, 54, 79) 23.592%, rgb(22, 73, 75) 98.517%)" }}>
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] pl-[16px] pr-[56px] py-[16px] relative w-full">
              <button
                onClick={onClose}
                className="content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0 cursor-pointer bg-transparent border-none p-0 hover:opacity-70 transition-opacity"
                data-name="Switch"
                aria-label="Close chat"
              >
                <div className="relative shrink-0 size-[24px]" data-name="x">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="frame">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="frame">
                        <path d="M5 15L15 5M15 15L5 5" id="vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
              <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Text">
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="Trailing Icon">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="frame">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="frame">
                          <g id="vector">
                            <path d={svgPathsChat.p143bf0} fill="var(--fill-0, white)" />
                            <path d={svgPathsChat.p4527500} fill="var(--fill-0, white)" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Graphik:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[18px] text-center text-ellipsis text-white whitespace-nowrap">
                    <p className="leading-[28px] overflow-hidden text-ellipsis">Clover Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

interface Message {
  text?: string;
  isUser: boolean;
  isThinking?: boolean;
  locations?: LocationOption[];
  // When true, this AI message renders a sales-estimator card inline.
  salesEstimator?: boolean;
  // When true, this renders a standalone "Continue" CTA bubble in its own
  // p-[16px] wrapper so the spacing above matches every other message.
  continueCTA?: boolean;
  // When true, this renders the file-upload dropzone card (Figma 1:8282).
  fileUploadCard?: boolean;
  // When true, this renders the "Analyzing your setup..." indicator that
  // sits between the photo upload and the hardware recommendation —
  // selling the idea that the AI is doing real work on the image.
  analyzingSetup?: boolean;
  // When true, this renders the "Skip this step" suggestion bubble.
  skipChip?: boolean;
  // When true, this renders the Clover Capital recommendation card
  // (Figma 40000363:5552).
  recommendation?: boolean;
  // When true, renders the "Other recommended plans" horizontal carousel
  // shown after the main recommendation card (Figma 40000766:12701).
  otherPlansCarousel?: boolean;
  // When true, renders the pair of post-recommendation chips — "Looks
  // good. Buy this setup." (hoverable only) and "Connect me to sales."
  // (clickable) — in a single flex container with the same `gap-[8px]`
  // spacing as the earlier SuggestionChips pair (Figma 1:8862).
  postRecChipPair?: boolean;
  // When true, this renders the "Call Jason" sales connect card
  // (Figma 1:9928).
  salesConnectCard?: boolean;
}

interface LocationOption {
  name: string;
  borough: string;
  address: string;
  rating: number;
  reviews: number;
  mapUrl: string;
}

/**
 * Hard-coded welcome greeting matching Figma node 1:7194.
 *
 * Two paragraphs separated by a blank line:
 *   "👋 Hi there! I'm your Clover Assistant."
 *   ""
 *   "Let's find the best POS solution for you. What's your business
 *    name, city, and state?"
 *
 * All text is Graphik Regular (no bold segments). Each paragraph runs
 * through TypewriterText independently, with the second paragraph
 * starting after the first finishes typing.
 */
function WelcomeMessage() {
  const line1 = "\u{1F44B} Hi there! I\u2019m your Clover Assistant.";
  const line2 =
    "Let\u2019s find the best POS solution for you. What\u2019s your business name, city, and state?";
  const line1WordCount = line1.split(' ').length;

  return (
    <div className="relative shrink-0 w-full" data-name="AI assistant">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end p-[16px] relative w-full">
          <div className="font-['Graphik:Regular'] min-w-full not-italic relative shrink-0 text-black w-[min-content] text-[16px] leading-[24px]">
            <p className="m-0">
              <TypewriterText text={line1} startDelay={300} />
            </p>
            <p className="m-0 mt-[24px]">
              <TypewriterText
                text={line2}
                startDelay={300 + line1WordCount * TYPEWRITER_CHAR_DELAY_MS + 200}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AiMessage({ text }: { text: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="AI assistant">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end p-[16px] relative w-full">
          <div className="font-['Graphik:Regular'] min-w-full not-italic relative shrink-0 text-black w-[min-content]">
            <p className="leading-[24px] text-[16px]">
              {/* Word-by-word reveal — starts slightly after the bubble's
                  entrance (300 ms) so the two animations layer instead of
                  competing. */}
              <TypewriterText text={text} startDelay={300} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end p-[16px] relative w-full">
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
            <div className="bg-[#c7c7c7] content-stretch flex flex-col items-end px-[16px] py-[12px] relative rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] shrink-0" style={{maxWidth: '70%'}}>
              <p className="font-['Graphik:Regular'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Suggestion chips
// ----------------------------------------------------------------------------
// Pre-baked user messages the visitor can tap to send. They share the user
// bubble shape (rounded top-left/top-right/bottom-left, flat bottom-right) so
// clicking one reads as "that pill became my next sent message".
//
// Visual states come from the Figma ChatUserMessage interaction states:
//   - Default  : white bg, 1 px green border, green text
//   - Hover    : light green bg, 2 px darker green border, darker green text
//   - Focused  : white bg, 2 px green border, green text (keyboard ring)
//   - Disabled : white bg, 1 px grey border, grey text (used once clicked,
//                while the chip transitions out)
//   - Sent     : collapsed — the chip is removed and a real user bubble is
//                appended to the message stream via the normal flow.

interface SuggestionChipSpec {
  id: string;
  text: string;
  interactive: boolean;
}

// Matches Figma node 1:7236. Only `both` is clickable in this prototype — the
// other option is shown in its default enabled-looking state but no-ops, and
// is removed from view when `both` is selected.
const SUGGESTION_CHIPS: SuggestionChipSpec[] = [
  { id: 'both', text: 'Both are mine', interactive: true },
  { id: 'none', text: 'None of these', interactive: false },
];

function SuggestionChipButton({
  text,
  interactive,
  onClick,
}: {
  text: string;
  interactive: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Interaction-state → token mapping from Figma node 40000352:4964.
  // Hover/focus visuals apply regardless of interactivity so the chip still
  // reads as a real-looking option on the screen — it just ignores clicks
  // when `interactive: false`.
  let bg = '#ffffff';
  let borderColor = '#228800';
  let borderWidth = 1;
  let textColor = '#228800';
  if (isHovered) {
    bg = '#e1f9d8';
    borderColor = '#25790b';
    borderWidth = 2;
    textColor = '#25790b';
  } else if (isFocused) {
    borderWidth = 2;
  }

  return (
    <button
      type="button"
      onClick={() => interactive && onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="font-['Graphik:Regular',sans-serif] text-[16px] leading-[24px] text-right"
      style={{
        background: bg,
        color: textColor,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: '24px 24px 0 24px', // tl tr br bl → flat bottom-right
        // Compensate for the 1 → 2 px border change so text position doesn't
        // shift when hover/focus kicks in.
        padding: `${12 - (borderWidth - 1)}px ${16 - (borderWidth - 1)}px`,
        cursor: interactive ? 'pointer' : 'default',
        // Crisp but smooth visual transitions between states. No transform
        // on hover per the updated brief — visual feedback is limited to
        // color / bg / border changes.
        transition: [
          `background-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
          `border-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
          `color 0.25s ${MESSAGE_ENTRY_CURVE}`,
          `padding 0.25s ${MESSAGE_ENTRY_CURVE}`,
        ].join(', '),
      }}
    >
      {text}
    </button>
  );
}

function SuggestionChips({
  isDismissed,
  onSelect,
}: {
  isDismissed: boolean;
  onSelect: (text: string) => void;
}) {
  const handleClick = (chip: SuggestionChipSpec) => {
    if (!chip.interactive) return;
    onSelect(chip.text);
  };

  if (isDismissed) return null;

  return (
    <div
      className="w-full px-[16px] pb-[16px] pt-[8px] flex flex-col items-end gap-[8px] shrink-0"
      data-name="Suggestion chips"
    >
      {SUGGESTION_CHIPS.map((chip, i) => (
        <div
          key={chip.id}
          className="flex w-full justify-end"
          style={{
            // Same intro curve as AI messages, staggered 90 ms per chip.
            animation: `chatbot-msg-enter-ai 0.55s ${MESSAGE_ENTRY_CURVE} ${
              i * 90
            }ms both`,
            transformOrigin: 'bottom right',
          }}
        >
          <SuggestionChipButton
            text={chip.text}
            interactive={chip.interactive}
            onClick={() => handleClick(chip)}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Analyzing-your-setup indicator. Shown between the photo upload and the
 * hardware recommendation to sell the idea that the AI is doing real
 * processing on the image. Visually more prominent than the generic
 * "Thinking" dots — uses the AI sparkle icon with a glow + a progress-bar
 * shimmer, plus the label "Analyzing your setup...".
 */
function AnalyzingSetupIndicator() {
  return (
    <div className="relative shrink-0 w-full" data-name="AI analyzing setup">
      <div className="flex flex-col gap-[12px] px-[16px] py-[16px]">
        {/* Icon + label row */}
        <div className="flex items-center gap-[10px]">
          <div
            className="relative shrink-0 size-[36px] rounded-full flex items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, #1f7566 0%, #10364f 100%)',
              animation: 'chatbot-thinking-glow 2s ease-in-out infinite',
            }}
          >
            <img
              src={iconAi}
              alt=""
              aria-hidden="true"
              className="size-[22px]"
              draggable={false}
            />
          </div>
          <p
            className="font-['Graphik:Medium',sans-serif] text-[14px] leading-[20px] text-[#5a5a5a] m-0"
            style={{
              animation: 'chatbot-thinking-text 2s ease-in-out infinite',
            }}
          >
            Analyzing your setup...
          </p>
        </div>

        {/* Progress shimmer — a thin bar with a travelling highlight that
            reads as "processing in progress". Uses the same gradient-flow
            keyframe as the chatbot button, repurposed horizontally. */}
        <div className="relative w-full h-[3px] rounded-full bg-[#e5e5e5] overflow-hidden">
          <div
            className="absolute h-full rounded-full"
            style={{
              width: '40%',
              background:
                'linear-gradient(90deg, transparent 0%, #1f7566 50%, transparent 100%)',
              animation:
                'chatbot-analyzing-shimmer 1.6s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ThinkingIndicator() {
  return (
    <div className="relative shrink-0 w-full" data-name="AI assistant thinking">
      {/* Subtle: small greyscale text + staggered dot trio. No icon.
          The whole row fades gently on a 2s cycle so it reads as alive
          without pulling focus. */}
      <div
        className="flex items-baseline gap-[4px] px-[16px] py-[12px]"
        style={{ animation: 'chatbot-thinking-text 2s ease-in-out infinite' }}
      >
        <p className="font-['Graphik:Regular'] text-[14px] leading-[20px] text-[#8a8a8a]">
          Thinking
        </p>
        <span className="flex items-baseline gap-[3px] ml-[2px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="inline-block size-[3px] rounded-full bg-[#8a8a8a]"
              style={{
                animation: `chatbot-thinking-dot 1.4s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name={filled ? "star-filled" : "star"}>
      <div className="absolute inset-[8.33%]" data-name="frame">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="vector">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
              <path
                d={svgPathsCard.pdbba880}
                fill={filled ? "var(--fill-0, #FFD100)" : "transparent"}
                id="vector"
                stroke="var(--stroke-0, #FFD100)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="place">
      <div className="absolute inset-[8.33%]" data-name="frame">
        <div className="absolute h-[14px] left-[3.33px] top-[0.33px] w-[9px]" data-name="vector">
          <div className="absolute inset-[-3.57%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
              <g id="vector">
                <path d={svgPathsCard.p3d436e80} stroke="var(--stroke-0, #5A5A5A)" />
                <path d={svgPathsCard.p2d911800} stroke="var(--stroke-0, #5A5A5A)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationCard({ location }: { location: LocationOption }) {
  const [isHovered, setIsHovered] = useState(false);

  // Hover state tokens from Figma node 40000355:4966:
  //   - 1 px solid #25790b border wrapping the whole card
  //   - Info section background swaps from white to #e1f9d8
  //
  // The border is drawn via an absolutely-positioned overlay div placed
  // AFTER the content in the DOM. Why not a simple CSS border or inset
  // box-shadow on the outer wrapper?
  //   - A CSS `border` on the outer wrapper would reflow the inner sections
  //     by 2 px because box-sizing is border-box.
  //   - An `inset` box-shadow gets painted behind any child backgrounds —
  //     and our two child sections have opaque white/green backgrounds that
  //     cover the entire card, so the inset shadow is invisible.
  //   - An absolute overlay with `border: 1px solid` renders ON TOP of the
  //     children (it's the last child, with no elements stacked above it),
  //     so the green line is always visible.
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 rounded-[16px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="content-stretch flex flex-col h-[180px] items-start justify-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[343px]"
        style={{ backgroundImage: "linear-gradient(-63.8515deg, rgb(22, 90, 0) 13.54%, rgb(32, 128, 0) 84.584%)" }}
      >
        {/* Fill the 343×180 slot with the map and crop excess to preserve
            the image's native aspect ratio. */}
        <img
          alt={`Map of ${location.name}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={location.mapUrl}
          draggable={false}
        />
      </div>
      <div
        className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[24px] py-[20px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-[343px]"
        style={{
          backgroundColor: isHovered ? '#e1f9d8' : '#ffffff',
          transition: `background-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
        }}
      >
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Graphik:Medium'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">
            <p className="leading-[28px]">{location.name} - {location.borough}</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= Math.floor(location.rating)} />
              ))}
            </div>
            <div className="flex flex-col font-['Graphik:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#5a5a5a] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">({location.reviews} reviews)</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
            <PlaceIcon />
            <div className="flex flex-col font-['Graphik:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#5a5a5a] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{location.address}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Hover border overlay — drawn on top of the content, no layout
          impact. Invisible when not hovered. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{
          border: `1px solid ${isHovered ? '#25790b' : 'transparent'}`,
          transition: `border-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
        }}
      />
    </div>
  );
}

function LocationsResponse({ businessName, cityState, locations }: { businessName: string; cityState: string; locations: LocationOption[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Desktop convenience: convert vertical mouse-wheel input into horizontal
  // scroll on the card strip. Touchpads and touch screens already scroll
  // horizontally natively, but a regular mouse wheel can't — without this,
  // desktop users have no obvious way to discover the extra cards.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      // Only hijack when the strip actually has something to scroll to
      // and the user's dominant gesture is vertical (so we don't fight
      // a trackpad that's already giving us deltaX).
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  // Click-and-drag to scroll. Tracks pointer down on the strip, then on
  // pointermove adjusts scrollLeft by the delta. Uses pointer events so the
  // same code handles mouse, pen, and touch without extra listeners.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let active = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const onPointerDown = (e: PointerEvent) => {
      // Only left mouse / touch / pen primary button.
      if (e.button !== undefined && e.button !== 0) return;
      active = true;
      moved = 0;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      setIsDragging(true);
      // Capture so we keep receiving move/up even if the pointer leaves.
      el.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!active) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      el.scrollLeft = startScroll - dx;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!active) return;
      active = false;
      setIsDragging(false);
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {
        /* no-op */
      }
      // If the pointer moved more than a few pixels, treat the following
      // click as a drag release and swallow it so it doesn't activate the
      // card underneath.
      if (moved > 5) {
        const swallow = (ce: MouseEvent) => {
          ce.stopPropagation();
          ce.preventDefault();
          el.removeEventListener('click', swallow, true);
        };
        el.addEventListener('click', swallow, true);
      }
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  // Split the intro sentence into segments so word-by-word typing can span
  // the mixed font weights. Each segment is rendered with its own
  // TypewriterText starting where the previous one left off.
  const segments: Array<{ text: string; weight: 'regular' | 'medium' }> = [
    { text: "I've found multiple ", weight: 'regular' },
    { text: businessName, weight: 'medium' },
    { text: ' in ', weight: 'regular' },
    { text: cityState, weight: 'medium' },
    { text: '. Which one is yours?', weight: 'regular' },
  ];
  let runningWordCount = 0;

  return (
    <>
      <div className="relative shrink-0 w-full" data-name="AI assistant">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-end p-[16px] relative w-full">
            <p className="font-['Graphik:Regular'] min-w-full not-italic relative shrink-0 text-black w-[min-content] leading-[24px] text-[16px]">
              {segments.map((seg, i) => {
                const startDelay = 300 + runningWordCount * TYPEWRITER_CHAR_DELAY_MS;
                runningWordCount += seg.text.trim().split(' ').filter(Boolean).length;
                const weightClass = seg.weight === 'medium' ? "font-['Graphik:Medium']" : '';
                return (
                  <span key={i} className={weightClass}>
                    <TypewriterText text={seg.text} startDelay={startDelay} />
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <div
            ref={scrollRef}
            className={`flex gap-[16px] items-start relative shrink-0 w-full overflow-x-auto overflow-y-hidden pb-[8px] touch-pan-y select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              // Disable image drag ghosting on the inner map images so the
              // drag gesture goes to the scroll container instead.
              WebkitUserDrag: 'none',
            } as React.CSSProperties}
          >
            {locations.map((location, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{
                  // Cascade the cards in after the AI text has started typing.
                  // 0.5 s base delay + 0.12 s between cards.
                  animation: `chatbot-card-enter 0.7s ${MESSAGE_ENTRY_CURVE} ${500 + index * 120}ms both`,
                }}
              >
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ----------------------------------------------------------------------------
// Sales estimator card (Figma node 1:7558 inside 1:7390)
// ----------------------------------------------------------------------------
// Shown after the user picks "Both are mine". Two stacked sections — average
// transaction amount + yearly sales per location — each with a label, a
// large green amount, and a horizontal shimmer/progress bar that represents
// the current estimate along a tick-marked range. The "Continue" button
// below the card follows the same Button Default styling as the suggestion
// chips (from the same ChatUserMessage component family).

/**
 * Interactive slider matching the Figma sales-estimator gauge.
 *
 * Ruler: 56 tick marks arranged as repeating groups of "1 tall, 4 short":
 *   T S S S S  T S S S S  ... T  — 12 tall ticks (at indices 0, 5, 10, …, 55).
 *   Tall ticks: 20 px high, 2 px wide, rounded.
 *   Short ticks: 16 px high, 1 px wide, rounded.
 *   Both filled with #d5d5d5.
 *
 * Track: grey pill (#c7c7c7), 10 px high, full width, rounded 8 px.
 * Fill: solid brand green (#228800) from the left up to `value` / `(max-min)`.
 * Head: 32 px green orb centered on the fill's right edge, with a soft radial
 * glow falling off to transparent — matches the Figma Ellipse 52 asset.
 *
 * Interaction: pointer down → move → up all resolve to a clientX, which is
 * projected to a [0, 1] fraction of the track and mapped to `[min, max]`
 * respecting `step`. Pointer capture keeps dragging working even when the
 * cursor drifts off the track.
 */
function SalesEstimatorSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
}: {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fillPct = Math.max(0, Math.min(1, (value - min) / (max - min))) * 100;

  const setFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const raw = min + pct * (max - min);
    const snapped = Math.round(raw / step) * step;
    onChange(Math.max(min, Math.min(max, snapped)));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== undefined && e.button !== 0) return;
      setIsDragging(true);
      setFromClientX(e.clientX);
      el.setPointerCapture?.(e.pointerId);
      e.preventDefault();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!el.hasPointerCapture?.(e.pointerId)) return;
      setFromClientX(e.clientX);
    };
    const onPointerUp = (e: PointerEvent) => {
      setIsDragging(false);
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {
        /* no-op */
      }
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    };
    // `min`, `max`, `step`, `onChange` are captured at effect-setup time; the
    // handlers read them via closure. Re-registering every change is avoided
    // on purpose — slider callbacks run many times per drag, so we snapshot.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max, step]);

  // Ruler: 51 ticks, every 5th is tall → indices 0, 5, 10, 15, 20, 25, 30,
  // 35, 40, 45, 50. That's 11 tall and 40 short ticks. The count is chosen
  // so that both ends AND the exact middle (index 25) land on tall ticks,
  // matching the "1 long, 4 short" pattern while also giving the visual
  // anchor point at the center of the track.
  const TICK_COUNT = 51;
  const ticks = Array.from({ length: TICK_COUNT }).map((_, i) => {
    const isTall = i % 5 === 0;
    return (
      <div
        key={i}
        className="bg-[#d5d5d5] rounded-full shrink-0"
        style={{
          width: isTall ? 2 : 1,
          height: isTall ? 20 : 16,
        }}
      />
    );
  });

  return (
    <div className="relative w-full select-none" data-name="gauge">
      {/* Ruler */}
      <div className="flex items-end justify-between w-full h-[20px] mb-[8px]">
        {ticks}
      </div>

      {/* Track + fill + head. `touch-none` stops the browser from scrolling
          the page while the user is dragging with a touch device. */}
      <div
        ref={trackRef}
        className={`relative w-full h-[10px] rounded-[8px] bg-[#c7c7c7] touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-pointer'
        }`}
        data-name="track"
      >
        {/* Green fill */}
        <div
          className="absolute left-0 top-0 h-full rounded-[8px] bg-[#228800]"
          style={{
            width: `${fillPct}%`,
            transition: isDragging
              ? 'none'
              : `width 0.2s ${MESSAGE_ENTRY_CURVE}`,
          }}
        />
        {/* Head: Figma Ellipse 52 — a white-filled disc with a solid green
            ring. 32 × 32 px, centered on the fill's right edge. A small
            drop shadow lifts it off the track, matching the Figma asset. */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${fillPct}%`,
            top: '50%',
            width: 32,
            height: 32,
            transform: 'translate(-50%, -50%)',
            background: '#ffffff',
            border: '3px solid #228800',
            boxSizing: 'border-box',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
            transition: isDragging
              ? 'none'
              : `left 0.2s ${MESSAGE_ENTRY_CURVE}`,
          }}
        />
      </div>
    </div>
  );
}

function SalesEstimatorCard() {
  // Restaurant-industry scales, centered so the default reads at the middle
  // of the slider (visually confirming the default is in the plausible
  // middle of the range):
  //
  // - Average transaction:  $5 – $45, default $25.
  //   Covers coffee shop through casual dining; $25 is a representative
  //   mid-market ticket and sits at exactly 50% of the track.
  //
  // - Yearly sales per location: $100k – $900k, default $500k.
  //   Covers small through small-medium restaurant revenue; $500k is a
  //   representative mid-market figure and sits at exactly 50%.
  const [avgTxn, setAvgTxn] = useState(25);
  const [yearly, setYearly] = useState(500_000);

  return (
    <div className="relative shrink-0 w-full" data-name="Sales estimator">
      <div className="p-[16px] w-full">
        <div className="bg-white rounded-[24px] p-[24px] w-full flex flex-col gap-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)]">
          {/* Section 1: Average transaction */}
          <div className="flex flex-col gap-[8px] w-full">
            <p className="font-['Graphik:Medium',sans-serif] text-[20px] leading-[28px] text-black m-0">
              Average transaction amount
            </p>
            <p className="font-['Graphik:Semibold',sans-serif] text-[40px] leading-[52px] text-[#228800] m-0">
              ${avgTxn}
            </p>
            <div className="pb-[12px]">
              <SalesEstimatorSlider
                min={5}
                max={45}
                value={avgTxn}
                onChange={setAvgTxn}
              />
            </div>
          </div>

          {/* Section 2: Yearly sales */}
          <div className="flex flex-col gap-[8px] w-full">
            <p className="font-['Graphik:Medium',sans-serif] text-[20px] leading-[28px] text-black m-0">
              Yearly sales per location
            </p>
            <p className="font-['Graphik:Semibold',sans-serif] text-[40px] leading-[52px] text-[#228800] m-0">
              {formatYearly(yearly)}
            </p>
            <div className="pb-[12px]">
              <SalesEstimatorSlider
                min={100_000}
                max={900_000}
                step={10_000}
                value={yearly}
                onChange={setYearly}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatYearly(v: number): string {
  if (v >= 1_000_000) {
    // Show one decimal when below 10M, otherwise round.
    const m = v / 1_000_000;
    return `${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  return `${Math.round(v / 1000)}k`;
}

/**
 * FileUploadCard — matches Figma node 1:8279 / 1:8282.
 *
 * Two visual states:
 *   1. Empty dropzone (default). Click, Enter or Space triggers `onUpload`,
 *      which the parent wires up to simulate a file being picked. Hover
 *      tints the dashed border to the dark-green hover token.
 *   2. Uploaded. Once `uploadedImage` is set, the dashed dropzone is
 *      replaced with the image itself, fit inside the same rounded slot.
 */
function FileUploadCard({
  uploadedImage,
  onUpload,
}: {
  uploadedImage: string | null;
  onUpload: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative shrink-0 w-full" data-name="File upload card">
      <div className="p-[16px] w-full">
        <div className="bg-white rounded-[24px] p-[24px] w-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)]">
          {uploadedImage ? (
            <div className="rounded-[8px] overflow-hidden" data-name="FileUpload/ Uploaded">
              <img
                src={uploadedImage}
                alt="Uploaded counter setup"
                className="block w-full h-auto"
                draggable={false}
              />
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              onClick={onUpload}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onUpload();
                }
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex flex-col gap-[8px] items-center justify-center h-[124px] p-[16px] w-full rounded-[8px] cursor-pointer"
              style={{
                background: '#ffffff',
                border: `1px dashed ${isHovered ? '#25790b' : '#bbbbbb'}`,
                transition: `border-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
              }}
              data-name="FileUpload/ Drag and Drop"
            >
              <div className="flex items-center gap-[8px]">
                {/* Upload icon — green stroke baked into the SVG. */}
                <img
                  src={iconUpload}
                  alt=""
                  aria-hidden="true"
                  className="size-[24px]"
                />
                <p className="font-['Graphik:Medium',sans-serif] text-[20px] leading-[28px] text-[#228800] m-0">
                  Upload photo
                </p>
              </div>
              <p className="font-['Graphik:Regular',sans-serif] text-[14px] leading-[20px] text-[#5a5a5a] m-0">
                jpg or png (max 5MB)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Inline version of the chip button/sent-state — no outer p-[16px] wrapper,
 * so it can be placed inside a shared flex container with custom spacing.
 * Reused by both `ActionBubble` (one bubble per message, full padding) and
 * `PostRecChipPair` (two bubbles in one container with 8 px gap).
 */
function ChipButtonContent({
  text,
  isClicked,
  interactive = true,
  onClick,
}: {
  text: string;
  isClicked: boolean;
  interactive?: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  if (isClicked) {
    return (
      <div
        className="bg-[#c7c7c7] px-[16px] py-[12px]"
        style={{ borderRadius: '24px 24px 0 24px' }}
      >
        <p className="font-['Graphik:Regular',sans-serif] text-[16px] leading-[24px] text-black text-right whitespace-nowrap m-0">
          {text}
        </p>
      </div>
    );
  }

  let bg = '#ffffff';
  let borderColor = '#228800';
  let borderWidth = 1;
  let textColor = '#228800';
  if (isHovered) {
    bg = '#e1f9d8';
    borderColor = '#25790b';
    borderWidth = 2;
    textColor = '#25790b';
  } else if (isFocused) {
    borderWidth = 2;
  }

  return (
    <button
      type="button"
      onClick={() => interactive && onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="font-['Graphik:Regular',sans-serif] text-[16px] leading-[24px] text-right whitespace-nowrap"
      style={{
        background: bg,
        color: textColor,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: '24px 24px 0 24px',
        padding: `${12 - (borderWidth - 1)}px ${16 - (borderWidth - 1)}px`,
        cursor: interactive ? 'pointer' : 'default',
        transition: [
          `background-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
          `border-color 0.25s ${MESSAGE_ENTRY_CURVE}`,
          `color 0.25s ${MESSAGE_ENTRY_CURVE}`,
          `padding 0.25s ${MESSAGE_ENTRY_CURVE}`,
        ].join(', '),
      }}
    >
      {text}
    </button>
  );
}

/**
 * A reusable interactive action bubble. It looks and behaves like the
 * ChatUserMessage "Button Default" state (white bg, 1 px green border,
 * flat bottom-right bubble shape) and, when `isClicked` flips to true,
 * transforms in place into the "Sent" state (grey filled bubble) — no
 * separate user-message entry is appended to the conversation.
 *
 * Used for both the Continue CTA and the Skip this step chip.
 */
function ActionBubble({
  text,
  isClicked,
  interactive = true,
  onClick,
  dataName,
}: {
  text: string;
  isClicked: boolean;
  interactive?: boolean;
  onClick: () => void;
  dataName: string;
}) {
  return (
    <div className="relative shrink-0 w-full" data-name={dataName}>
      <div className="flex flex-col items-end p-[16px] w-full">
        <ChipButtonContent
          text={text}
          isClicked={isClicked}
          interactive={interactive}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

/**
 * The two post-recommendation chips shown after the user scrolls the
 * recommendation card into view. Rendered as a single entity (not two
 * separate messages) so the spacing between them is `gap-[8px]` —
 * matching the "Both are mine" / "None of these" SuggestionChips pattern
 * instead of the 32 px gap you'd get from two separate p-[16px] bubbles.
 */
function PostRecChipPair({
  connectClicked,
  onConnect,
}: {
  connectClicked: boolean;
  onConnect: () => void;
}) {
  // Now that the recommendation card itself has its own Buy CTA, the
  // post-rec follow-up is simplified to a single "Connect me to sales."
  // chip plus a short AI-message paragraph above it explaining the user's
  // options. Matches Figma 40000778:7520. The Connect chip stays visible
  // throughout the flow (default → clicked) — there is no separate
  // "I need to talk to sales instead." follow-up.
  return (
    <div
      className="w-full flex flex-col shrink-0"
      data-name="Post rec chips"
    >
      <div
        className="p-[16px] w-full"
        style={{
          animation: `chatbot-msg-enter-ai 0.55s ${MESSAGE_ENTRY_CURVE} both`,
          transformOrigin: 'top left',
        }}
      >
        <p className="m-0 font-['Graphik:Regular',sans-serif] text-[16px] leading-[24px] text-black">
          I&rsquo;ve come up with a recommended plan but also have two additional plans you might prefer. Use the Buy buttons to pick the one that you like or I can help you by connecting you to sales.
        </p>
      </div>
      <div
        className="w-full px-[16px] pb-[16px] flex justify-end"
        data-name="Connect bubble"
        style={{
          animation: `chatbot-msg-enter-ai 0.55s ${MESSAGE_ENTRY_CURVE} 90ms both`,
          transformOrigin: 'bottom right',
        }}
      >
        <ChipButtonContent
          text="Connect me to sales."
          isClicked={connectClicked}
          interactive={!connectClicked}
          onClick={onConnect}
        />
      </div>
    </div>
  );
}

/**
 * RecommendationCard — matches Figma node 40000363:5552 (Clover Capital Card
 * with Hardware + Software Plan sections). Two-section stacked card:
 *
 *   - Hardware (top, dark green #14570b): header row ("Hardware" ·
 *     "Recommended"), large display title, description with bullet list,
 *     two metric blocks for the recommended devices.
 *   - Software plan (bottom, white): header row ("Software plan" ·
 *     "Recommended"), display title "Restaurant Growth Plan", four feature
 *     rows with check icons, and a "See plan details" CTA.
 */
/**
 * SalesConnectCard — matches Figma node 1:9928 (the "Call Jason" card that
 * appears after the user clicks "Connect me to sales.").
 *
 * A single rounded-16 pill with a green gradient background. Three content
 * columns: a 64 px circular avatar on the left, a name + availability
 * label in the middle, and a phone icon + phone number on the right.
 */
function SalesConnectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative shrink-0 w-full" data-name="Sales connect card">
      <div className="p-[16px] w-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center gap-[16px] px-[24px] py-[20px] w-full rounded-[16px] cursor-pointer"
          style={{
            // Subtle 5-stop gradient — all stops live in the same darker
            // Clover green range so the animated flow reads as a gentle
            // shimmer rather than a loud color cycle. No bright middle
            // stop.
            backgroundImage:
              'linear-gradient(110deg, #165a00 0%, #1c6b00 28%, #228800 50%, #1c6b00 72%, #165a00 100%)',
            backgroundSize: '220% 100%',
            // Slower cycle (5 s) so the motion doesn't pull focus.
            animation: 'chatbot-gradient-flow 5s ease-in-out infinite',
            animationPlayState: isHovered ? 'running' : 'paused',
            transition: `box-shadow 0.4s ${MESSAGE_ENTRY_CURVE}`,
            // Much smaller shadow delta on hover — almost imperceptible.
            boxShadow: isHovered
              ? '0 6px 16px -8px rgba(22, 90, 0, 0.4)'
              : '0 4px 12px -6px rgba(22, 90, 0, 0.3)',
          }}
        >
          {/* Avatar — 64 px circular photo (Figma Ellipse 53). */}
          <img
            src={imgEllipse53}
            alt=""
            aria-hidden="true"
            className="shrink-0 size-[64px] rounded-full object-cover"
            draggable={false}
          />

          {/* Name + availability */}
          <div className="flex-1 min-w-0 flex flex-col">
            <p className="font-['Graphik:Semibold',sans-serif] text-[24px] leading-[32px] text-white whitespace-nowrap m-0">
              Call Jason
            </p>
            <p className="font-['Graphik:Regular',sans-serif] text-[14px] leading-[20px] text-[#b6fb6f] whitespace-nowrap m-0">
              Available now
            </p>
          </div>

          {/* Phone icon + number — wrapped in a tel: link so clicking
              triggers the OS calling app on both Windows (Phone Link) and
              macOS (FaceTime / default tel handler). */}
          <a
            href="tel:+19175789241"
            className="shrink-0 flex items-center gap-[4px] no-underline"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="size-[24px] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                stroke="#ffffff"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-white whitespace-nowrap m-0">
              (917) 578-9241
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({
  onBottomReached,
  onBuyClick,
  buyClicked,
}: {
  onBottomReached?: () => void;
  onBuyClick?: () => void;
  buyClicked?: boolean;
}) {
  // Observe the bottom sentinel — when it enters the scroll container's
  // viewport, fire `onBottomReached` once. This is how we know the user
  // has scrolled far enough to see the last row of the card, which gates
  // the "buy this setup" / "connect me to sales" chips downstream.
  //
  // We explicitly walk up to the nearest `overflow-y: auto` ancestor and
  // use it as the observer `root` — the default root (browser viewport)
  // doesn't respect intermediate overflow clipping in all setups.
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sentinelRef.current || !onBottomReached) return;
    const el = sentinelRef.current;

    // Find the first ancestor whose vertical overflow is auto/scroll —
    // that's the MessageContainer in our layout.
    let root: HTMLElement | null = el.parentElement;
    while (root) {
      const overflow = getComputedStyle(root).overflowY;
      if (overflow === 'auto' || overflow === 'scroll') break;
      root = root.parentElement;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onBottomReached();
          observer.disconnect();
        }
      },
      { root, threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onBottomReached]);

  return (
    <div className="relative shrink-0 w-full" data-name="Recommendation card">
      <div className="p-[16px] w-full">
        {/* Hardware section — dark green */}
        <div
          className="flex flex-col gap-[24px] p-[24px] w-full overflow-hidden"
          style={{
            background: '#14570b',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          data-name="Hardware section"
        >
          {/* Insights header — devices icon (white stroke baked into the
              SVG so it reads correctly on the dark green section). */}
          <div className="flex items-center gap-[4px] w-full">
            <img
              src={iconDevices}
              alt=""
              aria-hidden="true"
              className="size-[24px] shrink-0"
            />
            <p className="flex-1 font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-white m-0">
              Hardware
            </p>
            <p className="font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-[#b6fb6f] text-right m-0">
              Recommended
            </p>
          </div>

          {/* Title + description.
              The description is a single flat paragraph per Figma node
              1:9962 — not a bullet list — so the line-height flow matches
              the display title above. */}
          <div className="flex flex-col text-white w-full">
            <p className="font-['Graphik:Semibold',sans-serif] text-[40px] leading-[52px] whitespace-nowrap m-0">
              Clover Station + Flex
            </p>
            <p className="font-['Graphik:Regular',sans-serif] text-[14px] leading-[20px] w-full m-0">
              Based on your 2 locations, we suggest 1 Station for the counter and 2 Flex for tableside service per location.
            </p>
          </div>

          {/* Two metric blocks */}
          <div className="flex gap-[16px] items-stretch w-full">
            <div
              className="flex-1 p-[8px] rounded-[16px]"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <div className="flex flex-col gap-[8px] p-[2px] rounded-[8px]">
                <p className="font-['Graphik:Medium',sans-serif] text-[20px] leading-[28px] text-white text-center whitespace-nowrap m-0">
                  2 Station Solo devices
                </p>
                <img
                  src={imgStationSolo}
                  alt=""
                  aria-hidden="true"
                  className="aspect-square w-full rounded-[8px] object-cover"
                  draggable={false}
                />
              </div>
            </div>
            <div
              className="flex-1 p-[8px] rounded-[16px]"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <div className="flex flex-col gap-[8px] p-[2px] rounded-[8px]">
                <p className="font-['Graphik:Medium',sans-serif] text-[20px] leading-[28px] text-white text-center whitespace-nowrap m-0">
                  4 Flex devices
                </p>
                <img
                  src={imgFlex}
                  alt=""
                  aria-hidden="true"
                  className="aspect-square w-full rounded-[8px] object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Software plan section — white */}
        <div
          className="flex flex-col gap-[24px] px-[24px] py-[20px] w-full bg-white"
          style={{
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
          data-name="Software plan section"
        >
          {/* Insights header — settings icon (green stroke baked in). */}
          <div className="flex items-center gap-[4px] w-full">
            <img
              src={iconSettings}
              alt=""
              aria-hidden="true"
              className="size-[24px] shrink-0"
            />
            <p className="flex-1 font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-[#228800] m-0">
              Software plan
            </p>
            <p className="font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-[#5a5a5a] text-right m-0">
              Recommended
            </p>
          </div>

          {/* Plan title */}
          <p className="font-['Graphik:Semibold',sans-serif] text-[40px] leading-[52px] text-black whitespace-nowrap m-0">
            Restaurant Growth Plan
          </p>

          {/* Feature list. All ticks use the outline-only variant — green
              circle outline + green check, no fill. */}
          <div className="flex flex-col gap-[16px] w-full">
            {[
              'Dynamic menu management',
              'Online ordering and third-party delivery integrations',
              'Advanced inventory management and reporting',
              'Table-side ordering and payments',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-[16px] w-full">
                <svg
                  className="size-[24px] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#228800"
                    strokeWidth="2"
                  />
                  <path
                    d="M7.5 12.5l3 3 6-6"
                    stroke="#228800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="flex-1 font-['Graphik:Regular',sans-serif] text-[14px] leading-[20px] text-black m-0">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Learn more + Buy button row. Per Figma 40000778:8853 — two
              equal-width buttons. Learn more is the secondary outline
              variant; Buy is the filled green primary with a trailing
              arrow icon. Only the Buy button on this large card actually
              fires `onBuyClick` (which navigates to checkout). The Learn
              more button is hover-only — it has no onClick. */}
          <CardCtaRow
            primaryDisabled={buyClicked}
            onPrimaryClick={onBuyClick}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * CardCtaRow — shared two-button footer used by both the large
 * RecommendationCard and the smaller PlanCards in the Other plans
 * carousel. Matches Figma node 40000778:8853 (Learn more secondary +
 * Buy primary with trailing arrow). Pass `onPrimaryClick` to make the
 * Buy button clickable; omit it to make the button hover-only.
 */
function CardCtaRow({
  onPrimaryClick,
  primaryDisabled,
}: {
  onPrimaryClick?: () => void;
  primaryDisabled?: boolean;
}) {
  const [secondaryHover, setSecondaryHover] = useState(false);
  const [primaryHover, setPrimaryHover] = useState(false);
  return (
    <div className="flex gap-[12px] items-center justify-center w-full">
      {/* Learn more — secondary outline button. Hover-only; no onClick.
          Hover state per Figma 40000780:8433 — gray (#f5f5f5) fill,
          darker green (#25790b) border + label. */}
      <button
        type="button"
        onMouseEnter={() => setSecondaryHover(true)}
        onMouseLeave={() => setSecondaryHover(false)}
        className="flex-1 min-w-[100px] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[8px] border border-solid cursor-pointer transition-colors duration-150"
        style={{
          background: secondaryHover ? '#f5f5f5' : '#ffffff',
          borderColor: secondaryHover ? '#25790b' : '#727272',
        }}
      >
        <span
          className="font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-center whitespace-nowrap transition-colors duration-150"
          style={{ color: secondaryHover ? '#25790b' : '#228800' }}
        >
          Learn more
        </span>
      </button>
      {/* Buy — primary filled green button with trailing arrow. */}
      <button
        type="button"
        onClick={onPrimaryClick}
        disabled={primaryDisabled}
        onMouseEnter={() => setPrimaryHover(true)}
        onMouseLeave={() => setPrimaryHover(false)}
        className={`flex-1 min-w-[100px] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[8px] border-0 transition-colors duration-150 ${
          onPrimaryClick && !primaryDisabled ? 'cursor-pointer' : 'cursor-default'
        } disabled:opacity-60`}
        style={{
          background: primaryHover ? '#1c6b00' : '#228800',
        }}
      >
        <span className="font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-white text-center whitespace-nowrap">
          Buy
        </span>
        <svg
          className="size-[24px] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

/**
 * OtherPlansCarousel — matches Figma node 40000766:12701. Header text
 * "Other recommended plans:" plus a horizontal scroll strip of two
 * PlanCards: "Ultimate" (3 devices, fully visible) and "Essential"
 * (2 devices, partially visible / cut off at the right edge to suggest
 * scroll affordance).
 *
 * Owns the same IntersectionObserver-based "bottom reached" hook that
 * RecommendationCard used to own. The follow-up post-rec chip pair only
 * appears once the user has seen the bottom of THIS section, not the
 * recommendation card above it.
 */
function PlanCard({
  tier,
  hardware,
  planLabel,
  images,
}: {
  tier: string;
  hardware: string;
  planLabel: string;
  images: string[];
}) {
  return (
    <div
      className="shrink-0 w-[433px] bg-white rounded-[16px] p-[16px] flex flex-col gap-[24px]"
      data-name="Plan card"
    >
      <p className="m-0 font-['Graphik:Medium',sans-serif] text-[16px] leading-[24px] text-[#228800]">
        {tier}
      </p>
      <div className="flex flex-col">
        <p className="m-0 font-['Graphik:Semibold',sans-serif] text-[24px] leading-[32px] text-black whitespace-nowrap">
          {hardware}
        </p>
        <p className="m-0 font-['Graphik:Semibold',sans-serif] text-[24px] leading-[32px] text-[#5a5a5a] whitespace-nowrap">
          {planLabel}
        </p>
      </div>
      <div className="flex gap-[12px] h-[120px] w-full">
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-1 h-full rounded-[8px] overflow-hidden bg-[#f5f5f5]"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Learn more + Buy buttons — both hover-only on the smaller plan
          cards. No onClick is wired so the Buy button does nothing
          functional, matching the spec. */}
      <CardCtaRow />
    </div>
  );
}

function OtherPlansCarousel({
  onBottomReached,
}: {
  onBottomReached?: () => void;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Bottom-of-section observer — same pattern as RecommendationCard used
  // to use, now relocated here so the post-rec chips only appear once
  // the user has scrolled past the carousel.
  useEffect(() => {
    if (!sentinelRef.current || !onBottomReached) return;
    const el = sentinelRef.current;
    let root: HTMLElement | null = el.parentElement;
    while (root) {
      const overflow = getComputedStyle(root).overflowY;
      if (overflow === 'auto' || overflow === 'scroll') break;
      root = root.parentElement;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onBottomReached();
          observer.disconnect();
        }
      },
      { root, threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onBottomReached]);

  // Vertical wheel → horizontal scroll (mirrors LocationsResponse). Once
  // we've reached the right edge, stop hijacking the wheel — the event
  // bubbles up so the parent message container resumes vertical scroll.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const atRightEdge = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      // Scrolling down past the right edge → let the page scroll instead.
      if (atRightEdge && e.deltaY > 0) return;
      // Scrolling up past the left edge → let the page scroll up instead.
      if (el.scrollLeft <= 0 && e.deltaY < 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  // Click-and-drag scroll (mirrors LocationsResponse).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let active = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== undefined && e.button !== 0) return;
      active = true;
      moved = 0;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      setIsDragging(true);
      el.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!active) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      el.scrollLeft = startScroll - dx;
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!active) return;
      active = false;
      setIsDragging(false);
      try {
        el.releasePointerCapture?.(e.pointerId);
      } catch {
        /* no-op */
      }
      if (moved > 5) {
        const swallow = (ce: MouseEvent) => {
          ce.stopPropagation();
          ce.preventDefault();
          el.removeEventListener('click', swallow, true);
        };
        el.addEventListener('click', swallow, true);
      }
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <div className="relative shrink-0 w-full" data-name="Other plans carousel">
      {/* Header — left-padded to align with normal message gutters; the
          trailing colon matches the Figma label exactly. */}
      <div className="px-[16px] pt-[16px] pb-[8px]">
        <p className="m-0 font-['Graphik:Semibold',sans-serif] text-[16px] leading-[24px] text-black">
          Other recommended plans:
        </p>
      </div>
      {/* Scroll strip — pl-[16px] gives the same left gutter as other
          chat content. pr-[16px] adds a matching right gutter so the
          second card has breathing room when scrolled to the end. The
          8 px gap between cards matches the Figma layout (card1 ends at
          x=433, card2 starts at x=441 within a 540 px container). */}
      <div className="pb-[16px]">
        <div
          ref={scrollRef}
          className={`flex gap-[8px] items-start w-full overflow-x-auto overflow-y-hidden px-[16px] touch-pan-y select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitUserDrag: 'none',
          } as React.CSSProperties}
        >
          <PlanCard
            tier="Ultimate"
            hardware="2 Clover Station + 2 Flex + 1 KDS"
            planLabel="Restaurant Growth Plan"
            images={[imgStationSolo, imgFlex, imgKds]}
          />
          <PlanCard
            tier="Essential"
            hardware="2 Clover Minis + 2 Flex"
            planLabel="Essential Plan"
            images={[imgMini, imgFlex]}
          />
        </div>
      </div>
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
    </div>
  );
}

function MessageContainer({
  messages,
  showWelcome,
  isFirstMessage,
  showSuggestions,
  suggestionsDismissed,
  continueClicked,
  uploadedImage,
  skipClicked,
  connectClicked,
  buyClicked,
  onIntroChipSelect,
  onSuggestionSelect,
  onContinue,
  onFileUpload,
  onSkip,
  onConnect,
  onRecBottomReached,
  onBuyClick,
}: {
  messages: Message[];
  showWelcome: boolean;
  isFirstMessage: boolean;
  showSuggestions: boolean;
  suggestionsDismissed: boolean;
  continueClicked: boolean;
  uploadedImage: string | null;
  skipClicked: boolean;
  connectClicked: boolean;
  buyClicked: boolean;
  onIntroChipSelect: (text: string) => void;
  onSuggestionSelect: (text: string) => void;
  onContinue: () => void;
  onFileUpload: () => void;
  onSkip: () => void;
  onConnect: () => void;
  onRecBottomReached: () => void;
  onBuyClick: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevMessagesRef = useRef(messages);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prevMessages = prevMessagesRef.current;
    prevMessagesRef.current = messages;

    // Don't scroll when the only change was removing messages (e.g. skip
    // chip filtered out). Detect by checking if the last message is the
    // same object reference — if so, nothing new appeared at the end.
    const prevLast = prevMessages[prevMessages.length - 1];
    const currLast = messages[messages.length - 1];
    if (currLast && currLast === prevLast && messages.length <= prevMessages.length) return;

    // Scroll strategy: anchor on the "first visible message of this
    // response block" rather than always the latest message.
    //
    // When a tall card arrives (RecommendationCard, SalesEstimatorCard,
    // FileUploadCard, SalesConnectCard) it's part of a two-step response:
    //   [AI text] + [tall card]
    // Scrolling to the card's top would hide the text. Instead, if the
    // last message is one of these card types AND the message just
    // before it is a plain AI text, we anchor to that text so the user
    // reads the intro before the card content flows naturally below.
    //
    // For all other cases (short messages, chips, user bubbles), we
    // fall back to "scroll latest to bottom" — the familiar chat feel.
    //
    // Using rAF gives React one frame to finish laying out the newly
    // rendered message so `offsetHeight` / `offsetTop` reflect the
    // final layout.
    const rafId = requestAnimationFrame(() => {
      // Determine which message index to anchor on.
      let anchorIndex = messages.length - 1;
      const last = messages[anchorIndex];
      // Only cards that are genuinely TALL (taller than the container)
      // get the "anchor to preceding AI text" treatment. The compact
      // SalesConnectCard (~100 px) is NOT in this list — it should
      // scroll to the bottom normally so the user sees it immediately
      // rather than being sent back to the recommendation section.
      // FileUploadCard is also excluded — it's not tall enough to need
      // anchoring, and re-anchoring after image upload causes an
      // unwanted scroll jump.
      const isTallCard =
        last &&
        (last.recommendation ||
          last.otherPlansCarousel ||
          last.salesEstimator);
      if (isTallCard) {
        // Look back up to 3 messages for the nearest AI text — that's
        // the intro line of the current response block.
        for (let i = anchorIndex - 1; i >= 0 && i >= anchorIndex - 3; i--) {
          const m = messages[i];
          if (m && !m.isUser && m.text && !m.isThinking) {
            anchorIndex = i;
            break;
          }
        }
      }

      // Find the wrapper div for that message index.
      const target = container.querySelector(
        `[data-message-index="${anchorIndex}"]`,
      ) as HTMLElement | null;

      if (target) {
        const targetTop = target.offsetTop;
        const targetBottom = targetTop + target.offsetHeight;
        const containerHeight = container.clientHeight;
        // If the anchor + everything after it is taller than the visible
        // area, put the anchor's top near the container top. Otherwise
        // just scroll to bottom so the new content glides into view.
        const contentBelowAnchor = container.scrollHeight - targetTop;
        if (contentBelowAnchor > containerHeight - 60) {
          container.scrollTo({
            top: Math.max(0, targetTop - 8),
            behavior: 'smooth',
          });
          return;
        }
      }

      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    });

    return () => cancelAnimationFrame(rafId);
  }, [messages, showWelcome, showSuggestions, suggestionsDismissed]);

  // Flex scroll fix: `min-h-0` on a flex child is required for `overflow-y: auto`
  // to work — otherwise the child grows to fit its content and never scrolls.
  //
  // The inner flex column uses `min-h-full` so it fills the scroll container
  // when content is short. That lets the trailing `<SuggestionChips>` use
  // `mt-auto` to pin itself to the bottom. When the content grows past the
  // container height, `min-h-full` no longer matters — the column overflows
  // naturally and the chips sit right after the last message, scrolling
  // with everything else.
  return (
    <div
      ref={containerRef}
      className="bg-[#f5f5f5] flex-1 min-h-0 min-w-0 relative w-full overflow-y-auto"
      data-name="Message container"
    >
      <div className="flex flex-col items-start w-full py-[8px] min-h-full">
        {/* Welcome message — only mounted after the chat has opened, so its
            `MessageEnter` intro animation plays in sync with the panel
            appearance instead of on widget mount. */}
        {showWelcome && (
          <MessageEnter variant="ai">
            <WelcomeMessage />
          </MessageEnter>
        )}
        {messages.map((message, index) => {
          // Attach the scroll-target ref to the LAST rendered message so
          // the scroll effect can measure whichever element just mounted.
          const indexProp = { 'data-message-index': index } as const;
          if (message.isUser && message.text) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="user">
                  <UserMessage text={message.text} />
                </MessageEnter>
              </div>
            );
          } else if (message.isThinking) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <ThinkingIndicator />
                </MessageEnter>
              </div>
            );
          } else if (message.locations) {
            const [businessName, location] = (messages.find((m) => m.isUser && m.text)?.text || '').split(',').map((s) => s.trim());
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <LocationsResponse
                    businessName={businessName || 'your business'}
                    cityState={location || 'your area'}
                    locations={message.locations}
                  />
                </MessageEnter>
              </div>
            );
          } else if (message.salesEstimator) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <SalesEstimatorCard />
                </MessageEnter>
              </div>
            );
          } else if (message.continueCTA) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <ActionBubble
                    text="Continue"
                    isClicked={continueClicked}
                    onClick={onContinue}
                    dataName="Continue bubble"
                  />
                </MessageEnter>
              </div>
            );
          } else if (message.fileUploadCard) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <FileUploadCard uploadedImage={uploadedImage} onUpload={onFileUpload} />
                </MessageEnter>
              </div>
            );
          } else if (message.analyzingSetup) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <AnalyzingSetupIndicator />
                </MessageEnter>
              </div>
            );
          } else if (message.skipChip) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <ActionBubble
                    text="Skip this step"
                    isClicked={skipClicked}
                    onClick={onSkip}
                    dataName="Skip bubble"
                  />
                </MessageEnter>
              </div>
            );
          } else if (message.recommendation) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <RecommendationCard
                    onBuyClick={onBuyClick}
                    buyClicked={buyClicked}
                  />
                </MessageEnter>
              </div>
            );
          } else if (message.otherPlansCarousel) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <OtherPlansCarousel onBottomReached={onRecBottomReached} />
                </MessageEnter>
              </div>
            );
          } else if (message.postRecChipPair) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <PostRecChipPair
                  connectClicked={connectClicked}
                  onConnect={onConnect}
                />
              </div>
            );
          } else if (message.salesConnectCard) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <SalesConnectCard />
                </MessageEnter>
              </div>
            );
          } else if (message.text) {
            return (
              <div key={index} className="w-full" {...indexProp}>
                <MessageEnter variant="ai">
                  <AiMessage text={message.text} />
                </MessageEnter>
              </div>
            );
          }
          return null;
        })}
        {/* Suggestion chips — mt-auto pushes them to the bottom of the
            scroll container when there's empty space; when messages
            overflow they flow inline after the last message. Gated so
            they only appear once the AI has posted a `locations` response
            and nothing has been selected yet. */}
        {showSuggestions && (
          <div className="mt-auto w-full">
            <SuggestionChips
              isDismissed={suggestionsDismissed}
              onSelect={onSuggestionSelect}
            />
          </div>
        )}
        {/* Intro chip — anchored bottom-right (same position as the post-
            locations suggestion chips) until the user sends their first
            message. Hover-only for now: `interactive={false}` keeps the
            hover/focus visuals but ignores clicks. */}
        {showWelcome && isFirstMessage && (
          <div className="mt-auto w-full" data-name="Intro chip">
            <div
              className="w-full px-[16px] pb-[16px] pt-[8px] flex flex-col items-end gap-[8px] shrink-0"
            >
              <div
                className="flex w-full justify-end"
                style={{
                  animation: `chatbot-msg-enter-ai 0.55s ${MESSAGE_ENTRY_CURVE} 1800ms both`,
                  transformOrigin: 'bottom right',
                }}
              >
                <SuggestionChipButton
                  text="I don't have a location for my business yet."
                  interactive={false}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MessageInput({ value, onChange, onKeyPress }: { value: string; onChange: (value: string) => void; onKeyPress: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Message Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative size-full">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Type your message..."
            className="w-full bg-transparent outline-none font-['Graphik:Regular'] text-[16px] leading-[24px] text-[#5a5a5a] placeholder:text-[#5a5a5a]"
          />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute inset-[8.33%]" data-name="frame">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.481px] left-1/2 top-1/2 w-[17.99px]" data-name="vector">
        <div className="absolute inset-[-4.29%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4897 18.9813">
            <path d={svgPathsChat.p3a38a900} id="vector" stroke="var(--stroke-0, #228800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SendButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group content-stretch flex items-start p-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors bg-transparent border-none size-[48px]"
      data-name="Send"
    >
      <div className="relative shrink-0 size-[24px]" data-name="send">
        <div className="absolute inset-[8.33%]" data-name="frame">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.481px] left-1/2 top-1/2 w-[17.99px]" data-name="vector">
            <div className="absolute inset-[-4.29%_-4.17%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4897 18.9813">
                <path
                  d={svgPathsChat.p3a38a900}
                  id="vector"
                  className="stroke-[#228800] group-hover:stroke-[#25790B] transition-colors"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function MessageField({ value, onChange, onSend, onKeyPress }: { value: string; onChange: (value: string) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[12px] relative shrink-0 w-full" data-name="Message Field">
      <MessageInput value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <SendButton onClick={onSend} />
    </div>
  );
}

function EntryBox({ value, onChange, onSend, onKeyPress }: { value: string; onChange: (value: string) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="EntryBox">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[12px] px-[16px] relative w-full">
          <MessageField value={value} onChange={onChange} onSend={onSend} onKeyPress={onKeyPress} />
        </div>
      </div>
    </div>
  );
}

function ChatMessageField({ value, onChange, onSend, onKeyPress }: { value: string; onChange: (value: string) => void; onSend: () => void; onKeyPress: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="ChatMessageField">
      <EntryBox value={value} onChange={onChange} onSend={onSend} onKeyPress={onKeyPress} />
    </div>
  );
}

function ChatPanel({
  onClose,
  isOpen,
  onBuySetup,
}: {
  onClose: () => void;
  isOpen: boolean;
  onBuySetup: () => void;
}) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  // Suggestion chips are only visible after the AI has posted location cards
  // (the prototype state from Figma 1:7236). Dismissal flips on the instant
  // the user picks one so the chips collapse before the click-response chain
  // starts playing.
  const [suggestionsDismissed, setSuggestionsDismissed] = useState(false);
  const hasLocations = messages.some((m) => m.locations);
  // The chips should only surface AFTER the location cards have rendered and
  // settled — not simultaneously. A 600 ms delay gives the cards' entry
  // animation time to finish before the chip pair fades in underneath.
  const [suggestionsReady, setSuggestionsReady] = useState(false);
  useEffect(() => {
    if (hasLocations && !suggestionsReady && !suggestionsDismissed) {
      const timer = setTimeout(() => setSuggestionsReady(true), 600);
      return () => clearTimeout(timer);
    }
  }, [hasLocations, suggestionsReady, suggestionsDismissed]);
  const showSuggestions = hasLocations && suggestionsReady;
  // Interactive-bubble clicked states. These flip the corresponding bubble
  // into its "Sent" grey state in place, no separate user-message entry.
  const [continueClicked, setContinueClicked] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [skipClicked, setSkipClicked] = useState(false);
  const [postRecShown, setPostRecShown] = useState(false);
  const [connectClicked, setConnectClicked] = useState(false);
  // Tracks whether the user has clicked Buy on the recommendation card.
  // Used to disable repeat clicks during the 700 ms transition before the
  // chat closes and the page navigates to checkout.
  const [buyClicked, setBuyClicked] = useState(false);
  // Welcome message is mounted lazily — the first time the chat opens we
  // flip this on so the MessageEnter intro animation plays as the chat
  // appears, not at widget mount time (when the user can't see it).
  const [welcomeShown, setWelcomeShown] = useState(false);
  useEffect(() => {
    if (isOpen && !welcomeShown) {
      // Small delay so the chat panel finishes opening first.
      const timer = setTimeout(() => setWelcomeShown(true), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen, welcomeShown]);

  const handleSend = (forcedText?: string) => {
    const userInput = (forcedText ?? inputValue).trim();
    if (userInput && isFirstMessage) {
      const [businessName] = userInput.split(',').map(s => s.trim());

      // Add user message
      setMessages([{ text: userInput, isUser: true }]);
      setInputValue('');
      setIsFirstMessage(false);

      // Show thinking indicator
      setTimeout(() => {
        setMessages(prev => [...prev, { isUser: false, isThinking: true }]);

        // After 2 seconds, replace thinking with location results
        setTimeout(() => {
          const locations: LocationOption[] = [
            {
              name: businessName,
              borough: 'FIDI',
              address: '100 Broadway, New York, NY 10005',
              rating: 4,
              reviews: 142,
              mapUrl: imgMapFidi
            },
            {
              name: businessName,
              borough: 'Brooklyn',
              address: '223 N 8th St, Brooklyn, NY 11249',
              rating: 5,
              reviews: 98,
              mapUrl: imgMapBrooklyn
            }
          ];

          setMessages(prev => prev.filter(m => !m.isThinking).concat([{ isUser: false, locations }]));
        }, 2000);
      }, 500);
    } else if (userInput) {
      // For subsequent messages, just add as regular message
      setMessages(prev => [...prev, { text: userInput, isUser: true }]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Clicking a suggestion chip dismisses the chip group (so the non-clicked
  // option disappears immediately), appends the chosen text as a real user
  // message bubble (its "Sent" state per Figma), then plays the response
  // chain from Figma node 1:7390 SEQUENTIALLY so each element has its own
  // moment to appear:
  //
  //   1. thinking  (~400 ms after click)
  //   2. "Got it." AI text  (replaces thinking after ~1400 ms)
  //   3. sales estimator card  (~900 ms after the text lands, so the
  //      text's MessageEnter + typewriter have time to finish)
  //   4. continue CTA bubble  (~700 ms after the card lands)
  //
  // Each of these is added as a separate state update so its MessageEnter
  // animation plays on its own, creating a visible staircase of elements
  // rather than everything springing in at once.
  const handleSuggestionSelect = (text: string) => {
    setSuggestionsDismissed(true);
    setIsFirstMessage(false);
    setMessages((prev) => [...prev, { text, isUser: true }]);

    // 1. Thinking
    setTimeout(() => {
      setMessages((prev) => [...prev, { isUser: false, isThinking: true }]);

      // 2. Text (replaces thinking)
      setTimeout(() => {
        setMessages((prev) =>
          prev.filter((m) => !m.isThinking).concat([
            {
              isUser: false,
              text: "Got it. Let's estimate your sales so we can recommend the best hardware and rates.",
            },
          ]),
        );

        // 3. Sales estimator card — appears after the text's own intro
        // animation + typewriter settle.
        setTimeout(() => {
          setMessages((prev) => [...prev, { isUser: false, salesEstimator: true }]);

          // 4. Continue CTA — appears after the card lands.
          setTimeout(() => {
            setMessages((prev) => [...prev, { isUser: false, continueCTA: true }]);
          }, 700);
        }, 900);
      }, 1400);
    }, 400);
  };

  // Shared chain used after either "upload photo" or "skip this step" —
  // shows an "Analyzing your setup..." indicator (selling the AI work),
  // then replaces it with the hardware-recommendation AI text + card.
  //
  // When triggered from the upload path (`fromUpload = true`), the
  // analyzing step runs for 2.5 s so the user feels the photo is being
  // processed. When triggered from "Skip this step", it falls back to
  // the simpler thinking indicator with a shorter wait.
  const playRecommendationChain = (fromUpload = false) => {
    if (fromUpload) {
      // Upload path: show "Analyzing your setup..." with progress shimmer.
      // The 4 s hold lets the shimmer bar complete ~2.5 full cycles — long
      // enough for the user to read the label and register "the AI is
      // processing my photo" before the result appears.
      setTimeout(() => {
        setMessages((prev) => [...prev, { isUser: false, analyzingSetup: true }]);
        setTimeout(() => {
          setMessages((prev) =>
            prev.filter((m) => !m.analyzingSetup).concat([
              {
                isUser: false,
                text: "Here's the top hardware setup for coffee shops with your sales volume. Over 76% of similar businesses use this system.",
              },
            ]),
          );
          setTimeout(() => {
            setMessages((prev) => [...prev, { isUser: false, recommendation: true }]);
            // Follow-up "Other recommended plans" carousel slides in
            // after the main rec card has had time to settle, so they
            // read as a sequence rather than a single dump.
            setTimeout(() => {
              setMessages((prev) => [...prev, { isUser: false, otherPlansCarousel: true }]);
            }, 1200);
          }, 900);
        }, 4000);
      }, 400);
    } else {
      // Skip path: standard thinking indicator
      setTimeout(() => {
        setMessages((prev) => [...prev, { isUser: false, isThinking: true }]);
        setTimeout(() => {
          setMessages((prev) =>
            prev.filter((m) => !m.isThinking).concat([
              {
                isUser: false,
                text: "Here's the top hardware setup for coffee shops with your sales volume. Over 76% of similar businesses use this system.",
              },
            ]),
          );
          setTimeout(() => {
            setMessages((prev) => [...prev, { isUser: false, recommendation: true }]);
            // Follow-up "Other recommended plans" carousel slides in
            // after the main rec card has had time to settle, so they
            // read as a sequence rather than a single dump.
            setTimeout(() => {
              setMessages((prev) => [...prev, { isUser: false, otherPlansCarousel: true }]);
            }, 1200);
          }, 900);
        }, 1400);
      }, 400);
    }
  };

  // "Continue" CTA on the sales estimator card. Transforms the Continue
  // bubble in place into its Sent state (no separate user-message entry),
  // then plays the sequential reveal of:
  //   1. thinking indicator            — 400 ms after click
  //   2. AI text asking for a photo    — 1400 ms later
  //   3. FileUploadCard                — 900 ms later
  //   4. Skip this step chip           — 500 ms later
  const handleContinue = () => {
    if (continueClicked) return;
    setContinueClicked(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { isUser: false, isThinking: true }]);
      setTimeout(() => {
        setMessages((prev) =>
          prev.filter((m) => !m.isThinking).concat([
            {
              isUser: false,
              text: 'To ensure compatibility, upload a photo of your current counter setup or POS.',
            },
          ]),
        );
        setTimeout(() => {
          setMessages((prev) => [...prev, { isUser: false, fileUploadCard: true }]);
          setTimeout(() => {
            setMessages((prev) => [...prev, { isUser: false, skipChip: true }]);
          }, 500);
        }, 900);
      }, 1400);
    }, 400);
  };

  // Clicking the upload dropzone auto-fills the Figma-supplied counter
  // photo (drag-and-drop.png). The upload card then shows the image in
  // place of the dashed zone, the now-irrelevant Skip chip is dismissed,
  // and the recommendation chain plays.
  const handleFileUpload = () => {
    if (uploadedImage || skipClicked) return;
    setUploadedImage(imgDragAndDrop);
    setMessages((prev) => prev.filter((m) => !m.skipChip));
    playRecommendationChain(true); // true = from upload, show analyzing state
  };

  // Skip this step — same downstream recommendation chain, but flips
  // `skipClicked` so the Skip chip visibly transitions to its Sent state.
  const handleSkip = () => {
    if (uploadedImage || skipClicked) return;
    setSkipClicked(true);
    playRecommendationChain();
  };

  // Fired once by the RecommendationCard's IntersectionObserver when the
  // user scrolls far enough to see the card's bottom edge. Reveals the
  // pair of follow-up chips as a single message so the gap between them
  // is the tight 8 px suggestion-chip spacing (not 32 px from two p-16
  // bubbles).
  const handleRecBottomReached = () => {
    if (postRecShown) return;
    setPostRecShown(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { isUser: false, postRecChipPair: true }]);
    }, 300);
  };

  // "Connect me to sales." click — transforms the Connect chip in place
  // into its Sent state and reveals the Call Jason sales connect card.
  // The user can still reach checkout via the recommendation card's Buy
  // CTA, so no follow-up "I'm ready to buy this setup." chip is needed.
  const handleConnect = () => {
    if (connectClicked) return;
    setConnectClicked(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { isUser: false, salesConnectCard: true }]);
    }, 500);
  };

  // Buy CTA on the recommendation card — disables itself for 700 ms so
  // the user sees the disabled state while the page transitions to
  // checkout.
  const handleBuyClick = () => {
    if (buyClicked) return;
    setBuyClicked(true);
    setTimeout(() => {
      onBuySetup();
    }, 700);
  };

  return (
    <div
      className={`
        fixed right-[40px] bottom-[40px] bg-white
        content-stretch flex flex-col items-start overflow-clip
        rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)]
        w-[572px] z-50
        ${isOpen ? '' : 'pointer-events-none'}
      `}
      style={{
        // Opacity / height / scale set inline so the transitions actually
        // animate. Tailwind v4 implements `scale-*` via CSS custom
        // properties, which can break `transition: scale` when the class
        // toggles, leaving the panel stuck invisible.
        transformOrigin: 'bottom right',
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 'calc(100vh - 80px)' : '56px',
        transform: isOpen ? 'scale(1)' : 'scale(0.95)',
        transition: [
          'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        ].join(', '),
      }}
      data-name="Chat"
    >
      <TopAppBar onClose={onClose} />
      <MessageContainer
        messages={messages}
        showWelcome={welcomeShown}
        isFirstMessage={isFirstMessage}
        showSuggestions={showSuggestions}
        suggestionsDismissed={suggestionsDismissed}
        continueClicked={continueClicked}
        uploadedImage={uploadedImage}
        skipClicked={skipClicked}
        connectClicked={connectClicked}
        buyClicked={buyClicked}
        onIntroChipSelect={(text) => handleSend(text)}
        onSuggestionSelect={handleSuggestionSelect}
        onContinue={handleContinue}
        onFileUpload={handleFileUpload}
        onSkip={handleSkip}
        onConnect={handleConnect}
        onRecBottomReached={handleRecBottomReached}
        onBuyClick={handleBuyClick}
      />
      {/* Wrap handleSend so React's synthetic MouseEvent isn't passed
          as the `forcedText` arg — the `??` nullish coalescing inside
          handleSend treats the truthy event object as a string and
          .trim() throws, silently killing the first-message flow when
          users click Send instead of pressing Enter. */}
      <ChatMessageField value={inputValue} onChange={setInputValue} onSend={() => handleSend()} onKeyPress={handleKeyPress} />
    </div>
  );
}

/**
 * Central animation sheet. All chatbot keyframes live here so every component
 * in this file draws from the same motion vocabulary.
 *
 * - `chatbot-gradient-flow`  — idle→hover moving gradient on the trigger button.
 * - `chatbot-msg-enter-ai`   — AI message bubble enters with a focus-pull
 *                              (fade + rise + blur→sharp), like a chatbot
 *                              composing a thought.
 * - `chatbot-msg-enter-user` — User message bubble slides in from the right
 *                              with a brief scale pop, like an object being
 *                              set down by the user.
 * - `chatbot-thinking-glow`  — Pulsing halo + subtle breathe on the thinking
 *                              icon, reads as "mental effort".
 * - `chatbot-thinking-text`  — Opacity pulse paired with the glow.
 * - `chatbot-thinking-dot`   — Staggered dot bounce for the typing ellipsis.
 */
function ChatbotAnimations() {
  return (
    <style>{`
      @keyframes chatbot-gradient-flow {
        0%   { background-position:   0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position:   0% 50%; }
      }
      @keyframes chatbot-msg-enter-ai {
        0% {
          opacity: 0;
          transform: translateY(10px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      /* "Flying in" user bubble. Starts far below (where the input box
         lives) and slightly to the right, overshoots the target at 70%,
         then settles. No rotation — purely translational flight. */
      @keyframes chatbot-msg-enter-user {
        0% {
          opacity: 0;
          transform: translate(30px, 120px) scale(0.82);
        }
        40% {
          opacity: 1;
        }
        70% {
          transform: translate(-4px, -3px) scale(1.02);
        }
        100% {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
      }
      /* Word-by-word stream for modern AI response feel */
      @keyframes chatbot-word-stream {
        0% {
          opacity: 0;
          transform: translateY(4px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      /* Location / suggestion cards cascade in with a subtle lift. */
      @keyframes chatbot-card-enter {
        0% {
          opacity: 0;
          transform: translateY(16px) scale(0.94);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @keyframes chatbot-thinking-text {
        0%, 100% { opacity: 0.55; }
        50%      { opacity: 1; }
      }
      /* Shimmer bar for the "Analyzing your setup..." indicator.
         Travels left-to-right across the track, then repeats. */
      @keyframes chatbot-analyzing-shimmer {
        0%   { left: -40%; }
        100% { left: 100%; }
      }
      @keyframes chatbot-thinking-glow {
        0%, 100% {
          box-shadow:
            0 0 0 0 rgba(31, 117, 102, 0.5),
            0 0 16px 2px rgba(31, 117, 102, 0.3);
          transform: scale(1);
        }
        50% {
          box-shadow:
            0 0 0 5px rgba(31, 117, 102, 0.1),
            0 0 22px 4px rgba(31, 117, 102, 0.4);
          transform: scale(1.04);
        }
      }
      @keyframes chatbot-thinking-dot {
        0%, 60%, 100% {
          opacity: 0.3;
          transform: translateY(0) scale(0.85);
        }
        30% {
          opacity: 1;
          transform: translateY(-2px) scale(1);
        }
      }
    `}</style>
  );
}

export function ChatbotWidget({
  onBuySetup,
  collapseOnly = false,
  shown = true,
}: {
  // Fired when the user clicks "Looks good. Buy this setup." inside the
  // chat. The parent (App.tsx) uses this to navigate to the checkout
  // page (Figma node 40000383:6890).
  onBuySetup?: () => void;
  // When true, the trigger button stays in its 80 × 80 collapsed state
  // and the chat panel starts closed — used on the checkout page where
  // the widget should match Figma node 40000383:6971.
  collapseOnly?: boolean;
  // Flipped to true by App once the wrapper signals visibility (or
  // immediately when running standalone). The intro auto-open timer
  // is gated on this so a preloaded but still-hidden iframe doesn't
  // burn the chat-open animation before the user advances in.
  shown?: boolean;
} = {}) {
  const [isOpen, setIsOpen] = useState(false);

  // Intro: on first mount (home page only), hold the 80×80 button for
  // 1 s then auto-open the chat panel. On checkout (`collapseOnly`) the
  // button stays closed and only opens on click. The `shown` gate
  // prevents the timer from firing while the wrapper preloads this
  // iframe in the background.
  useEffect(() => {
    if (collapseOnly) return;
    if (!shown) return;
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, [collapseOnly, shown]);

  // When the user clicks "Buy this setup," immediately close the chat so
  // the ChatButton slides back to its small state as the page swaps.
  const handleBuySetup = () => {
    setIsOpen(false);
    onBuySetup?.();
  };

  return (
    <>
      <ChatbotAnimations />
      <div className="fixed right-[40px] bottom-[40px] z-50">
        <ChatPanel
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          onBuySetup={handleBuySetup}
        />
        <div
          className={isOpen ? 'pointer-events-none' : ''}
          style={{
            transformOrigin: 'bottom right',
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? 'scale(0.9)' : 'scale(1)',
            transition: [
              `opacity 0.6s ${HOVER_CURVE}`,
              `transform 0.6s ${HOVER_CURVE}`,
            ].join(', '),
          }}
        >
          <ChatButton
            onClick={() => setIsOpen(true)}
            collapseOnly={collapseOnly}
          />
        </div>
      </div>
    </>
  );
}
