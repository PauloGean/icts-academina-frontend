import { useEffect, useState } from "react";
import api from "../../api";
import AppMenu from "../../components/menu/menu";
import Titulo from "../../components/titulo";
import CursoEdit from "./curso-edit";

export default function CursoList() {



    const [cursos, setCursos] = useState([])
    const [cursoEdit, setCursoEdit] = useState(null)

    useEffect(() => {
      listarCursos()
    },[])
  
    

    function listarCursos() {

        api.get('curso').then((response) => {
            setCursos(response.data)
        }  )
    }
    function deletar(id) {

      api.delete('curso/'+id).then(() => {
          listarCursos();
      })

  }
  function editar(curso) {

    setCursoEdit(curso)

}


    return (
        <>
            <div className="App">
                
                <AppMenu/>

            <CursoEdit refresh={listarCursos} curso={cursoEdit}></CursoEdit>

                <Titulo valor="Cursos"></Titulo>
                <button onClick={listarCursos}>Listar</button>
                <button onClick={e=>setCursoEdit(null)}>Novo  </button>


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
                                        <button onClick={c=>editar(e)}>Editar</button>
                                        <button onClick={c=>deletar(e.idcurso)}>Excluir</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </table>





            </div>


        </>
    )
}

