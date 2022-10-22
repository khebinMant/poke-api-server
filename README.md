# Aplicación de poke-api del lado del servidor


## Scrips disponibles

Para poder hacer funcionar localmente este proyecto se requiere los siguientes comandos

### `Arrancar aplicación`

## `npm start`

Se ingresa en la carpeta que contiene el proyecto y se ejecuta el comando npm start esto arrancará la applicación en modo de desarrollo
correra en la siguiente dirección en el puerto 3005 puede ser vista en el navegador.

>[http://localhost:3005](http://localhost:3005) 

La página cargará si existe pero hay una ruta en particular que se puede probar para verificar su funcionamiento y es la siguiente

>http://localhost:3005/api/v1/public/pokemons

Esta aplicación no requiere crear una base de datos localmente se conecta a una base de datos POSTGRESQL alojada en Heroku

En la consola se podrá visualizar como se ejecutan los comandos para la creación de los tablas en la base de datos remota esto gracias al ORM sequelize que fue usado en el desarrollo del back-end, finalmente y mostrará el siguiente mensaje: 

>DB en línea...

esto confirma el arranque del servidor.

### `Documentación`

La documentación del API  se puede visualizar una vez arracando el servidor en el siguiente enlace

>http://localhost:3005/api/v1/docs/#/
