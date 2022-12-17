import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClienteEdit from "../pages/cliente/cliente-edit";
import ClienteList from "../pages/cliente/cliente-list";
import CursoList from "../pages/curso/curso-list";
import Home from "../pages/home/home";
import MatriculaList from "../pages/matricula/matricula-list";

function PageNotFound() {
    return (
      <div>
        <h2>404 Page not found</h2>
      </div>
    );
  }


//TODO: BASE NAME  - Dependencia  
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/curso" element={<CursoList />} />
                <Route path="/cliente" element={<ClienteList />} />
                <Route path="/cliente/:idCliente" element={<ClienteEdit />} />
                <Route path="/matricula" element={<MatriculaList />} />

                
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} /> 

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;