# Tiles directory

Drop two PMTiles files here to enable offline mode:

- `us-overview.pmtiles` — zooms 0-7, bbox = continental US
- `nyc-metro.pmtiles` — zooms 7-12, bbox = NYC metro (-74.20, 40.50, -73.70, 40.95)

See [`../offline/README.md`](../offline/README.md) for how to generate them.

When both files are present, `globe-zoom.html` automatically uses them instead of the OpenFreeMap CDN. With both files missing, the demo falls back to online tiles transparently.
