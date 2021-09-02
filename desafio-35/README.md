## Desafio 33 Proyecto en Heroku

### Objetivos

Crear un Proyecto en Heroku para subir el servidor que venimos realizando.
Subir el codigo a Heroku y comprobar su correcta funcion en la nube.
El servidor debe seguir funcionando de forma local.

---

Se creo el proyecto y se subio utilizando la vinculacion con Github a la url:  
https://coderapp-desafio33.herokuapp.com/

Se modificaron los archivos de configuracion /config/db para lograr la conexion a las bd de Atlas.
Se agrego en el archivo de entorno la variable ENV para el funcionamiento dinamico tanto si se encuentra en modo DESARROLLO o PRODUCCION.

Se modifico el archivo Javascript de la carpeta public para realizar un fetch dinamico segun si se encuentra en local o en heroku.

Se tuvo que remover la opcion de autenticacion con Facebook ya que require certificados SSL para su utilizacion desde heroku.

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

Otras opciones : `npm run dev PORT FACEBOOK_CLIENT_ID FACEBOOK_CLIENT_SECRET FORK/CLUSTER`

> Curso de Programacion Backend Coderhouse
