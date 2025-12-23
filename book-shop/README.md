# 📚 Books Shop – Full Stack

Aplicação **full stack** para cadastro, edição e remoção de livros, desenvolvida com foco em praticar **React**, **API REST** e **integração com banco de dados MySQL**.

---

## 🚀 Funcionalidades

- 📖 Listar livros cadastrados
- ➕ Adicionar novos livros
- ✏️ Atualizar informações de um livro
- 🗑️ Remover livros
- 🖼️ Exibição da capa do livro via URL

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- React
- Vite
- Axios
- React Router DOM
- Hooks: `useState`, `useEffect`, `useNavigate`, `useLocation`

### Backend

- Node.js
- Express
- Cors

### Banco de Dados

- MySQL

---

## 📁 Estrutura do Projeto

```
book-shop/
│
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   │   ├── Books.jsx
│   │   │   ├── Add.jsx
│   │   │   └── Update.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Variáveis de Ambiente

No backend, crie um arquivo `.env` com as seguintes variáveis:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=book_list
DB_PORT=3306
```

> ⚠️ O arquivo `.env` está listado no `.gitignore` e **não deve ser versionado**.

---

## ▶️ Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando

### Backend

```bash
cd backend
npm install
npm start
```

O servidor irá rodar em:

```
http://localhost:8800
```

### Frontend

```bash
cd client
npm install
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

## 🧠 Aprendizados

Projeto criado com o objetivo de:

- Consolidar conceitos de **CRUD**
- Praticar comunicação entre **frontend e backend**
- Trabalhar com **API REST**
- Utilizar **MySQL** em uma aplicação real
- Organizar um projeto **full stack** para portfólio

---

## 📌 Observações

- As capas dos livros são armazenadas como **URLs**, não como arquivos físicos.
- O preço dos livros é armazenado no banco como `DECIMAL(10,2)`.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Jefferson Rizzetto** 🚀

---

Se você gostou do projeto, deixe uma ⭐ no repositório!
