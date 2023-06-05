// Instalar axios:npm i axios
//Finalizada la instalción ejecutar npm start

// Cuando se aplique el Fetch va aparecer un error (observarlo en el console del navegador)
// SOLUCIÖN: instalar cors(npm i cors)
//Ir la terminal y dirigirse al backend(cd backend)
//Ir a la carpeta backend y seguir la referencia #CorsFerences
// NOTA:cors sirve para que servidor permita a nuestra aplicación utilizar nuestra backend ip

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  //Función para eliminar un libro
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3000/books/" + id);
      //Metodo para cuando se elimine el libro, la pagina se recargue automaticamente
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Lama Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          //Se debe utilizar book.id porque cada elemento de la db debetener una clave primaria
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">Update</button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
