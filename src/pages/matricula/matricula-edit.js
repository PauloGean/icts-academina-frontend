import { useEffect, useState } from "react";
import api from "../../api";
import Titulo from "../../components/titulo";
function MatriculaEdit(props) {
    const [idcliente, setIdCliente] = useState('')
    const [idcurso, setIdCurso] = useState('')
    const [novo, setNovo] = useState(true)
    const [id, setId] = useState(null)
    var [clientes, setClientes] = useState([])
    var [cursos, setCursos] = useState([])


    useEffect(() => {
        if (props.matricula != null) {
            setIdCliente(props.matricula.idcliente)
            setIdCurso(props.matricula.idcurso)
            setNovo(false)
            setId(props.matricula.idmatricula)
        } else {
            setIdCliente('')
            setIdCurso('')
            setNovo(true)
            setId(null)
        }

        listarClientes()
        listarCursos()

    }, [props.matricula])


    function listarClientes(){
        api.get('cliente').then((response) => {
          setClientes(response.data)
          console.log(clientes)
        });
      }


      function listarCursos(){
        api.get('curso').then((response) => {
          setCursos(response.data)
          console.log(response.data)
        });
      }


    function salvar() {
        const dados = { 'idcliente': idcliente, 'idcurso': idcurso }
        console.log(dados)
        api.post('matricula', dados).then(() => {
            setIdCliente('')
            setIdCurso('')
            props.refresh()
        }).catch((error)=> {
            const msg= error.response.data.message
            alert(msg)
         })
    }

    function atualizar() {
        const dados = { 'idcliente': idcliente, 'idcurso': idcurso }
        console.log(dados)
        api.put('matricula/' + id, dados).then(() => {
            setIdCliente('')
            setIdCurso('')
            props.refresh()
        }).catch((error)=> {
            const msg= error.response.data.message
            alert(msg)
         })
    }


     function changeCliente(event){
        console.log(event.target.value)
        setIdCliente(event.target.value);
    }



    return (
        <>
            <Titulo valor="Matricula"></Titulo>
            <form>
                <label>Cliente:</label>

                <select id="selectCliente" onChange={changeCliente} value={idcliente}>
                  {
                    clientes.map(e=>{
                        return (
                            <option value={e.idcliente}>{e.nome}</option>
                        )
                    })
                  }
               </select>



                <label>Curso:</label>
                <select id="selectCurso" onChange={e =>   setIdCurso(e.target.value)} value={idcurso}>
                  {
                    cursos.map(e=>{
                        return (
                            <option value={e.idcurso}>{e.nome}</option>
                        )
                    })
                  }
               </select>
                {novo ?
                    <button type="button" onClick={salvar}>Salvar</button>
                    :
                    <button type="button" onClick={atualizar}>Atualizar</button>
                }


            </form>

        </>
    )
}

export default MatriculaEdit;