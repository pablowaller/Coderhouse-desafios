## Desafio 24- Login con formulario

Se debia incorporar un mecanisco de login sencillo que permita loguear al cliente con su nombre mediante un formulario, luego de que este loguedo mostrar un mensaje de bienvenido y un boton para cerrar sesion.

Verificar en cada request que el cliente permanezca logueado y que se recargue un minuto de tiempo en cada request.
Al desloguearse se debe mostrar un mensaje de saludo con el nombre de usuario.

---

Se creo un middleware que checkea si esta logueado dentro de `server.js` el cual se aplica al root (`/`). Si no lo está redirecciona a la pagina de login. `/auth`.

Se agrego al proyecto la ruta `routes/auth`, esta renderiza la vista de login (`views/login`) con su formulario.

Se agregaron ademas las rutas `api/auth`, en las que se crearon las funciones de login y logout para ejecutar los mecanismos correspondientes.

Para ejecutar en local `npm run dev`.

> Curso de Programacion Backend Coderhouse
