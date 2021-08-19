## Desafio 30 - Servidor NGINX

### Objetivos

- Arrancar dos instancias del servidor con PM2 modo fork.
  Instancia 1: Puerto 8081, parametro FORK. modo watch
  Instancia 2: Puerto 8082, parametro CLUSTER. modo watch

- Configurar Nginx para que las rutas /info y randoms/ (puerto 80) se deriven a esos dos instancias, balanceando la carga para que la del modo cluster reciba cuatro veces mas trafico que la de modo fork.

- Verificar correcto funcionamiento.

---

:point_right: Se crearon dos scripts:

- `npm run PM2-fork`: Inicia el servidor en el puerto 8081 en modo Watch con el parametro 'FORK'.
- `npm run PM2-cluster`: Inicia el servidor en el puerto 8082 en modo Watch con el parametro 'CLUSTER'.

:point_right: Se agrego nginx al root del proyecto. Se aplicaron las configuraciones correspondientes en `nginx.conf`.

- Las rutas /info y /randoms utilizan el usptream node_app como proxy para realizar el balanceo de carga correspondiente.

**Para realizar la prueba se iniciaron las dos instancias con los scripts creados y se ejecuto el servidor nginx las cuales permite el acceso a los endpoints requeridos desde el puerto 80.**

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

Otras opciones : `npm run dev PORT FACEBOOK_CLIENT_ID FACEBOOK_CLIENT_SECRET FORK/CLUSTER`

> Curso de Programacion Backend Coderhouse
