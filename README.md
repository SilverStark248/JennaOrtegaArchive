# Jenna Ortega Archive — Expanded Edition

A cinematic fan-made archive dedicated to Jenna Marie Ortega.

## Included

- Filmography — film, television and music appearances
- Awards & nominations
- Character archive with the supplied local character photography
- Online gallery/source index
- Events — 181 documented public-appearance records from the research baseline, 2014–2026
- Career timeline
- Master timeline connecting career milestones with yearly credit/event/award counts
- Project Explorer connecting titles, characters and related documented events
- Global archive search across works, characters, awards and events
- 20 Moments — the supplied Day 1–20 visual collection, with video playback where available
- Letter — the personal closing section of the archive
- Responsive cinematic dark UI

## Run

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Notes

The Events section uses the documented public-appearance archive as its research baseline. Event titles and source links remain tied to the relevant year archive rather than being invented or inferred.

The Characters section uses the local character photographs supplied for this project.

The 20 Moments section uses the media supplied in the separate `20 Jenna` archive and converts HEIC stills to browser-friendly JPEG files. Video entries retain their MP4 files and use generated poster frames.

## Latest archive improvements

This build adds a curated Archive Overview, a calendar-based live age counter with years/months/days/hours/minutes/seconds, expanded global search, keyboard shortcuts (`/` or `Ctrl/Cmd + K`), and quick routes into the connected archive sections.

The Events section remains a separate chronological public-appearance layer, while Characters, Filmography, Gallery, Moments, Timeline, Projects and Letter retain their own purposes.
