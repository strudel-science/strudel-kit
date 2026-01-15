FROM python:3.12-slim

WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Copy dependency files and alembic config
COPY pyproject.toml uv.lock alembic.ini ./

# Install dependencies
RUN uv sync --frozen --no-dev

# Copy application code
COPY app ./app

# Expose the port the app runs on
EXPOSE 8000

# Run database migrations and then start the application
CMD uv run alembic upgrade head && \
    uv run uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
