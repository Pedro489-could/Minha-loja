import "./index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// Provedor de rotas, do react-router
import { RouterProvider } from "react-router-dom";

// Meu gerenciador de rotas
import MyRouter from "./MyRouter.jsx";

// Importação do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Importa  o provedor de contexto de usuário
import { AutProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Fornece as informações de contexto para toda a aplicação*/}
    <AutProvider>
      {/* Faz o provedor utilizar as rotas que você definiu no MyRouter */}
      <RouterProvider router={MyRouter} />
    </AutProvider>
  </StrictMode>
);
