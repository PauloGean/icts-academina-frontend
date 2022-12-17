import { useEffect, useState } from "react";
import api from "../../api";
import AppMenu from "../../components/menu/app-menu";
import Titulo from "../../components/titulo";
import CursoEdit from "./curso-edit";

function CursoList() {
    const [cursos, setCursos] = useState([]);
    const [cursoEdit, setCursoEdit] = useState(null)
    
    useEffect(() => {
		listarCursos()
	},[])


    function listarCursos() {
        api.get('curso').then((response) => {
            setCursos(response.data);
        });
    }

    function deletar(id) {
        api.delete('curso/' + id).then(() => {
            listarCursos();
        });
    }

    function editar(curso){
        setCursoEdit(curso)
    }

    return (<>
        <div className="App">
            <AppMenu></AppMenu>
            <CursoEdit refresh={listarCursos} curso={cursoEdit}></CursoEdit>
            <Titulo valor="Cursos"></Titulo>
            
            <button onClick={listarCursos}>Lista</button>
            <button onClick={e=>setCursoEdit(null)}>Novo</button>

            <table className='minhaTabela'>
                <tr>
                    <th> Nome </th>
                    <th> Descricao </th>
                    <th>  </th>
                </tr>
                {
                    cursos.map(e => {
                        return (
                            <tr key={e.idcurso}>
                                <td> {e.nome} </td>
                                <td> {e.descricao} </td>
                                <td>
                                    <button onClick={c=>deletar(e.idcurso)}>Excluir</button>
                                    <button type='button'  onClick={c=>editar(e)}>Editar</button>

                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </>)
}
export default CursoList;