# DAW Ecommerce Académico

## Descripción

DAW Ecommerce Académico es una aplicación web orientada a la **gestión y administración de una plataforma de cursos académicos**. Su núcleo es un **panel de administración** desde el cual se administran los cursos, los estudiantes y las inscripciones de una institución o academia.

El sistema busca representar el funcionamiento del back-office (la parte administrativa) de una plataforma educativa: centralizar en un solo lugar el control de la oferta de cursos, el registro de estudiantes y la relación entre ambos a través de las inscripciones.

## Objetivo

Proveer una herramienta administrativa que permita gestionar de forma centralizada los cursos académicos, los estudiantes y sus inscripciones, mediante operaciones CRUD (crear, listar, editar y eliminar) sobre una API REST conectada a una base de datos.

## Problema que busca resolver

Las instituciones y academias que ofrecen cursos suelen llevar el control de su oferta académica, sus estudiantes y sus inscripciones de forma dispersa o manual. Esto dificulta mantener la información organizada y actualizada.

Este proyecto propone un sistema de administración que centraliza esa gestión en una sola plataforma, facilitando el registro y mantenimiento de cursos, estudiantes e inscripciones.

## Estado actual del proyecto

> El proyecto está en desarrollo. A continuación se detalla con honestidad qué está implementado y qué queda pendiente.

### Funcionalidades implementadas

* **Panel de administración** con CRUD completo (Listar, Crear, Editar, Eliminar) para:
  * Cursos
  * Estudiantes
  * Inscripciones (relacionadas a estudiantes y cursos)
* **API REST** funcional con métodos HTTP (GET, POST, PUT, DELETE).
* Comunicación real entre frontend y backend (el panel ya no usa datos de prueba).
* Documentación de la API con Swagger.
* Despliegue completo del sistema con Docker y Docker Compose.

###  Funcionalidades pendientes / en desarrollo

* Autenticación real con JWT (actualmente el inicio de sesión es solo visual).
* Registro e inicio de sesión conectados al backend.

## Tecnologías utilizadas

### Backend

* Java 17
* Spring Boot 3
* Arquitectura en capas (Controladores, Servicios y Repositorios)
* Uso de DTO para el manejo de datos

### Base de datos

* PostgreSQL
* Persistencia mediante JPA / Hibernate
* Relaciones entre entidades

### API

* API REST
* Métodos HTTP (GET, POST, PUT y DELETE)
* Documentación con Swagger

### Frontend

* React 19
* TypeScript
* Vite
* Diseño responsivo
* Consumo de la API mediante Axios / Fetch

### Despliegue

* Docker
* Docker Compose para ejecutar el sistema completo

## Estructura del proyecto

    /frontend → aplicación del cliente (React + TypeScript)
    /backend  → lógica del servidor y API (Spring Boot)
    /database → script de la base de datos (PostgreSQL)

## Cómo ejecutar el proyecto

Requisito: tener **Docker Desktop** instalado y abierto.

Desde la raíz del proyecto:

```bash
docker compose up -d --build
```

Una vez levantado:

| Servicio | URL |
|----------|-----|
| Frontend (la app) | http://localhost |
| Backend (API) | http://localhost:8080 |
| Documentación (Swagger) | http://localhost:8080/swagger-ui/index.html |

Para detener el proyecto:

```bash
docker compose down
```

## Integrantes

* Alyson Pamela Alvarado Jovel - AJ24002 (LIDER)
* Douglas Alexander Pérez Bonilla - PB24016
* Carlos Elias Sanchez Villalobos - SV24006
* Larry Omar Mancia Flamenco - MF22012
* Medardo Oseas Villalobos Melendez - VM24009
