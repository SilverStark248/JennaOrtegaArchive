import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { onlineFilmography, onlineGallerySources } from "../data/onlineArchive";
import { awards } from "../data/awards";
import { events } from "../data/events";
import { characters } from "../data/characters";
import { moments } from "../data/moments";
import { timelineEvents } from "../data/archive";
import "./ArchiveSearch.css";

const searchable = [
  ...onlineFilmography.map((item) => ({
    type: "WORK",
    title: item.title,
    meta: `${item.year} · ${item.role}`,
    id: "filmography",
    text: `${item.title} ${item.role} ${item.year} ${item.type}`,
  })),
  ...characters.map((item) => ({
    type: "CHARACTER",
    title: item.character,
    meta: `${item.project} · ${item.year}`,
    id: "characters",
    text: `${item.character} ${item.project} ${item.year}`,
  })),
  ...awards.map((item) => ({
    type: "AWARD",
    title: item.award,
    meta: `${item.year} · ${item.category || "Category not listed"}`,
    id: "awards",
    text: `${item.award} ${item.category} ${item.work} ${item.year} ${item.result}`,
  })),
  ...events.map((item) => ({
    type: "EVENT",
    title: item.title,
    meta: `${item.year} · ${item.category}`,
    id: "events",
    text: `${item.title} ${item.category} ${item.year} ${item.date}`,
  })),
  ...moments.map((item) => ({
    type: "MOMENT",
    title: item.title,
    meta: `Day ${item.day}`,
    id: "moments",
    text: `${item.title} ${item.day}`,
  })),
  ...timelineEvents.map((item) => ({
    type: "TIMELINE",
    title: item.title,
    meta: `${item.year} · ${item.description}`,
    id: "timeline",
    text: `${item.title} ${item.description} ${item.year}`,
  })),
  ...onlineGallerySources.map((item) => ({
    type: "SOURCE",
    title: item.title,
    meta: `${item.category} · ${item.count}`,
    id: "archive",
    text: `${item.title} ${item.category} ${item.description} ${item.count}`,
  })),
];

export default function ArchiveSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const typing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;

      if ((event.key === "/" || (event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey))) && !typing) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const terms = q.split(/\s+/).filter(Boolean);
    return searchable
      .filter((item) => terms.every((term) => item.text.toLowerCase().includes(term)))
      .slice(0, 50);
  }, [query]);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <button className="global-search-trigger" onClick={() => setOpen(true)} aria-label="Search the archive">
        <Search size={15} />
        <span>SEARCH</span>
        <kbd>/</kbd>
      </button>

      {open && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Global archive search">
          <div className="search-panel">
            <button className="search-close" onClick={() => setOpen(false)} aria-label="Close search"><X /></button>
            <span className="search-kicker">JMO / GLOBAL ARCHIVE SEARCH</span>
            <h2>FIND <em>ANYTHING.</em></h2>
            <label className="search-input">
              <Search size={18} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Character, film, event, award, year..."
              />
            </label>
            <div className="search-results">
              {!query && <p className="search-hint">Search credits, characters, awards, events, moments, timeline entries and online sources.</p>}
              {query && !results.length && <p className="search-hint">No matches found. Try a shorter search.</p>}
              {results.map((item, index) => (
                <button className="search-result" key={`${item.type}-${item.title}-${index}`} onClick={() => jump(item.id)}>
                  <span className="search-result-type">{item.type}</span>
                  <div><strong>{item.title}</strong><small>{item.meta}</small></div>
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
