# Projeto de Login Cliente-Servidor - Sistemas Distribuídos

Este projeto foi desenvolvido para a disciplina de Sistemas Distribuídos e consiste em uma aplicação web simples com uma tela de login (frontend) e um servidor de validação (backend), que se comunicam via requisições HTTP.

## 👥 Integrantes

* **Kauã Gabriell Nazário de Azevedo 1**
* **Pedro Gabriel Dezani Dantas 2**

## 💻 Tecnologias Utilizadas

A aplicação foi dividida em duas partes principais:

### Backend

* **Node.js:** Ambiente de execução para o JavaScript no lado do servidor.
* **Express.js:** Framework para Node.js utilizado para construir a API, definir rotas e gerenciar requisições HTTP de forma simplificada.
* **Cors:** Middleware para Express que habilita o Cross-Origin Resource Sharing (CORS), permitindo que o frontend (em uma origem diferente) se comunique com o backend de forma segura.

### Frontend

* **HTML5:** Linguagem de marcação para estruturar a página de login.
* **CSS3:** Linguagem de estilização para o design e a aparência do formulário.
* **JavaScript (ES6+):** Utilizado para manipular o DOM, capturar eventos do formulário e realizar a comunicação com o backend através da API `fetch`.

### Ferramentas de Desenvolvimento

* **VS Code:** Editor de código utilizado no desenvolvimento.
* **Extensão REST Client (VS Code):** Ferramenta para testar os endpoints da API do backend de forma independente.

## 🚀 Instruções para Execução

Siga os passos abaixo para executar a aplicação localmente.

### Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina. Você pode verificar as versões com os comandos:
```bash
node -v
npm -v
```

### 1. Backend

O servidor precisa ser iniciado primeiro.

1.  Abra um terminal e navegue até a pasta `backend` do projeto:
    ```bash
    cd backend
    ```
2.  Instale as dependências necessárias (Express e Cors):
    ```bash
    npm install
    ```
3.  Inicie o servidor:
    ```bash
    node server.js
    ```
    Você deverá ver a mensagem `Servidor backend rodando na porta 3001` no terminal. Mantenha este terminal aberto.

### 2. Frontend

Com o backend rodando, você pode iniciar o frontend.

1.  Abra a pasta `frontend` no seu explorador de arquivos.
2.  Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e escolha "Abrir com" o seu navegador de preferência (Google Chrome, Firefox, etc.).
3.  A tela de login será exibida e estará pronta para uso.

### Credenciais para Teste

* **Usuário:** `admin`
* **Senha:** `123`