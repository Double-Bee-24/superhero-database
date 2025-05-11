# Star Wars Universe

Fullstack project for displaying data from the Star Wars universe in tables. It uses NestJS, TypeORM with PostgreSQL for the backend and React for the UI.

## Prerequisites

To run this project you need to have installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- bash (for running shell scripts)

Make sure that Docker Engine is running

Alternatively, if you don't have or don't want to install Docker, you can run the app manually, so you should have:

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org/download/)

## Technologies

- **NestJS**: A framework for building server-side applications in Node.js. Built on top of ExpressJS.
- **PostgreSQL**: A relational database management system.
- **TypeORM**: An ORM for working with PostgreSQL.
- **React**: A library for building user interfaces.
- **TypeScript**: A superset of JavaScript that provides stricter type safety.
- **Axios**: A library for making HTTP requests.
- **ESLint**: A static code analysis tool for finding problems in your code.
- **Prettier**: A code formatter for maintaining consistent style.
- **Swagger**: A tool for API interaction and automatic documentation generation.
- **REST**: An architectural style for interacting with web services.
- **Docker**: A tool to run your code in isolated environments.
- **Docker Compose**: Simplier way to configure app with multiple containers.

## Features

- **Migrations (available through bash scripts)**
- **CRUD operations with Superhero data**
- **Image uploading**
- **Pagination**

## Project Structure

- 📁bash - Script to run migrations here
- 📁client - React UI code
- 📁server - NestJS server code

## Running the Project

### 1. Project Setup

1. Clone the repository:

```bash
   git clone https://github.com/Double-Bee-24/superhero-database.git
```

2. Enter the project folder:

```bash
   cd superhero-database
```

If you don't run Docker, you have to register a PostgreSQL database and configure it in the .env file

### 2. Environment Setup for the Project

To simplify this step .env files were provided to both 'client' and 'server' folder. You can configure it up to your needs

### 3. Running the project

## Docker Compose approach

In the root folder execute the next command:

> **Note**: Docker Engine should be running

```bash
docker compose up --build
```

Enter the 'bash' folder and run next scripts:

```bash
bash bash/run_migrations.sh
```

Or you can look into these scripts and perform the logic manually.

## Manual approach

Enter both 'client' and 'server' folders:

```bash
cd client
```

```bash
cd server
```

Install dependencies in both folders:

```bash
npm i
```

Run the server:

```bash
npm run start:dev
```

In the browser, open http://localhost:4000/api/docs, here you will see the API Swagger documentation

Run the client:

```bash
npm run dev
```

And open http://localhost:5173

> **Note:** URLs to the API and UI are provided in the .env files
