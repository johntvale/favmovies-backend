const movieList = [
  {
    "title": "Pecadores",
    "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
    "category": ["Terror"],
    "releaseDate": new Date("2025-04-17"),
    "director": "Ryan Coogler",
    "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
    "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRH5fGI3NC5QC3BJZ42w2diBR6tAYPZO-75WOTFU1_zDRtv78D",
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
  },
  {
    "title": "Tenet",
    "description": 'Christopher Nolan apresenta este thriller de ficção científica sobre a manipulação do fluxo do tempo. Com apenas a palavra “Tenet” como pista, o Protagonista (John David Washington) deve impedir uma catástrofe global no futuro',
    "category": ["Ação", "Ficção Científica"],
    "releaseDate": new Date("2020-10-29"),
    "director": "Christopher Nolan",
    "trailerUrl": "https://www.youtube.com/watch?v=ASTU3rFyOm4",
    "imageUrl": "https://br.web.img3.acsta.net/c_310_420/pictures/20/05/19/20/45/1889845.jpg",
    "cast": ["John David Washington", "Kenneth Branagh", "Robert Pattinson"]
  },
  {
    "title": "Top Gun: Maverick",
    "description": 'Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete "Maverick" Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial',
    "category": ["Ação", "Aventura"],
    "releaseDate": new Date("2022-05-26"),
    "director": "Joseph Kosinski",
    "trailerUrl": "https://www.youtube.com/watch?v=g4U4BQW9OEk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/Top_Gun_Maverick.jpg/250px-Top_Gun_Maverick.jpg",
    "cast": ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm", "Glen Powell", "Ed Harris", "Val Kilmer", "Lewis Pullman"]
  },
  {
    "title": "John Wick 4: Baba Yaga",
    "description": "O ex-assassino de aluguel John Wick é procurado pelo mundo todo e a recompensa por sua captura aumenta cada vez mais. Wick descobre um caminho para derrotar a Alta Cúpula, mas antes de conquistar sua liberdade, ele precisa enfrentar um novo inimigo com alianças poderosas e forças que transformam velhos amigos em inimigos.",
    "category": ["Ação", "Suspense", "Drama", "Policial"],
    "releaseDate": new Date("2023-03-23"),
    "director": "Chad Stahelski",
    "trailerUrl": "https://www.youtube.com/watch?v=lH8DULf9OUQ",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsqlralhkI90hldyXvKGji3Mm9Uv0NW-KgdU6-OKAdmN4HoEiAWrMdavpwbuVOAxO0D8D7VPFFixss0ttx2n91IMO6RUSodNvcVnu5X4U",
    "cast": ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård", "Laurence Fishburne", "Hiroyuki Sanada", "Shamier Anderson", "Lance Reddick", "Rina Sawayama", "Scott Adkins", "Clancy Brown", "Ian McShane", "Marko Zaror", "Natalia Tena"]
  },
  {
    "title": "Missão: Impossível – Acerto de Contas (Dead Reckoning Part One)",
    "description": 'Ethan Hunt e sua equipe enfrentam uma inteligência artificial rebelde chamada "A Entidade" em uma corrida global.',
    "category": ["Ação", "Aventura", "Mistério"],
    "releaseDate": new Date("2023-07-12"),
    "director": "Christopher McQuarrie",
    "trailerUrl": "https://www.youtube.com/watch?v=BLX5g-nPGXI",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXi1dq2bRDbh8-7X2OojBacRn7QNXLUmjhUqgZxTQDzP9Vn1Vb",
    "cast": ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg", "Rebecca Ferguson"]
  },
  {
    "title": "Missão: Impossível – A Vingança Final (Dead Reckoning Part Two)",
    "description": 'A continuação direta de Dead Reckoning, Ethan Hunt enfrenta as consequências de suas escolhas enquanto tenta derrotar "A Entidade" de vez.',
    "category": ["Ação", "Aventura"],
    "releaseDate": new Date("2025-05-23"),
    "director": "Christopher McQuarrie",
    "trailerUrl": "https://www.youtube.com/watch?v=uo1GEL7pVRk",
    "imageUrl": "https://ingresso-a.akamaihd.net/prd/img/movie/missao-impossivel-o-acerto-final/dccb03d3-382a-47d1-805c-34c0a3735a2b.webp",
    "cast": ["Tom Cruise", "Hayley Atwell", "Simon Pegg", "Ving Rhames", "Rebecca Ferguson"]
  },
  {
    "title": "Enola Holmes",
    "description": "A jovem irmã de Sherlock Holmes parte para Londres para encontrar sua mãe desaparecida e desvenda um mistério que ameaça toda a nação.",
    "category": ["Mistério", "Aventura", "Drama"],
    "releaseDate": new Date("2020-09-23"),
    "director": "Harry Bradbeer",
    "trailerUrl": "https://www.youtube.com/watch?v=rcV1I-397Wg&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://br.web.img3.acsta.net/c_310_420/pictures/20/08/18/16/25/0872062.jpg",
    "cast": ["Millie Bobby Brown", "Henry Cavill", "Sam Claflin", "Helena Bonham Carter"]
  },
  {
    "title": "Jurassic World: Domínio",
    "description": 'Após os eventos de "Reino Ameaçado", humanos e dinossauros precisam aprender a coexistir enquanto surgem novas ameaças.',
    "category": ["Aventura", "Ficção Científica"],
    "releaseDate": new Date("2022-06-10"),
    "director": "Colin Trevorrow",
    "trailerUrl": "https://www.youtube.com/watch?v=hJraUjfXC3U&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg",
    "cast": ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Sam Neill", "Jeff Goldblum"]
  },
  {
    "title": "Homem-Aranha: Sem Volta Para Casa",
    "description": "Peter Parker pede ajuda ao Doutor Estranho para apagar a memória do mundo sobre sua identidade, desencadeando a chegada de vilões de outros universos.",
    "category": ["Ação", "Aventura", "Fantasia"],
    "releaseDate": new Date("2021-12-17"),
    "director": "Jon Watts",
    "trailerUrl": "https://www.youtube.com/watch?v=bHzGeci_8wc",
    "imageUrl": "https://br.web.img3.acsta.net/c_310_420/pictures/22/08/23/09/37/1541299.jpg",
    "cast": ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Willem Dafoe", "Alfred Molina"]
  },
  {
    "title": "Duna: Parte Dois",
    "description": "Continuação da saga de Paul Atreides, que busca liderar os Fremen na revolução contra o Império Galáctico em Arrakis.",
    "category": ["Aventura", "Fantasia", "Ficção Científica"],
    "releaseDate": new Date("2024-11-01"),
    "director": "Denis Villeneuve",
    "trailerUrl": "https://www.youtube.com/watch?v=Way9Dexny3w",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2cvn5M9jQ8ODPlHTH7fuS1ZOec-UxmHE07bcBpW61ZFfQECwp",
    "cast": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin", "Javier Bardem"]
  },
  {
    "title": "Furiosa: A Mad Max Saga",
    "description": "Explora a origem da Imperatriz Furiosa antes dos eventos de Mad Max: Estrada da Fúria.",
    "category": ["Ação", "Aventura", "Fantasia"],
    "releaseDate": new Date("2024-05-24"),
    "director": "George Miller",
    "trailerUrl": "https://www.youtube.com/watch?v=HQOQTNVdxb8",
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDIxNmQ2YWMtODRmYy00NTdkLTgzZTItNjIzNzIyNmU5MWRhXkEyXkFqcGc@._V1_.jpg",
    "cast": ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke", "Quaden Bayles"]
  },
  {
    "title": "Demon Slayer: O Trem Infinito",
    "description": "Tanjiro e seus amigos embarcam no Trem Infinito para enfrentar um dos demônios mais poderosos que já existiu.",
    "category": ["Animação", "Fantasia"],
    "releaseDate": new Date("2020-10-16"),
    "director": "Haruo Sotozaki",
    "trailerUrl": "https://www.youtube.com/watch?v=KN921po7cEE",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/thumb/5/57/P%C3%B4ster_Kimetsu_no_Yaiba_Mugen_Ressha-hen.jpg/250px-P%C3%B4ster_Kimetsu_no_Yaiba_Mugen_Ressha-hen.jpg",
    "cast": ["Natsuki Hanae", "Akari Kitō", "Yoshitsugu Matsuoka"]
  },
  {
    "title": "Spider-Man: Através do Aranhaverso",
    "description": "Miles Morales explora o Multiverso com novas versões do Homem-Aranha, enfrentando desafios e novos adversários.",
    "category": ["Animação", "Fantasia", "Aventura"],
    "releaseDate": new Date("2023-06-02"),
    "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    "trailerUrl": "https://www.youtube.com/watch?v=LZBlXkDvhh4&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScBFZkGXzTzLY633U7fMsvQykmwSoyCdkMi4u8zR9_ZsvvbkDG",
    "cast": ["Shameik Moore", "Hailee Steinfeld", "Jake Johnson", "Issa Rae"]
  },
  {
    "title": "Elementos (Elemental)",
    "description": "Num mundo onde fogo, água, terra e ar são pessoas, uma jovem elétrica se apaixona por um cara de fogo.",
    "category": ["Animação", "Fantasia", "Comédia Romântica"],
    "releaseDate": new Date("2024-06-14"),
    "director": "Peter Sohn",
    "trailerUrl": "https://www.youtube.com/watch?v=cmzTlk0dLGc",
    "imageUrl": "https://br.web.img3.acsta.net/pictures/22/11/17/20/58/0132283.jpg",
    "cast": ["Leah Lewis", "Mamoudou Athie", "Ronnie del Carmen"]
  },
  {
    "title": "Divertida Mente 2",
    "description": "A sequência do sucesso de 2015, onde as emoções de Riley ganham novos desafios à medida que ela entra na adolescência. A história foca em suas novas experiências e em como suas emoções lidam com as mudanças nessa fase da vida.",
    "category": ["Animação", "Comédia", "Aventura"],
    "releaseDate": new Date("2024-06-14"),
    "director": "Pete Docter",
    "trailerUrl": "https://www.youtube.com/watch?v=yAZxx8t9zig",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfG1TPdn9qevW-M5UEv-4F1BqgWm3VdTIdR9xM7H_pwGJ-BDzt",
    "cast": ["Amy Poehler", "Phyllis Smith", "Mindy Kaling"]
  },
  {
    "title": "Gato de Botas 2: O Último Pedido",
    "description": "Gato de Botas embarca em uma nova aventura para encontrar a mítica 'Última Estrela', um desejo que pode restaurar suas nove vidas. Porém, ele precisa enfrentar novos inimigos e, ao mesmo tempo, lidar com seu passado.",
    "category": ["Animação", "Aventura", "Comédia"],
    "releaseDate": new Date("2022-12-21"),
    "director": "Joel Crawford",
    "trailerUrl": "https://www.youtube.com/watch?v=WxTe6B427o4",
    "imageUrl": "https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-the-last-wish-poster-thumbnail2.jpg",
    "cast": ["Antonio Banderas", "Salma Hayek", "Florence Pugh"]
  },
  {
    "title": "Palm Springs – O Dia da Marmota",
    "description": "Nyles e Sarah ficam presos no mesmo dia, vivendo uma espécie de loop temporal enquanto tentam entender como quebrar o ciclo. Uma comédia que mistura romance e elementos de ficção científica, com uma dose de reflexões existenciais.",
    "category": ["Comédia", "Romance", "Fantasia"],
    "releaseDate": new Date("2020-07-10"),
    "director": "Max Barbakow",
    "trailerUrl": "https://www.youtube.com/watch?v=GH7lvxWcDgw",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/c5/Palm_Springs_poster.jpeg",
    "cast": ["Andy Samberg", "Cristin Milioti", "J.K. Simmons"]
  },
  {
    "title": "Hitman: Agente 47",
    "description": "Agente 47 é um assassino de elite geneticamente modificado, criado para ser a máquina de matar perfeita. Agora, ele precisa caçar uma organização que pretende usar o segredo de sua criação para a formação de um exército imbatível.",
    "category": ["Ação", "Ficção Científica", "Aventura", "Suspense", "Policial"],
    "releaseDate": new Date("2015-08-27"),
    "director": "Aleksander Bach",
    "trailerUrl": "https://www.youtube.com/watch?v=gw4c0UO-E5I",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTK7crTKqluQiz0jDO_vYhijKUrVtc3STb6tkKjhvJbLjvbh2",
    "cast": ["Zachary Quinto", "Hannah Ware", "Rupert Friend"]
  },
  {
    "title": "Plano B",
    "description": "Após um romance fracassado, duas amigas decidem traçar um plano audacioso para tentar resolver seus problemas amorosos. Uma comédia leve e divertida sobre amizade e superação.",
    "category": ["Comédia", "Romance"],
    "releaseDate": new Date("2021-05-28"),
    "director": "Natalie Morales",
    "trailerUrl": "https://www.youtube.com/watch?v=fOMG_4qTnaI",
    "imageUrl": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/32/61/19874341.jpg",
    "cast": ["Kuhoo Verma", "Victoria Moroles", "Michael Provost"]
  },
  {
    "title": "A Quiz Lady",
    "description": "Sandra Oh e Awkwafina estrelam esta comédia que gira em torno de uma relação familiar entre uma mãe e uma filha que se reencontram por conta de um game show. Entre risadas e situações complicadas, elas tentam entender melhor suas diferenças e semelhanças.",
    "category": ["Comédia", "Drama"],
    "releaseDate": new Date("2023-11-01"),
    "director": "Jessica Yu",
    "trailerUrl": "https://www.youtube.com/watch?v=4OzaexEqDa8",
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNWIyNjk4OGEtNjQwNS00ZWNjLWJjNjEtY2YyNDMzMjgyMjMwXkEyXkFqcGc@._V1_.jpg",
    "cast": ["Sandra Oh", "Awkwafina", "Jason Schwartzman"]
  },
  {
    "title": "Freaky: No Corpo de um Assassino",
    "description": "Após um assassinato brutal, a jovem Millie troca de corpo com um assassino em série, ficando presa no corpo do criminoso. Agora, ela precisa encontrar uma maneira de voltar ao seu corpo antes que o assassino complete sua missão.",
    "category": ["Comédia", "Terror", "Mistério"],
    "releaseDate": new Date("2020-11-13"),
    "director": "Christopher Landon",
    "trailerUrl": "https://www.youtube.com/watch?v=7c5pgQTzAx4",
    "imageUrl": "https://br.web.img3.acsta.net/pictures/20/09/22/00/56/4404925.jpg",
    "cast": ["Vince Vaughn", "Kathryn Newton", "Celeste O'Connor"]
  },
  {
    "title": "Fire Island",
    "description": "Uma comédia romântica que segue um grupo de amigos gays em uma viagem para Fire Island, enquanto enfrentam relacionamentos complicados e aprendem sobre amizade, amor e aceitação. Uma história vibrante e divertida de autodescoberta.",
    "category": ["Comédia", "Romance", "Drama"],
    "releaseDate": new Date("2022-06-03"),
    "director": "Andrew Ahn",
    "trailerUrl": "https://www.youtube.com/watch?v=ASN_qGMUREY",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqPMeQg8klmBm7nDgqR9vUUyxaRoJHLPOnv5Slq_mPq25sSyM",
    "cast": ["Joel Kim Booster", "Bowen Yang", "Margaret Cho"]
  },
  {
    "title": "A Balada de Wallis Island",
    "description": "Situado em uma pequena ilha paradisíaca, o filme segue a história de amor e perdas de um casal em meio a um drama emocional. A trama explora os altos e baixos das relações humanas e o impacto do tempo.",
    "category": ["Drama", "Romance"],
    "releaseDate": new Date("2020-11-10"),
    "director": "Sara Suárez",
    "trailerUrl": "https://www.youtube.com/watch?v=HTi-e20yVNs",
    "imageUrl": "https://images.justwatch.com/poster/331931456/s718/the-ballad-of-wallis-island.jpg",
    "cast": ["Lupita Nyong'o", "Chiwetel Ejiofor", "Cynthia Erivo"]
  },
  {
    "title": "Amores Materialistas",
    "description": "Materialists é um filme de comédia romântica americano de 2025, escrito e dirigido por Celine Song. O filme é estrelado por Dakota Johnson, Chris Evans, Zoë Winters, Marin Ireland, Louisa Jacobson e Pedro Pascal.",
    "category": ["Comédia", "Romance"],
    "releaseDate": new Date("2025-07-31"),
    "director": "Celine Song",
    "trailerUrl": "https://www.youtube.com/watch?v=4A_kmjtsJ7c&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwd_IIL-G9k41xuJUFhdnZhUZliSX3KhD2wsnXbWJ5qwuApzZ",
    "cast": ["Dakota Johnson", "Chris Evans", "Zoë Winters", "Marin Ireland", "Louisa Jacobson", "Pedro Pascal"]
  },
  {
    "title": "Will & Harper",
    "description": "Uma história de amizade e romance que gira em torno de dois jovens que, em um momento de crise pessoal, se unem para enfrentar os desafios da vida. Um drama sensível sobre como as relações podem transformar a vida.",
    "category": ["Drama", "Romance"],
    "releaseDate": new Date("2023-03-10"),
    "director": "Sara Cruz",
    "trailerUrl": "https://www.youtube.com/watch?v=PRZ1ELeGepo&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtyavgZ1FxQr_tLDervmDzvXjjS0W3ZopJjxUjy1EGM8Abmuf",
    "cast": ["Emma Watson", "Tom Hiddleston", "Tessa Thompson"]
  },
  {
    "title": "A Versão de Quarenta Anos",
    "description": "Uma mulher de 40 anos tenta encontrar seu lugar no mundo, reavaliando sua vida, escolhas e relacionamentos. Um drama com toques de comédia sobre o processo de autodescoberta e aceitação da idade.",
    "category": ["Comédia", "Drama"],
    "releaseDate": new Date("2022-06-02"),
    "director": "Nancy Meyers",
    "trailerUrl": "https://www.youtube.com/watch?v=X1Zt3BTnZqQ",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/The_40_Year_Old_Version.jpeg/250px-The_40_Year_Old_Version.jpeg",
    "cast": ["Reese Witherspoon", "Meryl Streep", "Laura Dern"]
  },
  {
    "title": "Bo Burnham: Inside",
    "description": "Em seu primeiro especial de comédia isolado, Bo Burnham explora as complexidades da vida durante a pandemia, com uma combinação de piadas, músicas e uma visão crítica sobre a sociedade moderna.",
    "category": ["Comédia", "Musical"],
    "releaseDate": new Date("2021-05-30"),
    "director": "Bo Burnham",
    "trailerUrl": "https://www.youtube.com/watch?v=zJgEaZ9-Wy4",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPBGhVoLzqDw9cpyQozCMo6wO0_v8JeIjfPy3DxfS42aAvhNZv",
    "cast": ["Bo Burnham"]
  },
  {
    "title": "Nickel Boys",
    "description": "Baseado no aclamado romance de Colson Whitehead, o filme conta a história de dois meninos negros que enfrentam os horrores de uma escola reformatória na década de 1960. Um poderoso drama sobre amizade e resistência.",
    "category": ["Drama"],
    "releaseDate": new Date("2022-11-15"),
    "director": "Barry Jenkins",
    "trailerUrl": "https://www.youtube.com/watch?v=-2qZ429rUZw",
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMGRkMzIyY2QtMjc5My00NGRjLWE5ZGUtYjRiMDNjMzAwOTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "cast": ["John Boyega", "Lakeith Stanfield", "David Oyelowo"]
  },
  {
    "title": "Ficção Americana",
    "description": "Uma sátira sobre a indústria do cinema e como ela lida com questões raciais e culturais. A história segue uma atriz que tenta fazer carreira enquanto lida com o racismo dentro da indústria.",
    "category": ["Comédia", "Drama"],
    "releaseDate": new Date("2023-04-19"),
    "director": "Jordan Peele",
    "trailerUrl": "https://www.youtube.com/watch?v=i0MbLCpYJPA",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFk4ImQ1jkhdqHBANze62U1jsXjkmG3gl-PxFs_rS4eZmcNT-r2R3aCrOIOb1864CAko&usqp=CAU",
    "cast": ["Tessa Thompson", "Daniel Kaluuya", "Sterling K. Brown"]
  },
  {
    "title": "Saint Frances",
    "description": "A história de uma mulher que, após uma série de fracassos em sua vida pessoal, começa a trabalhar como babá para uma criança de 6 anos e acaba se tornando uma figura fundamental na vida da menina.",
    "category": ["Drama", "Comédia"],
    "releaseDate": new Date("2020-02-28"),
    "director": "Alex Thompson",
    "trailerUrl": "https://www.youtube.com/watch?v=KqKfxEGuxtE",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmCUItZoHVYY8_o0-ePsrK3JhAMcpd0rvzA9rXIqPe0L-UdHjr",
    "cast": ["Kelly O'Sullivan", "Charin Alvarez", "Lily Mojekwu"]
  },
  {
    "title": "A Velha Guarda",
    "description": "The Old Guard é um filme de super-heróis americano de 2020, dirigido por Gina Prince-Bythewood e escrito por Greg Rucka , baseado em sua série de histórias em quadrinhos",
    "category": ["Ação", "Fantasia", "Ficção Científica", "Aventura", "Suspense"],
    "releaseDate": new Date("2020-07-10"),
    "director": "Gina Prince-Bythewood",
    "trailerUrl": "https://www.youtube.com/watch?v=x4_EAlRLY_E",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/The_Old_Guard_2020_film_poster.png",
    "cast": ["Charlize Theron", "KiKi Layne", "Matthias Schoenaerts", "Marwan Kenzari", "Luca Marinelli", "Harry Melling", "Veronica Ngo", "Chiwetel Ejiofor"]
  },
  {
    "title": "Posto de Combate",
    "description": "Uma pequena unidade de soldados norte-americanos no posto avançado mais perigoso do Afeganistão é atacada implacavelmente por uma força esmagadora de insurgentes talibãs.",
    "category": ["Guerra", "Ação", "Drama"],
    "releaseDate": new Date("2020-07-03"),
    "director": "Rod Lurie",
    "trailerUrl": "https://www.youtube.com/watch?v=UjxEOQ50V68",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/7/7f/TheOutpostPoster.jpeg",
    "cast": ["Orlando Bloom", "Caleb Landry Jones", "Scott Eastwood", "Jack Kesy", "Cory Hardrict"]
  },
  {
    "title": "Juntos",
    "description": "Após se mudarem para o campo, um encontro sobrenatural começa a transformar o amor de um casal, suas vidas e sua carne.",
    "category": ["Terror"],
    "releaseDate": new Date("2025-08-14"),
    "director": "Michael Shanks",
    "trailerUrl": "https://www.youtube.com/watch?v=v4Xu-jxRG5c",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRd8SEqFcM85Cz4YtsnY10QbcOyU4jqtKgNS5w69tMtPRwiLddF",
    "cast": ["Dave Franco", "Allison Brie", "Damon Herriman"]
  },
  {
    "title": "Avatar 3",
    "description": "A terceira parte da épica franquia de James Cameron continua a história dos habitantes de Pandora. Jake e Neytiri enfrentam novos desafios enquanto protegem sua família e sua terra natal contra ameaças externas e internas.",
    "category": ["Ação", "Aventura", "Ficção Científica"],
    "releaseDate": new Date("2024-12-20"),
    "director": "James Cameron",
    "trailerUrl": "https://www.youtube.com/watch?v=XXuLWW3H3jY",
    "imageUrl": "https://br.web.img2.acsta.net/c_310_420/pictures/23/01/31/19/10/0886604.png",
    "cast": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
  },
  {
    "title": "Mufasa: O Rei Leão",
    "description": "Prequel de 'O Rei Leão', que explora a história de Mufasa antes de se tornar o rei de toda a savana. O filme revela como Mufasa superou suas dificuldades e se tornou um dos personagens mais queridos do mundo da Disney.",
    "category": ["Animação", "Aventura"],
    "releaseDate": new Date("2024-07-05"),
    "director": "Barry Jenkins",
    "trailerUrl": "https://www.youtube.com/watch?v=o17MF9vnabg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/1/1a/Mufasa_P%C3%B4ster.webp",
    "cast": ["Aaron Pierre", "Kelvin Harrison Jr.", "John Kani"]
  },
  {
    "title": "A Balada de Buster Scruggs",
    "description": "Uma antologia de seis histórias do velho oeste americano, cada uma com um tom único, misturando comédia, tragédia e momentos inusitados. Dirigido pelos irmãos Coen, o filme traz uma reflexão sobre a vida e a morte.",
    "category": ["Faroeste", "Comédia", "Drama"],
    "releaseDate": new Date("2018-11-16"),
    "director": "Joel Coen, Ethan Coen",
    "trailerUrl": "https://www.youtube.com/watch?v=rJqOKGLH_mw&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/b/b5/The_Ballad_of_Buster_Scruggs.jpg",
    "cast": ["Tim Blake Nelson", "James Franco", "Liam Neeson"]
  },
  {
    "title": "Relatos do Mundo",
    "description": "Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.",
    "category": ["Drama", "Aventura", "Faroeste"],
    "releaseDate": new Date("2020-01-21"),
    "director": "Paul Greengrass",
    "trailerUrl": "https://www.youtube.com/watch?v=OawrKhc3XdM",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/e/ed/News_of_the_World_%28filme%29.png",
    "cast": ["Tom Hanks", "Helena Zengel", "Truman Theodore Hanks", "Mare Winningham"]
  },
  {
    "title": "Morto por Um Dólar",
    "description": "Um caçador de recompensas é contratado para encontrar um homem perdido em território hostil, mas acaba se vendo em uma luta pela sobrevivência quando tudo começa a dar errado. Um faroeste com uma pegada de suspense e ação.",
    "category": ["Faroeste", "Ação", "Suspense"],
    "releaseDate": new Date("2021-09-14"),
    "director": "Walter Hill",
    "trailerUrl": "https://www.youtube.com/watch?v=rB1zDXgQxic",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/4/44/Dead_for_a_Dollar.jpg",
    "cast": ["Willem Dafoe", "Christopher Lloyd", "Rachel Brosnahan"]
  },
  {
    "title": "Predadores",
    "description": "O retorno dos Predadores à Terra traz uma nova geração de caçadores que precisam enfrentar um grupo de soldados e mercenários em uma luta desesperada pela sobrevivência. A ação é intensa e o perigo nunca esteve tão próximo.",
    "category": ["Ação", "Terror", "Ficção Científica"],
    "releaseDate": new Date("2022-08-05"),
    "director": "Dan Trachtenberg",
    "trailerUrl": "https://www.youtube.com/watch?v=uzqYqoVoU74",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/a/a3/Predators_2010.jpg",
    "cast": ["Amber Midthunder", "Dane DiLiegro", "Toby Huss"]
  },
  {
    "title": "Cães de Guerra",
    "description": "Baseado em uma história real, dois jovens se tornam mercenários e são contratados para fornecer armas ao exército dos Estados Unidos. O filme mistura ação e comédia enquanto explora os limites da moralidade e os perigos de se envolver com negócios ilícitos.",
    "category": ["Ação", "Comédia", "Drama"],
    "releaseDate": new Date("2022-08-12"),
    "director": "Todd Phillips",
    "trailerUrl": "https://www.youtube.com/watch?v=EPFcsr0gpBE",
    "imageUrl": "https://br.web.img2.acsta.net/c_310_420/pictures/16/04/16/00/25/503456.jpg",
    "cast": ["Miles Teller", "Jonah Hill", "Bradley Cooper"]
  },
  {
    "title": "Nada de Novo no Front Ocidental",
    "description": "Um retrato visceral da Primeira Guerra Mundial a partir da perspectiva de um soldado alemão, que enfrenta o horror das trincheiras. Um filme impactante que expõe os horrores do combate e a futilidade da guerra.",
    "category": ["Drama", "Guerra"],
    "releaseDate": new Date("2022-10-28"),
    "director": "Edward Berger",
    "trailerUrl": "https://www.youtube.com/watch?v=vwbySrsD7RU&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/4/42/All_quiet_on_the_western_front_-_poster.jpg",
    "cast": ["Felix Kammerer", "Albrecht Schuch", "Daniel Brühl"]
  },
  {
    "title": "Irmãos de Honra",
    "description": "A história de Jesse Brown, o primeiro aviador negro na história da Marinha, e seu colega piloto de caça Tom Hudner. Ajudando a virar a maré na batalha mais brutal da Guerra da Coreia, seus sacrifícios heroicos os tornam os alas mais importantes.",
    "category": ["Ação", "Drama", "Guerra"],
    "releaseDate": new Date("2022-12-08"),
    "director": "J.D. Dillard",
    "trailerUrl": "https://www.youtube.com/watch?v=jVuGS8JlVIc",
    "imageUrl": "https://br.web.img3.acsta.net/pictures/22/11/07/16/23/1362246.png",
    "cast": ["Glen Powell", "Jonathan Majors", "Joe Jonas", "Serinda Swan"]
  },
  {
    "title": "Marinheiro de Guerra",
    "description": "Após ser convocado para a Marinha, um jovem se vê diante dos horrores do combate e precisa aprender a lidar com a pressão, a violência e as decisões morais que surgem na linha de frente.",
    "category": ["Guerra", "Drama"],
    "releaseDate": new Date("2021-03-19"),
    "director": "Ang Lee",
    "trailerUrl": "https://www.youtube.com/watch?v=BDHVGojB5ig",
    "imageUrl": "https://media.fstatic.com/JjJ11czIYiZeWTDbrY9CIFUhwuI=/210x312/smart/filters:format(webp)/media/movies/covers/2023/04/mz8zD8adyQ07dMPbXqHWEVmYyUp.jpg",
    "cast": ["Will Smith", "Chiwetel Ejiofor", "Tommy Lee Jones"]
  },
  {
    "title": "Vidro",
    "description": "Uma história de mistério e suspense onde um homem é acusado injustamente de um crime, e sua luta para provar sua inocência leva a descobertas surpreendentes e reviravoltas inesperadas.",
    "category": ["Mistério", "Suspense"],
    "releaseDate": new Date("2019-01-18"),
    "director": "M. Night Shyamalan",
    "trailerUrl": "https://www.youtube.com/watch?v=Noi8mDg-8Ik&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJQHtG0zYEhh8e7MKg8cUoFA8hzJHr7XQeiJPf20mTCxoOr90P",
    "cast": ["Bruce Willis", "James McAvoy", "Samuel L. Jackson"]
  },
  {
    "title": "Entre Facas e Segredos",
    "description": "Um detetive investigativo é chamado para resolver o assassinato de um famoso escritor. À medida que ele investiga, ele descobre segredos e mentiras dentro da família do falecido, criando um enredo cheio de reviravoltas.",
    "category": ["Mistério", "Comédia", "Suspense"],
    "releaseDate": new Date("2019-11-27"),
    "director": "Rian Johnson",
    "trailerUrl": "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMSNAXhoS2AnRtcjR7VNby7wni5BO_zPB_f3-QPP2P3W529XB",
    "cast": ["Daniel Craig", "Chris Evans", "Ana de Armas"]
  },
  {
    "title": "Trem-Bala",
    "description": "Cinco assassinos encontram-se a bordo de um trem-bala em uma missão aparentemente simples, mas logo descobrem que suas vidas estão interligadas de formas inesperadas e perigosas.",
    "category": ["Ação", "Suspense", "Comédia"],
    "releaseDate": new Date("2022-07-15"),
    "director": "David Leitch",
    "trailerUrl": "https://www.youtube.com/watch?v=YF-hKBHFqv0",
    "imageUrl": "https://br.web.img3.acsta.net/pictures/22/06/23/22/36/5311627.jpg",
    "cast": ["Brad Pitt", "Sandra Bullock", "Joey King"]
  },
  {
    "title": "O Pálido Olho Azul",
    "description": "Um thriller psicológico sobre um homem que luta para proteger sua filha enquanto enfrenta forças misteriosas e implacáveis que ameaçam a sua segurança e a dela.",
    "category": ["Suspense", "Mistério"],
    "releaseDate": new Date("2022-05-13"),
    "director": "David Fincher",
    "trailerUrl": "https://www.youtube.com/watch?v=ANnDun4ZuGs&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoMoGtUQj-8nLED38XWk8C_p68895406bCw&s",
    "cast": ["Joaquin Phoenix", "Tessa Thompson", "Vincent Cassel"]
  },
  {
    "title": "Festival Eurovision da Canção: A Saga de Sigrit e Lars",
    "description": "Dois músicos islandeses, com um sonho de conquistar o Eurovision, enfrentam muitos obstáculos e situações hilárias enquanto tentam ganhar o maior concurso de música da Europa.",
    "category": ["Comédia", "Musical"],
    "releaseDate": new Date("2020-06-26"),
    "director": "David Dobkin",
    "trailerUrl": "https://www.youtube.com/watch?v=jtl5wM5dMt4",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/thumb/9/92/The_Story_of_Fire_Saga.jpg/200px-The_Story_of_Fire_Saga.jpg",
    "cast": ["Will Ferrell", "Rachel McAdams", "Pierce Brosnan"]
  },
  {
    "title": "Não Solte!",
    "description": "Uma família é assombrada por um espírito maligno por muitos anos. A sua segurança e o ambiente que os rodeia correm perigo quando uma das crianças pergunta se o mal é real.",
    "category": ["Terror", "Suspense"],
    "releaseDate": new Date("2024-09-20"),
    "director": "Alexandre Aja",
    "trailerUrl": "https://www.youtube.com/watch?v=ZDfRp_ukHDU&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsTHPDumzVjMr6gv7ci49NEVfaZFXrUxXQeA5GwLOhqFf38mC1",
    "cast": ["Halle Barry", "Percy Dags IV", "Percy Dags III", "Stephanie Lavigne", "Anthony B. Jenkins"]
  },
  {
    "title": "Lonely Island e os Irmãos Bash",
    "description": "Com uma paródia em forma de rap, The Lonely Island homenageia o sucesso dos astros do beisebol Jose Canseco e Mark McGwire nos anos 1980.",
    "category": ["Comédia", "Musical"],
    "releaseDate": new Date("2019-05-23"),
    "director": "Akiva Schaffer and Mike Diva",
    "trailerUrl": "https://www.youtube.com/watch?v=VfKJxowxBb4",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMQtPo2wHNZaDNVOoBSAZNSg--2KeVqvMcoO-uG2ljgSCSkoFmIdH9Wc&usqp=CAE&s",
    "cast": ["Andy Samberg", "Akiva Schaffer", "Jorma Taccone"]
  },
  {
    "title": "Cha Cha Real Smooth",
    "description": "Um jovem universitário que trabalha como promotor de festas se apaixona por uma mulher mais velha, enquanto tenta lidar com as complexidades da vida adulta e seus próprios dilemas emocionais.",
    "category": ["Comédia", "Drama", "Romance"],
    "releaseDate": new Date("2022-06-17"),
    "director": "Cooper Raiff",
    "trailerUrl": "https://www.youtube.com/watch?v=v_pm3fwmlto&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Cha_Cha_Real_Smooth_%28poster%29.jpg/250px-Cha_Cha_Real_Smooth_%28poster%29.jpg",
    "cast": ["Cooper Raiff", "Dakota Johnson", "Leslie Mann"]
  },
  {
    "title": "Barbie",
    "description": "A icônica boneca Barbie ganha vida em um filme que mistura comédia, fantasia e reflexão social. A trama segue Barbie enquanto ela embarca em uma jornada para entender o que significa ser mulher na sociedade moderna.",
    "category": ["Comédia", "Fantasia"],
    "releaseDate": new Date("2023-07-21"),
    "director": "Greta Gerwig",
    "trailerUrl": "https://www.youtube.com/watch?v=5CjOjZSKrqE",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/8/82/Barbie_%282023%29.jpg",
    "cast": ["Margot Robbie", "Ryan Gosling", "Will Ferrell"]
  },
  {
    "title": "Bad Boys Para Sempre",
    "description": "Mike Lowrey e Marcus Burnett retornam para mais uma missão cheia de ação e comédia, enfrentando novos desafios enquanto lidam com questões de idade e amadurecimento.",
    "category": ["Ação", "Comédia"],
    "releaseDate": new Date("2020-01-17"),
    "director": "Adil El Arbi, Bilall Fallah",
    "trailerUrl": "https://www.youtube.com/watch?v=ntmz9rVs3n8",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/6/69/Bad_Boys_for_Life_%28poster%29.jpg",
    "cast": ["Will Smith", "Martin Lawrence", "Vanessa Hudgens"]
  },
  {
    "title": "Mesmo Se Nada Der Certo",
    "description": "Em uma apresentação informal em um bar, Gretta conhece Dan, um produtor musical que se encanta pelo talento da moça e a convida para gravar um álbum pelas ruas de Nova York.",
    "category": ["Drama", "Musical", "Romance", "Comédia"],
    "releaseDate": new Date("2014-09-18"),
    "director": "John Carney",
    "trailerUrl": "https://www.youtube.com/watch?v=qep22C9CBJQ&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/b/bd/Begin_Again_film_poster_2014.jpg",
    "cast": ["Mark Ruffalo", "Keira Knightley", "James Corden"]
  },
  {
    "title": "Armadilha",
    "description": "O serial killer Cooper leva sua filha adolescente para o show de uma diva pop. A garota está explodindo de felicidade e tudo parece correr bem, mas Cooper percebe uma movimentação diferente da segurança do lugar. Mesmo sem conhecer sua real identidade, a polícia descobriu que o famoso assassino estará no evento e armou uma cilada para pegá-lo. Encurralado, ele deve usar sua mente engenhosa para fugir do lugar.",
    "category": ["Terror", "Suspense", "Drama", "Mistério"],
    "releaseDate": new Date("2024-08-02"),
    "director": "M. Night Shyamalan",
    "trailerUrl": "https://www.youtube.com/watch?v=hJiPAJKjUVg",
    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKLGlSpdrvUUqfwZmab9baDE9J9v4QJSm-E69sfODRp_GnAq-p",
    "cast": ["Josh Hartnett", "Alison Pill", "Saleka Night", "Ariel Donoghue", "Kid Cudi"]
  },
  {
    "title": "M3GAN 2.0",
    "description": "A sequência do sucesso de terror e ficção científica onde a inteligência artificial de uma boneca se desenvolve de maneira ainda mais sinistra. M3GAN 2.0 agora aprende a manipular os humanos ao seu redor.",
    "category": ["Terror", "Ficção Científica"],
    "releaseDate": new Date("2024-02-16"),
    "director": "Gerard Johnstone",
    "trailerUrl": "https://www.youtube.com/watch?v=2rBk2lH6nA8&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://dx35vtwkllhj9.cloudfront.net/universalstudios/m3gan-20/images/regions/us/updates2/onesheet.jpg",
    "cast": ["Allison Williams", "Violet McGraw", "Amy McDonald"]
  },
  {
    "title": "Fale Comigo",
    "description": "Um thriller psicológico que acompanha um grupo de jovens que, após encontrarem um artefato místico, começam a se comunicar com espíritos, mas rapidamente descobrem que brincar com o sobrenatural tem consequências terríveis.",
    "category": ["Terror", "Mistério", "Suspense"],
    "releaseDate": new Date("2023-07-21"),
    "director": "Danny Philippou, Michael Philippou",
    "trailerUrl": "https://www.youtube.com/watch?v=aLAKJu9aJys",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EoX8vv7rux4yd1HPBR5q82SZGer0Qy33Xp1D2q-N_0vFxy7m",
    "cast": ["Sophie Wilde", "Alexandra Jensen", "Miranda Otto"]
  },
  {
    "title": "O Homem das Sombras",
    "description": "Com Jessica Biel. As crianças de uma cidade pequena e isolada estão desaparecendo sem deixar rastro - uma enfermeira se torna a última vítima quando seu filho desaparece no meio da noite.",
    "category": ["Terror", "Drama"],
    "releaseDate": new Date("2012-08-31"),
    "director": "Pascal Laugier",
    "trailerUrl": "https://www.youtube.com/watch?v=Y30IOu7ea-c&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/95/56/26/20414750.jpg",
    "cast": ["Jessica Biel", "Jodelle Ferland", "Stephen McHattie"]
  },
  {
    "title": "O Astronauta",
    "description": "Um astronauta enfrenta uma missão solitária de seis meses no espaço. Ele sente os efeitos extremos do isolamento e sofre com saudades da esposa. Lutando para se manter são, o homem é visitado por uma criatura alienígena que promete ajudá-lo a curar seus traumas. Os dois partem juntos em uma viagem pela mente e pelas angústias do viajante do espaço.",
    "category": ['Ficção Científica', 'Aventura', 'Drama', 'Suspense'],
    "releaseDate": new Date("2024-02-23"),
    "director": "Johan Renck",
    "trailerUrl": "https://www.youtube.com/watch?v=7iilX1_L7rg",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvXLOTrFPTLItalBuRt8mGmNfU2SFOtvgyF7uAkpZ0cwvVSmY",
    "cast": ["Adam Sandler", "Carey Mulligan", "Paul Dano"]
  },
  {
    "title": "Planeta dos Macacos: O Reinado",
    "description": "Muitas sociedades de macacos cresceram desde quando César levou seu povo a um oásis, enquanto os humanos foram reduzidos a sobreviver e se esconder nas sombras. Um líder macaco começa a escravizar outros grupos para encontrar tecnologia humana, enquanto um jovem macaco, que viu seu clã ser capturado, embarca em uma viagem para encontrar a liberdade, sendo uma jovem humana a chave para todos.",
    "category": ["Ação", "Aventura", "Ficção Científica"],
    "releaseDate": new Date("2024-05-23"),
    "director": "Wes Ball",
    "trailerUrl": "https://www.youtube.com/watch?v=NmTPDA15lPA&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfBl_mwFCd8CrTkFFndlyQ8Taw2t7o8WN639HED-sd3E9Q7B0e",
    "cast": ["Owen Teague", "Freya Allan", "Kevin Durand", "Peter Macon", "William H. Macy", "Eka Darville"]
  },
  {
    "title": "Interestelar",
    "description": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    "category": ["Ficção Científica", "Ação", "Suspense", "Aventura", "Mistério", "Drama"],
    "releaseDate": new Date("2014-11-06"),
    "director": "Christopher Nolan",
    "trailerUrl": "https://www.youtube.com/watch?v=i6avfCqKcQo",
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNmIwM2E3YjMtYWUxYi00M2ZkLWFmMzktZWFiYTU4MGM2YTk2XkEyXkFqcGc@._V1_.jpg",
    "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    "title": "Superbad - É Hoje",
    "description": "Os adolescentes Seth e Evan têm grandes esperanças para uma festa de formatura. Eles pretendem beber e conquistar as garotas para que eles possam se tornar parte da turma mais popular da escola, mas enfrentam vários percalços.",
    "category": ["Comédia", "Romance"],
    "releaseDate": new Date("2007-10-19"),
    "director": "Greg Mottola",
    "trailerUrl": "https://www.youtube.com/watch?v=LvKvus3vCEY",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/8/8b/Superbad_Poster.png",
    "cast": ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"]
  },
  {
    "title": "Shazam!",
    "description": "Billy Batson é um esperto garoto de 14 anos que pode se transformar magicamente no super-herói Shazam. Seus poderes logo são colocados à prova contra o perverso Dr. Thaddeus Sivana.",
    "category": ["Ação", "Aventura"],
    "releaseDate": new Date("2019-04-04"),
    "director": "David F. Sandberg",
    "trailerUrl": "https://www.youtube.com/watch?v=SJjg4ZTkCzk",
    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1OECXx3Zjx-jSneVZMTR958ao4aBKY6VWUquEhTnT4JZApPkh",
    "cast": ["Zachary Levi", "Asher Angel", "Mark Strong", "Jack Grazer"]
  },
  {
    "title": "10 Coisas que Eu Odeio em Você",
    "description": "Bianca Stratford é bonita e popular, mas não pode namorar antes que sua irmã mais velha encontre um namorado primeiro. O problema é que nenhum garoto consegue chegar perto da irmã, Kat Stratford. Para resolver a situação, um rapaz interessado em Bianca suborna um amigo com passado misterioso para sair com Kat e, quem sabe, tentar conquistá-la.",
    "category": ["Comédia Romântica", "Romance", "Comédia", "Drama"],
    "releaseDate": new Date("1999-03-31"),
    "director": "Gil Junger",
    "trailerUrl": "https://www.youtube.com/watch?v=vH4aMfk6GLo",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZjT8-fcJBwq8u0OZ0GR3GlEqqLj0lLgViQ&s",
    "cast": ["Heath Ledger", "Julia Stiles", "Joseph Gordon-Levitt", "Larisa Oleynik", "David Krumholtz", "Andrew Keegan"]
  },
  {
    "title": "Para Todos os Garotos que Já Amei",
    "description": "Lara Jean Song Covey escreve cartas de amor secretas para todos os seus antigos paqueras. Um dia, as cartas são misteriosamente enviadas para os destinatários, virando sua vida de cabeça para baixo.",
    "category": ["Romance", "Comédia Romântica"],
    "releaseDate": new Date("2018-08-17"),
    "director": "Susan Johnson",
    "trailerUrl": "https://www.youtube.com/watch?v=wwaPEbdu6o4&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://br.web.img3.acsta.net/pictures/18/07/27/13/53/2854483.jpg",
    "cast": ["Lana Condor", "Noah Centineo", "Janel Parrish"]
  },
  {
    "title": "1917",
    "description": "Na Primeira Guerra Mundial, dois soldados britânicos recebem ordens aparentemente impossíveis de cumprir. Em uma corrida contra o tempo, eles precisam atravessar o território inimigo e entregar uma mensagem que pode salvar 1.600 de seus companheiros.",
    "category": ["Guerra", "Ação", "Drama", "Suspense"],
    "releaseDate": new Date("2020-01-16"),
    "director": "Sam Mendes",
    "trailerUrl": "https://www.youtube.com/watch?v=_3gy6K7LXHg&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/f/ff/1917_poster.jpg",
    "cast": ["Dean-Charles Chapman", "George Mackay", "Daniel Mays"]
  },
  {
    "title": "O Resgate do Soldado Ryan",
    "description": "Durante a Segunda Guerra Mundial, o capitão John Miller leva seus homens para trás das linhas inimigas para encontrar o soldado James Ryan, cujos três irmãos foram mortos em combate. Cercados pela brutal realidade da guerra, cada homem embarca em uma jornada pessoal e descobre sua própria força para triunfar sobre um futuro incerto com honra, decência e coragem.",
    "category": ["Guerra", "Ação", "Aventura", "Drama", "Suspense"],
    "releaseDate": new Date("1999-03-05"),
    "director": "Steven Spielberg",
    "trailerUrl": "https://www.youtube.com/watch?v=dcz1Tvsx_f4",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/a/ac/Saving_Private_Ryan_poster.jpg",
    "cast": ["Tom Hanks", "Edward Burns", "Tom Sizemore", "Jeremy Davies", "Vin Diesel", "Adam Goldberg"]
  },
  {
    "title": "Até o Último Homem (Hacksaw Ridge)",
    "description": "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
    "category": ["Guerra", "Drama"],
    "releaseDate": new Date("2017-01-26"),
    "director": "Mel Gibson",
    "trailerUrl": "https://www.youtube.com/watch?v=s2-1hz1juBI",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/a/a0/Hacksaw_Ridge.png",
    "cast": ["Andrew Garfield", "Hugo Weaving", "Sam Worthington", "Vince Vaughn"]
  },
  {
    "title": "Sniper Americano",
    "description": "Chris Kyle é um atirador de elite das forças especiais da marinha dos Estados Unidos. Durante a Guerra do Iraque, sua missão é proteger seus companheiros e seu dever faz dele um dos maiores atiradores da história norte-americana. Sua precisão salva inúmeras vidas, mas também o torna um alvo preferencial. Quando Kyle finalmente volta para casa, ele descobre que não tem como deixar a guerra para trás",
    "category": ["Guerra", "Ação", "Aventura", "Drama", "Suspense"],
    "releaseDate": new Date("2015-02-19"),
    "director": "Clint Eastwood",
    "trailerUrl": "https://www.youtube.com/watch?v=Gl2jBtlJ42g&pp=0gcJCfwAo7VqN5tD",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/d/d5/American_Sniper.jpg",
    "cast": ["Bradley Cooper", "Sienna Miller", "Max Charles", "Luke Grimes", "Kyle Gallner"]
  }
];

module.exports = movieList;