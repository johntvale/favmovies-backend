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
    "email": "joao-silva-2025@email.com",
    "password": encrypterPassword("Senh4*padrao*JS"),
    "role": "user"
  },
  {
    "name": "Maria Oliveira",
    "email": "maria-oliveira-2025@email.com",
    "password": encrypterPassword("Senh4*padrao*MO"),
    "role": "user"
  },
  {
    "name": "Carlos Souza",
    "email": "carlos-souza-2025@email.com",
    "password": encrypterPassword("Senh4*padrao*CS"),
    "role": "user"
  },
  {
    "name": "Ana Pereira",
    "email": "ana-pereira-2025@email.com",
    "password": encrypterPassword("Senh4*padrao*AP"),
    "role": "user"
  },
  {
    "name": "Luan Costa",
    "email": "luan-costa-2025@email.com",
    "password": encrypterPassword("Senh4*padrao*LC"),
    "role": "user"
  }
]

module.exports = userList;