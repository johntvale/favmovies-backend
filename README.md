
# 📘 Documentação da API de Usuários

Backend da aplicação de trailers de filmes. Esta API permite o gerenciamento de usuários com autenticação via login tradicional e OAuth2, com controle de acesso por roles (usuário e admin).

### 🔧 Tecnologias

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Docker

---

### 📌 Requisitos

- Node.js 18+
- Docker (para executar MongoDB localmente)
- MongoDB (pode ser via Docker)
- Variáveis de ambiente configuradas (ver `.env.example`)

---

### 🚀 Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

### Execução
#### Usando Docker para o banco de dados:
```bash
docker-compose up -d
```

#### Iniciar o servidor:
```bash
npm run dev
```

### 🔐 Autenticação
A maioria dos endpoints requer token JWT no cookie `token`. O login gera esse cookie. Para testes via Postman, habilite o uso de cookies automaticamente após login.

---

### Endpoints

#### 🔽 1. Criar Usuário
- **URL:** `POST /users`
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
- **URL:** `POST /login`
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
- **URL:** `POST /logout`
- **Autenticação:** ✅ Requer cookie token

#### ✅ Resposta 200
```json
{
  "message": "Logout successfully!"
}
```

---

### 👥 4. Buscar Todos os Usuários
- **URL:** `GET /users`
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
- **URL:** `GET /users/:id`
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
- **URL:** `PUT /users/:id`
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
- **URL:** `DELETE /users/:id`
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

### 📌 Observações Finais
- As senhas são criptografadas no backend com `bcrypt`.
- O campo `role` é atribuído automaticamente como `'user'`, a menos que alterado diretamente no banco ou via endpoint de admin.
- As listas `favoriteList`, `watchLaterList` e `watchedList` ainda não têm endpoints públicos nesta documentação.
