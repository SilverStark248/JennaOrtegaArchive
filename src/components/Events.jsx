import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { eventCategories, eventYears, events } from "../data/events";
import "./Events.css";

export default function Events() {
  const [year, setYear] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [query, setQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();

    return events.filter((event) => {
      const yearMatch = year === "ALL" || event.year === year;
      const categoryMatch =
        category === "ALL" || event.category === category;
      const queryMatch =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.category.toLowerCase().includes(q);

      return yearMatch && categoryMatch && queryMatch;
    });
  }, [year, category, query]);

  return (
    <section className="events-section" id="events">
      <div className="section-heading events-heading">
        <span>07</span>

        <div>
          <p>PUBLIC APPEARANCES</p>
          <h2>EVENTS</h2>
        </div>
      </div>

      <div className="events-intro">
        <div>
          <p>
            A chronological record of documented premieres, festivals,
            award shows, fashion events, press appearances and other public
            moments.
          </p>
        </div>

        <div className="events-stat">
          <strong>{events.length}</strong>
          <span>DOCUMENTED EVENTS</span>
        </div>
      </div>

      <div className="events-controls">
        <div className="events-categories">
          {eventCategories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="events-search">
          <Search size={15} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="SEARCH EVENTS"
            aria-label="Search events"
          />
        </label>
      </div>

      <div className="events-years" aria-label="Filter events by year">
        <button
          className={year === "ALL" ? "active" : ""}
          onClick={() => setYear("ALL")}
        >
          ALL YEARS
        </button>

        {eventYears.map((item) => (
          <button
            key={item}
            className={year === item ? "active" : ""}
            onClick={() => setYear(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="events-meta">
        <span>
          SHOWING {filteredEvents.length} / {events.length}
        </span>
        <span>2014 — 2026</span>
      </div>

      <div className="events-list">
        {filteredEvents.map((event, index) => (
          <article className="event-row" key={`${event.year}-${event.date}-${event.title}-${index}`}>
            <div className="event-date">
              <strong>{event.year}</strong>
              <span>{event.date}</span>
            </div>

            <div className="event-marker">
              <span />
            </div>

            <div className="event-info">
              <div className="event-category">{event.category}</div>
              <h3>{event.title}</h3>
            </div>

            <a
              className="event-source"
              href={event.source}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${event.year} appearance archive`}
              title={`Open ${event.year} appearance archive`}
            >
              <ArrowUpRight size={18} />
            </a>
          </article>
        ))}
      </div>

      {!filteredEvents.length && (
        <div className="events-empty">
          <span>NO MATCHES</span>
          <p>Try another year, category or search term.</p>
        </div>
      )}

      <p className="events-source-note">
        Event titles are transcribed from the public-appearance archive used
        as the research baseline. Individual source links open the relevant
        year's public gallery.
      </p>
    </section>
  );
}
