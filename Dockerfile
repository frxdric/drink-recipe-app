FROM postgres:latest

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres1
ENV POSTGRES_DB=postgres

COPY init-user-db.sh /docker-entrypoint-initdb.d/
