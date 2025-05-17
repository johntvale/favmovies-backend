
# 📘 Documentação da API FavMovies

Backend da aplicação de Trailers de Filmes.
<br>
Esta API permite o gerenciamento e disponibilização de Filmes, Categorias, Listas de Filmes e Usuários.
<br>
A API possui middlewares de Autenticação e Autorização, com controle de acesso por roles (usuário e admin) via Cookie Token utilizando JWT.
<br>
Usuários logados poderão listar e conhecer os filmes adicionados na plataforma, assistir aos trailer, avaliar os filmes que desejar, além de poder adicioná-los às suas Listas de Filmes (Favoritos, Assistidos ou Assistir mais tarde).
<br>
Admins poderão gerenciar Usuários, Filmes e Categorias.

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

## ▶️ Execução
### Usando Docker para o banco de dados:
```bash
docker-compose up -d
```

### Iniciar o servidor:
```bash
npm run dev
```

## 🔐 Autenticação
A maioria dos endpoints requer token JWT no cookie `token`. O login gera esse cookie. Para testes via Postman, habilite o uso de cookies automaticamente após login.

---

## Endpoints (Usuários)

### 🔽 1. Criar Usuário
- **URL:** `/users`
- **Método:** `POST`
- **Autenticação:** ❌ Não requer

#### Body (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongPass@123"
}
```

#### ✅ Resposta 201
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

#### ❌ Exemplos de Requisições Inválidas

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

### 📥 2. Login
- **URL:** `/login`
- **Método:** `POST`
- **Autenticação:** ❌ Não requer

#### Body (JSON):
```json
{
  "email": "john@example.com",
  "password": "StrongPass@123"
}
```

#### ✅ Resposta 200
```json
{
  "message": "Login successfully!"
}
```

#### ❌ Exemplos de Requisições Inválidas

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

### 📤 3. Logout
- **URL:** `/logout`
- **Método:** `POST`
- **Autenticação:** ✅ Requer cookie token

#### ✅ Resposta 200
```json
{
  "message": "Logout successfully!"
}
```

---

### 👥 4. Buscar Todos os Usuários
- **URL:** `/users`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token
- **Permissão:** Somente usuários com role `admin`

#### ✅ Resposta 200
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

### 👤 5. Buscar Usuário por ID
- **URL:** `/users/:id`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token
- **Permissão:** Somente o dono da conta ou admin

#### ✅ Resposta 200
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

#### ❌ Exemplos de Erros

**ID mal formatado:**  
Resposta 400: `"Invalid user ID format"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

### ✏️ 6. Atualizar Usuário
- **URL:** `/users/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token
- **Permissão:** Somente o dono da conta ou admin

#### Body (JSON):
```json
{
  "name": "Johnny Doe",
  "email": "johnny@example.com",
  "password": "NewPass@123"
}
```

#### ✅ Resposta 200
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

#### ❌ Exemplos de Erros

**Email duplicado:**  
Resposta 409: `"Email already exists"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

### 🗑️ 7. Deletar Usuário
- **URL:** `/users/:id`
- **Método:** `DELETE`
- **Autenticação:** ✅ Requer cookie token
- **Permissão:** Somente o dono da conta ou admin

#### ✅ Resposta 200
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

#### ❌ Erros Comuns

**ID inválido:**  
Resposta 400: `"Invalid user ID format"`

**Sem permissão:**  
Resposta 403: `"Access denied"`

---

## 📂 Endpoints - Categories

---

### ➕ 1. Criar Categoria
- **URL:** `/categories`
- **Método:** `POST`
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`

#### Body (JSON):
```json
{
  "name": "Action"
}
```

#### ✅ Resposta 201
```json
{
  "message": "Category created successfully",
  "category": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "name": "Action",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:00:00.000Z"
  }
}
```

#### ❌ Exemplos de Requisições Inválidas

**Nome curto:**
```json
{
  "name": "Ac"
}
```
Resposta 400:
```json
{
  "message": "Invalid category name",
  "error": "Category name must be at least 3 characters long."
}
```

**Nome já existente:**
Resposta 409:
```json
{
  "message": "Category name already exists"
}
```

---

### 📚 2. Buscar Todas as Categorias
- **URL:** `/categories`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`

#### ✅ Resposta 200
```json
{
  "message": "Categories retrieved successfully",
  "categories": [
    {
      "id": "6640a5e1b9a31cf0f5b743d3",
      "name": "Action",
      "createdAt": "2024-05-12T12:00:00.000Z",
      "updatedAt": "2024-05-12T12:00:00.000Z"
    }
  ]
}
```

---

### 🔍 3. Buscar Categoria por ID
- **URL:** `/categories/:id`
- **Método:** `GET`
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`

#### ✅ Resposta 200
```json
{
  "message": "Category retrieved successfully",
  "category": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "name": "Action",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:00:00.000Z"
  }
}
```

#### ❌ Exemplos de Erros

**ID inválido:**
Resposta 400:
```json
{
  "message": "Invalid category ID format"
}
```

**Categoria não encontrada:**
Resposta 404:
```json
{
  "message": "Category not found"
}
```

---

### ✏️ 4. Atualizar Categoria
- **URL:** `/categories/:id`
- **Método:** `PATCH`
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`

#### Body (JSON):
```json
{
  "name": "Adventure"
}
```

#### ✅ Resposta 200
```json
{
  "message": "Category updated successfully",
  "category": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "name": "Adventure",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:10:00.000Z"
  }
}
```

#### ❌ Exemplos de Erros

**Nome duplicado:**
Resposta 409:
```json
{
  "message": "Category name already exists"
}
```

**ID inválido:**
Resposta 400:
```json
{
  "message": "Invalid category ID format"
}
```

**Categoria não encontrada:**
Resposta 404:
```json
{
  "message": "Category not found"
}
```

---

### 🗑️ 5. Deletar Categoria
- **URL:** `/categories/:id`
- **Método:** `DELETE`
- **Autenticação:** ✅ Requer cookie token  
- **Permissão:** Somente usuários com role `admin`

#### ✅ Resposta 200
```json
{
  "message": "Category deleted successfully",
  "category": {
    "id": "6640a5e1b9a31cf0f5b743d3",
    "name": "Adventure",
    "createdAt": "2024-05-12T12:00:00.000Z",
    "updatedAt": "2024-05-12T12:10:00.000Z"
  }
}
```

#### ❌ Exemplos de Erros

**ID mal formatado:**
Resposta 400:
```json
{
  "message": "Invalid category ID format"
}
```

**Categoria não encontrada:**
Resposta 404:
```json
{
  "message": "Category not found"
}
```

---

### 📌 Observações Finais
- As senhas são criptografadas no backend com `bcrypt`.
- O campo `role` é atribuído automaticamente como `'user'`, a menos que alterado diretamente no banco ou via endpoint de admin.
- As listas `favoriteList`, `watchLaterList` e `watchedList` ainda não têm endpoints públicos nesta documentação.
