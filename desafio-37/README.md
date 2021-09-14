## Desafio 35 - Enviar Mails y sms desde la App.

### Objetivos

![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-35/consigna35a.PNG)
![image text](https://raw.githubusercontent.com/AlejandroD-A/Coderhouse-desafios/main/desafio-35/consigna35b.PNG)

---

:point_right: Se instaló la libreria nodemailer para el envio de mails. Se creó la funcion _sendFacebookEmail_ dentro del archivo `/mail/ethereal` para enviar mails desde **ethereal**. Ésta función se la invocó en el archivo `config/passport` al realizar login y logout con la opción y el usuario correspondiente.

:point_right: Se creó otra función similar para enviar mails desde **gmail** dentro de `/mail/gmail`.

:point_right: Dentro de la carpeta `/sms/twilioSms` se construyó la función _sendAdminMessage_ para enviar mensajes de texto a un numero determinado dentro del archivo .env. Ésta se la invoca en el listener de los sockets al recibir la palabra 'Administrador' en la carpeta propia de los listener : `/listeners`.

:point_right: Se agregarón nuevas variables en el archivo .env y .env.example.

---

Se debe crear `.env` con las variables mostradas en `.env.example`.  
Para ejecutar en local `npm run dev`.

Otras opciones : `npm run dev PORT FACEBOOK_CLIENT_ID FACEBOOK_CLIENT_SECRET FORK/CLUSTER`

> Curso de Programacion Backend Coderhouse
