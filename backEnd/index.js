// Para iniciarlizar un proyecto con node js escribimos en la terminal los siguientes
// npm init -y (y significa yes en otras palabras que aceptamos toda la configuración por defecto):instla las dependencia de package.json
// npm i express mysql nodemon : instala los modulos de express, mysql y nodemon
//  Para trabajar con import se debe Agregar en el package.json el siguiente modulo : "type": "module"
// en el package.json agregar  "start": "nodemon index.js" con el fin reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos.
//Por ultimo escribir en la terminal npm start para nodemon se ejecute automaticamente

import express from "express";
import mysql from "mysql2";
import cors from "cors";

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
// #CorsFerences
app.use(express.json());
app.use(cors());

//Consultar libros
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Insertar libros a la db
app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Libros creado exitosamente");
  });
});

//Eliminar libros db
app.delete("/books/:id", (req, res) => {
  const booksId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [booksId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Libro eliminado exitosamente");
  });
});

//Actualizar datos de la db
app.put("/books/:id", (req, res) => {
  const booksId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?,`cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, booksId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Libro actualizados exitosamente");
  });
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`App escuchando en el puerto ${PUERTO}`);
});
