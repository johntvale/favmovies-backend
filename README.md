
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

// Endpoint to create a new user - POST /users
// Endpoint for user login - POST /login
// Endpoint for user logout - POST /logout
// Endpoint to fetch all users - GET /users
// Endpoint to fetch a user by ID - GET /users/:id
// Endpoint to update a user by ID - PATCH /users/:id
// Endpoint to delete a user by ID - DELETE /users/:id
// Endpoint to create a new movie - POST /movies
// Endpoint to fetch all movies - GET /movies
// Endpoint to fetch a movie by ID - GET /movies/:id
// Endpoint to update a movie by ID - PATCH /movies/:id
// Endpoint to delete a movie by ID - DELETE /movies/:id

### Lista de Endpoints Disponíveis

#### 👥 Usuários
1. **Criar Usuário**  
  - **URL:** `/users`  
  - **Método:** `POST`  

2. **Login**  
  - **URL:** `/login`  
  - **Método:** `POST`  

3. **Logout**  
  - **URL:** `/logout`  
  - **Método:** `POST`  

4. **Buscar Todos os Usuários**  
  - **URL:** `/users`  
  - **Método:** `GET`  

5. **Buscar Usuário por ID**  
  - **URL:** `/users/:id`  
  - **Método:** `GET`  

6. **Atualizar Usuário**  
  - **URL:** `/users/:id`  
  - **Método:** `PATCH`  

7. **Deletar Usuário**  
  - **URL:** `/users/:id`  
  - **Método:** `DELETE`  

---

#### 📂 Filmes
1. **Criar Filme**  
  - **URL:** `/movies`  
  - **Método:** `POST`  

2. **Buscar Todos os Filmes**  
  - **URL:** `/movies`  
  - **Método:** `GET`  

3. **Buscar Filme por ID**  
  - **URL:** `/movies/:id`  
  - **Método:** `GET`  

4. **Atualizar Filme**  
  - **URL:** `/movies/:id`  
  - **Método:** `PATCH`  

5. **Deletar Filme**  
  - **URL:** `/movies/:id`  
  - **Método:** `DELETE`  


### 👥 Usuários

#### 🔽 1. Criar Usuário
- **URL:** `/users`  
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
- **URL:** `/login`  
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

#### 📤 3. Logout
- **URL:** `/logout`  
- **Método:** `POST`  
- **Autenticação:** ✅ Requer cookie token  

##### ✅ Resposta 200:
```json
{
  "message": "Logout successfully!"
}
```

---

#### 👥 4. Buscar Todos os Usuários
- **URL:** `/users`  
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

#### 👤 5. Buscar Usuário por ID
- **URL:** `/users/:id`  
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

#### ✏️ 6. Atualizar Usuário
- **URL:** `/users/:id`  
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

#### 🗑️ 7. Deletar Usuário
- **URL:** `/users/:id`  
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

#### ➕ 1. Criar Filme
- **URL:** `/movies`  
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
- **URL:** `/movies`  
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
- **URL:** `/movies/:id`  
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
- **URL:** `/movies/:id`  
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

#### 🗑️ 5. Deletar Filme
- **URL:** `/movies/:id`  
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

### 📌 Observações Finais

- As senhas são criptografadas no backend com `bcrypt`.  
- O campo `role` é atribuído automaticamente como `'user'`, a menos que alterado diretamente no banco ou via endpoint de admin.  
- As listas `favoriteList`, `watchLaterList` e `watchedList` ainda não têm endpoints públicos nesta documentação.

