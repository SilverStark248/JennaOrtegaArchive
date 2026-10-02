import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { onlineFilmography } from "../data/onlineArchive";
import { characters } from "../data/characters";
import { events } from "../data/events";
import "./ProjectExplorer.css";

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

export default function ProjectExplorer() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);
  const projects = useMemo(() => onlineFilmography.map((item) => {
    const char = characters.find((c) => normalize(c.project) === normalize(item.title));
    const relatedEvents = events.filter((e) => {
      const title = e.title.toLowerCase();
      const project = item.title.toLowerCase();
      return title.includes(project) || (project === "wednesday" && title.includes("wednesday")) || (project.startsWith("scream") && title.includes("scream"));
    });
    return { ...item, character: char?.character || item.role, relatedEvents };
  }), []);
  const visible = projects.filter((item) => filter === "ALL" || item.type.toUpperCase() === filter);

  return <section className="projects-section" id="projects">
    <div className="section-heading"><span>10</span><div><p>CONNECTED WORK</p><h2>PROJECT EXPLORER</h2></div></div>
    <div className="projects-intro"><p>Move from a title to the role, character record and documented public appearances connected to it.</p><div className="project-filters">{["ALL","FILM","SERIES","VOICE"].map((item)=><button key={item} className={filter===item?"active":""} onClick={()=>setFilter(item)}>{item}</button>)}</div></div>
    <div className="project-grid">{visible.map((item)=><button className="project-card" key={`${item.title}-${item.year}`} onClick={()=>setSelected(item)}><span>{item.year}</span><strong>{item.title}</strong><small>{item.character}</small><i>{item.type} · {item.relatedEvents.length} linked events</i><ArrowUpRight size={17}/></button>)}</div>
    {selected && <div className="project-modal" role="dialog" aria-modal="true" onMouseDown={(e)=>{if(e.target===e.currentTarget)setSelected(null)}}><div className="project-modal-card"><button className="project-modal-close" onClick={()=>setSelected(null)}><X/></button><span>{selected.year} · {selected.type}</span><h3>{selected.title}</h3><p className="project-role">{selected.character}</p><p className="project-note">The connected archive currently contains {selected.relatedEvents.length} documented public appearance{selected.relatedEvents.length===1?"":"s"} whose titles reference this project.</p><div className="project-links"><button onClick={()=>{setSelected(null);document.getElementById("characters")?.scrollIntoView({behavior:"smooth"})}}>VIEW CHARACTER ARCHIVE <ArrowUpRight size={14}/></button><button onClick={()=>{setSelected(null);document.getElementById("events")?.scrollIntoView({behavior:"smooth"})}}>VIEW EVENTS <ArrowUpRight size={14}/></button><a href={selected.source?.url || "https://www.imdb.com/name/nm4911194/?showAllCredits=true"} target="_blank" rel="noreferrer">VERIFY CREDIT <ArrowUpRight size={14}/></a></div>{selected.relatedEvents.length>0&&<div className="project-events"><small>RELATED EVENTS</small>{selected.relatedEvents.slice(0,8).map((event)=><a key={`${event.year}-${event.date}-${event.title}`} href={event.source} target="_blank" rel="noreferrer"><span>{event.year}</span>{event.title}<ArrowUpRight size={13}/></a>)}</div>}</div></div>}
  </section>;
}
