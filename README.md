# Node.js + PostgreSQL CRUD Example

This project demonstrates a simple CRUD (Create, Read, Update, Delete) API using Node.js, Express, and PostgreSQL.

## Features

- REST API with Express
- PostgreSQL database connection using `pg`
- Environment variable support with `dotenv`
- Example SQL schema in `db.sql`

## Prerequisites

- Node.js and npm installed
- Docker installed (for running PostgreSQL)

## Setup

### 1. Clone the repository

```sh
git clone https://github.com/codewithgowri/nodejs-postgresql.git
cd nodejs-postgresql
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start PostgreSQL with Docker

Run this command to start a PostgreSQL container:

```sh
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d --rm postgres:13.0
```

### 4. Connect to PostgreSQL

To access the database shell:

```sh
docker exec -it -u postgres my-postgres psql
```

### 5. Create tables

Run the SQL in `db.sql` inside the psql shell:

```sh
\i /path/to/db.sql
```

### 6. Configure environment variables

Create a `.env` file:

```
PORT=3001
DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres
```

### 7. Start the server

```sh
node index.js
```

## NPM Packages Used

- **express**: Web framework for Node.js
- **pg**: PostgreSQL client for Node.js
- **dotenv**: Loads environment variables from `.env` file

## Useful Commands

- Start PostgreSQL Docker container:
  ```sh
  docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d --rm postgres:13.0
  ```
- Access PostgreSQL shell:
  ```sh
  docker exec -it -u postgres my-postgres psql
  ```
- Install dependencies:
  ```sh
  npm install
  ```
- Start the server:
  ```sh
  node index.js
  ```

---

Feel free to modify and extend this project for your needs!
