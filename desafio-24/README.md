## Desafio 23- Normalizr

Se debia cambiar el schema de Mensajes agregando un author, el cual contenia un id, nombre, apellido, edad, alias, avatar.

Normalizar estos datos usando Normalizr conteniendo una entidad de autores, y enviarlo al Frontend en el cual va a ser Denormalizado utilizando los mismos esquemas.
Se debia mostrar un porcentaje de compresion.

Se creo una funcion `normalizeMessages` en el archivo `/utils/normalizes` el cual recibe los mensajes y los devuelve normalizados, esta funcion se implementada dentro de los listeners de socketIO `/listeners/index`.

Para ejecutar en local `npm run dev`.

> Curso de Programacion Backend Coderhouse
