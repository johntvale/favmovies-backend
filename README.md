
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

#### 👥 Usuários
1. **Registrar Usuário**  
  - **URL:** `/users/register`  
  - **Método:** `POST`  

2. **Login**  
  - **URL:** `/auth/login`  
  - **Método:** `POST`  

3. **Me**
  - **URL:** `/auth/Me`
  - **Método:** `GET`

4. **Logout**  
  - **URL:** `/auth//logout`  
  - **Método:** `POST`  

5. **Buscar Todos os Usuários**  
  - **URL:** `/users/search`  
  - **Método:** `GET`  

6. **Buscar Usuário por ID**  
  - **URL:** `/users/search/:id`  
  - **Método:** `GET`  

7. **Atualizar Usuário**  
  - **URL:** `/users/update/:id`  
  - **Método:** `PATCH`  

8. **Remover Usuário**  
  - **URL:** `/users/remove/:id`  
  - **Método:** `DELETE`  

---

#### 🎥 Filmes
1. **Registrar Filme**  
  - **URL:** `/movies/register`  
  - **Método:** `POST`  

2. **Buscar Todos os Filmes**  
  - **URL:** `/movies/search`  
  - **Método:** `GET`  

3. **Buscar Filme por ID**  
  - **URL:** `/movies/search/:id`  
  - **Método:** `GET`  

4. **Atualizar Filme**  
  - **URL:** `/movies/update/:id`  
  - **Método:** `PATCH`  

5. **Remover Filme**  
  - **URL:** `/movies/remove/:id`  
  - **Método:** `DELETE`  

6. **Adicionar/Atualizar Visualização de Filme**
  - **URL:** `/movies/update/view/:id`
  - **Método:** `PATCH`

7. **Adicionar/Atualizar Avaliação de Filme**
  - **URL:** `/movies/update/rating/:id`
  - **Método:** `PATCH`

---

#### ⭐ Listas de Filmes do Usuário
1. **Adicionar filme à lista de Filmes Favoritos**  
  - **URL:** `/lists/update/favorite/:id`  
  - **Método:** `PATCH`  

2. **Remover filme da lista de Filmes Favoritos**  
  - **URL:** `/lists/update/remove-favorite/:id`  
  - **Método:** `PATCH`  

3. **Adicionar filme à lista de Filmes Assistidos**  
  - **URL:** `/lists/update/watched:id`  
  - **Método:** `PATCH`  

4. **Remover filme da lista de Filmes Assistidos**  
  - **URL:** `/lists/update/remove-watched/:id`  
  - **Método:** `PATCH`  

5. **Adicionar filme à lista de Assistir Mais Tarde**  
  - **URL:** `/lists/update/watch-later/:id`  
  - **Método:** `PATCH`  

6. **Remover filme da lista de Assistir Mais Tarde**
  - **URL:** `/lists/update/remove-watch-later/:id`
  - **Método:** `PATCH`

---

### 👥 Usuários

#### 🔽 1. Registrar Usuário
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

//Obs.: As senhas são Codificadas e Validadas com Bcrypt, portanto, não ficam expostas.
```

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

#### 📥 2. Login
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

#### 📥 3. Me
- **URL:** `/auth/me`  
- **Método:** `GET`  
- **Autenticação:** ✅ Requer cookie token

##### Body (JSON):
```json
{}
```

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

#### 📤 4. Logout
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

#### 👥 5. Buscar Todos os Usuários
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

#### 👤 6. Buscar Usuário por ID
- **URL:** `/users/search/:id`  
- **Método:** `GET`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente o dono da conta ou admin  

##### ✅ Resposta 200:
```json
{
  "message": "User retrieved successfully",
  "user": {
    "_id": "663d74b1e7f06a90b25f2334",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

##### ❌ Exemplos de Erros:

**ID mal formatado:**  
Resposta 400: `"Invalid user ID format"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

#### ✏️ 7. Atualizar Usuário
- **URL:** `/users/update/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente o dono da conta ou admin  

##### Body (JSON):
```json
{
  "name": "Johnny Doe",
  "email": "johnny@example.com",
  "password": "NewPass@123"
}
```

##### ✅ Resposta 200:
```json
{
  "message": "User updated successfully",
  "user": {
    "id": "663d74b1e7f06a90b25f2334",
    "name": "Johnny Doe",
    "email": "johnny@example.com"
  }
}
```

##### ❌ Exemplos de Erros:

**Email duplicado:**  
Resposta 409: `"Email already exists"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

#### 🗑️ 8. Remover Usuário
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

### 📂 Filmes

#### ➕ 1. Registrar Filme
- **URL:** `/movies/register`  
- **Método:** `POST`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`  

##### Body (JSON):
```json
{
  "title": "O Enigma da Meia-Noite",
  "description": "Um thriller psicológico com reviravoltas inesperadas.",
  "movies": ["Suspense"],
  "releaseDate": "2024-10-31T00:00:00.000Z",
  "director": "Lucas Mendes",
  "trailerUrl": "https://example.com/images/enigma.jpg",
  "imageUrl": "https://example.com/images/enigma.jpg",
  "cast": ["Joana Prado", "Carlos Silveira", "Marta Lopes"]
}
```

##### ✅ Resposta 201:
```json
{
  "message": "Movie created successfully",
  "movie": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "movies": ["Sci-Fi"],
    "description": "A mind-bending thriller by Christopher Nolan.",
    "releaseDate": "2010-07-16",
    "category": "Sci-Fi",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:00:00.000Z"
  }
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

#### 📚 2. Buscar Todos os Filmes
- **URL:** `/movies/search`  
- **Método:** `GET`  
- **Autenticação:** ✅ Requer cookie token  

##### ✅ Resposta 200:
```json
{
  "message": "Movies retrieved successfully",
  "movies": [
    {
      "id": "6640a5e1b9a31cf0f5b743d3",
      "title": "Inception",
      "description": "A mind-bending thriller by Christopher Nolan.",
      "releaseDate": "2010-07-16",
      "category": "Sci-Fi",
      "createdAt": "2024-05-12T12:00:00.000Z",
      "updatedAt": "2024-05-12T12:00:00.000Z"
    }
  ]
}
```

---

#### 🔍 3. Buscar Filme por ID
- **URL:** `/movies/search/:id`  
- **Método:** `GET`  
- **Autenticação:** ✅ Requer cookie token  

##### ✅ Resposta 200:
```json
{
  "message": "Movie retrieved successfully",
  "movie": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "title": "Inception",
    "description": "A mind-bending thriller by Christopher Nolan.",
    "releaseDate": "2010-07-16",
    "category": "Sci-Fi",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:00:00.000Z"
  }
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### ✏️ 4. Atualizar Filme
- **URL:** `/movies/update/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`  

##### Body (JSON):
```json
{
  "title": "Interstellar",
  "description": "A journey through space and time by Christopher Nolan.",
  "releaseDate": "2014-11-07",
  "category": "Sci-Fi"
}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie updated successfully",
  "movie": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "title": "Interstellar",
    "description": "A journey through space and time by Christopher Nolan.",
    "releaseDate": "2014-11-07",
    "category": "Sci-Fi",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:10:00.000Z"
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

#### 🗑️ 5. Remover Filme
- **URL:** `/movies/remove/:id`  
- **Método:** `DELETE`  
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`  

##### ✅ Resposta 200:
```json
{
  "message": "Movie deleted successfully",
  "movie": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "title": "Interstellar",
    "description": "A journey through space and time by Christopher Nolan.",
    "releaseDate": "2014-11-07",
    "category": "Sci-Fi",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:10:00.000Z"
  }
}
```

##### ❌ Exemplos de Erros:

**ID mal formatado:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### 👁️ 6. Adicionar/Atualizar Visualização de Filme
- **URL:** `/movies/update/view/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie view count updated successfully",
  "movie": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "movie views": [
      {
        "user": "682e7847024c0680b46aeaab",
        "view": 4,
        "_id": "6830c2a18556ff78ced30f92"
      },
    ],
    "view count": 76
  }
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### ⭐ 7. Adicionar/Atualizar Avaliação de Filme
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
    {
      "user": "682e6dd28ec6b27ce8c5b632",
      "score": 4.9,
      "_id": "68351cac1dd4552f643e0b41"
    }
  ],
  "average rating": 4.9
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


#### ⭐ 1. Adicionar filme à lista de Filmes Favoritos
- **URL:** `/lists/update/favorite/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie added to favorites successfully",
  "favoriteList": [
      "6640a5e1b9a31cf0f5b743d3",
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### ❌ 2. Remover filme da lista de Filmes Favoritos
- **URL:** `/lists/update/remove-favorite/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie removed from favorites successfully",
  "favoriteList": []
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado na lista:**  
Resposta 404: `"Movie not found in favorites"`

---

#### 👁️ 3. Adicionar filme à lista de Filmes Assistidos
- **URL:** `/lists/update/watched/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie added to watched list successfully",
  "watchedList": [
      "6640a5e1b9a31cf0f5b743d3",
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### ❌ 4. Remover filme da lista de Filmes Assistidos
- **URL:** `/lists/update/remove-watched/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie removed from watched list successfully",
  "watchedList": []
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado na lista:**  
Resposta 404: `"Movie not found in watched list"`

---

#### ⏳ 5. Adicionar filme à lista de Assistir Mais Tarde
- **URL:** `/lists/update/watch-later/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie added to watch later list successfully",
  "watchLaterList": [
    {
      "6640a5e1b9a31cf0f5b743d3",
    }
  ]
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado:**  
Resposta 404: `"Movie not found"`

---

#### ❌ 6. Remover filme da lista de Assistir Mais Tarde
- **URL:** `/lists/update/remove-watch-later/:id`  
- **Método:** `PATCH`  
- **Autenticação:** ✅ Requer cookie token  

##### Body (JSON):
```json
{}
```

##### ✅ Resposta 200:
```json
{
  "message": "Movie removed from watch later list successfully",
  "watchLaterList": []
}
```

##### ❌ Exemplos de Erros:

**ID inválido:**  
Resposta 400: `"Invalid movie ID format"`

**Filme não encontrado na lista:**  
Resposta 404: `"Movie not found in watch later list"`


### 📌 Observações Finais

- As senhas são criptografadas no backend com `bcrypt`.  
- O campo `role` é atribuído automaticamente como `'user'`, a menos que alterado diretamente no banco ou via endpoint de admin.