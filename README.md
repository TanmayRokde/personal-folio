# Personal Portfolio

A personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and containerized using **Docker**.

## ✨ Features

- 🚀 Fast development setup using Vite
- 💅 Styled with Tailwind CSS
- 📲 Mobile supported / fully responsive
- 🧩 Component-based structure
- 🐳 Dockerized for local containerized development

## 🧱 Project Structure

```
.
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # Reusable React components
│   ├── helper/         # Shared UI elements like PageTitle
│   └── data.js         # Content data (e.g., reviews, works)
├── Dockerfile          # Docker image definition
├── docker-compose.yml  # Docker Compose service config
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Getting Started (Local Development with Docker)

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
- (Optional) [Node.js](https://nodejs.org/) for non-Docker local use

### 🔧 Build and Run with One Command

```bash
docker compose up --build
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

If you make changes to the code, they will reflect automatically thanks to volume binding and polling.

## 🐳 Docker Info

### Dockerfile

Defines a Node 20 base image with Vite dev server.

### docker-compose.yml

- Maps port `5173` from the container to your machine
- Mounts source code for hot-reload during development
- Uses `CHOKIDAR_USEPOLLING=true` for file change detection inside Docker

## 🧪 Development (without Docker)

```bash
npm install
npm run dev
```

## 📝 License

This project is licensed under the MIT License — feel free to use, modify, or share.

## 🙌 Author

Created by **Tanmay Rokde** — [@tanmayrokde](https://github.com/tanmayrokde)
