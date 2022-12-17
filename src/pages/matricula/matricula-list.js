import { useEffect, useState } from "react";
import api from "../../api";
import AppMenu from "../../components/menu/app-menu";
import Titulo from "../../components/titulo";
import MatriculaEdit from "./matricula-edit";


function MatriculaList() {
    const [matriculas, setMatriculas] = useState([]);
    const [matriculaEdit, setMatriculaEdit] = useState(null)
    
    useEffect(() => {
		listarMatriculas()
	},[])


    function listarMatriculas() {
        api.get('matricula').then((response) => {
            setMatriculas(response.data);
        });
    }

    function deletar(id) {
        api.delete('matricula/' + id).then(() => {
            listarMatriculas();
        });
    }

    function editar(matricula){
        setMatriculaEdit(matricula)
    }

    return (<>
        <div className="App">
            <AppMenu></AppMenu>

            <MatriculaEdit refresh={listarMatriculas} matricula={matriculaEdit}></MatriculaEdit>

            <Titulo valor="Matriculas"></Titulo>

            <button onClick={listarMatriculas}>Lista</button>
            <button onClick={e=>setMatriculaEdit(null)}>Novo</button>

            <table className='minhaTabela'>
                <tr>
                    <th> Cliente </th>
                    <th> Curso </th>
                    <th>  </th>
                </tr>
                {
                    matriculas.map(e => {
                        return (
                            <tr key={e.idmatricula}>
                                <td> {e.idcliente} </td>
                                <td> {e.idcurso} </td>
                                <td>
                                    <button onClick={c=>deletar(e.idmatricula)}>Excluir</button>
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
export default MatriculaList;