## Desafio 25- Persistir datos de session en Mongo Atlas

Sobre el desafio anterior, se debia cambiar la persistencia de sesiones en memoria a Mongo Atlas.

:point_right: Se agrego la libreria `connect-mongo`, se la implemento dentro de la session de express con la propiedad ttl con el valor de 60 \* 10 para limitar la duracion de la sesion en 10 minutos en cada ingreso.

:point_right: Se instalo dotenv para utilizar variables de entorno.

Se debe crear `.env` con las url mostradas en `.env.example`
Para ejecutar en local `npm run dev`.

> Curso de Programacion Backend Coderhouse
