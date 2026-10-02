import { useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { onlineFilmography } from '../data/onlineArchive';
import './OnlineArchive.css';

export default function FilmographyOnline() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const filters = ['All', 'Film', 'Series', 'Voice'];
  const items = useMemo(() => onlineFilmography.filter((item) => {
    const matchesType = filter === 'All' || item.type === filter;
    const haystack = `${item.title} ${item.role} ${item.year}`.toLowerCase();
    return matchesType && haystack.includes(query.toLowerCase());
  }), [filter, query]);
  return <section className="online-section" id="filmography">
    <div className="online-heading"><span>03 / FILMOGRAPHY</span><h2>THE <em>WORK</em></h2><p>Career credits cross-checked against current public filmography databases.</p></div>
    <div className="online-controls">
      <div className="online-filters">{filters.map((f) => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
      <label className="online-search"><Search size={16}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search credits..."/></label>
    </div>
    <div className="film-list">{items.map((item, i) => <article className="film-row" key={`${item.title}-${item.year}-${i}`}>
      <span className="film-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.role}</p></div><span className="film-type">{item.type}</span>
    </article>)}</div>
    <a className="source-link" href="https://www.imdb.com/name/nm4911194/?showAllCredits=true" target="_blank" rel="noreferrer">VERIFY CURRENT CREDIT LIST <ArrowUpRight size={15}/></a>
  </section>;
}
