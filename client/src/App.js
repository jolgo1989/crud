//Para trabajar con este modulo se debe seguir los siguientes pasos
// Instalar react: npx create-react-app .
// Iniar react: npm start
//Instalar router react(Rutas de react) : npm i react-router-dom
// Seguir las instrucciones para las rutas:https://reactrouter.com/en/main/start/overview

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

const App = () => {
  //Metodo para crear las rutas
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update",
      element: <Update />,
    },
  ]);

  return ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
