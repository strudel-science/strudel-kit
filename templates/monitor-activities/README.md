# STRUDEL Monitor Activities App

This is a fullstack web application template designed for scientific apps that handle monitoring live activity or data. This app uses the STRUDEL base-app template and builds on top of it. If you want to start with a different template, check out one of the other templates at https://github.com/strudel-science/strudel-kit/tree/main/templates.

## Use this template

Install the [Node](https://nodejs.org/en/download) and [degit](https://github.com/Rich-Harris/degit).

Generate this template by running:

```
degit strudel-science/strudel-kit/templates/monitor-activities
```

## Technology Stack
**Backend**
- [**Python**](https://www.python.org/) Programming language popular for scientific and data analysis
- [**FastApi**](https://fastapi.tiangolo.com/) Backend framework for building REST APIs
- [**SQLAlchemy**](https://www.sqlalchemy.org/) SQL toolkit and ORM
- [**Alembic**](https://alembic.sqlalchemy.org/en/latest/) Database migration tool
- [**uv**](https://docs.astral.sh/uv/) Python package and project manager

**Frontend**
- [**TypeScript**](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [**React**](https://react.dev/): A component-based JavaScript library for building UIs.
- [**Vite**](https://vite.dev/): A fast, opinionated frontend build tool.
- [**Material UI**](https://mui.com/material-ui/getting-started/): Open-source React component library based on Google's Material Design.
- [**TanStack Router**](https://tanstack.com/router/latest): A fully type-safe router with built-in data fetching, first-class search-param APIs, and more.
- [**ESLint**](https://eslint.org/): The pluggable linting utility for JavaScript and JSX.
- [**Prettier**](https://prettier.io/): An opinionated code formatter.
- [**Cypress**](https://www.cypress.io/): End-to-end tests for built-in templates.

## Getting started with Docker

The whole stack can be started with docker. There are three services within the stack: frontend, backend, and postgres (the database).

### Requirements
- [docker](https://www.docker.com/get-started/)

### Copy and configure your Docker Environment

At the root of this project exists a file called `.env.example`. This represents all of the environment variables used by `docker-compose.yml`.

Copy the `.env.example` file, paste a copy at the root of the project, and name it `.env`.

```
cp .env.example .env
```

### Starting the stack using the Docker Compose

Open a terminal at the project root.

To start the whole stack, run:

```
docker compose up -d
```

This will start all three services in "detached" mode which means they are running in the background and will remain running until you explicitly stop them.

To check that everything is working you should be able to access:
- The backend docs: http://localhost:8000/docs
- The frontend UI: http://localhost:5174

> **_NOTE:_**  If you changed the `_PORT` variables in your `.env`, change the above URLs to match your port numbers.

### Stopping the stack using the Docker Compose

You can stop the whole stack by running:

```
docker compose down
```

## Developing

### Backend Development

Backend docs: [backend/README.md](./backend/README.md).

### Frontend Development

Frontend docs: [frontend/README.md](./frontend/README.md).

## Attribution

This project utilized the [strudel-kit](https://github.com/strudel-science/strudel-kit/tree/main) repository. Read more about [STRUDEL](https://strudel.science).