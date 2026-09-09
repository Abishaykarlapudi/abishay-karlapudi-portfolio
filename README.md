# Abishay Karlapudi — Java Developer Portfolio

A resume-based full-stack developer portfolio built with Spring Boot, Thymeleaf, HTML, CSS, JavaScript, and MySQL. The contact form persists submissions to MySQL, and the application is Dockerized for Render.

## Stack
- Java 17
- Spring Boot 3.5.5
- Spring Web
- Thymeleaf
- Spring Data JPA
- MySQL
- HTML / CSS / JavaScript
- Docker

## Local configuration
Set `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` as environment variables when connecting to MySQL. The application listens on `${PORT:8080}`.

## Render
The repository contains `Dockerfile` and `render.yaml` for deployment.
