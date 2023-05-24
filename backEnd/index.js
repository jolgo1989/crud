// Para iniciarlizar un proyecto con node js escribimos en la terminal los siguientes PaymentResponse
// * npm init -y(y significa yes en otras palabras que aceptamos toda la configuración por defecto):instla las dependencia de package.json
// * npm i(i significa install) express mysql nodemon : instala los modulos de express, mysql y nodemon

// const express = require("express");
// const mysql = require("mysql");

// const app = express();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "AP288338",
//   database: "test",
// });

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "me",
//   password: "secret",
//   database: "my_db",
// });

// //Ruta raiz
// app.get("/", (req, res) => {
//   res.json("Hola mundo");
// });

// app.get("/books", (req, res) => {
//   const q = "SELECT * FROM books";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
// const PUERTO = 3000;

// app.listen(PUERTO, () => {
//   console.log(`backend conectado al puerto ${PUERTO}`);
// });

import mysql from "mysql2";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AP288338",
  database: "test",
});

con.query("SELECT * FROM books", function (error, results, fields) {
  if (error) throw error;
  console.log("The result is: ", results);
});

import express from "express";
var app = express();

app.get("/", (req, res) => {
  res.json("Hola mundo");
});

app.get("/books", function (req, res) {
  con.query("SELECT * FROM books", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
