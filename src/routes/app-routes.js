import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClienteList from "../pages/cliente/cliente-list";
import CursoList from "../pages/curso/curso-list";
import FuncionarioList from "../pages/funcionario/funcionario-list";
import Home from "../pages/home/home";

function PageNotFound(){
    return(
        <div>
            <h2>404 Page Not Found</h2>
        </div>
    )
}




function AppRoutes(){

    return(
        
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/curso" element={<CursoList/>}/>
            <Route path="/cliente" element={<ClienteList/>}/>
            <Route path="/funcionario" element={<FuncionarioList/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            

        </Routes>
        
        
        </BrowserRouter>
        
    )
}

export default AppRoutes;
