import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

import AgeCounter from "./components/AgeCounter";
import Filmography from "./components/Filmography";
import Awards from "./components/Awards";
import Characters from "./components/Characters";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Events from "./components/Events";
import MasterTimeline from "./components/MasterTimeline";
import ProjectExplorer from "./components/ProjectExplorer";
import ArchiveSearch from "./components/ArchiveSearch";
import Moments from "./components/Moments";
import ArchiveOverview from "./components/ArchiveOverview";

/*
  ONLINE-SOURCED CAREER TIMELINE

  Information is based on current online filmography/archive sources.
  Keep Characters separate because its photographs are user-supplied.
*/

const careerTimeline = [
  {
    year: "2012",
    title: "Screen Debut",
    text:
      "Jenna Ortega began her professional screen career with early television and film appearances.",
  },
  {
    year: "2013",
    title: "Iron Man 3 · Insidious: Chapter 2",
    text:
      "Her early film work included appearances in Iron Man 3 and Insidious: Chapter 2.",
  },
  {
    year: "2014",
    title: "Jane the Virgin",
    text:
      "Ortega joined Jane the Virgin as Young Jane Villanueva, alongside several other early projects.",
  },
  {
    year: "2016",
    title: "Stuck in the Middle",
    text:
      "She took the lead role of Harley Diaz in Disney Channel's Stuck in the Middle.",
  },
  {
    year: "2019",
    title: "You",
    text:
      "Ortega appeared as Ellie Alves in the second season of You.",
  },
  {
    year: "2021",
    title: "The Fallout",
    text:
      "She starred as Vada Cavell in The Fallout, a performance that became an important part of her film career.",
  },
  {
    year: "2022",
    title: "Wednesday",
    text:
      "Ortega began playing Wednesday Addams in Netflix's Wednesday, also portraying Goody Addams.",
  },
  {
    year: "2022",
    title: "Scream · X · Studio 666",
    text:
      "Her 2022 film work included Scream, X and Studio 666.",
  },
  {
    year: "2023",
    title: "Scream VI",
    text:
      "She returned as Tara Carpenter in Scream VI.",
  },
  {
    year: "2024",
    title: "Beetlejuice Beetlejuice",
    text:
      "Ortega played Astrid Deetz in Tim Burton's Beetlejuice Beetlejuice.",
  },
  {
    year: "2025",
    title: "Death of a Unicorn · Hurry Up Tomorrow",
    text:
      "Her 2025 film credits included Death of a Unicorn and Hurry Up Tomorrow.",
  },
  {
    year: "2026",
    title: "The Gallerist · Klara and the Sun",
    text:
      "Current filmography sources list The Gallerist and Klara and the Sun among her 2026 projects.",
  },
  {
    year: "2027",
    title: "The Great Beyond",
    text:
      "Current filmography listings identify The Great Beyond among her upcoming credits.",
  },
];

const onlineArchive = [
  {
    title: "Film Productions",
    count: "154 albums",
    description:
      "Production stills, screen captures, posters and behind-the-scenes material.",
    url: "https://jennaortega.net/gallery/index.php?cat=3",
  },
  {
    title: "Television Shows",
    count: "216 albums",
    description:
      "Television production photographs, captures and related material.",
    url: "https://jennaortega.net/gallery/",
  },
  {
    title: "Public Appearances",
    count: "181 albums",
    description:
      "Premieres, award shows, festivals and public appearances.",
    url: "https://jennaortega.net/gallery/",
  },
  {
    title: "Studio Photoshoots",
    count: "170 albums",
    description:
      "Professional portraits, magazine shoots and studio photography.",
    url: "https://jennaortega.net/gallery/",
  },
];

function CareerTimeline() {
  return (
    <section className="career-section" id="career">
      <div className="section-heading">
        <span>08</span>

        <div>
          <p>THE JOURNEY</p>
          <h2>CAREER TIMELINE</h2>
        </div>
      </div>

      <div className="career-timeline">
        {careerTimeline.map((item, index) => (
          <article
            className="career-item"
            key={`${item.year}-${index}`}
          >
            <div className="career-year">
              {item.year}
            </div>

            <div className="career-marker">
              <span />
            </div>

            <div className="career-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function OnlineArchive() {
  return (
    <section className="online-archive-section" id="archive">
      <div className="section-heading">
        <span>12</span>

        <div>
          <p>ONLINE SOURCES</p>
          <h2>THE ARCHIVE</h2>
        </div>
      </div>

      <div className="online-archive-intro">
        <p>
          Explore publicly available online archives covering
          Jenna Marie Ortega's productions, television work,
          appearances and photography.
        </p>
      </div>

      <div className="online-archive-grid">
        {onlineArchive.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="online-archive-card"
            key={item.title}
          >
            <div className="online-archive-top">
              <span>{item.count}</span>
              <ArrowUpRight size={20} />
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="online-archive-link">
              VIEW ONLINE ARCHIVE
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollTo("home")}
        >
          JMO<span>.</span>
        </button>

        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >
          <button onClick={() => scrollTo("home")}>
            HOME
          </button>

          <button onClick={() => scrollTo("about")}>
            ABOUT
          </button>

          <button onClick={() => scrollTo("overview")}>
            OVERVIEW
          </button>

          <button onClick={() => scrollTo("filmography")}>
            FILMOGRAPHY
          </button>

          <button onClick={() => scrollTo("age")}>
            AGE
          </button>

          <button onClick={() => scrollTo("awards")}>
            AWARDS
          </button>

          <button onClick={() => scrollTo("characters")}>
            CHARACTERS
          </button>

          <button onClick={() => scrollTo("gallery")}>
            GALLERY
          </button>

          <button onClick={() => scrollTo("events")}>
            EVENTS
          </button>

          <button onClick={() => scrollTo("timeline")}>
            TIMELINE
          </button>

          <button onClick={() => scrollTo("projects")}>
            PROJECTS
          </button>

          <button onClick={() => scrollTo("moments")}>
            MOMENTS
          </button>

          <button onClick={() => scrollTo("career")}>
            CAREER
          </button>

          <button onClick={() => scrollTo("archive")}>
            ARCHIVE
          </button>

          <button onClick={() => scrollTo("letter")}>
            LETTER
          </button>
        </nav>

        <ArchiveSearch />

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-background">
            <div className="hero-glow" />
            <div className="hero-grid" />
          </div>

          <div className="hero-content">
            <div className="hero-small">
              THE CINEMATIC ARCHIVE
            </div>

            <h1 className="hero-title">
              <span className="hero-line">
                JENNA
              </span>

              <span className="hero-marie">
                Marie
              </span>

              <span className="hero-line">
                ORTEGA
              </span>
            </h1>

            <p className="hero-description">
              Actress · Producer · Performer
            </p>

            <button
              className="explore-button"
              onClick={() => scrollTo("filmography")}
            >
              EXPLORE THE ARCHIVE
              <ArrowDown size={18} />
            </button>
          </div>

          <div className="hero-number">
            24
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="about-section"
          id="about"
        >
          <div className="section-heading">
            <span>01</span>

            <div>
              <p>THE PERSON</p>
              <h2>JENNA MARIE ORTEGA</h2>
            </div>
          </div>

          <div className="about-layout">
            <div className="about-intro">
              <p>
                An evolving archive dedicated to the
                screen work, characters and creative
                career of Jenna Marie Ortega.
              </p>
            </div>

            <div className="about-details">
              <div>
                <span>BORN</span>
                <strong>September 27, 2002</strong>
              </div>

              <div>
                <span>KNOWN FOR</span>
                <strong>Wednesday Addams</strong>
              </div>

              <div>
                <span>ARCHIVE</span>
                <strong>
                  Film · Television · Music
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHIVE OVERVIEW */}
        <ArchiveOverview />

        {/* AGE */}
        <AgeCounter />

        {/* FILMOGRAPHY */}
        <Filmography />

        {/* AWARDS */}
        <Awards />

        {/* CHARACTERS */}
        <Characters />

        {/* GALLERY */}
        <Gallery />

        {/* EVENTS */}
        <Events />

        {/* CAREER */}
        <CareerTimeline />

        {/* MASTER TIMELINE */}
        <MasterTimeline />

        {/* PROJECT CONNECTIONS */}
        <ProjectExplorer />

        {/* MOMENTS */}
        <Moments />

        {/* ONLINE ARCHIVE */}
        <OnlineArchive />

        {/* LETTER */}
        <Letter />
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>
            JENNA MARIE ORTEGA
          </strong>

          <span>
            CINEMATIC ARCHIVE
          </span>
        </div>

        <p>
          A fan-made archival project.
        </p>
      </footer>
    </div>
  );
}