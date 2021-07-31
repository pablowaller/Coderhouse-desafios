## Desafio 26- Inicio de sesion con Passport-Local y Mongo

Se debia implementar un sistema de registro y login utilizando passport, ambos con username y password, persistiendo los datos sobre mongoDB. Agregar ademas vistas de error.

---

:point_right: Se creo el schema User (`/schemas/User`) para la persistencia en la base de datos, dentro de está se utilizó bcrypt para hashear las password al guardar un nuevo usuario y el metodo verifyPassword para comparar contraseñas.

:point_right: Se utilizaron las librerias de `passport` y la estrategia `passport-local`. Se agrego su configuracion en el archivo `config/passport.js` tanto para el login y el signup.

:point_right: Sobre el desafio anterior se agrego la ruta de `/auth/signup/` y las de errores correspondientes dentro del archivo de ruta `/routes/auth.js`.

> Curso de Programacion Backend Coderhouse
