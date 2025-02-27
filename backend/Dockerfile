FROM python:3.10-slim-buster

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    gettext \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
COPY ./src/requirements.txt /app/
RUN pip install -r /app/requirements.txt

COPY ./src /app/


# CMD ["sleep", "infinity"]