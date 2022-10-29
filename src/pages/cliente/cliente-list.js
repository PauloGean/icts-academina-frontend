import '../../App.css';
import '../../MeuCss.css'
import '../../tableCustom.css'
import api from '../../api';
import { useEffect, useState } from 'react';
import ClienteCreate from './cliente-create';
import Titulo from '../../components/titulo';
import AppMenu from '../../components/menu/app-menu';
function ClienteList(){
    var [clientes, setClientes] = useState([])

    var [cliente, setCliente] = useState(null)
    var [show, setShow] = useState(false)

    useEffect(() => {
		listarClientes()
	},[])


  function listarClientes(){
    api.get('cliente').then((response) => {
      setClientes(response.data)
      console.log(clientes)
    });
  }

  function deletarClientes(id){
    console.log("deletarClientes")
    console.log(id)
    api.delete('cliente/'+id).then((response) => {
      console.log("Deletado com sucesso")
      listarClientes()
    });
  }

  function editar(clienteItem){
    console.log(clienteItem)
    setCliente(clienteItem)
    setShow(true);

  }
  
  return (
    <div className="App">
      <AppMenu></AppMenu>
      
      <ClienteCreate refresh={listarClientes} show={show} cliente={cliente}></ClienteCreate>

      <Titulo valor="Clientes"></Titulo>

      <button  type='button' onClick={e=>listarClientes()}>Listar</button>
      <button  type='button' onClick={e=>editar(null)}>Novo</button>

      <table className='minhaTabela'>
        {/* CABECALHO */}
        <tr>
          <th>NOME</th>
          <th>CPF </th>
          <th>#</th>

        </tr>
        {/* Linhas */}
        {clientes.map((c) => {
          return (
            <tr key={'row_'+c.idcliente}>
              <td>{c.nome} </td>
              <td> {c.cpf}</td>
              <td> 
                <button onClick={e=>deletarClientes(c.idcliente)} type='button'>Excluir</button>
                <button onClick={e=>editar(c)} type='button'>Editar</button>
              </td>

            </tr>)

            
        })}
      </table>
    </div>
  );
}

export default ClienteList;