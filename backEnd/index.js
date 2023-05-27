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

//Esta línea de código permite a la aplicación Express recibir datos en formato JSON en las solicitudes entrantes, sin esta línea de código, la aplicación no sería capaz de analizar automáticamente los datos JSON entrantes.

//Si aparece un error a la hora hacer una petición como cliente es porque hace falta esta linea de codigo
app.use(express.json());

//Ruta books que hace una consulta a la base de datos
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";

  const values = [req.body.title, req.body.description, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Libros creado exitosamente");
  });
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`App escuchando en el puerto ${PUERTO}`);
});
