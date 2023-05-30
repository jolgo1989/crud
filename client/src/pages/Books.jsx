// Instalar axios:npm i axios
//Finalizada la instalción ejecutar npm start

// Cuando se aplique el Fetch va aparecer un error (observarlo en el console del navegador)
// SOLUCIÖN: instalar cors(npm i cors)
//Ir la terminal dirigirse al backend(cd backend)
//Ir a la carpeta backend y seguir la referencia #CorsFerences
import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fecthAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllBooks();
  }, []);
  return <div>Books hola todo bien</div>;
};

export default Books;
