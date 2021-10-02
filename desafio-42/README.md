## Desafio 41 - Incorporando DAO y DTO

### Objetivos

---

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-42/consigna-42.PNG)

:heavy_check_mark: Se creo el archivo de configuraciones en `/config/config.js`. Se establecieron las variables de entorno utilizadas.

:heavy_check_mark: Se crearon los script en package.json.

---

Se debe crear `development.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local:

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

:green_circle: Para ejecutar con mongodb:

```
npm run dev mongodb
```

:large_blue_circle: Para ejecutar con mysql:

```
npm run dev mySql
```

> Curso de Programacion Backend Coderhouse
