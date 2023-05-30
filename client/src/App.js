//Para trabajar con este modulo se debe seguir los siguientes pasos
// Instalar react: npx create-react-app .
// Iniar react: npm start
//Instalar router react(Rutas de react) : npm i react-router-dom
// Seguir las instrucciones para las rutas:https://reactrouter.com/en/main/start/overview
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
