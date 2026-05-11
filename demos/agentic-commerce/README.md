# Agentic Commerce — Tablet Demo

A click-through prototype that tells a single story: an AI assistant
(Gemini) and a merchant point-of-sale (Clover) closing the loop on a
real-world commerce flow — discovery, booking, payment, and merchant
acceptance — all without the user leaving the conversation.

The demo is meant for stakeholder walkthroughs and partner pitches.
It runs entirely in the browser as static HTML/CSS/JS — no build step,
no backend, no JS framework.

## What it shows

The session opens on a live map of the US speckled with Clover
merchant dots, dives into lower Manhattan to focus on a single
merchant, and "blooms" out of that dot into the merchant view.
From there two iPads share the stage and hand off to each other as
the story progresses:

- **Consumer side — Gemini tablet (Chrome).** Sam plans an anniversary,
  asks Gemini for help, and is shown a Clover merchant card for Jack's
  Barber Shop with bookable slots. After confirming the booking they
  return to plan flowers, get a Blooming Affairs card with a bouquet,
  pay via an agentic checkout drawer (Apple Pay / PayPal / Visa+MC),
  then see a Google Maps walking route stitching the day together
  (Work → Barber → Florist → Home).
- **Merchant side — Clover tablet.** Jack's Barber Shop appointments
  dashboard receives the request as an "Appointment Requests" drawer
  the moment the consumer books; tapping **Accept** confirms the slot
  and pulses the row green. Later, the same tablet flips to the
  Blooming Affairs Florist orders dashboard and the new florist order
  drops in from the right with a highlight animation.

At the end, the camera retraces its path back out to the US view
while every offline merchant dot turns green in a radial wave —
a closing visual for "the whole network is now online."

Together the two views illustrate the agentic-commerce thesis:
discovery and intent live with the AI assistant, fulfillment and
acceptance live with the merchant, and the handoff between them is
fast enough to feel like one experience.

## Architecture

- **Map intro / outro** — a fixed MapLibre map (US view with sized
  metro dots + rural offline dots) frames the demo. The intro is a
  two-phase camera dive (linear pan to center the chosen dot,
  cubic-ease zoom into it) plus an expanding white "portal" dot
  whose `width`/`height` is driven by JS so the 1 px border stays
  crisp at every size. The outro is the same animation played in
  reverse, followed by sequential green waves over the NYC and US
  offline dots (radiating outward from the focal merchant).
- **Tablet stage** — two `.ipad` slots side-by-side inside a
  `.tablet-stage` that slides horizontally to swap focus between
  consumer and merchant. The inactive tablet stays mounted off-screen
  so transitions are instant.
- **Design canvases** — each tablet has a fixed design canvas (Gemini
  1366×954, merchant 1194×810) wrapped in a real iPad bezel image. JS
  scales the canvas uniformly to fit the viewport, so the layout
  stays pixel-correct on any screen.
- **Click-driven state machine** — the conversation, slot picker,
  checkout drawer, merchant accept, and view handoffs are all driven
  by clicks against a small turn-based state machine. Tablet
  transitions, modal slide-down, dot pulse, and check-row reveals
  are CSS keyframes; the map dive + sequential dot reveal + green
  waves are rAF loops that update GeoJSON feature properties and
  call `setData` to push the changes.
- **MapLibre + PMTiles** — `lib/maplibre-gl.{js,css}` and
  `lib/pmtiles.js` are vendored locally. The intro map tries the
  bundled PMTiles + offline style first; if any of them are missing
  it falls back to OpenFreeMap tiles. See [`offline/README.md`](offline/README.md)
  and [`tiles/README.md`](tiles/README.md) for the offline setup.
- **Assets** — everything is local: `asset/Bezel.png`,
  `asset/avatar.png`, payment-brand PNGs, Figma exports under
  `asset/icons/` (florist storefront, bouquet, Google Maps route,
  merchant dashboard chrome, Gemini sparkle), and the Graphik /
  Roboto / Google Sans font families.

## Demo flow

1. **Intro map.** Page lands on a US-wide map with online (green)
   and offline (white) Clover merchant dots. Click anywhere → camera
   pans/zooms into lower Manhattan, the focused dot pulses with halos
   while NYC dots fade in sequentially, then the dot expands to fill
   the screen and the merchant homepage appears behind the receding
   white field.
2. **"Show store online" modal.** On the homepage, flip the toggle
   → three "Inventory updated / Schedule live / Online payments"
   rows fade in → after a one-second hold the modal slides down off
   the bottom edge of the tablet, and the gray indicator dot next
   to **Blooming Affairs Florist** pops green and starts pulsing.
3. Click the **Ask Gemini** input → typewriter sends the anniversary
   prompt → bulleted reply.
4. Click again → "trip to the barber" → Clover merchant card with
   slot picker.
5. Pick a slot, click **Book** → silent calendar-confirmation reply.
6. Click anywhere → handoff to the merchant tablet (Jack's Barber).
   The "Appointment Requests" drawer slides in; click **Accept** to
   confirm Sam Lufton's 2 PM haircut (card pulses green, status icon
   swaps to a checkmark).
7. Click anywhere → handoff back to Gemini.
8. Click the input again → florist conversation → Blooming Affairs
   card + bouquet "Order now".
9. Click **Order now** → checkout drawer with payment options →
   **Complete checkout**. Drawer closes, button swaps to **Purchased**,
   Gemini follows up with a route map (Work → Barber → Florist →
   Home).
10. Click anywhere → second handoff to the merchant tablet, this time
    showing the Blooming Affairs Florist orders dashboard. The Sam
    Lufton row drops in from the right with a highlight animation.
11. **Outro.** A few seconds after the florist row settles, the next
    click rewinds the intro: white field shrinks back to a green
    merchant dot, the camera zooms out to Manhattan, NYC offline
    dots turn green sequentially. Another click → `flyTo` back to
    the US view; US rural dots then turn green in a radial wave
    closing on the focal merchant.

## Local preview

```bash
npx http-server . -p 5184 -c-1 --silent
# → http://localhost:5184
```

Or just open `index.html` directly in a browser.
