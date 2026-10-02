const commons = (file) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(
    file
  )}`;

const commonsPage = (file) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const gallery = [
  /* =========================================================
     CHARACTER ARCHIVE
     ========================================================= */

  {
    id: "char-001",
    type: "character",
    category: "Characters",
    year: "2012",
    title: "Girl",
    project: "Rob",
    role: "Girl",
    era: "Early Career",
    image: null,
    credit: "",
    description: "Jenna Ortega's early television role in Rob.",
  },

  {
    id: "char-002",
    type: "character",
    category: "Characters",
    year: "2012",
    title: "Aimee Moore",
    project: "CSI: NY",
    role: "Aimee Moore",
    era: "Early Career",
    image: null,
    credit: "",
    description: "Jenna Ortega as Aimee Moore in CSI: NY.",
  },

  {
    id: "char-003",
    type: "character",
    category: "Characters",
    year: "2013",
    title: "Hayley",
    project: "Days of Our Lives",
    role: "Hayley",
    era: "Early Career",
    image: null,
    credit: "",
    description: "Jenna Ortega as Hayley in Days of Our Lives.",
  },

  {
    id: "char-004",
    type: "character",
    category: "Characters",
    year: "2013",
    title: "Little Girl",
    project: "Deadtime Stories",
    role: "Little Girl",
    era: "Early Career",
    image: null,
    credit: "",
    description: "Jenna Ortega in Deadtime Stories.",
  },

  {
    id: "char-005",
    type: "character",
    category: "Characters",
    year: "2013",
    title: "Vice President's Daughter",
    project: "Iron Man 3",
    role: "Vice President's Daughter",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega's early film appearance in Iron Man 3.",
  },

  {
    id: "char-006",
    type: "character",
    category: "Characters",
    year: "2013",
    title: "Annie",
    project: "Insidious: Chapter 2",
    role: "Annie",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Annie in Insidious: Chapter 2.",
  },

  {
    id: "char-007",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Zoe Leon",
    project: "Rake",
    role: "Zoe Leon",
    era: "Early Career",
    image: null,
    credit: "",
    description: "Jenna Ortega as Zoe Leon in Rake.",
  },

  {
    id: "char-008",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Young Jane",
    project: "Jane the Virgin",
    role: "Young Jane Villanueva",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega portrayed the younger Jane Villanueva.",
  },

  {
    id: "char-009",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Mary Ann",
    project: "The Little Rascals Save the Day",
    role: "Mary Ann",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Mary Ann in The Little Rascals Save the Day.",
  },

  {
    id: "char-010",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Nina",
    project: "Know It All Nina",
    role: "Nina",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega played the titular Nina in the DreamWorks TV web series.",
  },

  {
    id: "char-011",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Nita",
    project: "The Cookie Mobster",
    role: "Nita",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Nita in The Cookie Mobster.",
  },

  {
    id: "char-012",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Princess Sleigha",
    project: "OMG!",
    role: "Princess Sleigha",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Princess Sleigha.",
  },

  {
    id: "char-013",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Girl",
    project: "Young Love",
    role: "Girl",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega's appearance in the short Young Love.",
  },

  {
    id: "char-014",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Additional Voices",
    project: "Over the Garden Wall",
    role: "Additional Voices",
    era: "Voice Work",
    image: null,
    credit: "",
    description:
      "Jenna Ortega contributed additional voice work to Over the Garden Wall.",
  },

  {
    id: "char-015",
    type: "character",
    category: "Characters",
    year: "2014",
    title: "Lily",
    project: "AwesomenessTV",
    role: "Lily",
    era: "Early Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Lily in AwesomenessTV.",
  },

  {
    id: "char-016",
    type: "character",
    category: "Characters",
    year: "2015",
    title: "Darcy",
    project: "Richie Rich",
    role: "Darcy",
    era: "Disney / Family",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Darcy in Richie Rich.",
  },

  {
    id: "char-017",
    type: "character",
    category: "Characters",
    year: "2015",
    title: "Anna Chapa",
    project: "After Words",
    role: "Anna Chapa",
    era: "Early Film Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Anna Chapa in After Words.",
  },

  {
    id: "char-018",
    type: "character",
    category: "Characters",
    year: "2015",
    title: "Elena Mendoza",
    project:
      "The Massively Mixed-Up Middle School Mystery",
    role: "Elena Mendoza",
    era: "Early Film Career",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Elena Mendoza.",
  },

  {
    id: "char-019",
    type: "character",
    category: "Characters",
    year: "2016",
    title: "Harley Diaz",
    project: "Stuck in the Middle",
    role: "Harley Diaz",
    era: "Disney Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega's breakthrough Disney Channel role as Harley Diaz.",
  },

  {
    id: "char-020",
    type: "character",
    category: "Characters",
    year: "2016",
    title: "Princess Isabel",
    project: "Elena of Avalor",
    role: "Princess Isabel",
    era: "Voice Work",
    image: null,
    credit: "",
    description:
      "Jenna Ortega voiced Princess Isabel in Elena of Avalor.",
  },

  {
    id: "char-021",
    type: "character",
    category: "Characters",
    year: "2017",
    title: "Harley Diaz",
    project: "Stuck In The Waterpark",
    role: "Harley Diaz",
    era: "Disney Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega reprised Harley Diaz in the Stuck in the Middle special.",
  },

  {
    id: "char-022",
    type: "character",
    category: "Characters",
    year: "2018",
    title: "Izzy",
    project: "Bizaardvark",
    role: "Izzy",
    era: "Disney Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Izzy in Bizaardvark.",
  },

  {
    id: "char-023",
    type: "character",
    category: "Characters",
    year: "2018",
    title: "Elena",
    project: "Man of the House",
    role: "Elena",
    era: "Teen Years",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Elena in Man of the House.",
  },

  {
    id: "char-024",
    type: "character",
    category: "Characters",
    year: "2018",
    title: "Dawn",
    project: "Saving Flora",
    role: "Dawn",
    era: "Teen Years",
    image: null,
    credit: "",
    description:
      "Jenna Ortega's first starring film role as Dawn.",
  },

  {
    id: "char-025",
    type: "character",
    category: "Characters",
    year: "2019",
    title: "Ellie Alves",
    project: "You",
    role: "Ellie Alves",
    era: "Netflix Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Ellie Alves in You.",
  },

  {
    id: "char-026",
    type: "character",
    category: "Characters",
    year: "2019",
    title: "Suzie",
    project: "Wyrm",
    role: "Suzie",
    era: "Teen Years",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Suzie in Wyrm.",
  },

  {
    id: "char-027",
    type: "character",
    category: "Characters",
    year: "2019",
    title: "Olivia",
    project: "Girl Code",
    role: "Olivia",
    era: "Teen Years",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Olivia in the short film Girl Code.",
  },

  {
    id: "char-028",
    type: "character",
    category: "Characters",
    year: "2019",
    title: "Gabriella Espinosa",
    project: "Big City Greens",
    role: "Gabriella Espinosa",
    era: "Voice Work",
    image: null,
    credit: "",
    description:
      "Jenna Ortega voiced Gabriella Espinosa in Big City Greens.",
  },

  {
    id: "char-029",
    type: "character",
    category: "Characters",
    year: "2020",
    title: "Phoebe Atwell",
    project: "The Babysitter: Killer Queen",
    role: "Phoebe Atwell",
    era: "Horror Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Phoebe Atwell.",
  },

  {
    id: "char-030",
    type: "character",
    category: "Characters",
    year: "2020",
    title: "Brooklynn",
    project: "Jurassic World: Camp Cretaceous",
    role: "Brooklynn",
    era: "Voice Work",
    image: null,
    credit: "",
    description:
      "Jenna Ortega voiced Brooklynn in Jurassic World: Camp Cretaceous.",
  },

  {
    id: "char-031",
    type: "character",
    category: "Characters",
    year: "2020",
    title: "Princess Buttercup",
    project: "Home Movie: The Princess Bride",
    role: "Princess Buttercup",
    era: "2020",
    image: null,
    credit: "",
    description:
      "Jenna Ortega portrayed Princess Buttercup in Home Movie: The Princess Bride.",
  },

  {
    id: "char-032",
    type: "character",
    category: "Characters",
    year: "2021",
    title: "Katie Torres",
    project: "Yes Day",
    role: "Katie Torres",
    era: "Netflix / Film",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Katie Torres in Yes Day.",
  },

  {
    id: "char-033",
    type: "character",
    category: "Characters",
    year: "2021",
    title: "Vada Cavell",
    project: "The Fallout",
    role: "Vada Cavell",
    era: "Breakthrough Drama",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Vada Cavell in The Fallout.",
  },

  {
    id: "char-034",
    type: "character",
    category: "Characters",
    year: "2022",
    title: "Tara Carpenter",
    project: "Scream",
    role: "Tara Carpenter",
    era: "Horror Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Tara Carpenter in Scream.",
  },

  {
    id: "char-035",
    type: "character",
    category: "Characters",
    year: "2022",
    title: "Lorraine Day",
    project: "X",
    role: "Lorraine Day",
    era: "Horror Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Lorraine Day in X.",
  },

  {
    id: "char-036",
    type: "character",
    category: "Characters",
    year: "2022",
    title: "Skye Willow",
    project: "Studio 666",
    role: "Skye Willow",
    era: "Horror Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Skye Willow in Studio 666.",
  },

  {
    id: "char-037",
    type: "character",
    category: "Characters",
    year: "2022",
    title: "Camila Montes",
    project: "American Carnage",
    role: "Camila Montes",
    era: "Horror Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Camila Montes in American Carnage.",
  },

  {
    id: "char-038",
    type: "character",
    category: "Characters",
    year: "2022",
    title: "Wednesday Addams",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Wednesday Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Wednesday Addams.",
  },

  {
    id: "char-039",
    type: "character",
    category: "Characters",
    year: "2022",
    title: "Goody Addams",
    project: "Wednesday",
    role: "Goody Addams",
    era: "Wednesday Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega also portrays Goody Addams in Wednesday.",
  },

  {
    id: "char-040",
    type: "character",
    category: "Characters",
    year: "2023",
    title: "Tara Carpenter",
    project: "Scream VI",
    role: "Tara Carpenter",
    era: "Horror Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega reprises Tara Carpenter in Scream VI.",
  },

  {
    id: "char-041",
    type: "character",
    category: "Characters",
    year: "2023",
    title: "Mabel",
    project: "Finestkind",
    role: "Mabel",
    era: "Film",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Mabel in Finestkind.",
  },

  {
    id: "char-042",
    type: "character",
    category: "Characters",
    year: "2024",
    title: "Cairo Sweet",
    project: "Miller's Girl",
    role: "Cairo Sweet",
    era: "Film",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Cairo Sweet in Miller's Girl.",
  },

  {
    id: "char-043",
    type: "character",
    category: "Characters",
    year: "2024",
    title: "Remi Aguilar",
    project: "Winter Spring Summer or Fall",
    role: "Remi Aguilar",
    era: "Film",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Remi Aguilar.",
  },

  {
    id: "char-044",
    type: "character",
    category: "Characters",
    year: "2024",
    title: "Astrid Deetz",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons("Beetlejuice, Beetlejuice-06550.jpg"),
    source: commonsPage("Beetlejuice, Beetlejuice-06550.jpg"),
    credit: "Wikimedia Commons",
    description:
      "Jenna Ortega as Astrid Deetz in Beetlejuice Beetlejuice.",
  },

  {
    id: "char-045",
    type: "character",
    category: "Characters",
    year: "2025",
    title: "Ridley Kintner",
    project: "Death of a Unicorn",
    role: "Ridley Kintner",
    era: "2025 Film Era",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Ridley Kintner in Death of a Unicorn.",
  },

  {
    id: "char-046",
    type: "character",
    category: "Characters",
    year: "2025",
    title: "Anima",
    project: "Hurry Up Tomorrow",
    role: "Anima",
    era: "Hurry Up Tomorrow",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Anima in Hurry Up Tomorrow.",
  },

  {
    id: "char-047",
    type: "character",
    category: "Characters",
    year: "2025",
    title: "Anima",
    project: "The Weeknd: Drive",
    role: "Anima",
    era: "Music Video",
    image: null,
    credit: "",
    description:
      "Jenna Ortega reprises Anima in The Weeknd's Drive music video.",
  },

  {
    id: "char-048",
    type: "character",
    category: "Characters",
    year: "2026",
    title: "Kiki Gorman",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Kiki Gorman in The Gallerist.",
  },

  {
    id: "char-049",
    type: "character",
    category: "Characters",
    year: "2026",
    title: "Klara",
    project: "Klara and the Sun",
    role: "Klara",
    era: "2026",
    image: null,
    credit: "",
    description:
      "Jenna Ortega as Klara in Klara and the Sun.",
  },

  {
    id: "char-050",
    type: "character",
    category: "Characters",
    year: "2027",
    title: "Mia",
    project: "Shutout",
    role: "Mia",
    era: "Upcoming",
    image: null,
    credit: "",
    description:
      "Upcoming role currently listed as Mia.",
  },

  /* =========================================================
     MUSIC VIDEO CHARACTERS
     ========================================================= */

  {
    id: "music-001",
    type: "music",
    category: "Music",
    year: "2017",
    title: "Jenna Ortega",
    project: "Jacob Sartorius — Chapstick",
    role: "Music Video Appearance",
    era: "Teen Years",
    image: null,
    credit: "",
    description:
      "Jenna Ortega appears in Jacob Sartorius's Chapstick music video.",
  },

  {
    id: "music-002",
    type: "music",
    category: "Music",
    year: "2024",
    title: "Girlfriend",
    project: "Sabrina Carpenter — Taste",
    role: "Girlfriend",
    era: "2024",
    image: null,
    credit: "",
    description:
      "Jenna Ortega portrays Girlfriend in Sabrina Carpenter's Taste music video.",
  },

  {
    id: "music-003",
    type: "music",
    category: "Music",
    year: "2025",
    title: "Anima",
    project: "The Weeknd — Drive",
    role: "Anima",
    era: "Hurry Up Tomorrow",
    image: null,
    credit: "",
    description:
      "Anima appears in the Drive music video connected to Hurry Up Tomorrow.",
  },

  /* =========================================================
     WEDNESDAY ARCHIVE
     ========================================================= */

  {
    id: "wed-001",
    type: "series",
    category: "Wednesday",
    year: "2022",
    title: "Wednesday NYCC",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 1",
    image: commons("Wednesday_NYCC_2022_1.jpg"),
    source: commonsPage("Wednesday_NYCC_2022_1.jpg"),
    credit: "Chris Roth / Wikimedia Commons",
    description:
      "Jenna Ortega with the Wednesday cast at New York Comic Con 2022.",
  },

  {
    id: "wed-002",
    type: "series",
    category: "Wednesday",
    year: "2025",
    title: "Wednesday Season 2 Press",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons("Jenna Ortega 2025 (1).png"),
    source: commonsPage("Jenna Ortega 2025 (1).png"),
    credit: "TV10 / Wikimedia Commons",
    description:
      "Jenna Ortega during Wednesday Season 2 promotion.",
  },

  {
    id: "wed-003",
    type: "series",
    category: "Wednesday",
    year: "2025",
    title: "Wednesday Season 2 Press",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons("Jenna Ortega 2025 (2).png"),
    source: commonsPage("Jenna Ortega 2025 (2).png"),
    credit: "TV10 / Wikimedia Commons",
    description:
      "Jenna Ortega during Wednesday Season 2 press activities.",
  },

  {
    id: "wed-004",
    type: "series",
    category: "Wednesday",
    year: "2025",
    title: "Wednesday Season 2 Interview",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons("Jenna Ortega 2025 (4).png"),
    source: commonsPage("Jenna Ortega 2025 (4).png"),
    credit: "Irene Suwandi / Wikimedia Commons",
    description:
      "Jenna Ortega during a Season 2 interview.",
  },

  {
    id: "wed-005",
    type: "series",
    category: "Wednesday",
    year: "2025",
    title: "Wednesday Cast Interview",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons("Wednesday cast interview 2025 (4).png"),
    source: commonsPage(
      "Wednesday cast interview 2025 (4).png"
    ),
    credit: "Irene Suwandi / Wikimedia Commons",
    description:
      "Jenna Ortega and Emma Myers during Wednesday Season 2 promotion.",
  },

  {
    id: "wed-006",
    type: "series",
    category: "Wednesday",
    year: "2025",
    title: "Wednesday Season 2 Promotion",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons("Jenna Ortega 2025.jpg"),
    source: commonsPage("Jenna Ortega 2025.jpg"),
    credit: "Margaret Gardiner / Wikimedia Commons",
    description:
      "Jenna Ortega promoting Wednesday Season 2.",
  },

  {
    id: "wed-007",
    type: "series",
    category: "Wednesday",
    year: "2025",
    title: "Wednesday Season 2 Promotion",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons(
      "Jenna Ortega and Catherine Zeta-Jones 2025 promoting Wednesday.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega and Catherine Zeta-Jones 2025 promoting Wednesday.jpg"
    ),
    credit: "Margaret Gardiner / Wikimedia Commons",
    description:
      "Jenna Ortega and Catherine Zeta-Jones promoting Wednesday Season 2.",
  },

  /* =========================================================
     FILM / EVENT ARCHIVE
     ========================================================= */

  {
    id: "film-001",
    type: "film",
    category: "Films",
    year: "2024",
    title: "Beetlejuice Beetlejuice",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons(
      "Jenna Ortega at 2024 Venice International Film Festival.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at 2024 Venice International Film Festival.jpg"
    ),
    credit: "Ariela Ortiz-Barrantes / WikiPortraits",
    description:
      "Jenna Ortega at the Venice International Film Festival for the Beetlejuice Beetlejuice premiere.",
  },

  {
    id: "film-002",
    type: "film",
    category: "Films",
    year: "2024",
    title: "Beetlejuice Beetlejuice",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons("Jenna Ortega-63792.jpg"),
    source: commonsPage("Jenna Ortega-63792.jpg"),
    credit: "Harald Krichel / WikiPortraits",
    description:
      "Jenna Ortega during the 2024 Venice Film Festival.",
  },

  {
    id: "film-003",
    type: "film",
    category: "Films",
    year: "2024",
    title: "Beetlejuice Beetlejuice",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons("Jenna Ortega-63800.jpg"),
    source: commonsPage("Jenna Ortega-63800.jpg"),
    credit: "Harald Krichel / WikiPortraits",
    description:
      "Jenna Ortega photographed during the Beetlejuice Beetlejuice premiere period.",
  },

  {
    id: "film-004",
    type: "film",
    category: "Films",
    year: "2024",
    title: "Beetlejuice Beetlejuice",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons("Jenna Ortega-63824.jpg"),
    source: commonsPage("Jenna Ortega-63824.jpg"),
    credit: "Harald Krichel / WikiPortraits",
    description:
      "Jenna Ortega during the 2024 Venice Film Festival.",
  },

  {
    id: "film-005",
    type: "film",
    category: "Films",
    year: "2026",
    title: "The Gallerist",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the Premiere of The Gallerist.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the Premiere of The Gallerist.jpg"
    ),
    credit: "Colleen Sturtevant / WikiPortraits",
    description:
      "Jenna Ortega at The Gallerist premiere at Sundance 2026.",
  },

  /* =========================================================
     SUNDANCE 2026
     ========================================================= */

  {
    id: "event-001",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 01.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 01.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-002",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 02.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 02.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-003",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 03.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 03.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-004",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 04.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 04.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-005",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 05.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 05.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-006",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 06.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 06.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-007",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 07.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 07.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at Sundance 2026.",
  },

  {
    id: "event-008",
    type: "event",
    category: "Events",
    year: "2026",
    title: "The Gallerist Premiere",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the Premiere of The Gallerist.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the Premiere of The Gallerist.jpg"
    ),
    credit: "Colleen Sturtevant / WikiPortraits",
    description:
      "Jenna Ortega at The Gallerist premiere.",
  },

  {
    id: "event-009",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Portrait",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 10.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 10.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega during Sundance 2026.",
  },

  {
    id: "event-010",
    type: "event",
    category: "Events",
    year: "2026",
    title: "Sundance Film Festival",
    project: "The Gallerist",
    role: "Kiki Gorman",
    era: "2026",
    image: commons(
      "Jenna Ortega at the 2026 Sundance Film Festival 11.jpg"
    ),
    source: commonsPage(
      "Jenna Ortega at the 2026 Sundance Film Festival 11.jpg"
    ),
    credit: "Gabriel Brooks / WikiPortraits",
    description:
      "Jenna Ortega at the 2026 Sundance Film Festival for The Gallerist.",
  },

  /* =========================================================
     PORTRAITS
     ========================================================= */

  {
    id: "portrait-001",
    type: "portrait",
    category: "Portraits",
    year: "2024",
    title: "Venice Portrait",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons("Jenna Ortega-63799.jpg"),
    source: commonsPage("Jenna Ortega-63799.jpg"),
    credit: "Wikimedia Commons",
    description:
      "Portrait of Jenna Ortega during the 2024 Venice Film Festival.",
  },

  {
    id: "portrait-002",
    type: "portrait",
    category: "Portraits",
    year: "2024",
    title: "Venice Portrait",
    project: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
    era: "Beetlejuice Era",
    image: commons("Jenna Ortega-63824.jpg"),
    source: commonsPage("Jenna Ortega-63824.jpg"),
    credit: "Harald Krichel / WikiPortraits",
    description:
      "Jenna Ortega at the 2024 Venice Film Festival.",
  },

  {
    id: "portrait-003",
    type: "portrait",
    category: "Portraits",
    year: "2025",
    title: "Wednesday Season 2 Portrait",
    project: "Wednesday",
    role: "Wednesday Addams",
    era: "Season 2",
    image: commons("Jenna Ortega 2025 (5).png"),
    source: commonsPage("Jenna Ortega 2025 (5).png"),
    credit: "Margaret Gardiner / Wikimedia Commons",
    description:
      "Jenna Ortega during Wednesday Season 2 promotion.",
  },
];

export default gallery;