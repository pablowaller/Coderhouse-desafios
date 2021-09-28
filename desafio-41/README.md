## Desafio 41 - Incorporando DAO y DTO

### Objetivos

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-41/consigna-41.PNG)

---

:heavy_check_mark: Se incorpo DAO Y DTO: - Se crearon las diferentes interfaces las cuales implementan a traves de la herencia los modelos tanto de mysql y mongo dentro de la carpeta DAOS. Devuelven a su vez un objeto de tipo DTO segun el modelo necesario.

:heavy_check_mark: Patron Repository para gestionar el canal de chat: - Dentro de la carpeta `/repository` se creo **MessageRepository**, el cual hereda los metodos CRUD de **BaseRepository**. Este repository es injectado en el service de Message incorporando abstraccion sobre la base de datos a tratar.

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

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
