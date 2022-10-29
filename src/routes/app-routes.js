import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClienteList from "../pages/cliente/cliente-list";
import CursoList from "../pages/curso/curso-list";
import Home from "../pages/home/home";

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
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} /> 

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;