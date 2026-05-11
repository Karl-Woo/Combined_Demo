# Clover Combined Demo

A single linear walkthrough that strings the three Clover agent demos
into one continuous experience:

1. **Clover Agentic Commerce** — consumer-facing AI booking & payment
2. **Clover Agent Assistant** — merchant morning briefing & actions
3. **Clover Agent Boarding** — new-merchant guided setup

Each demo is preceded by an intro title card. A translucent **Next**
button floats at the bottom-center of every demo so you can advance
whenever you want — the underlying demos are not strictly linear, so
the wrapper drives progression.

## Self-contained

All three demos live inside this project — there is no dependency on
sibling folders. You can copy `Combined_Demo/` anywhere and it will
run as long as you have a static file server and (for the Onboard
demo) a Node toolchain if you ever want to rebuild it.

```
Combined_Demo/
├── index.html                       wrapper UI
├── styles.css                       wrapper styles
├── app.js                           sequence logic
├── README.md                        you are here
└── demos/
    ├── agentic-commerce/            full source (HTML/CSS/JS, fonts, assets)
    ├── agent-assistant/             full source (HTML/CSS/JS, fonts, assets)
    └── agent-boarding/              Vite/React source + pre-built dist/
        ├── src/                     source
        ├── dist/                    pre-built output the wrapper iframes
        └── README.md                build instructions
```

The Onboard demo is shipped pre-built (`demos/agent-boarding/dist/`)
so you don't need Node just to run the walkthrough. If you want to
modify it and rebuild:

```bash
cd demos/agent-boarding
npm i
npm run build
```

## Running locally

Any static file server pointed at this directory works.

```bash
# from the Combined_Demo directory
python3 -m http.server 5180
# → http://localhost:5180
```

Or:

```bash
npx http-server . -p 5180 -c-1 --silent
# → http://localhost:5180
```

> Opening `index.html` directly via `file://` will not work — browsers
> block iframe loading from the local filesystem. You need a real
> HTTP server.

## Controls

- **Start demo** — buttons on each intro card
- **Next** — bottom-center pill, advances to the next intro/demo
- **Finish** — same button on the final demo, lands on the end card
- **Restart from the top** — on the end card, resets all iframes
- **Keyboard** — `→` advances, `←` steps back

## How it works

- `index.html` stacks intro screens and demo `<iframe>`s in a single
  `.stage`; only the `.active` screen is visible at a time.
- `app.js` drives the linear sequence and lazy-loads each iframe the
  first time its demo is shown. State (chat history, selections,
  etc.) is preserved if the user navigates back; on restart all
  iframes are reset to a clean state.
- `styles.css` defines the intro cards and the floating Next pill.

## Updating a demo

The three demos under `demos/` are full copies — not git submodules
and not symlinks. To pull in upstream changes from one of the source
repos:

```bash
# example: refresh Agentic Commerce from origin
cd ../Agentic_commerce && git pull
cd -
rsync -a --delete \
  --exclude='.git' --exclude='.DS_Store' --exclude='.claude' \
  ../Agentic_commerce/ demos/agentic-commerce/

# for Onboard, also rebuild the dist:
cd demos/agent-boarding && npm run build && cd -
```
