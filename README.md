# Proyecto GraphQL MongoDB Blog

Este proyecto es un blog desarrollado utilizando GraphQL y MongoDB como base de datos. Proporciona una API para crear, leer, actualizar y eliminar publicaciones de blog.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- `graphql/`: Contiene el código fuente principal.
- `models/`: Contiene los modelos de datos de MongoDB.
- `middleware/`: 
    - `auth.js`: Verifica el inicio de sesión del usuario.
- `db/`: Configuración de la conexión a la base de datos MongoDB.
    - `index.js`: Archivo de configuración de la conexión.
- `server.js`: Archivo principal que ejecuta la aplicación.
- `.env`: Configuración de variables de entorno.
- `package.json`: Archivo de configuración de npm con dependencias y scripts.
- `README.md`: Documentación del proyecto (este archivo).

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto: `cd graphql_mongodb_blog`.
3. Instala las dependencias del proyecto: `npm install`.
4. Configura la conexión a la base de datos MongoDB en `db/index.js` o en `.env`.
5. Completa la configuración de las variables de entorno en `.env`.
6. Inicia el servidor GraphQL: `npm start`.

## Uso

Una vez que el servidor esté en funcionamiento, puedes realizar las siguientes operaciones a través de la API:

### Primeros pasos:
    - Crea un nuevo usuario.
    - Ejecuta la mutación `login` y copia el código encriptado, que será tu llave (válido por 1 hora).
    - Envía esto por el encabezado en cada petición: `authorization: Bearer tu_llave`.

- Crear una nueva publicación de blog.
- Obtener una lista de todas las publicaciones de blog.
- Obtener una publicación de blog por su ID.
- Actualizar una publicación de blog existente.
- Eliminar una publicación de blog.

Puedes utilizar herramientas como Postman o GraphQL Playground para realizar estas operaciones.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza los cambios necesarios en tu rama.
4. Haz commit de tus cambios: `git commit -m "Agregar nueva funcionalidad"`.
5. Sube tus cambios a tu repositorio remoto: `git push origin nueva-funcionalidad`.
6. Abre un pull request en este repositorio.
