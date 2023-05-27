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
