// ============================================================
// JENNA MARIE ORTEGA — MASTER FILMOGRAPHY
// ============================================================

export const movies = [
  {
    year: "2013",
    title: "Iron Man 3",
    role: "Vice President's daughter",
  },
  {
    year: "2013",
    title: "Insidious: Chapter 2",
    role: "Annie",
  },
  {
    year: "2014",
    title: "The Little Rascals Save the Day",
    role: "Mary Ann",
    notes: "Direct-to-video",
  },
  {
    year: "2015",
    title: "After Words",
    role: "Anna Chapa",
  },
  {
    year: "2018",
    title: "Saving Flora",
    role: "Dawn",
  },
  {
    year: "2019",
    title: "Wyrm",
    role: "Suzie",
  },
  {
    year: "2020",
    title: "The Babysitter: Killer Queen",
    role: "Phoebe Atwell",
  },
  {
    year: "2021",
    title: "Yes Day",
    role: 'Katerina "Katie" Torres',
  },
  {
    year: "2021",
    title: "The Fallout",
    role: "Vada Cavell",
  },
  {
    year: "2022",
    title: "Scream",
    role: "Tara Carpenter",
  },
  {
    year: "2022",
    title: "Studio 666",
    role: "Skye Willow",
  },
  {
    year: "2022",
    title: "X",
    role: "Lorraine Day",
  },
  {
    year: "2022",
    title: "American Carnage",
    role: "Camila Montes",
  },
  {
    year: "2023",
    title: "Scream VI",
    role: "Tara Carpenter",
  },
  {
    year: "2023",
    title: "Finestkind",
    role: "Mabel",
  },
  {
    year: "2024",
    title: "Miller's Girl",
    role: "Cairo Sweet",
  },
  {
    year: "2024",
    title: "Winter Spring Summer or Fall",
    role: "Remi Aguilar",
  },
  {
    year: "2024",
    title: "Beetlejuice Beetlejuice",
    role: "Astrid Deetz",
  },
  {
    year: "2025",
    title: "Death of a Unicorn",
    role: "Ridley Kintner",
    notes: "Also executive producer",
  },
  {
    year: "2025",
    title: "Hurry Up Tomorrow",
    role: "Anima",
  },
  {
    year: "2026",
    title: "The Gallerist",
    role: "Kiki Gorman",
  },
  {
    year: "2026",
    title: "Klara and the Sun",
    role: "Klara",
    notes: "Completed",
  },
  {
    year: "2027",
    title: "The Great Beyond",
    role: "",
    notes: "Post-production",
  },
];


// ============================================================
// TELEVISION / SERIES
// ============================================================

export const series = [
  {
    year: "2012",
    title: "Rob",
    role: "Girl",
    notes: 'Episode: "The Baby Bug"',
  },
  {
    year: "2012",
    title: "CSI: NY",
    role: "Aimee Moore",
    notes: 'Episode: "Unspoken"',
  },
  {
    year: "2013",
    title: "Days of Our Lives",
    role: "Hayley",
    notes: 'Episode: "12062"',
  },
  {
    year: "2014",
    title: "Rake",
    role: "Zoe Leon",
    notes: "Recurring role; 7 episodes",
  },
  {
    year: "2014",
    title: "Over the Garden Wall",
    role: "Additional voices",
    notes: 'Voice role; episode: "Babes in the Wood"',
  },
  {
    year: "2014–2019",
    title: "Jane the Virgin",
    role: "Young Jane Villanueva (age 12)",
    notes: "Recurring role; 30 episodes",
  },
  {
    year: "2015",
    title: "Richie Rich",
    role: "Darcy",
    notes: "Main role; 21 episodes",
  },
  {
    year: "2016",
    title: "Elena and the Secret of Avalor",
    role: "Princess Isabel",
    notes: "Voice role; television film",
  },
  {
    year: "2016–2018",
    title: "Stuck in the Middle",
    role: "Harley Diaz",
    notes: "Main role; 57 episodes",
  },
  {
    year: "2016–2020",
    title: "Elena of Avalor",
    role: "Princess Isabel",
    notes: "Voice role; 39 episodes",
  },
  {
    year: "2018",
    title: "Bizaardvark",
    role: "Izzy",
    notes: 'Episode: "The BFF (Before Frankie Friend)"',
  },
  {
    year: "2019",
    title: "You",
    role: "Ellie Alves",
    notes: "Main role (season 2); 10 episodes",
  },
  {
    year: "2019–2023",
    title: "Big City Greens",
    role: "Gabriella Espinosa",
    notes: "Voice role; 6 episodes",
  },
  {
    year: "2020",
    title: "Home Movie: The Princess Bride",
    role: "Princess Buttercup",
    notes: 'Episode: "Chapter Six: The Fire Swamp"',
  },
  {
    year: "2020–2022",
    title: "Jurassic World Camp Cretaceous",
    role: "Brooklynn",
    notes: "Voice role; 48 episodes",
  },
  {
    year: "2022–present",
    title: "Wednesday",
    role: "Wednesday Addams / Goody Addams",
    notes: "Main role; also producer (season 2)",
  },
  {
    year: "2023",
    title: "Saturday Night Live",
    role: "Herself",
    notes: 'Host; episode: "Jenna Ortega / The 1975"',
  },
];


// ============================================================
// MUSIC APPEARANCES
// ============================================================

export const musicAppearances = [
  {
    year: "2017",
    title: "Chapstick",
    artist: "Jacob Sartorius",
  },
  {
    year: "2024",
    title: "Taste",
    artist: "Sabrina Carpenter",
  },
  {
    year: "2025",
    title: "Drive",
    artist: "The Weeknd",
  },
  {
    year: "",
    title: "Mona Lisa",
    artist: "Elias Rønnenfelt",
  },
];


// ============================================================
// TIMELINE HELPERS
// ============================================================

function getStartYear(year) {
  if (!year) {
    return 9999;
  }

  const match = String(year).match(/\d{4}/);

  return match ? Number(match[0]) : 9999;
}


// ============================================================
// COMPLETE CHRONOLOGICAL ARCHIVE
// ============================================================

export const allAppearances = [
  ...series.map((item) => ({
    ...item,
    type: "SERIES",
  })),

  ...movies.map((item) => ({
    ...item,
    type: "MOVIE",
  })),

  ...musicAppearances.map((item) => ({
    ...item,
    type: "MUSIC",
  })),
].sort((a, b) => {
  return getStartYear(a.year) - getStartYear(b.year);
});