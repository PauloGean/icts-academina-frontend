import '../../App.css';
import '../../MeuCss.css'
import '../../tableCustom.css'
import api from '../../api';
import { useEffect, useState } from 'react';
import FuncionarioCreate from './funcionario-create';
import Titulo from '../../components/titulo';
import AppMenu from '../../components/menu/menu';


function FuncionarioList(){
    var [funcionarios, setFuncionarios] = useState([])

    var [funcionario, setFuncionario] = useState(null)
    var [show, setShow] = useState(false)

    useEffect(() => {
		listarFuncionarios()
	},[])


  function listarFuncionarios(){
    api.get('funcionario').then((response) => {
      setFuncionarios(response.data)
      console.log(funcionarios)
    });
  }

  function deletar(id) {

    api.delete('funcionario/'+id).then(() => {
        listarFuncionarios();
    })
}

  function editar(funcionarioItem){
    console.log(funcionarioItem)
    setFuncionario(funcionarioItem)
    setShow(true);

  }
  
  return (
    <div className="App">

      <AppMenu/>
      
      <FuncionarioCreate refresh={listarFuncionarios} show={show} funcionario={funcionario}></FuncionarioCreate>

      <Titulo valor="Funcionários"></Titulo>

      <button  type='button' onClick={e=>listarFuncionarios()}>Listar</button>
      <button  type='button' onClick={e=>editar(null)}>Novo</button>

      <table className='minhaTabela'>
        {/* CABECALHO */}
        <tr>
          <th>NOME</th>
          <th>CPF </th>
          <th>#</th>

        </tr>
        {/* Linhas */}
        {funcionarios.map((c) => {
          return (
            <tr key={'row_'+c.idFuncionario}>
              <td>{c.nome} </td>
              <td> {c.cpf}</td>
              <td> 
                <button onClick={e=>deletar(c.idfuncionario)} type='button'>Excluir</button>
                <button onClick={e=>editar(c)} type='button'>Editar</button>
              </td>

            </tr>)

            
        })}
      </table>
    </div>
  );
}

export default FuncionarioList;