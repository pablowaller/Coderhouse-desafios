## Desafio 43 - Esquema Api Restful

### Objetivos

---

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/43-esquema%20api%20restful/consigna-43.PNG)

:heavy_check_mark: Se elimino la carpeta `controllers` unificando esta funcion en routes.  
:heavy_check_mark: Se cambiaron Routas a formato REST.  
:heavy_check_mark: Se agregaron validaciones con la biblioteca Joi dentro de `middlewares`.  
:heavy_check_mark: Se aplico Helmet con la configuracion necesaria.  
:heavy_check_mark: Se aplicaron cors.  

---

Se debe crear `development.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local con nodemon:

```
npm run watch
```

Para ejecutar en dev con un puerto especifico:

```
npm run watch -- --port=8082
```

Para ejecutar en modo cluster:

```
npm run watch -- --cluster=CLUSTER
```

:seedling: Realizar migraciones de mysql:

```
npm run mysql:migrate
```

> Curso de Programacion Backend Coderhouse
