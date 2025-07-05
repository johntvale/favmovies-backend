# 📘 Documentação da API FavMovies

Backend da aplicação de Trailers de Filmes.
Esta API permite o gerenciamento e disponibilização de Filmes, Categorias, Listas de Filmes e Usuários.
A API possui middlewares de Autenticação e Autorização, com controle de acesso por roles (usuário e admin) via Cookie Token utilizando JWT.

Usuários logados poderão:
- Listar e conhecer os filmes adicionados na plataforma.
- Assistir aos trailers.
- Avaliar os filmes que desejar.
- Adicioná-los às suas Listas de Filmes (Favoritos, Assistidos ou Assistir mais tarde).

Admins poderão gerenciar Usuários, Filmes e Categorias.

---

## 🔧 Tecnologias

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- cookie-parser
- JOI Validations
- Docker

---

## 📌 Requisitos

- Node.js 18+
- Docker (para executar MongoDB localmente)
- MongoDB (pode ser via Docker)
- Variáveis de ambiente configuradas (ver `.env.example`)

---

## 🚀 Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

---

## ▶️ Execução

### Usando Docker para o banco de dados:
```bash
docker-compose up -d
```

### Iniciar o servidor:
```bash
npm run dev
```

---

## 🔐 Autenticação

A maioria dos endpoints requer token JWT no cookie `token`. O login gera esse cookie.
Para testes via Postman, habilite o uso de cookies automaticamente após login.

---

## 📂 Endpoints

### Lista de Endpoints Disponíveis

#### 🔐 Autenticação
| Endpoint            | Método   | Descrição                     |
| ------------------- | -------- | ----------------------------- |
| `/auth/login`       | `POST`   | Login (Geração de token)      |
| `/auth/me`          | `GET`    | Obter dados do usuário logado |
| `/auth/logout`      | `POST`   | Logout (Remoção de token)     |

#### 👥 Usuários
| Endpoint            | Método   | Descrição                     |
| ------------------- | -------- | ----------------------------- |
| `/users/register`   | `POST`   | Registrar Usuário             |
| `/users/search`     | `GET`    | Buscar Todos os Usuários      |
| `/users/search/:id` | `GET`    | Buscar Usuário por ID         |
| `/users/update/:id` | `PATCH`  | Atualizar Usuário             |
| `/users/remove/:id` | `DELETE` | Remover Usuário               |

#### 🎥 Filmes
| Endpoint                    | Método   | Descrição                                 |
| --------------------------- | -------- | ----------------------------------------- |
| `/movies/register`          | `POST`   | Registrar Filme                           |
| `/movies/search`            | `GET`    | Buscar Todos os Filmes                    |
| `/movies/search/:id`        | `GET`    | Buscar Filme por ID                       |
| `/movies/update/:id`        | `PATCH`  | Atualizar Filme                           |
| `/movies/remove/:id`        | `DELETE` | Remover Filme                             |
| `/movies/update/view/:id`   | `PATCH`  | Adicionar/Atualizar Visualização de Filme |
| `/movies/update/rating/:id` | `PATCH`  | Adicionar/Atualizar Avaliação de Filme    |

#### ⭐ Listas de Filmes do Usuário
| Endpoint                               | Método  | Descrição                                      |
| -------------------------------------- | ------- | ---------------------------------------------- |
| `/lists/update/favorite/:id`           | `PATCH` | Adicionar filme à lista de Filmes Favoritos    |
| `/lists/update/remove-favorite/:id`    | `PATCH` | Remover filme da lista de Filmes Favoritos     |
| `/lists/update/watched:id`             | `PATCH` | Adicionar filme à lista de Filmes Assistidos   |
| `/lists/update/remove-watched/:id`     | `PATCH` | Remover filme da lista de Filmes Assistidos    |
| `/lists/update/watch-later/:id`        | `PATCH` | Adicionar filme à lista de Assistir Mais Tarde |
| `/lists/update/remove-watch-later/:id` | `PATCH` | Remover filme da lista de Assistir Mais Tarde  |

#### 📊 Insights (Dashboard)
| Endpoint            | Método   | Descrição                                       |
| ------------------- | -------- | ----------------------------------------------- |
| `/insights/`        | `GET`    | Buscar dados de Insights para gerar o Dashboard |
---

### Requisições

#### 🔐 - LOGIN
- **URL:** `/auth/login`
- **Método:** `POST`
- **Autenticação:** ❌ Não requer

##### Body (JSON):
```json
{
  "email": "john@example.com",
  "password": "StrongPass@123"
}
```

##### ✅ Resposta 200:
```json
{
  "message": "Login successfully!"
}
```

##### ❌ Exemplos de Requisições Inválidas:

**Email inválido:**
```json
{
  "email": "invalidemail",
  "password": "StrongPass@123"
}
```
Resposta 400: `"Email must be a valid email address."`

**Senha incorreta:**
Resposta 401: `"Unauthorized: Invalid password"`

**Usuário não encontrado:**
Resposta 404: `"User not found"`

---

#### 🔐 - ME
- **URL:** `/auth/me`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "User logged in successfully!",
  "user": {
    "id": "663d74b1e7f06a90b25f2334",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

#### 🔐 - LOGOUT
- **URL:** `/auth/logout`
- **Método:** `POST`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Logout successfully!"
}
```

---

#### 👥 - REGISTRAR USUÁRIO
- **URL:** `/users/register`
- **Método:** `POST`
- **Autenticação:** ❌ Não requer

##### Body (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongPass@123"
}

```
Obs.: As senhas são Codificadas e Validadas com Bcrypt. Portanto, não ficam expostas.
  
##### ✅ Resposta 201:
```json
{
  "message": "User created successfully",
  "user": {
    "id": "663d74b1e7f06a90b25f2334",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

##### ❌ Exemplos de Requisições Inválidas:

**Nome curto:**
```json
{
  "name": "Jo",
  "email": "john@example.com",
  "password": "StrongPass@123"
}
```
Resposta 400: `"Name must be at least 6 characters long."`

**Senha fraca:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "weakpass"
}
```
Resposta 400: `"Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."`

**Email já cadastrado:**
Resposta 409: `"Email already exists"`

---

#### 👥 - BUSCAR TODOS OS USUÁRIOS
- **URL:** `/users/search`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token
- **Permissão:** Somente usuários com role `admin`

##### ✅ Resposta 200:
```json
{
  "message": "Users retrieved successfully",
  "users": [
    {
      "id": "663d74b1e7f06a90b25f2334",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    }
  ]
}
```

---

#### 👤 - BUSCAR USUÁRIO POR ID
- **URL:** `/users/search/:id`  
- **Método:** `GET`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente o dono da conta ou admin  

##### ✅ Resposta 200:
```json
{
  "message": "User retrieved successfully",
  "user": {
    "_id": "68606b568b30957c22834832",
    "name": "Joao Silva",
    "password": "$2b$10$xhPr9oFtbglPGhAGZgEWN.5mGyIlscqqiEMGyFpQvjYHO49FfsSum",
    "email": "joao-silva-js@email.com",
    "role": "user",
    "favoriteList": [
      { "...movie" },
    ],
    "watchLaterList": [
      { "...movie" },
      { "...movie" },
    ],
    "watchedList": [
      { "...movie" },
    ],
    "createdAt": "2025-06-28T22:23:18.234Z",
    "updatedAt": "2025-07-04T22:57:22.436Z"
  }
}
```

##### ❌ Exemplos de Erros:

**ID mal formatado:**  
Resposta 400: `"Invalid user ID format"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

#### 👤 - ATUALIZAR USUÁRIO
- **URL:** `/users/update/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente o dono da conta ou admin  

##### Body (JSON):
```json
{
  "name": "Johnny Doe",
  "email": "johnny@example.com",
  "password": "NewPass@123",
  "role": "admin"
}
```
Obs.: O método PATCH permite alterar UM ou VÁRIOS atributos por vez.

##### ✅ Resposta 200:
```json
{
  "message": "User updated successfully",
  "user": {
    "id": "663d74b1e7f06a90b25f2334",
    "name": "Johnny Doe",
    "email": "johnny@example.com"
    "role": "admin"
  }
}
```

##### ❌ Exemplos de Erros:

**Email duplicado:**  
Resposta 409: `"Email already exists"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

#### 👤 - REMOVER USUÁRIO
- **URL:** `/users/remove/:id`  
- **Método:** `DELETE`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente o dono da conta ou admin  

##### ✅ Resposta 200:
```json
{
  "message": "User deleted successfully",
  "user": {
    "id": "663d74b1e7f06a90b25f2334",
    "name": "Johnny Doe",
    "email": "johnny@example.com"
  }
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid user ID format"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

#### 🎥 - REGISTRAR FILME
- **URL:** `/movies/register`  
- **Método:** `POST`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`  

##### Body (JSON):
```json
{
  "title": "Pecadores 2",
  "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
  "category": ["Terror"],
  "releaseDate": "04-14-2025",
  "director": "Ryan Coogler",
  "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
  "imageUrl": "https://cinemametropolis.com/wp-content/uploads/2025/01/sinners_ver4_poster.jpg",
  "cast": ["Michael B. Jordan", "Hailee Steinfeld", "Wunmi Mosaku", "Miles Caton", "Jayme Lawson"]
},
```

##### ✅ Resposta 201:
```json
{
  "message": "Movie created successfully",
  "movie": {
    "title": "Pecadores 2",
    "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
    "category": [
      "Terror"
    ],
    "releaseDate": "2025-04-14T00:00:00.000Z",
    "director": "Ryan Coogler",
    "imageUrl": "https://cinemametropolis.com/wp-content/uploads/2025/01/sinners_ver4_poster.jpg",
    "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
    "cast": [
      "Michael B. Jordan",
      "Hailee Steinfeld",
      "Wunmi Mosaku",
      "Miles Caton",
      "Jayme Lawson"
    ],
    "averageRating": 0,
    "favoriteCount": 0,
    "viewCount": 0,
    "_id": "686878af819aa7b13e7ceee4",
    "ratings": [],
    "favorite": [],
    "view": [],
    "createdAt": "2025-07-05T00:58:23.893Z",
    "updatedAt": "2025-07-05T00:58:23.893Z",
    "__v": 0
  },
}
```

##### ❌ Exemplos de Requisições Inválidas:

**Título curto:**
```json
{
  "title": "In",
  "description": "A mind-bending thriller by Christopher Nolan.",
  "releaseDate": "2010-07-16",
  "category": "Sci-Fi"
}
```
Resposta 400: `"Movie title must be at least 3 characters long."`

**Título já existente:**  
Resposta 409: `"Movie title already exists"`

---

#### 🎥 - BUSCAR TODOS OS FILMES
- **URL:** `/movies/search`  
- **Método:** `GET`  
- **Autenticação:** ✅ Requer cookie token  

##### ✅ Resposta 200:
```json
{
  "message": "Movies retrieved successfully",
  "movies": [
    {
      "_id": "68606b568b30957c2283486b",
      "title": "Pecadores",
      "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
      "category": [
        "Terror"
      ],
      "releaseDate": "2025-04-17T00:00:00.000Z",
      "director": "Ryan Coogler",
      "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRH5fGI3NC5QC3BJZ42w2diBR6tAYPZO-75WOTFU1_zDRtv78D",
      "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
      "cast": [
        "Michael B. Jordan",
        "Hailee Steinfeld",
        "Wunmi Mosaku",
        "Miles Caton",
        "Jayme Lawson"
      ],
      "averageRating": 3.4,
      "favoriteCount": 5,
      "viewCount": 130,
      "ratings": [
        { "...ratings" },
        { "...ratings" },
      ],
      "favorite": [
        { "...user" },
      ],
      "view": [
        { "...user" },
      ],
      "__v": 4,
      "createdAt": "2025-06-28T22:23:18.811Z",
      "updatedAt": "2025-07-04T22:57:22.244Z"
    },
    {
      "_id": "68606b568b30957c2283486c",
      "title": "De Volta à Ação",
      "description": "Quinze anos depois de abandonar a CIA para formar uma família, os ex-agentes de elite Matt e Emily voltam ao mundo da espionagem ao terem seus disfarces revelados.",
      "category": [
        "Comédia",
        "Ação"
      ],
      "releaseDate": "2025-01-17T00:00:00.000Z",
      "director": "Seth Gordon",
      "imageUrl": "https://images.justwatch.com/poster/323393660/s718/back-in-action.jpg",
      "trailerUrl": "https://youtu.be/3davFh1eoVs?feature=shared",
      "cast": [
        "Cameron Diaz",
        "Jamie Fox",
        "Glenn Close",
        "Leela Owen",
        "MacKenna Roberts"
      ],
      "averageRating": 0,
      "favoriteCount": 0,
      "viewCount": 18,
      "ratings": [],
      "favorite": [],
      "view": [
        { "...user" },
        { "...user" },
      ],
      "__v": 4,
      "createdAt": "2025-06-28T22:23:18.811Z",
      "updatedAt": "2025-07-04T22:57:22.271Z"
    },
  ],
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 🎥 - ATUALIZAR FILME
- **URL:** `/movies/update/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`  

##### Body (JSON):
```json
{
  "director": "Ryan Coogler."
}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie updated successfully",
  "movie": {
    "_id": "68606b568b30957c2283486b",
    "title": "Pecadores",
    "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
    "category": [
      "Terror"
    ],
    "releaseDate": "2025-04-17T00:00:00.000Z",
    "director": "Ryan Coogler.",
    "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRH5fGI3NC5QC3BJZ42w2diBR6tAYPZO-75WOTFU1_zDRtv78D",
    "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
    "cast": [
      "Michael B. Jordan",
      "Hailee Steinfeld",
      "Wunmi Mosaku",
      "Miles Caton",
      "Jayme Lawson"
    ],
    "averageRating": 3.4,
    "favoriteCount": 5,
    "viewCount": 130,
    "ratings": [
      { "...ratings" },
      { "...ratings" }
    ],
    "favorite": [
      { "...user" }
    ],
    "view": [
      { "...user" },
      { "...user" }
    ],
    "__v": 4,
    "createdAt": "2025-06-28T22:23:18.811Z",
    "updatedAt": "2025-07-05T01:09:10.032Z"
  }
}
```

##### ❌ Exemplos de Erros:

**Título duplicado:**  
Resposta 409: `"Movie title already exists"`

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 🎥 - REMOVER FILME
- **URL:** `/movies/remove/:id`  
- **Método:** `DELETE`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`  

##### ✅ Resposta 200:
```json
{
  "message": "Movie deleted successfully",
  "movie": {
    "_id": "686878af819aa7b13e7ceee4",
    "title": "Pecadores 2",
    "description": "Tentando deixar suas vidas problemáticas para trás, dois irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.",
    "category": [
      "Terror"
    ],
    "releaseDate": "2025-04-14T00:00:00.000Z",
    "director": "Ryan Coogler",
    "imageUrl": "https://cinemametropolis.com/wp-content/uploads/2025/01/sinners_ver4_poster.jpg",
    "trailerUrl": "https://youtu.be/vJ3i983GZs0?feature=shared",
    "cast": [
      "Michael B. Jordan",
      "Hailee Steinfeld",
      "Wunmi Mosaku",
      "Miles Caton",
      "Jayme Lawson"
    ],
    "averageRating": 0,
    "favoriteCount": 0,
    "viewCount": 0,
    "ratings": [],
    "favorite": [],
    "view": [],
    "createdAt": "2025-07-05T00:58:23.893Z",
    "updatedAt": "2025-07-05T00:58:23.893Z",
    "__v": 0
  }
}
```

##### ❌ Exemplos de Erros:

**ID mal formatado:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 🎥 - ADICIONAR/ATUALIZAR VISUALIZAÇÃO DE FILME
- **URL:** `/movies/update/view/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie views updated successfully",
  "movie views": [
    { "...user" },
    { "...user" }
  ],
  "view count": 2
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 🎥 - ADICIONAR/ATUALIZAR AVALIAÇÃO DE FILME
- **URL:** `/movies/update/rating/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{
  "rating": 4.5
}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie rating updated successfully",
  "movie ratings": [
    { "...ratings" },
    { "...ratings" },
    { "...ratings" }
  ]
  "average rating": 3.4
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

**Avaliação fora do intervalo:**  
Resposta 400: `"Rating must be between 0 and 5"`

---

#### ⭐ - ADICIONAR FILME À LISTA DE FILMES FAVORITOS
- **URL:** `/lists/update/favorite/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie added to favorites successfully",
  "favorite List": [
    { "...movie" },
    { "...movie" }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### ⭐ - REMOVER FILME DA LISTA DE FILMES FAVORITOS
- **URL:** `/lists/update/remove-favorite/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie removed from favorites successfully",
  "favorite List": [
    { "...movie" }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado na lista:**  
Resposta 404: `"Movie not found in favorites"`

---

#### 👁️ - ADICIONAR FILME À LISTA DE FILMES ASSISTIDOS
- **URL:** `/lists/update/watched/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie added to watched list successfully",
  "watched List": [
    { "...movie" },
    { "...movie" },
    { "...movie" }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 👁️ - REMOVER FILME DA LISTA DE FILMES ASSISTIDOS
- **URL:** `/lists/update/remove-watched/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie removed from watched list successfully",
  "watched List": [
    { "...movie" },
    { "...movie" }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado na lista:**  
Resposta 404: `"Movie not found in watched list"`

---

#### 👁️ - ADICIONAR FILME À LISTA DE ASSISTIR MAIS TARDE
- **URL:** `/lists/update/watch-later/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie added to watch later list successfully",
  "watch Later List": [
    { "...movie" },
    { "...movie" },
    { "...movie" }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 👁️ - REMOVER FILME DA LISTA DE ASSISTIR MAIS TARDE
- **URL:** `/lists/update/remove-watch-later/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "Movie removed from watch later list successfully",
  "watch Later List": [
    { "...movie" },
    { "...movie" }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado na lista:**  
Resposta 404: `"Movie not found in watch later list"`

---

#### 📊 - BUSCAR DADOS DE INSIGHTS (DASHBOARD)
- **URL:** `/insights/`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token

##### ✅ Resposta 200:
```json
{
  "message": "insights successfully generated",
  "insights": {
    "favorites": {
      "top3Favorites": [
        { "...movie" },
        { "...movie" },
        { "...movie" }
      ],
      "mostFavoriteMovieOfTheMonth": { "...movie" },
      "miniCards": {
        "totalMovies": 50,
        "totalFavoriteMarks": 120,
        "percentageOfFavorited": 68.4
      }
    },
    "watched": {
      "top3MostWatched": [
        { "...movie" },
        { "...movie" },
        { "...movie" }
      ],
      "mostWatchedOfTheMonth": { "...movie" },
      "miniCards": {
        "totalViews": 340,
        "percentageOfWatchedMovies": 72.1,
        "userWhoWatchedTheMostMovies": {
          "id": "663d74b1e7f06a90b25f2332",
          "name": "Maria"
        }
      }
    },
    "ratings": {
      "top3Ratings": [
        { "...movie" },
        { "...movie" },
        { "...movie" }
      ],
      "mostRatedMovieOfTheMonth": { "...movie" },
      "miniCards": {
        "totalRatings": 210,
        "overallRatingAverage": 4.35,
        "userWhoRatedTheMostMovies": {
          "id": "663d74b1e7f06a90b25f2334",
          "name": "John Doe"
        }
      }
    }
  }
}
```

##### ❌ Exemplos de Erros:

**Usuário não autenticado:**  
Resposta 401:
```json
{ "message": "Unauthorized" }
```

**Erro inesperado no servidor:**  
Resposta 500:
```json
{ "message": "Internal server error while generating insights" }
```

---

### 📌 Observações Finais

- As senhas são criptografadas no backend com `bcrypt`.  
- O campo `role` é atribuído automaticamente como `'user'`, a menos que alterado diretamente no banco ou via endpoint de admin.