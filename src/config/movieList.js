const movieList = [
  {
    "title": "Pecadores",
    "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
    "category": ["Terror"],
    "releaseDate": new Date("2025-04-17"),
    "director": "Ryan Coogler",
    "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
    "imageUrl": "https://cinemametropolis.com/wp-content/uploads/2025/01/sinners_ver4_poster.jpg",
    "cast": ["Michael B. Jordan", "Hailee Steinfeld", "Wunmi Mosaku", "Miles Caton", "Jayme Lawson"]
  },
  {
    "title": "De Volta à Ação",
    "description": "Quinze anos depois de abandonar a CIA para formar uma família, os ex-agentes de elite Matt e Emily voltam ao mundo da espionagem ao terem seus disfarces revelados.",
    "category": ["Comédia", "Ação"],
    "releaseDate": new Date("2025-01-17"),
    "director": "Seth Gordon",
    "trailerUrl": "https://youtu.be/3davFh1eoVs?feature=shared",
    "imageUrl": "https://images.justwatch.com/poster/323393660/s718/back-in-action.jpg",
    "cast": ["Cameron Diaz", "Jamie Fox", "Glenn Close", "Leela Owen", "MacKenna Roberts"]
  },
  {
    "title": "Covil de Ladrões 2",
    "description": "O xerife Big Nick O'Brien continua sua perseguição implacável a Donnie Wilson, que consegue escapar para a Europa e está planejando mais um assalto.",
    "category": ["Ação", "Aventura", "Drama", "Suspense", "Policial"],
    "releaseDate": new Date("2025-01-30"),
    "director": "Christian Gudegast",
    "trailerUrl": "https://youtu.be/h8JiP68mnv4?feature=shared",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Wl7QN2rnypuYdjCb7mo0ooH_JcwlfQQtVQYKZ8YOWg4qkRYL",
    "cast": ["Gerard Butler", "50 Cent", "Evin Ahmad", "Ciryl Gane", "Salvatore Esposito"]
  },
  {
    "title": "Capitão América: Admirável Mundo Novo",
    "description": "Sam se vê no meio de um incidente internacional após se encontrar com o Presidente Thaddeus Ross. Ele precisa descobrir a razão por trás de um nefasto complô global antes que o verdadeiro mentor faça o mundo inteiro ver vermelho.",
    "category": ["Ação", "Aventura"],
    "releaseDate": new Date("2025-02-14"),
    "director": "Julius Onah",
    "trailerUrl": "https://youtu.be/U7JG6FMoEdM?feature=shared",
    "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIUfdySawxK4dbASkVb4zNpqEToBFEpHN-fgJciLL1-mnRZwEQ",
    "cast": ["Anthony Mackie", "Harrison Ford", "Giancarlo Esposito", "Shira Haas", "Liv Tyler"]
  },
  {
    "title": "Warlord",
    "description": "A rebelião assoma na velha Lloris quando um xerife implacável e Brute oprimem a cidade. Um jovem humano busca a ajuda mística dos elfos para libertá-los, mas existem segredos.",
    "category": ["Ação", "Aventura"],
    "releaseDate": new Date("2025-05-16"),
    "director": "Stuart Brennan",
    "trailerUrl": "https://youtu.be/e86VThGsXRg?feature=shared",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLQuI0X8NscBlrIWc2OrKShNy9yHMk_SX3uJKP7Z9jLELQTd4Y",
    "cast": ["Billy Boyd", "Ryan Gage", "Stuart Brennan", "Jennifer English"]
  },
  {
    "title": "Resgate Implacável",
    "description": "Levon Cade deixou para trás uma carreira militar nas operações secretas para viver uma vida simples...",
    "category": ["Ação"],
    "releaseDate": new Date("2025-03-27"),
    "director": "David Ayer",
    "trailerUrl": "https://youtu.be/BlIIIN8P0-c?feature=shared",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKSr1umHiBwKhf931iz1V2v1pkddMf7pUbcZo6AjiTt5laNR-d",
    "cast": ["Jason Statham", "Arianna Rivas", "Eve Mauro", "David Harbour", "Michael Peña"]
  },
  {
    "title": "O Macaco",
    "description": "Irmãos gêmeos encontram um misterioso macaco de corda. Após a descoberta, mortes absurdas destroçam a família.",
    "category": ["Terror", "Comédia"],
    "releaseDate": new Date("2025-02-20"),
    "director": "Oz Perkins",
    "trailerUrl": "https://youtu.be/EHs_4zZFfYU?feature=shared",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbl68mzH2TZCeabjVtweRpfU5tNxpIrC85aQGvfJHOZFn1Qwa3",
    "cast": ["Theo James", "Oz Perkins", "Tatiana Maslany", "Rohan Campbell", "Elijah Wood"]
  },
  {
    "title": "Novocaine: À Prova da Dor",
    "description": "A garota dos sonhos de um homem é sequestrada. Ele transforma sua incapacidade de sentir dor em uma vantagem inesperada.",
    "category": ["Ação"],
    "releaseDate": new Date("2025-03-27"),
    "director": "Robert Olsen",
    "trailerUrl": "https://youtu.be/jEwPVZRkpgM?feature=shared",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpqXKThjRrUreH_-_Nfifil9JwALP9mWqCEChrZUK79-7bXcm2",
    "cast": ["Jack Quaid", "Amber Midthunder", "Ray Nicholson", "Jacob Batalon", "Betty Gabriel"]
  },
  {
    "title": "Beekeeper: Rede de Vingança",
    "description": "As ações brutais de vingança de um homem assumem riscos de proporções nacionais quando sua identidade é revelada.",
    "category": ["Ação"],
    "releaseDate": new Date("2024-01-12"),
    "director": "David Ayer",
    "trailerUrl": "https://youtu.be/-po4UGNn9iY?feature=shared",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOcBr-D6ssdw8_55C25HWhWzgOF8DiMn_8P4m7VDG7lYyOJAG7",
    "cast": ["Jason Statham", "Josh Hutcherson", "Minnie Driver", "Jeremy Irons", "Ammy Raver-Lampman"]
  },
  {
    "title": "Atlas",
    "description": "Uma brilhante analista em contraterrorismo precisa confiar na IA para capturar um robô rebelde.",
    "category": ["Ficção Científica", "Ação"],
    "releaseDate": new Date("2024-05-24"),
    "director": "Brad Peyton",
    "trailerUrl": "https://youtu.be/KEbFBusYrsw?feature=shared",
    "imageUrl": "https://i0.wp.com/vertentesdocinema.com/wp-content/uploads/2024/05/bcm2tl5hlsvpbnl8dkp9ie6vu4r.jpg?fit=667%2C1000&ssl=1",
    "cast": ["Jennifer Lopez", "Simu Liu", "Lana Parrilla", "Sterling K. Brown", "Mark Strong"]
  },
  {
    "title": "Deadpool & Wolverine",
    "description": "Wolverine está se recuperando quando cruza seu caminho com Deadpool.",
    "category": ["Ação", "Comédia"],
    "releaseDate": new Date("2025-07-25"),
    "director": "Shawn Levy",
    "trailerUrl": "https://youtu.be/JjnzxHdZtYY?feature=shared",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2a/Deadpool_%26_Wolverine_cartaz.jpg/250px-Deadpool_%26_Wolverine_cartaz.jpg",
    "cast": ["Ryan Reynolds", "Hugh Jackman", "Leslie Uggams", "Emma Corin", "Dafne Keen"]
  },
  {
    "title": "Caos e Destruição",
    "description": "Um roubo de drogas sai do controle e um policial precisa enfrentar o submundo da cidade.",
    "category": ["Ação"],
    "releaseDate": new Date("2025-04-25"),
    "director": "Gareth Evans",
    "trailerUrl": "https://youtu.be/bBd0d-LORLw?feature=shared",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaZ_zyHASsXGuBttpVFpyG7MJaOQSJ3J3vErjw_7D-2ZbPZX14",
    "cast": ["Tom Hardy", "Jessie Mei Li", "Timothy Olyphant", "Forest Whitaker", "Quelin Sepulveda"]
  }
];

module.exports = movieList;