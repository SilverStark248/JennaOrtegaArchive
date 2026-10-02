const yearSources = {
  2014: "https://jennaortega.net/gallery/index.php?cat=48",
  2016: "https://jennaortega.net/gallery/index.php?cat=49",
  2017: "https://jennaortega.net/gallery/index.php?cat=50",
  2018: "https://jennaortega.net/gallery/index.php?cat=51",
  2019: "https://jennaortega.net/gallery/index.php?cat=52",
  2020: "https://jennaortega.net/gallery/index.php?cat=53",
  2022: "https://jennaortega.net/gallery/index.php?cat=54",
  2023: "https://jennaortega.net/gallery/index.php?cat=90",
  2024: "https://jennaortega.net/gallery/index.php?cat=105",
  2025: "https://jennaortega.net/gallery/index.php?cat=109",
  2026: "https://jennaortega.net/gallery/index.php?cat=119",
};

const rawEvents = [
  [
    "2014",
    "December 05",
    "GenerationOn Youth Charity 2nd Annual Holiday Gift Wrapping Party Hosted By PMG"
  ],
  [
    "2016",
    "February 01",
    "Visits the Young Hollywood Studio"
  ],
  [
    "2016",
    "February 04",
    "Bella Thorne Hosts Miss Me And Cosmopolitan's Spring Campaign Launch Event"
  ],
  [
    "2016",
    "March 10",
    "Miracles From Heaven Los Angeles Premiere"
  ],
  [
    "2016",
    "March 14",
    "Jordyn Jones Sweet 16th Birthday Party"
  ],
  [
    "2016",
    "April 04",
    "The Jungle Book Los Angeles Premiere"
  ],
  [
    "2016",
    "April 23",
    "Elena of Avalor Florida Presentation"
  ],
  [
    "2016",
    "April 30",
    "2016 Radio Disney Music Awards"
  ],
  [
    "2016",
    "May 07",
    "A Window Between Worlds Presents Art In The Afternoon"
  ],
  [
    "2016",
    "May 08",
    "City Year Los Angeles Spring Break Event"
  ],
  [
    "2016",
    "June 05",
    "Jenna Ortega Visits Planet Hollywood Times Square"
  ],
  [
    "2016",
    "June 08",
    "Jessica And Jerry Seinfeld Host GOOD Foundation's 2016 Bash"
  ],
  [
    "2016",
    "June 22",
    "Disney Store Celebrates Elena of Avalor Product Launch with Window Unveiling Hosted by Jenna Ortega"
  ],
  [
    "2016",
    "June 23",
    "New York Spectacular Opening Night"
  ],
  [
    "2016",
    "June 27",
    "8th Annual National High School Musical Theatre Awards"
  ],
  [
    "2016",
    "July 05",
    "AOL Build Speaker Series - Jenna Ortega Discusses Jane The Virgin"
  ],
  [
    "2016",
    "July 18",
    "Visits Good Morning America"
  ],
  [
    "2016",
    "July 29",
    "Tiger Beat's Pre-Party Around FOX's Teen Choice Awards"
  ],
  [
    "2016",
    "August 01",
    "Teen Choice Awards 2016"
  ],
  [
    "2016",
    "August 03",
    "Destination - Disney Style Launch Event"
  ],
  [
    "2016",
    "August 08",
    "Pete's Dragon Los Angeles Premiere"
  ],
  [
    "2016",
    "August 19",
    "Just Jared Jr presents the Disney Mix Launch Party in Culver City"
  ],
  [
    "2016",
    "September 09",
    "31st Annual Imagen Awards"
  ],
  [
    "2016",
    "September 24",
    "14th Annual Teen Vogue Young Hollywood With American Eagle Outfitters"
  ],
  [
    "2016",
    "September 25",
    "17th Annual Mattel Party On The Pier"
  ],
  [
    "2016",
    "September 25",
    "Teen Vogue Celebrates 14th Annual Young Hollywood Issue"
  ],
  [
    "2016",
    "September 29",
    "Variety's 10 Latinos To Watch"
  ],
  [
    "2016",
    "October 10",
    "2016 Latino's De Hoy Awards"
  ],
  [
    "2016",
    "October 23",
    "Elizabeth Glaser Pediatric AIDS Foundation A Time For Heroes Family Festival"
  ],
  [
    "2016",
    "October 23",
    "Trolls Los Angeles Premiere"
  ],
  [
    "2016",
    "November 03",
    "Latina Magazine's 20th Anniversary Event Celebrating Hollywood Hot List Honorees"
  ],
  [
    "2016",
    "November 15",
    "AFI FEST 2016 Presented By Audi - Moana Premiere"
  ],
  [
    "2016",
    "November 22",
    "Visits Good Morning America"
  ],
  [
    "2016",
    "December 11",
    "Young Talent Joins generationOn Hasbro and Pallas Management for Toy Wrapping Event"
  ],
  [
    "2017",
    "February 01",
    "Jenna Ortega Visits Young Hollywood Studio"
  ],
  [
    "2017",
    "February 23",
    "14th Annual Global Green Pre-Oscar Gala"
  ],
  [
    "2017",
    "March 02",
    "Before I Fall Los Angeles Premiere"
  ],
  [
    "2017",
    "March 11",
    "Nickelodeon's 2017 Kids Choice Awards"
  ],
  [
    "2017",
    "April 04",
    "Born In China Los Angeles Premiere"
  ],
  [
    "2017",
    "April 05",
    "Gifted Los Angeles Premiere"
  ],
  [
    "2017",
    "April 19",
    "Guardians Of The Galaxy Vol 2 Los Angeles Premiere"
  ],
  [
    "2017",
    "April 21",
    "WE Day at the Key Arena in Seattle"
  ],
  [
    "2017",
    "April 27",
    "harper x Harper's BAZAAR May Issue Event Hosted by The Stallone Sisters and Amanda Weiner Alagem at Mama Shelter Hollywood"
  ],
  [
    "2017",
    "April 27",
    "We Day California 2017"
  ],
  [
    "2017",
    "April 29",
    "2017 Radio Disney Music Awards"
  ],
  [
    "2017",
    "May 03",
    "NYLON Young Hollywood Party At AVENUE Los Angeles"
  ],
  [
    "2017",
    "May 18",
    "Pirates Of The Caribbean - Dead Men Tell No Tales Los Angeles Premiere"
  ],
  [
    "2017",
    "May 21",
    "Captain Underpants - The First Epic Movie Los Angeles Premiere"
  ],
  [
    "2017",
    "June 29",
    "Spider-Man - Homecoming Los Angeles Premiere"
  ],
  [
    "2017",
    "July 11",
    "Descendants 2 Los Angeles Premiere"
  ],
  [
    "2017",
    "August 09",
    "Variety Power Of Young Hollywood"
  ],
  [
    "2017",
    "October 20",
    "Julien's Auctions And Tommy Hilfiger VIP Reception"
  ],
  [
    "2017",
    "October 21",
    "Dream Halloween 2017 Costume Party Benefitting Starlight Children's Foundation"
  ],
  [
    "2017",
    "October 25",
    "PAPER Magazine Runway Benefit For Make-A-Wish Foundation"
  ],
  [
    "2017",
    "November 22",
    "Los Angeles Mission Thanksgiving Meal For The Homeless"
  ],
  [
    "2017",
    "December 10",
    "Star Wars - The Last Jedi Los Angeles Premiere"
  ],
  [
    "2018",
    "February 02",
    "Jenna Ortega Visits Young Hollywood Studio"
  ],
  [
    "2018",
    "February 02",
    "PUMA x Hello Kitty Launch Event At Shoe Palace LA"
  ],
  [
    "2018",
    "February 26",
    "A Wrinkle In Time Los Angeles Premiere"
  ],
  [
    "2018",
    "March 22",
    "boohoo Block Party with Special Guest Zendaya"
  ],
  [
    "2018",
    "March 24",
    "ipsy Gen Beauty Day 1"
  ],
  [
    "2018",
    "March 24",
    "March For Our Lives Los Angeles"
  ],
  [
    "2018",
    "March 24",
    "Nickelodeon's 2018 Kids Choice Awards"
  ],
  [
    "2018",
    "March 26",
    "Ready Player One Los Angeles Premiere"
  ],
  [
    "2018",
    "April 19",
    "WE Day California To Celebrate Young People Changing The World"
  ],
  [
    "2018",
    "April 28",
    "City Year Los Angeles Spring Break - Destination Education"
  ],
  [
    "2018",
    "April 28",
    "Marie Claire's 5th Annual Fresh Faces"
  ],
  [
    "2018",
    "May 11",
    "A Place Called Home's GirlPower Awards Luncheon"
  ],
  [
    "2018",
    "May 22",
    "NYLON's Annual Young Hollywood Party at Avenue Los Angeles"
  ],
  [
    "2018",
    "June 02",
    "Teen Vogue Summit 2018 - TurnUp - Day 2"
  ],
  [
    "2018",
    "June 05",
    "Incredibles 2 Los Angeles Premiere"
  ],
  [
    "2018",
    "June 22",
    "2018 Radio Disney Music Awards"
  ],
  [
    "2018",
    "July 19",
    "David Yurman Pinky Ring Event"
  ],
  [
    "2018",
    "July 31",
    "Christopher Robin Los Angeles Premiere"
  ],
  [
    "2018",
    "August 25",
    "33rd Annual Imagen Awards"
  ],
  [
    "2018",
    "August 29",
    "Variety's Annual Power Of Young Hollywood"
  ],
  [
    "2018",
    "September 26",
    "WE Day UN 2018"
  ],
  [
    "2018",
    "September 29",
    "Eighteen X 18 Presents We Vote Next Summit"
  ],
  [
    "2018",
    "October 02",
    "Venom Los Angeles Premiere"
  ],
  [
    "2018",
    "October 06",
    "Mickey's 90th Spectacular"
  ],
  [
    "2018",
    "October 28",
    "Just Jared's 7th Annual Halloween Party"
  ],
  [
    "2018",
    "October 29",
    "Asher Angel's 16th Birthday Party Celebration"
  ],
  [
    "2018",
    "November 15",
    "The 19th Annual Latin GRAMMY Awards"
  ],
  [
    "2018",
    "November 15",
    "The 19th Annual Latin GRAMMY Awards - Gift Lounge - Day 3"
  ],
  [
    "2018",
    "December 06",
    "YSBNow Hosts Holiday Dinner And Toy Drive"
  ],
  [
    "2019",
    "January 30",
    "Miss Bala Los Angeles Premiere"
  ],
  [
    "2019",
    "February 15",
    "Teen Vogue's Young Hollywood Party"
  ],
  [
    "2019",
    "March 29",
    "Spotify Presents The Billie Eilish Experience"
  ],
  [
    "2019",
    "April 25",
    "Power On Premiere By Straight Up Films With Support From YouTube"
  ],
  [
    "2019",
    "September 08",
    "TOMMYNOW New York Fall 2019"
  ],
  [
    "2019",
    "September 19",
    "2019 WE Day Toronto"
  ],
  [
    "2020",
    "January 05",
    "The 2020 InStyle And Warner Bros 77th Annual Golden Globe Awards Post-Party"
  ],
  [
    "2020",
    "January 11",
    "Visits Young Hollywood Studio"
  ],
  [
    "2020",
    "February 19",
    "Emma Los Angeles Premiere"
  ],
  [
    "2020",
    "February 23",
    "CAA NAACP Image Awards After Party"
  ],
  [
    "2022",
    "May 02",
    "The 2022 Met Gala Celebrating In America - An Anthology of Fashion"
  ],
  [
    "2022",
    "June 05",
    "2022 MTV Movie and TV Awards"
  ],
  [
    "2022",
    "October 02",
    "Paris Fashion Week - Womenswear Spring Summer 2023 - Day Seven"
  ],
  [
    "2022",
    "October 08",
    "New York Comic Con"
  ],
  [
    "2022",
    "October 23",
    "25th SCAD Savannah Film Festival"
  ],
  [
    "2022",
    "November 13",
    "The Critics Choice Association's 2nd Annual Celebration Of Latino Cinema & Television, Proudly Supported By GreenSlate"
  ],
  [
    "2022",
    "November 15",
    "Visits Jimmy Kimmel Live!"
  ],
  [
    "2022",
    "November 16",
    "Wednesday Los Angeles Premiere"
  ],
  [
    "2022",
    "November 21",
    "Visits TODAY"
  ],
  [
    "2022",
    "December 03",
    "CCXP22"
  ],
  [
    "2022",
    "December 16",
    "Visits Tonight Show Starring Jimmy Fallon"
  ],
  [
    "2023",
    "January 08",
    "Netflix Golden Globe and Critics Choice Nominee Toast"
  ],
  [
    "2023",
    "January 10",
    "80th Annual Golden Globe Awards"
  ],
  [
    "2023",
    "January 10",
    "HFPA and Billboard Golden Globes party in Beverly Hills"
  ],
  [
    "2023",
    "January 17",
    "Saint Laurent Winter 2023 Fashion Show in Paris"
  ],
  [
    "2023",
    "February 14",
    "Paris Saint-Germain v FC Bayern Munchen - Round of 16 Leg One - UEFA Champions League"
  ],
  [
    "2023",
    "February 26",
    "29th Annual Screen Actors Guild Awards"
  ],
  [
    "2023",
    "March 04",
    "Nickelodeon Kids Choice Awards 2023"
  ],
  [
    "2023",
    "March 06",
    "Scream VI New York Premiere"
  ],
  [
    "2023",
    "March 09",
    "Visits Tonight Show Starring Jimmy Fallon"
  ],
  [
    "2023",
    "March 11",
    "Visits Saturday Night Live"
  ],
  [
    "2023",
    "April 10",
    "Beau is Afraid Los Angeles Premiere"
  ],
  [
    "2023",
    "April 11",
    "Gris Dior VIP Party"
  ],
  [
    "2023",
    "April 29",
    "Netflix's Wednesday ATAS Official Event Photo Call"
  ],
  [
    "2023",
    "May 01",
    "The 2023 Met Gala Celebrating Karl Lagerfeld - A Line Of Beauty"
  ],
  [
    "2023",
    "May 01",
    "The Standard with Janelle Monae Host the Boom Met Gala After-Party"
  ],
  [
    "2023",
    "September 26",
    "Christian Dior - Paris Fashion Week - Womenswear Spring - Summer 2024"
  ],
  [
    "2023",
    "October 30",
    "Thom Browne's 20th Anniversary Dinner at The Grill"
  ],
  [
    "2023",
    "November 07",
    "Harper's Bazaar Women Of The Year Awards 2023"
  ],
  [
    "2023",
    "December 12",
    "Finestkind Los Angeles Premiere"
  ],
  [
    "2024",
    "January 11",
    "35th Annual Palm Springs International Film Festival: World Premiere Screening Of Miller's Girl"
  ],
  [
    "2024",
    "January 13",
    "MPTF's 17th Annual Evening Before"
  ],
  [
    "2024",
    "January 15",
    "75th Primetime Emmy Awards"
  ],
  [
    "2024",
    "August 13",
    "Beetlejuice Beetlejuice Mexico Photocall"
  ],
  [
    "2024",
    "August 14",
    "Beetlejuice Beetlejuice Mexico Fan Event"
  ],
  [
    "2024",
    "August 17",
    "Beetlejuice Beetlejuice New York Photocall"
  ],
  [
    "2024",
    "August 19",
    "Visits The Today Show"
  ],
  [
    "2024",
    "August 21",
    "Visits Tonight Show Starring Jimmy Fallon"
  ],
  [
    "2024",
    "August 28",
    "The 81st Venice International Film Festival - Beetlejuice Beetlejuice Photocall"
  ],
  [
    "2024",
    "August 28",
    "The 81st Venice International Film Festival - Beetlejuice Beetlejuice Premiere"
  ],
  [
    "2024",
    "August 29",
    "Beetlejuice Beetlejuice London Premiere"
  ],
  [
    "2024",
    "August 30",
    "Beetlejuice Beetlejuice London Photocall"
  ],
  [
    "2025",
    "January 27",
    "Christian Dior - Paris Fashion Week - Haute Couture Spring-Summer 2025"
  ],
  [
    "2025",
    "February 14",
    "Peacock's SNL 50 The Homecoming Concert"
  ],
  [
    "2025",
    "February 16",
    "SNL50: The Anniversary Special"
  ],
  [
    "2025",
    "March 02",
    "2025 Vanity Fair Oscar Party Hosted By Radhika Jones"
  ],
  [
    "2025",
    "March 08",
    "Death Of A Unicorn World Premiere - 2025 SXSW Conference And Festival"
  ],
  [
    "2025",
    "March 11",
    "Death Of A Unicorn New York Screening"
  ],
  [
    "2025",
    "March 11",
    "Death Of A Unicorn New York Screening - After Party"
  ],
  [
    "2025",
    "March 20",
    "Death of a Unicorn LA Special Screening"
  ],
  [
    "2025",
    "March 25",
    "Visits The Late Show With Stephen Colbert"
  ],
  [
    "2025",
    "April 01",
    "CinemaCon 2025 - The State of the Industry and Lionsgate Presentation"
  ],
  [
    "2025",
    "May 05",
    "The 2025 Met Gala Celebrating Superfine Tailoring Black Style"
  ],
  [
    "2025",
    "May 13",
    "Hurry Up Tomorrow World Premiere"
  ],
  [
    "2025",
    "May 13",
    "Hurry Up Tomorrow World Premiere - After Party"
  ],
  [
    "2025",
    "May 31",
    "Netflix Tudum 2025: The Live Event"
  ],
  [
    "2025",
    "July 30",
    "Wednesday Season 2, Part 1 Global Premiere"
  ],
  [
    "2025",
    "July 31",
    "Le Beach Club De Mercredi (Wednesday's Beach Club) Opening"
  ],
  [
    "2025",
    "August 04",
    "Visits Late Night With Seth Meyers"
  ],
  [
    "2025",
    "August 05",
    "Wednesday Season 2, Part 1 New York Fan Screening"
  ],
  [
    "2025",
    "August 10",
    "Wednesday Season 2 Press Tour in Seoul"
  ],
  [
    "2025",
    "August 11",
    "Wednesday Season 2 Promotion Event in Seoul"
  ],
  [
    "2025",
    "August 11",
    "Wednesday Season 2 promotional panel at Ewha Womans University in Seoul"
  ],
  [
    "2025",
    "August 14",
    "Wednesday Season 2 Part 2 Outcast Assembly on Cockatoo Island in Sydney"
  ],
  [
    "2025",
    "August 16",
    "Wednesday Season 2 Part 2 Wednesday Island Fan Event on Cockatoo Island"
  ],
  [
    "2025",
    "August 28",
    "Netflix x Spotify - Wednesday Season 2 Graveyard Gala"
  ],
  [
    "2025",
    "September 14",
    "77th Primetime Emmy Awards"
  ],
  [
    "2025",
    "September 29",
    "Rouge Dior On Stage Party"
  ],
  [
    "2025",
    "October 01",
    "Christian Dior - Paris Fashion Week - Womenswear Spring/Summer 2026"
  ],
  [
    "2025",
    "October 02",
    "Christian Louboutin Loubi Show - Spring/Summer 2026 Paris Fashion Week"
  ],
  [
    "2025",
    "October 03",
    "Givenchy - Paris Fashion Week - Womenswear Spring/Summer 2026"
  ],
  [
    "2025",
    "October 04",
    "Ann Demeulemeester - Paris Fashion Week - Womenswear Spring/Summer 2026"
  ],
  [
    "2025",
    "October 18",
    "5th Annual Academy Museum Gala"
  ],
  [
    "2025",
    "October 23",
    "InStyle Imagemaker Awards 2025"
  ],
  [
    "2025",
    "October 24",
    "Netflix's Frankenstein Los Angeles Tastemaker Screening"
  ],
  [
    "2025",
    "November 09",
    "Netflix's Wednesday FYC Event"
  ],
  [
    "2025",
    "November 11",
    "Netflix's Wednesday SAG Nom Comm"
  ],
  [
    "2025",
    "November 28",
    "22nd Marrakech International Film Festival - Opening Ceremony"
  ],
  [
    "2025",
    "November 29",
    "22nd Marrakech International Film Festival - Jury Press Conference"
  ],
  [
    "2025",
    "November 29",
    "22nd Marrakech International Film Festival - Day Two"
  ],
  [
    "2025",
    "December 06",
    "22nd Marrakech International Film Festival - Closing Ceremony"
  ],
  [
    "2026",
    "January 11",
    "83rd Annual Golden Globe Awards"
  ],
  [
    "2026",
    "January 24",
    "2026 Sundance Film Festival - The Gallerist Premiere"
  ],
  [
    "2026",
    "January 24",
    "IndieWire Studio Presented by Dropbox at Sundance - Day 2"
  ],
  [
    "2026",
    "March 01",
    "32nd Annual Actor Awards"
  ],
  [
    "2026",
    "May 22",
    "Netflix's Wednesday Emmys FYSEE Event"
  ]
];

const categoryFor = (title) => {
  const t = title.toLowerCase();

  if (
    t.includes("fashion week") ||
    t.includes("dior") ||
    t.includes("louboutin") ||
    t.includes("givenchy") ||
    t.includes("thom browne") ||
    t.includes("puma") ||
    t.includes("boohoo") ||
    t.includes("tommy") ||
    t.includes("ysbnow")
  ) return "FASHION";

  if (
    t.includes("premiere") ||
    t.includes("screening") ||
    t.includes("festival") ||
    t.includes("cinemacon") ||
    t.includes("tudum") ||
    t.includes("ccxp") ||
    t.includes("comic con") ||
    t.includes("fan event") ||
    t.includes("promotion") ||
    t.includes("photocall") ||
    t.includes("photo call") ||
    t.includes("assembly")
  ) return "FILM & TV";

  if (
    t.includes("golden globe") ||
    t.includes("emmy") ||
    t.includes("actor awards") ||
    t.includes("sag") ||
    t.includes("imagen") ||
    t.includes("kids choice") ||
    t.includes("mtv") ||
    t.includes("grammy") ||
    t.includes("choice awards") ||
    t.includes("awards")
  ) return "AWARDS";

  if (
    t.includes("visits ") ||
    t.includes("tonight show") ||
    t.includes("late show") ||
    t.includes("late night") ||
    t.includes("good morning") ||
    t.includes("today") ||
    t.includes("saturday night live") ||
    t.includes("build speaker")
  ) return "PRESS";

  return "OTHER";
};

export const events = rawEvents.map(([year, date, title]) => ({
  year: String(year),
  date,
  title,
  category: categoryFor(title),
  source: yearSources[year],
}));

export const eventYears = [...new Set(events.map((event) => event.year))].sort(
  (a, b) => Number(a) - Number(b)
);

export const eventCategories = ["ALL", "FILM & TV", "AWARDS", "FASHION", "PRESS", "OTHER"];
