# Offline mode

This demo runs fully offline once you drop two PMTiles files into `../tiles/`:

```
tiles/
  us-overview.pmtiles    # zooms 0-7,  bbox = continental US
  nyc-metro.pmtiles      # zooms 8-12, bbox = NYC metro
```

When both files are present (and `offline/style.json` is here), `globe-zoom.html` automatically switches from the OpenFreeMap CDN to local tiles. No internet required.

The MapLibre and PMTiles JS libraries are already vendored in `../lib/`, so even those don't fetch from a CDN.

## Why two files

Tile count grows ~4× per zoom level. Splitting by zoom range cuts total size dramatically:

| Coverage | Approx size |
|---|---|
| Whole US, zoom 0-12 | ~3-5 GB |
| US zoom 0-7 + NYC metro zoom 8-12 (this setup) | **~50-150 MB** |
| Same, with POI/housenumber/transit layers stripped | **~30-80 MB** |

## How to generate the files

Three options, easiest to most powerful:

### Option A — protomaps.com builder (web UI, no install)

1. Open <https://protomaps.com/builder>
2. **First file**: bbox `-125, 24, -66, 50` (continental US), zoom range `0–7`. Download as `us-overview.pmtiles`.
3. **Second file**: bbox `-74.20, 40.50, -73.70, 40.95` (NYC metro), zoom range `7–12`. Download as `nyc-metro.pmtiles`.
4. Drop both into `../tiles/`.

### Option B — `tile-join` (if you already have a larger PMTiles)

```sh
# Crop down to just what we need
tile-join -o tiles/us-overview.pmtiles \
  --bounding-box=-125,24,-66,50 \
  --maximum-zoom=7 --minimum-zoom=0 \
  --exclude-layer=poi --exclude-layer=housenumber \
  --exclude-layer=transit --exclude-layer=mountain_peak \
  source.pmtiles

tile-join -o tiles/nyc-metro.pmtiles \
  --bounding-box=-74.20,40.50,-73.70,40.95 \
  --maximum-zoom=12 --minimum-zoom=7 \
  --exclude-layer=poi --exclude-layer=housenumber \
  --exclude-layer=transit --exclude-layer=mountain_peak \
  source.pmtiles
```

### Option C — `planetiler` (build from raw OSM extract)

1. Grab US-Northeast OSM PBF from <https://download.geofabrik.de/north-america/us-northeast.html> (~700 MB).
2. Run [planetiler](https://github.com/onthegomap/planetiler):
   ```sh
   java -jar planetiler.jar --download \
     --area=us-northeast --output=tiles/nyc-metro.pmtiles \
     --bounds=-74.20,40.50,-73.70,40.95 \
     --maxzoom=12
   ```
3. Same approach for the US overview but using the full US OSM extract or `--area=north-america`.

## Verifying offline mode

Open `globe-zoom.html` via `npx http-server . -p 8765`. The status text under the panel should briefly read **"using offline tiles…"**, then settle to "ready — focused on US". With your network disabled, the map will still render.

If the network is up but the local files aren't, the demo silently falls back to OpenFreeMap CDN — so it never breaks.

## What's vendored vs what you provide

| In repo | You add |
|---|---|
| `lib/maplibre-gl.js` (~940 KB) | `tiles/us-overview.pmtiles` |
| `lib/maplibre-gl.css` (~70 KB) | `tiles/nyc-metro.pmtiles` |
| `lib/pmtiles.js` (~20 KB) | |
| `offline/style.json` (~3 KB) | |

Total bundled overhead: ~1 MB. Plus your ~50-150 MB of tiles.

## Glyphs (text rendering)

The included `offline/style.json` references `https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf` for label glyphs. If you need full offline including labels, mirror those PBFs locally and update the `glyphs` URL in `style.json`.
