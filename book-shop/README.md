# 📚 Book Shop Full Stack

## 🧩 Sobre o projeto

O **Book Shop Full Stack** é uma aplicação full‑stack desenvolvida com o objetivo de estudo e portfólio. O sistema permite o **cadastro, edição, listagem e remoção de livros**, simulando um cenário real de integração entre frontend, backend e banco de dados em produção.

Todo o projeto foi pensado para seguir boas práticas de desenvolvimento, separação de responsabilidades e deploy em serviços amplamente utilizados no mercado.

---

## 🚀 Funcionalidades

- ✅ Listar livros cadastrados
- ✅ Adicionar novos livros
- ✅ Editar informações de livros
- ✅ Remover livros

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React**
- **Vite**
- **Axios**
- **React Router (`useNavigate`)**
- **CSS**

### Backend

- **Node.js**
- **Express**
- **MySQL**
- **dotenv**
- **cors**

### Infraestrutura / Deploy

- **Frontend:** Vercel
- **Backend:** Render
- **Banco de Dados:** MySQL (Railway)

---

## 🌐 Links do Projeto

- 🔗 **Frontend (Vercel):** [https://full-stack-projects-two-xi.vercel.app/](https://full-stack-projects-two-xi.vercel.app/)
- 🔗 **Backend (Render):** [https://book-shop-backend-di06.onrender.com](https://book-shop-backend-di06.onrender.com)
- 🔗 **Repositório GitHub:** [https://github.com/JRizzetto/full-stack-projects/tree/main/book-shop](https://github.com/JRizzetto/full-stack-projects/tree/main/book-shop)

---

## 🔄 Arquitetura da Aplicação

```
Frontend (React / Vercel)
        ↓
Backend (Node.js + Express / Render)
        ↓
Banco de Dados (MySQL / Railway)
```

O frontend consome a API REST criada no backend, que por sua vez se comunica com o banco de dados MySQL hospedado no Railway.

---

## 📦 API — Principais Endpoints

| Método | Rota       | Descrição              |
| ------ | ---------- | ---------------------- |
| GET    | /books     | Lista todos os livros  |
| POST   | /books     | Adiciona um novo livro |
| PUT    | /books/:id | Atualiza um livro      |
| DELETE | /books/:id | Remove um livro        |

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Consolidar conhecimentos em **desenvolvimento full‑stack**
- Trabalhar com **integração real entre frontend e backend**
- Realizar **deploy em produção**
- Criar um projeto sólido para **portfólio profissional**

---

## 👨‍💻 Autor

**Jefferson Rizzetto**
Desenvolvedor Web

---

## 📌 Observações

Este projeto está em constante evolução e pode receber melhorias como:

- Autenticação de usuários
- Validações mais avançadas
- Melhorias de UI/UX
- Paginação e filtros

---

⭐ Se você gostou do projeto, fique à vontade para deixar uma estrela no repositório!
