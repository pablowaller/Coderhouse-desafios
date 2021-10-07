## Desafio 44 - Reformar para usar graphql

### Objetivos

---

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/44-Reformar-para-usar-graphql/consigna-44.PNG)

:heavy_check_mark: Se crearon los metodos que restaban en el archivo index de `/graphql`.  
:heavy_check_mark: Se eliminaron rutas api, utilizando solo la ruta de graphql.  
:heavy_check_mark: Se implemento el request a la ruta creada en el archivo `/public/index.js`.  

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
