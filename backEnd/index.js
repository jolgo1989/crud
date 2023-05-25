// Para iniciarlizar un proyecto con node js escribimos en la terminal los siguientes PaymentResponse
// * npm init -y(y significa yes en otras palabras que aceptamos toda la configuración por defecto):instla las dependencia de package.json
// * npm i(i significa install) express mysql nodemon : instala los modulos de express, mysql y nodemon

import express from "express";
import mysql from "mysql2";
const app = express();

// Ruta raiz
app.get("/", (req, res) => {
  res.json("Hola mundo");
});
// Conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AP288338",
  database: "test",
});

//Ruta books que hace una consulta a la base de datos
app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`App escuchando en el puerto ${PUERTO}`);
});
