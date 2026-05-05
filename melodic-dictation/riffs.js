const RIFFS = [
  {
    name: "Smoke on the Water",
    artist: "Deep Purple",
    notes: [
      { midi: 62, dur: 500 },
      { midi: 65, dur: 500 },
      { midi: 67, dur: 900 },
      { midi: 65, dur: 500 },
      { midi: 62, dur: 900 }
    ]
  },
  {
    name: "Seven Nation Army",
    artist: "The White Stripes",
    notes: [
      { midi: 52, dur: 500 },
      { midi: 52, dur: 500 },
      { midi: 55, dur: 500 },
      { midi: 52, dur: 500 },
      { midi: 50, dur: 500 },
      { midi: 48, dur: 500 },
      { midi: 47, dur: 900 }
    ]
  },
  {
    name: "Jaws Theme",
    artist: "John Williams",
    notes: [
      { midi: 52, dur: 400 },
      { midi: 53, dur: 400 },
      { midi: 52, dur: 400 },
      { midi: 53, dur: 400 },
      { midi: 52, dur: 400 },
      { midi: 53, dur: 800 }
    ]
  },
  {
    name: "Mission Impossible Theme",
    artist: "Lalo Schifrin",
    notes: [
      { midi: 64, dur: 300 },
      { midi: 65, dur: 300 },
      { midi: 67, dur: 300 },
      { midi: 69, dur: 300 },
      { midi: 67, dur: 600 },
      { midi: 65, dur: 300 },
      { midi: 64, dur: 600 }
    ]
  },
  {
    name: "Beethoven 5th Symphony",
    artist: "Ludwig van Beethoven",
    notes: [
      { midi: 67, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 63, dur: 900 },
      { midi: 65, dur: 400 },
      { midi: 65, dur: 400 },
      { midi: 65, dur: 400 },
      { midi: 62, dur: 900 }
    ]
  },
  {
    name: "Mary Had a Little Lamb",
    artist: "Traditional",
    notes: [
      { midi: 64, dur: 400 },
      { midi: 62, dur: 400 },
      { midi: 60, dur: 400 },
      { midi: 62, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 64, dur: 800 }
    ]
  },
  {
    name: "Ode to Joy",
    artist: "Ludwig van Beethoven",
    notes: [
      { midi: 64, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 65, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 65, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 62, dur: 800 }
    ]
  },
  {
    name: "Twinkle Twinkle Little Star",
    artist: "Traditional",
    notes: [
      { midi: 60, dur: 400 },
      { midi: 60, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 69, dur: 400 },
      { midi: 69, dur: 400 },
      { midi: 67, dur: 800 }
    ]
  },
  {
    name: "Happy Birthday",
    artist: "Traditional",
    notes: [
      { midi: 60, dur: 400 },
      { midi: 60, dur: 400 },
      { midi: 62, dur: 800 },
      { midi: 60, dur: 800 },
      { midi: 65, dur: 800 },
      { midi: 64, dur: 900 }
    ]
  },
  {
    name: "Frère Jacques",
    artist: "Traditional",
    notes: [
      { midi: 60, dur: 400 },
      { midi: 62, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 60, dur: 400 },
      { midi: 60, dur: 400 },
      { midi: 62, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 60, dur: 800 }
    ]
  },
  {
    name: "Old MacDonald",
    artist: "Traditional",
    notes: [
      { midi: 64, dur: 500 },
      { midi: 64, dur: 500 },
      { midi: 64, dur: 500 },
      { midi: 60, dur: 500 },
      { midi: 62, dur: 500 },
      { midi: 62, dur: 1000 }
    ]
  },
  {
    name: "La Cucaracha",
    artist: "Traditional",
    notes: [
      { midi: 64, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 69, dur: 400 },
      { midi: 67, dur: 800 }
    ]
  },
  {
    name: "Amazing Grace",
    artist: "Traditional",
    notes: [
      { midi: 67, dur: 600 },
      { midi: 64, dur: 600 },
      { midi: 62, dur: 600 },
      { midi: 64, dur: 600 },
      { midi: 67, dur: 600 },
      { midi: 69, dur: 900 }
    ]
  },
  {
    name: "Canon in D (Simplified)",
    artist: "Johann Pachelbel",
    notes: [
      { midi: 62, dur: 500 },
      { midi: 69, dur: 500 },
      { midi: 71, dur: 500 },
      { midi: 66, dur: 500 },
      { midi: 67, dur: 500 },
      { midi: 69, dur: 500 },
      { midi: 62, dur: 900 }
    ]
  },
  {
    name: "Für Elise",
    artist: "Ludwig van Beethoven",
    notes: [
      { midi: 64, dur: 300 },
      { midi: 63, dur: 300 },
      { midi: 64, dur: 300 },
      { midi: 63, dur: 300 },
      { midi: 64, dur: 300 },
      { midi: 59, dur: 300 },
      { midi: 62, dur: 300 },
      { midi: 60, dur: 600 }
    ]
  },
  {
    name: "Imperial March (Star Wars)",
    artist: "John Williams",
    notes: [
      { midi: 50, dur: 600 },
      { midi: 50, dur: 600 },
      { midi: 50, dur: 600 },
      { midi: 46, dur: 450 },
      { midi: 53, dur: 150 },
      { midi: 50, dur: 600 },
      { midi: 46, dur: 450 },
      { midi: 53, dur: 150 }
    ]
  },
  {
    name: "Tetris Theme (Korobeiniki)",
    artist: "Traditional",
    notes: [
      { midi: 64, dur: 300 },
      { midi: 71, dur: 300 },
      { midi: 69, dur: 300 },
      { midi: 67, dur: 300 },
      { midi: 69, dur: 300 },
      { midi: 71, dur: 300 },
      { midi: 64, dur: 600 }
    ]
  },
  {
    name: "Super Mario Bros Theme",
    artist: "Koji Kondo",
    notes: [
      { midi: 76, dur: 200 },
      { midi: 76, dur: 200 },
      { midi: 0,  dur: 200 },
      { midi: 76, dur: 200 },
      { midi: 0,  dur: 200 },
      { midi: 72, dur: 200 },
      { midi: 76, dur: 400 },
      { midi: 79, dur: 400 }
    ]
  },
  {
    name: "Zelda Main Theme",
    artist: "Koji Kondo",
    notes: [
      { midi: 67, dur: 400 },
      { midi: 69, dur: 400 },
      { midi: 71, dur: 400 },
      { midi: 72, dur: 400 },
      { midi: 71, dur: 400 },
      { midi: 69, dur: 400 },
      { midi: 67, dur: 800 }
    ]
  },
  {
    name: "The Simpsons Theme",
    artist: "Danny Elfman",
    notes: [
      { midi: 64, dur: 300 },
      { midi: 66, dur: 300 },
      { midi: 68, dur: 300 },
      { midi: 71, dur: 300 },
      { midi: 68, dur: 300 },
      { midi: 66, dur: 300 },
      { midi: 64, dur: 600 }
    ]
  },
  {
    name: "Hedwig's Theme (Harry Potter)",
    artist: "John Williams",
    notes: [
      { midi: 71, dur: 400 },
      { midi: 76, dur: 400 },
      { midi: 74, dur: 400 },
      { midi: 72, dur: 400 },
      { midi: 67, dur: 800 }
    ]
  },
  {
    name: "Pirates of the Caribbean",
    artist: "Hans Zimmer",
    notes: [
      { midi: 62, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 66, dur: 400 },
      { midi: 67, dur: 400 },
      { midi: 66, dur: 400 },
      { midi: 64, dur: 400 },
      { midi: 62, dur: 800 }
    ]
  },
  {
    name: "James Bond Theme",
    artist: "Monty Norman",
    notes: [
      { midi: 64, dur: 300 },
      { midi: 66, dur: 300 },
      { midi: 68, dur: 300 },
      { midi: 68, dur: 600 },
      { midi: 66, dur: 300 },
      { midi: 64, dur: 600 }
    ]
  },
  {
    name: "Axel F (Beverly Hills Cop)",
    artist: "Harold Faltermeyer",
    notes: [
      { midi: 64, dur: 300 },
      { midi: 67, dur: 300 },
      { midi: 64, dur: 300 },
      { midi: 72, dur: 300 },
      { midi: 71, dur: 300 },
      { midi: 67, dur: 600 }
    ]
  },
  {
    name: "Pink Panther Theme",
    artist: "Henry Mancini",
    notes: [
      { midi: 60, dur: 400 },
      { midi: 63, dur: 400 },
      { midi: 65, dur: 400 },
      { midi: 66, dur: 400 },
      { midi: 65, dur: 400 },
      { midi: 63, dur: 800 }
    ]
  }
];
