import { ArrowDown, ArrowUpRight } from "lucide-react";
import { awards } from "../data/awards";
import { characters } from "../data/characters";
import { events } from "../data/events";
import { onlineFilmography } from "../data/onlineArchive";
import { moments } from "../data/moments";
import "./ArchiveOverview.css";

const uniqueYears = new Set(
  onlineFilmography.flatMap((item) =>
    String(item.year)
      .split("–")
      .map((year) => Number(year))
      .filter(Boolean),
  ),
).size;

const stats = [
  { value: onlineFilmography.length, label: "CREDITS" },
  { value: characters.length, label: "CHARACTERS" },
  { value: awards.length, label: "AWARD RECORDS" },
  { value: events.length, label: "EVENTS" },
  { value: moments.length, label: "MOMENTS" },
  { value: uniqueYears, label: "YEARS COVERED" },
];

const destinations = [
  ["FILMOGRAPHY", "filmography", "Every documented screen credit in chronological order."],
  ["CHARACTERS", "characters", "Roles, projects and the character image archive."],
  ["EVENTS", "events", "Premieres, awards, festivals, press and public appearances."],
  ["TIMELINE", "timeline", "The career story brought together year by year."],
];

export default function ArchiveOverview() {
  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="archive-overview" id="overview">
      <div className="section-heading">
        <span>02</span>
        <div>
          <p>THE COLLECTION</p>
          <h2>ONE ARCHIVE. MANY STORIES.</h2>
        </div>
      </div>

      <div className="archive-overview-intro">
        <div>
          <p className="archive-overview-lead">
            A living index of the work, people, moments and appearances that
            make up Jenna Marie Ortega&apos;s screen archive.
          </p>
          <p className="archive-overview-copy">
            Browse it chronologically, search it globally, or follow one role
            into the project and events connected to it.
          </p>
        </div>
        <button className="archive-overview-jump" onClick={() => jump("timeline")}>
          ENTER THE TIMELINE <ArrowDown size={16} />
        </button>
      </div>

      <div className="archive-stat-grid">
        {stats.map((stat) => (
          <div className="archive-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="archive-route-grid">
        {destinations.map(([label, id, description]) => (
          <button className="archive-route" key={id} onClick={() => jump(id)}>
            <span>{label}</span>
            <p>{description}</p>
            <ArrowUpRight size={17} />
          </button>
        ))}
      </div>
    </section>
  );
}
