import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { awards } from "../data/awards";
import { events } from "../data/events";
import { onlineFilmography } from "../data/onlineArchive";
import { timelineEvents } from "../data/archive";
import "./MasterTimeline.css";

const eras = [
  { label: "BEGINNING", from: 2012, to: 2015 },
  { label: "GROWTH", from: 2016, to: 2020 },
  { label: "BREAKTHROUGH", from: 2021, to: 2023 },
  { label: "NOW", from: 2024, to: 2027 },
];

const firstYear = (value) => Number(String(value).slice(0, 4));

export default function MasterTimeline() {
  const [selectedEra, setSelectedEra] = useState("ALL");

  const counts = useMemo(() => {
    const map = {};
    onlineFilmography.forEach((item) => { const y = firstYear(item.year); map[y] = map[y] || { credits: 0, events: 0, awards: 0 }; map[y].credits += 1; });
    events.forEach((item) => { const y = Number(item.year); map[y] = map[y] || { credits: 0, events: 0, awards: 0 }; map[y].events += 1; });
    awards.forEach((item) => { const y = Number(item.year); map[y] = map[y] || { credits: 0, events: 0, awards: 0 }; map[y].awards += 1; });
    return map;
  }, []);

  const visible = timelineEvents.filter((item) => {
    if (selectedEra === "ALL") return true;
    const era = eras.find((candidate) => candidate.label === selectedEra);
    return era && Number(item.year) >= era.from && Number(item.year) <= era.to;
  });

  return (
    <section className="timeline-section" id="timeline">
      <div className="section-heading">
        <span>09</span>
        <div><p>THEN → NOW</p><h2>MASTER TIMELINE</h2></div>
      </div>

      <div className="timeline-intro">
        <p>One chronological view connecting the work, recognition and public moments preserved across this archive.</p>
        <div className="timeline-total"><strong>{Object.keys(counts).length}</strong><span>ARCHIVE YEARS</span></div>
      </div>

      <div className="timeline-eras">
        <button className={selectedEra === "ALL" ? "active" : ""} onClick={() => setSelectedEra("ALL")}>ALL</button>
        {eras.map((era) => <button key={era.label} className={selectedEra === era.label ? "active" : ""} onClick={() => setSelectedEra(era.label)}>{era.label}</button>)}
      </div>

      <div className="master-timeline">
        {visible.map((item) => {
          const stat = counts[Number(item.year)] || { credits: 0, events: 0, awards: 0 };
          return (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-line"><span /></div>
              <div className="timeline-copy">
                <div className="timeline-stats"><span>{stat.credits} CREDITS</span><span>{stat.events} EVENTS</span><span>{stat.awards} AWARDS</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
