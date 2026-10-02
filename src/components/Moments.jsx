import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { moments } from "../data/moments";
import "./Moments.css";

export default function Moments() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <section className="moments-section" id="moments">
    <div className="section-heading"><span>11</span><div><p>TWENTY CHAPTERS</p><h2>20 MOMENTS</h2></div></div>
    <div className="moments-intro"><p>A separate visual collection of twenty moments created for this archive — a more personal companion to the chronological record.</p><span>20 / 20</span></div>
    <div className="moments-grid">
      {moments.map((moment) => <button className="moment-card" key={moment.day} onClick={() => setSelected(moment)}>
        <img src={moment.image} alt={`Day ${moment.day}: ${moment.title}`} loading="lazy" />
        <div className="moment-shade" />
        <div className="moment-number">{String(moment.day).padStart(2, "0")}</div>
        <div className="moment-copy"><span>DAY {moment.day}</span><strong>{moment.title}</strong></div>
        <ArrowUpRight className="moment-arrow" size={17}/>
      </button>)}
    </div>
    {selected && <div className="moment-viewer" role="dialog" aria-modal="true" onMouseDown={(e)=>{if(e.target===e.currentTarget)setSelected(null)}}><button className="moment-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><div className="moment-viewer-card">{selected.video ? <video src={selected.video} poster={selected.image} controls playsInline /> : <img src={selected.image} alt={`Day ${selected.day}: ${selected.title}`} />}<div><span>DAY {selected.day}</span><h3>{selected.title}</h3></div></div></div>}
  </section>;
}
