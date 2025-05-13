# 🎯 Frontend - Contactos + Autenticación

Este proyecto es el frontend de una aplicación fullstack. Permite a los usuarios autenticarse mediante Firebase y gestionar una lista de contactos mediante una interfaz amigable y responsiva.

🔗 Este frontend se conecta a un backend desarrollado con Express que expone rutas protegidas para autenticación y operaciones CRUD.  
👉 Repositorio del backend: [Backend - Proyecto Fullstack](https://github.com/adore1968/proyecto-full-stack-back)

---

## 🧰 Tecnologías utilizadas

- **React** – Librería principal para construir la UI.
- **React Router DOM** – Para la navegación entre vistas.
- **Axios** – Para consumir la API mediante una instancia personalizada.
- **Tailwind CSS** – Para los estilos con clases utilitarias.
- **Context API** – Para el manejo global del estado (auth y contactos).
- **React Icons** – Para íconos, incluyendo un loader animado con `animate-spin`.

---

## 🔐 Funcionalidades principales

- Autenticación de usuario mediante Firebase.
- Protección de rutas privadas.
- CRUD de contactos (crear, ver, editar, eliminar).
- Loader visual mientras se cargan los datos.
- Manejo de sesión con almacenamiento de token JWT.

---

## 🌐 Comunicación con el backend

Todas las peticiones al backend se realizan usando una **instancia de Axios** que incluye automáticamente el token JWT en los headers.  
El backend expone las siguientes rutas:

- `POST /auth/login`
- `GET /contactos`
- `POST /contactos`
- `PUT /contactos/:id`
- `DELETE /contactos/:id`
