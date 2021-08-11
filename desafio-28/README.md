## Desafio 28 - Usando el objeto Process

### Objetivos

En base al ultimo proyecto permitir ingresar por linea de comandos el puerto de escucha del servidor, el FACEBOOK_CLIENT_ID y el FACEBOOK_CLIENT_SECRET.

Crear una ruta nueva /info que devuelva
-Argumentos de entrada
-Nombre de la plataforma
-Version de Node.js
-Uso de memoria
-Path de ejecucion
-Process id
-Carpeta corriente

Crear un ruta /randoms que permite calcular una cant de numeros aleatorios de 1 a 1000 especificada por query params. Si no se ingresa calcular 100000000, el dato devuelto sera un objeto con los numeros generados y la cantidad que salio cada numero. Esta ruta tiene que ser no bloqueante. Utilizando fork

---

:point_right: Se crearon las dos rutas, info y randoms dentro de las rutas indices ( `/index.routes`).
:point_right: En la funcion de randoms se implemento la funcion fork.

Se debe crear `.env` con las variables mostradas en `.env.example`
Para ejecutar en local `npm run dev`.

> Curso de Programacion Backend Coderhouse
