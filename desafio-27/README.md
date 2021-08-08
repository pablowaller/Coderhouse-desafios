## Desafio 27 - Inicio de sesion con facebook

Se debia modificar el ultimo proyecto, reemplazando el login local por la estrategia Facebook.

:point_right: Se implemento la strategia dentro de `config/passport`.
:point_right: Se modifico el serialize para guardar la respuesta correspondiente en la sesion.
:point_right: Se cambio la vista login agregando el enlace al auth de facebook para la redireccion.

Se debe crear `.env` con las variables mostradas en `.env.example`
Para ejecutar en local `npm run dev`.

> Curso de Programacion Backend Coderhouse
