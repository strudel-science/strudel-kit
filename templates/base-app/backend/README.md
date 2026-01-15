# STRUDEL Backend

This is the backend of the STRUDEL Base App. Read on to learn how to get started, modify database models, run migrations, and update the API.

## Starting the backend

### With Docker Compose

The preferred way to start the backend is using the docker compose commands. These steps are described in the project's [main README](../README.md).

With the docker stack up and running, the backend will update as you make changes to the code.

### Locally

You can also start the backend locally using uv and FastAPI.

First, [install uv](https://docs.astral.sh/uv/getting-started/installation/).

First, make sure you are in the `backend` directory:

```
cd backend
```

Next, install the backend dependencies:

```
uv sync
```

Then, start the local app server:

```
uv run fastapi run --reload app/main.py
```

## Changing the database models

The current database tables are defined in `./app/models.py`. There you can add/edit fields, add new tables, or modify the constraints.

## Running migrations

After making any sort of change to the models, you need to generate a migration file so that the database can be updated.

If you are running the backend inside of docker, you would run:

```
docker compose exec backend uv run alembic revision --autogenerate -m "Description of model change"
```

If you are running the app locally (outside of docker), from the `backend` directory you would just run:

```
uv run alembic revision --autogenerate -m "Description of model change
```

This will create a new file inside of `./app/migrations/versions` which will describe how the database is changing with this revision.

Lastly, run the new (latest) migration: 

```
docker compose exec backend uv run alembic upgrade head
```

Or if you are running the app locally (outside of docker):

```
uv run alembic upgrade head
```

## Changing the API endpoints

The API endpoints are defined in `./app/api.py`.

## Changing the CRUD operations

The CRUD (Create, Read, Update, Delete) operations that interface with the database are defined in `./app/crud.py`.