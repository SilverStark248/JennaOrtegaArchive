import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { characters } from "../data/characters";
import "./CharactersUpdate.css";

const filters = ["All", "Film", "Series", "Voice"];

export default function Characters() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return characters.filter((item) => {
      const matchesFilter = filter === "All" || item.type === filter;
      const matchesQuery =
        !q ||
        item.character.toLowerCase().includes(q) ||
        item.project.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const selectedIndex = selected
    ? filtered.findIndex((item) => item.id === selected.id)
    : -1;

  const go = useCallback((direction) => {
    if (!filtered.length) return;
    const next =
      (selectedIndex + direction + filtered.length) % filtered.length;
    setSelected(filtered[next]);
  }, [filtered, selectedIndex]);

  const selectedImages = selected?.images?.length
    ? selected.images
    : selected
      ? [selected.image]
      : [];

  useEffect(() => {
    const onKey = (event) => {
      if (!selected) return;
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, go]);

  return (
    <section id="characters" className="characters-update">
      <div className="section-kicker">04 / THE ROLES</div>
      <div className="characters-update-heading">
        <div>
          <h2>CHARACTERS</h2>
          <p>
            A visual archive of Jenna Marie Ortega's photographed screen
            characters — now using the local images you've collected.
          </p>
        </div>
        <span className="characters-update-count">
          {filtered.length.toString().padStart(2, "0")} ROLES · 38 PHOTOS
        </span>
      </div>

      <div className="characters-update-toolbar">
        <div className="characters-update-filters">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="characters-update-search">
          <Search size={14} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH CHARACTERS / PROJECTS"
          />
        </label>
      </div>

      <div className="characters-update-grid">
        {filtered.map((item, index) => (
          <button
            className="character-update-card"
            key={item.id}
            onClick={() => { setSelected(item); setSelectedImage(0); }}
          >
            <div className="character-update-media">
              <img
                src={item.image}
                alt={`${item.character} — ${item.project}`}
                loading="lazy"
                decoding="async"
              />
              <div className="character-update-overlay" />
              <div className="character-update-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ArrowUpRight size={17} />
              </div>
              <div className="character-update-bottom">
                <span>{item.year}</span>
                <strong>{item.character}</strong>
                <small>{item.project}</small>
              </div>
            </div>
          </button>
        ))}
      </div>

      {!filtered.length && (
        <div className="characters-update-empty">NO MATCHES FOUND</div>
      )}

      {selected && (
        <div
          className="character-update-viewer"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <button
            className="character-update-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <button
            className="character-update-nav left"
            onClick={() => go(-1)}
            aria-label="Previous character"
          >
            <ArrowLeft />
          </button>

          <div className="character-update-viewer-card">
            <div className="character-update-viewer-image">
              <img
                src={selectedImages[selectedImage] || selected.image}
                alt={`${selected.character} — ${selected.project}`}
              />
            </div>
            <div className="character-update-viewer-info">
              <span>{selected.year}</span>
              <small>{selected.type}</small>
              <h3>{selected.character}</h3>
              <p>{selected.project}</p>
              {selectedImages.length > 1 && (
                <div className="character-update-thumbs" aria-label="Character photos">
                  {selectedImages.map((src, index) => (
                    <button
                      key={src}
                      className={selectedImage === index ? "active" : ""}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View photo ${index + 1}`}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="character-update-nav right"
            onClick={() => go(1)}
            aria-label="Next character"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}
