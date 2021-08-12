## Desafio 29 - Ejecutar servidores en Node

Utilizando cluster, forever y PM2

### Objetivos

Agregar un parametro mas a la ruta que permita ejecutar el servidor en modo fork o cluster.

Agregar a la vista info el numero de procesadores presentes.
Ejecutar el servidor utilizando forever.
Ejecutar el servidor utilizando PM2
Permitir el modo escucha tanto en PM2 como en Forever

---

:point_right: Se creo un archivo index el cual inicia el servidor en modo cluster o fork segun el parametro que se le pase.

:point_right: Se cambio la vista `/views/info.hbs` para mostrar el numero de servidores.

:point_right: Se crearon los script en el package.json para ejecutar las funciones correspondientes de Forever y PM2:

- `npm run forever-fork` Ejecutar en modo fork.
- `npm run forever-fork-watch`Ejecutar en modo fork mirando los cambios.
- `npm run forever-cluster` Ejecutar en modo cluster. _Actualizar Valores de facebookId y secret para que funcione el login_.
- `npm run forever-cluster-watch` Ejecutar en modo cluster mirando cambios. _Actualizar Valores de facebookId y secret para que funcione el login_.
- `npm run PM2-fork`: Ejecutar con PM2 en modo fork.
- `npm run PM2-cluster`: Ejecutar con PM2 en modo cluster.

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

Otras opciones : `npm run dev PORT FACEBOOK_CLIENT_ID FACEBOOK_CLIENT_SECRET FORK/CLUSTER`

> Curso de Programacion Backend Coderhouse
