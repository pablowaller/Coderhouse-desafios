## Desafio 40 - Cliente HTTP de PRUEBAS

### Objetivos

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-40/consigna-40.PNG)

---

Se creo la carpeta `/persistences` la cual va a ser la encargada de manejar las interacciones a la base de datos a traves del Factory dentro de esta.

Se mantuvo la carpeta `/services` encargada de manegar la logica de negocio de la aplicacion la cual utiliza los modelos necesarios dentro de las persistencias establecidas. Para esto se utiliza el factory **PersistenceFactory** que recibe como parametro el nombre del modelo necesario y recibe una instancia de este.

Dentro de la carpeta persistences se encuentra:

- models: Se encuentras los diferentes tipos de persistencia de cada modelo.
- Mongo / MySql : Se encuentran los archivos de configuracion, modelos y migraciones necesarios para la creacion de los modelos correspondientes.
- PersistenceFactory : Clase de tipo Factory que devuelve una instancia del modelo requerido.

Cada tipo de persistencia requerida se la devuelve utilizando el metodo estatico _getInstance_ declarado en cada una de estas para obtener el **Patron Singleton**.

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
