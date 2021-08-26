## Desafio 31 Loggers y Gzip

### Objetivos

Se debia incorporar al proyecto la compresion gzip.
Verificar sobre la ruta /info con y sin compresion la diferencia de bytes.  
Elegir un logger e implementarlo con el siguiente criterio en un modulo a eleccion:

- Loggear a todos los niveles por consola
- Registrar solo los logs de warning a un archivo warn.log
- Enviar solo los logs de error a un archivo error.log

---

Se aplico el middleware gzip para la compresion.

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-31/diferencia.PNG)

Se creo la configuracion del logger winston dentro de la carpeta /logger.  
Para poder separar los niveles se implementaron tres instancias de winston:

logger = Registra todos los niveles y los muestra por la consola

loggerWarn = Registra desde el nivel warn los guarda en /logs/warn.log y los muestra en consola.

loggerError = Registra solo nivel error los guarda en /logs/error.log y los muestra en consola.

Se utilizaron estas tres instancias en server y en el controlador de Product.

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

Otras opciones : `npm run dev PORT FACEBOOK_CLIENT_ID FACEBOOK_CLIENT_SECRET FORK/CLUSTER`

> Curso de Programacion Backend Coderhouse
