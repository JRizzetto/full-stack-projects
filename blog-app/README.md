# 📝 Blog-App

[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.22.1-green)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-yellow)](https://jwt.io/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Um blog moderno e interativo onde usuários podem compartilhar conteúdos em diversas categorias. Desenvolvido com React no frontend, Express no backend e MySQL como banco de dados.

## ✨ Funcionalidades

- **🔐 Autenticação Completa**: Registro, login e logout com JWT
- **📝 CRUD de Posts**: Criar, ler, atualizar e deletar artigos
- **🏷️ Sistema de Categorias**: Arte, Ciência, Tecnologia, Cinema, Design, Food
- **👤 Perfil de Usuário**: Cada usuário gerencia seus próprios posts
- **🖼️ Upload de Imagens**: Suporte a imagens nos posts
- **📱 Interface Responsiva**: Design adaptável para todos os dispositivos
- **🔒 Proteção de Rotas**: Acesso restrito para usuários autenticados

## 🛠️ Tecnologias

### Frontend

- **React 18** - Biblioteca principal
- **React Router DOM 7** - Navegação entre páginas
- **Axios** - Requisições HTTP
- **React Quill** - Editor de texto rico
- **Sass** - Estilização avançada
- **Context API** - Gerenciamento de estado
- **Moment.js** - Formatação de datas

### Backend

- **Node.js** - Ambiente de execução
- **Express 4** - Framework web
- **MySQL2** - Conexão com banco de dados
- **JWT** - Autenticação com JSON Web Tokens
- **Bcryptjs** - Hash de senhas
- **Cookie Parser** - Manipulação de cookies
- **Multer** - Upload de arquivos
- **CORS** - Cross-Origin Resource Sharing

### Banco de Dados

- **MySQL** - Sistema gerenciador de banco de dados relacional

## 📁 Estrutura do Projeto

blog-app/
├── client/ # Aplicação React (Frontend)
│ ├── public/ # Arquivos estáticos
│ └── src/ # Código fonte
│ ├── components/ # Componentes reutilizáveis
│ │ ├── Footer/
│ │ ├── Menu/
│ │ └── Navbar/
│ ├── context/ # Context API (AuthContext)
│ ├── pages/ # Páginas da aplicação
│ │ ├── Home/
│ │ ├── Login/
│ │ ├── Register/
│ │ ├── Single/
│ │ └── Write/
│ ├── img/ # Imagens e ícones
│ └── style.scss # Estilos globais
│
└── server/ # Aplicação Express (Backend)
├── controllers/ # Lógica de negócio
│ ├── auth.js # Autenticação
│ ├── posts.js # Posts
│ └── users.js # Usuários
├── routes/ # Definição de rotas
│ ├── auth.js
│ ├── posts.js
│ └── users.js
├── uploads/ # Imagens enviadas
├── db.js # Conexão com MySQL
└── index.js # Ponto de entrada

## 🚀 Como Executar Localmente

### Pré-requisitos

- **Node.js** (v16 ou superior)
- **MySQL** (v8.0 ou superior)
- **npm** ou **yarn**

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/JRizzetto/blog-app.git
cd blog-app

Passo 2: Configurar o Banco de Dados
Acesse o MySQL:

bash
mysql -u root -p
Crie o banco de dados:

sql
CREATE DATABASE blog_db;
USE blog_db;
Crie as tabelas necessárias:

sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  img VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  `desc` TEXT NOT NULL,
  img VARCHAR(255),
  cat VARCHAR(50),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  uid INT,
  FOREIGN KEY (uid) REFERENCES users(id) ON DELETE CASCADE
);
Passo 3: Configurar o Backend
Navegue para a pasta do servidor:

bash
cd server
Instale as dependências:

bash
npm install
Crie o arquivo .env:

bash
touch .env
Configure as variáveis de ambiente no arquivo .env:

env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=blog_db
JWT_SECRET=seu_segredo_jwt_aqui
PORT=8800
Inicie o servidor backend:

bash
npm start
# Ou para desenvolvimento com hot reload:
npm run dev
Passo 4: Configurar o Frontend
Em um novo terminal, navegue para a pasta do cliente:

bash
cd ../client
Instale as dependências:

bash
npm install
Crie o arquivo .env:

bash
touch .env
Configure a URL da API no arquivo .env:

env
VITE_API_URL=http://localhost:8800/api
Inicie a aplicação React:

bash
npm run dev
Passo 5: Acessar a Aplicação
Frontend: Abra http://localhost:5173 no navegador

Backend API: Acessível em http://localhost:8800/api

📡 API Endpoints
Autenticação (/api/auth)
POST /register - Registrar novo usuário

POST /login - Fazer login

POST /logout - Fazer logout

GET /verify - Verificar autenticação

Posts (/api/posts)
GET / - Listar todos os posts

GET /:id - Buscar post específico

POST / - Criar novo post (autenticado)

PUT /:id - Atualizar post (autenticado)

DELETE /:id - Deletar post (autenticado)

Usuários (/api/users)
GET / - Listar usuários

GET /:id - Buscar usuário específico

🔧 Configuração do Banco de Dados
O projeto utiliza as seguintes tabelas:

Tabela users
Armazena informações dos usuários registrados.

Tabela posts
Armazena todos os posts do blog, com relação à tabela users através da chave estrangeira uid.

🎨 Categorias Disponíveis
Arte - Pintura, escultura, arte digital

Ciência - Descobertas, pesquisas, inovações

Tecnologia - IA, programação, gadgets

Cinema - Filmes, críticas, indústria

Design - UX/UI, gráfico, produto

Food - Receitas, gastronomia, nutrição

🖼️ Screenshots
(Adicione suas screenshots aqui)

Página de Login

Página Principal com posts

Editor de posts

Página individual do post

👤 Fluxo do Usuário
Visitante → Visualiza posts públicos

Registro → Cria uma conta

Login → Acessa área autenticada

Usuário Autenticado → Cria/edita/deleta seus posts

Logout → Encerra sessão

🐛 Solução de Problemas Comuns
Erro de Conexão com MySQL
bash
# Verifique se o MySQL está rodando
sudo service mysql status

# Verifique credenciais no .env
Erro de Porta em Uso
bash
# Encontre o processo usando a porta
sudo lsof -i :8800
# Ou
sudo lsof -i :5173

# Mate o processo
kill -9 PID
Erro de CORS
Verifique se credentials: true está configurado no frontend

Confirme a URL da API no arquivo .env do frontend

🔮 Próximos Passos (Roadmap)
Sistema de comentários nos posts

Likes e favoritos

Upload de múltiplas imagens

Pesquisa e filtros avançados

Perfil de usuário personalizável

Modo escuro/claro

Página "Sobre" e contato

👥 Contribuindo
Contribuições são bem-vindas! Siga estes passos:

Fork o projeto

Crie uma branch (git checkout -b feature/NovaFuncionalidade)

Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')

Push para a branch (git push origin feature/NovaFuncionalidade)

Abra um Pull Request

🙏 Agradecimentos
React Documentation

Express.js Guide

MySQL Documentation

Comunidade de desenvolvedores por tutoriais e suporte

👨‍💻 Autor
Jefferson Rizzetto

GitHub: @JRizzetto

LinkedIn: jefferson-rizzetto

⭐️ Se você gostou deste projeto, dê uma estrela no repositório!
```
