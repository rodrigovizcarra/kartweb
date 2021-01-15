# KartWeb

## General:
Este desarrollo se realizó para ser presentado como prueba tecnica en RokketLab.
El que consta de dos partes un BackEnd (kart-api) y FrontEnd este proyecto (kartweb) 

## Script disponible

Instalar dependencias

### `npm install`

En el directorio del proyecto para levantar la web:

### `npm start`

Luego de esto podrás ver la web en tu browser en  [http://localhost:3000](http://localhost:3000)

## Base de datos

Se utilizó Mongo DB con una base de datos llamada "kartchasis". 
Para utilizar sin cambios este código a nivel de base de datos se debe crear un usuario llamado "kartadmin" de la siguiente forma:

```bash
use kartchasis 
db.createUser(
  {
    user: "kartadmin",
    pwd: "123456",
    roles: [
       { role: "readWrite", db: "kartchasis" }
    ]
  }
)
```

