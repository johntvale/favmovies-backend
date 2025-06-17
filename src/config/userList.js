const { encrypterPassword } = require('../utils/bcrypt')

const userList = [
  {
    "name": process.env.INIT_NAME,
    "email": process.env.INIT_EMAIL,
    "password": encrypterPassword(process.env.INIT_PASSWORD),
    "role": process.env.INIT_ROLE,
  },
  {
    "name": "Joao Silva",
    "email": "joao-silva-js@email.com",
    "password": encrypterPassword("Senh4*padrao*JS"),
    "role": "user"
  },
  {
    "name": "Maria Oliveira",
    "email": "maria-oliveira-mo@email.com",
    "password": encrypterPassword("Senh4*padrao*MO"),
    "role": "user"
  },
  {
    "name": "Carlos Souza",
    "email": "carlos-souza-cs@email.com",
    "password": encrypterPassword("Senh4*padrao*CS"),
    "role": "user"
  },
  {
    "name": "Ana Pereira",
    "email": "ana-pereira-ap@email.com",
    "password": encrypterPassword("Senh4*padrao*AP"),
    "role": "user"
  },
  {
    "name": "Luan Costa",
    "email": "luan-costa-lc@email.com",
    "password": encrypterPassword("Senh4*padrao*LC"),
    "role": "user"
  },
  {
    "name": "Lucas Andrade",
    "email": "lucas-andrade-la@email.com",
    "password": encrypterPassword("Senh4*padrao*LA"),
    "role": "user"
  },
  {
    "name": "Mariana Costa",
    "email": "mariana-costa-mc@email.com",
    "password": encrypterPassword("Senh4*padrao*MC"),
    "role": "user"
  },
  {
    "name": "Pedro Almeida",
    "email": "pedro-almeida-pa@email.com",
    "password": encrypterPassword("Senh4*padrao*PA"),
    "role": "user"
  },
  {
    "name": "Ana Beatriz",
    "email": "ana-beatriz-ab@email.com",
    "password": encrypterPassword("Senh4*padrao*AB"),
    "role": "user"
  },
  {
    "name": "Rafael Mendes",
    "email": "rafael-mendes-rm@email.com",
    "password": encrypterPassword("Senh4*padrao*RM"),
    "role": "user"
  },
  {
    "name": "Fernanda Lima",
    "email": "fernanda-lima-fl@email.com",
    "password": encrypterPassword("Senh4*padrao*FL"),
    "role": "user"
  },
  {
    "name": "Gabriel Souza",
    "email": "gabriel-souza-gs@email.com",
    "password": encrypterPassword("Senh4*padrao*GS"),
    "role": "user"
  },
  {
    "name": "Juliana Rocha",
    "email": "juliana-rocha-jr@email.com",
    "password": encrypterPassword("Senh4*padrao*JR"),
    "role": "user"
  },
  {
    "name": "Bruno Martins",
    "email": "bruno-martins-bm@email.com",
    "password": encrypterPassword("Senh4*padrao*BM"),
    "role": "user"
  },
  {
    "name": "Camila Ferreira",
    "email": "camila-ferreira-cf@email.com",
    "password": encrypterPassword("Senh4*padrao*CF"),
    "role": "user"
  },
  {
    "name": "Thiago Ramos",
    "email": "thiago-ramos-tr@email.com",
    "password": encrypterPassword("Senh4*padrao*TR"),
    "role": "user"
  },
  {
    "name": "Isabela Pires",
    "email": "isabela-pires-ip@email.com",
    "password": encrypterPassword("Senh4*padrao*IP"),
    "role": "user"
  },
  {
    "name": "Felipe Cardoso",
    "email": "felipe-cardoso-fc@email.com",
    "password": encrypterPassword("Senh4*padrao*FC"),
    "role": "user"
  },
  {
    "name": "Larissa Duarte",
    "email": "larissa-duarte-ld@email.com",
    "password": encrypterPassword("Senh4*padrao*LD"),
    "role": "user"
  },
  {
    "name": "Diego Barbosa",
    "email": "diego-barbosa-db@email.com",
    "password": encrypterPassword("Senh4*padrao*DB"),
    "role": "user"
  },
  {
    "name": "Tatiane Gomes",
    "email": "tatiane-gomes-tg@email.com",
    "password": encrypterPassword("Senh4*padrao*TG"),
    "role": "user"
  },
  {
    "name": "Vinicius Silveira",
    "email": "vinicius-silveira-vs@email.com",
    "password": encrypterPassword("Senh4*padrao*VS"),
    "role": "user"
  },
  {
    "name": "Patricia Moraes",
    "email": "patricia-moraes-pm@email.com",
    "password": encrypterPassword("Senh4*padrao*PM"),
    "role": "user"
  },
  {
    "name": "Rodrigo Teixeira",
    "email": "rodrigo-teixeira-rt@email.com",
    "password": encrypterPassword("Senh4*padrao*RT"),
    "role": "user"
  },
  {
    "name": "Aline Nogueira",
    "email": "aline-nogueira-an@email.com",
    "password": encrypterPassword("Senh4*padrao*AN"),
    "role": "user"
  },
  {
    "name": "Renato Dias",
    "email": "renato-dias-rd@email.com",
    "password": encrypterPassword("Senh4*padrao*RD"),
    "role": "user"
  },
  {
    "name": "Vanessa Oliveira",
    "email": "vanessa-oliveira-vo@email.com",
    "password": encrypterPassword("Senh4*padrao*VO"),
    "role": "user"
  },
  {
    "name": "Eduardo Castro",
    "email": "eduardo-castro-ec@email.com",
    "password": encrypterPassword("Senh4*padrao*EC"),
    "role": "user"
  },
  {
    "name": "Carolina Ribeiro",
    "email": "carolina-ribeiro-cr@email.com",
    "password": encrypterPassword("Senh4*padrao*CR"),
    "role": "user"
  },
  {
    "name": "André Figueiredo",
    "email": "andre-figueiredo-af@email.com",
    "password": encrypterPassword("Senh4*padrao*AF"),
    "role": "user"
  },
  {
    "name": "Bianca Tavares",
    "email": "bianca-tavares-bt@email.com",
    "password": encrypterPassword("Senh4*padrao*BT"),
    "role": "user"
  },
  {
    "name": "Henrique Monteiro",
    "email": "henrique-monteiro-hm@email.com",
    "password": encrypterPassword("Senh4*padrao*HM"),
    "role": "user"
  },
  {
    "name": "Sabrina Lopes",
    "email": "sabrina-lopes-sl@email.com",
    "password": encrypterPassword("Senh4*padrao*SL"),
    "role": "user"
  },
  {
    "name": "Igor Guimarães",
    "email": "igor-guimaraes-ig@email.com",
    "password": encrypterPassword("Senh4*padrao*IG"),
    "role": "user"
  },
  {
    "name": "Natália Prado",
    "email": "natalia-prado-np@email.com",
    "password": encrypterPassword("Senh4*padrao*NP"),
    "role": "user"
  },
  {
    "name": "Fábio Azevedo",
    "email": "fabio-azevedo-fa@email.com",
    "password": encrypterPassword("Senh4*padrao*FA"),
    "role": "user"
  },
  {
    "name": "Paula Martins",
    "email": "paula-martins-pm@email.com",
    "password": encrypterPassword("Senh4*padrao*PM"),
    "role": "user"
  },
  {
    "name": "Gustavo Lima",
    "email": "gustavo-lima-gl@email.com",
    "password": encrypterPassword("Senh4*padrao*GL"),
    "role": "user"
  },
  {
    "name": "Eliane Freitas",
    "email": "eliane-freitas-ef@email.com",
    "password": encrypterPassword("Senh4*padrao*EF"),
    "role": "user"
  },
  {
    "name": "Douglas Moreira",
    "email": "douglas-moreira-dm@email.com",
    "password": encrypterPassword("Senh4*padrao*DM"),
    "role": "user"
  },
  {
    "name": "Bruna Vieira",
    "email": "bruna-vieira-bv@email.com",
    "password": encrypterPassword("Senh4*padrao*BV"),
    "role": "user"
  },
  {
    "name": "Leandro Cunha",
    "email": "leandro-cunha-lc@email.com",
    "password": encrypterPassword("Senh4*padrao*LC"),
    "role": "user"
  },
  {
    "name": "Simone Batista",
    "email": "simone-batista-sb@email.com",
    "password": encrypterPassword("Senh4*padrao*SB"),
    "role": "user"
  },
  {
    "name": "Alex Torres",
    "email": "alex-torres-at@email.com",
    "password": encrypterPassword("Senh4*padrao*AT"),
    "role": "user"
  },
  {
    "name": "Daniela Silva",
    "email": "daniela-silva-ds@email.com",
    "password": encrypterPassword("Senh4*padrao*DS"),
    "role": "user"
  },
  {
    "name": "Maurício Pinto",
    "email": "mauricio-pinto-mp@email.com",
    "password": encrypterPassword("Senh4*padrao*MP"),
    "role": "user"
  },
  {
    "name": "Tatiana Sales",
    "email": "tatiana-sales-ts@email.com",
    "password": encrypterPassword("Senh4*padrao*TS"),
    "role": "user"
  },
  {
    "name": "Otávio Correia",
    "email": "otavio-correia-oc@email.com",
    "password": encrypterPassword("Senh4*padrao*OC"),
    "role": "user"
  },
  {
    "name": "Letícia Dias",
    "email": "leticia-dias-ld@email.com",
    "password": encrypterPassword("Senh4*padrao*LD"),
    "role": "user"
  },
  {
    "name": "Wagner Reis",
    "email": "wagner-reis-wr@email.com",
    "password": encrypterPassword("Senh4*padrao*WR"),
    "role": "user"
  },
  {
    "name": "Helena Martins",
    "email": "helena-martins-hm@email.com",
    "password": encrypterPassword("Senh4*padrao*HM"),
    "role": "user"
  },
  {
    "name": "Matheus Antunes",
    "email": "matheus-antunes-ma@email.com",
    "password": encrypterPassword("Senh4*padrao*MA"),
    "role": "user"
  },
  {
    "name": "Jéssica Cunha",
    "email": "jessica-cunha-jc@email.com",
    "password": encrypterPassword("Senh4*padrao*JC"),
    "role": "user"
  },
  {
    "name": "César Vasconcelos",
    "email": "cesar-vasconcelos-cv@email.com",
    "password": encrypterPassword("Senh4*padrao*CV"),
    "role": "user"
  },
];
  

module.exports = userList;