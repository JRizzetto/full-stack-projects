# 📇 Add Contact – Full Stack Application

## 🇧🇷 Português

### 📌 Sobre o projeto

O **Add Contact** é uma aplicação **full stack** desenvolvida com o objetivo de **estudo e portfólio**, simulando um sistema real de gerenciamento de contatos.

A aplicação permite **criar, listar, editar, visualizar e remover contatos**, persistindo os dados em um banco de dados MySQL hospedado em nuvem.

O projeto foi desenvolvido com foco em **boas práticas**, separação de responsabilidades entre frontend e backend, uso de variáveis de ambiente e deploy em plataformas modernas.

---

### ⚙️ Funcionalidades

- ➕ Adicionar novo contato (nome, e-mail e telefone)
- 📄 Listar todos os contatos
- ✏️ Editar contato existente
- 🔍 Visualizar detalhes de um contato específico
- 🗑️ Remover contato
- 🔔 Feedback visual com notificações (toast)

---

### 🛠️ Tecnologias utilizadas

#### Frontend

- React
- Vite
- Axios
- React Router DOM
- React Toastify

#### Backend

- Node.js
- Express
- CORS
- MySQL2
- Dotenv

#### Banco de Dados

- MySQL (Railway)

---

### ☁️ Deploy

- **Frontend (Vercel):**
  👉 [https://full-stack-projects-26ms.vercel.app/](https://full-stack-projects-26ms.vercel.app/)

- **Backend / API (Render):**
  👉 [https://full-stack-projects-a5a8.onrender.com/](https://full-stack-projects-a5a8.onrender.com/)

---

### 📡 Rotas da API (exemplo)

- `GET /api/get` – Lista todos os contatos
- `GET /api/get/:id` – Retorna um contato específico
- `POST /api/post` – Cria um novo contato
- `PUT /api/update/:id` – Atualiza um contato
- `DELETE /api/remove/:id` – Remove um contato

---

### 🧪 Executando o projeto localmente

#### Pré-requisitos

- Node.js
- MySQL

#### Backend

```bash
npm install
npm run dev
```

Configure o arquivo `.env` com suas credenciais do MySQL.

#### Frontend

```bash
npm install
npm run dev
```

---

### 👨‍💻 Autor

**Jefferson Rizzetto**
Projeto desenvolvido para fins de aprendizado e portfólio.

---

## 🇺🇸 English

### 📌 About the project

**Add Contact** is a **full stack application** developed for **study and portfolio purposes**, simulating a real-world contact management system.

The application allows users to **create, read, update, view and delete contacts**, with data persisted in a cloud-hosted MySQL database.

The project focuses on **best practices**, clear separation between frontend and backend, environment variables usage, and cloud deployment.

---

### ⚙️ Features

- ➕ Add new contact (name, email and phone)
- 📄 List all contacts
- ✏️ Edit existing contact
- 🔍 View contact details
- 🗑️ Delete contact
- 🔔 Visual feedback with toast notifications

---

### 🛠️ Tech Stack

#### Frontend

- React
- Vite
- Axios
- React Router DOM
- React Toastify

#### Backend

- Node.js
- Express
- CORS
- MySQL2
- Dotenv

#### Database

- MySQL (Railway)

---

### ☁️ Deployment

- **Frontend (Vercel):**
  👉 [https://full-stack-projects-26ms.vercel.app/](https://full-stack-projects-26ms.vercel.app/)

- **Backend / API (Render):**
  👉 [https://full-stack-projects-a5a8.onrender.com/](https://full-stack-projects-a5a8.onrender.com/)

---

### 📡 API Routes (example)

- `GET /api/get` – Get all contacts
- `GET /api/get/:id` – Get contact by ID
- `POST /api/post` – Create a new contact
- `PUT /api/update/:id` – Update a contact
- `DELETE /api/remove/:id` – Delete a contact

---

### 🧪 Running locally

#### Requirements

- Node.js
- MySQL

#### Backend

```bash
npm install
npm run dev
```

Create a `.env` file with your MySQL credentials.

#### Frontend

```bash
npm install
npm run dev
```

---

### 👨‍💻 Author

**Jefferson Rizzetto**
Project developed for learning and portfolio purposes.
