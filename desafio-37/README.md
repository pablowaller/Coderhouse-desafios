## Desafio 37 - Dividir en Capas el Proyecto

### Objetivos

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-37/consigna-37.PNG)

---

:point_right: Routing : Se mantuvo la capa de routeo dentro de la carpeta /routes, un archivo por cada modulo realizado, Auth, Products en la carpeta Api y se suma index en las carpeta general donde se encuentra el ruteo de vistas. En cada archivo se establecen las rutas, se aplican los middlewares necesarios y en ultima instancia se pasa la funcion del controlador especifico.

:point_right: Controladores: Manipulan la request recibida ( los datos que recibe la peticion ), llaman al servicio necesario y segun la respuesta obtenida de este envian la respuesta que corresponda.

:point_right: Logica de Negocio y Persistencia : Se incorpora dentro de los servicios que se van a utilizar en la carpeta '/services', heredan la funcionalidad de MongoCrud, a su vez permite que se le agregue nuevas funcionalidades requeridas. Utilizan los Schemas de Mongo dentro de la carpeta /schemas.

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

Otras opciones : `npm run dev PORT FACEBOOK_CLIENT_ID FACEBOOK_CLIENT_SECRET FORK/CLUSTER`

> Curso de Programacion Backend Coderhouse
