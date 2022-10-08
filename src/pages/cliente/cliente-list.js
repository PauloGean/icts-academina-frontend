import '../../App.css';
import '../../MeuCss.css'
import '../../tableCustom.css'
import api from '../../api';
import { useEffect, useState } from 'react';
function ClienteList(){
    var [clientes, setClientes] = useState([])
    useEffect(() => {
		listarClientes()
	},[])


  function listarClientes(){
    api.get('cliente').then((response) => {
      setClientes(response.data)
      console.log(clientes)
    });
  }
  
  return (
    <div className="App">
      <h1 className='meuTitulo'>Clientes</h1>

      <button onClick={listarClientes}>Listar</button>

      <table className='minhaTabela'>
        {/* CABECALHO */}
        <tr>
          <th>NOME</th>
          <th>CPF </th>
        </tr>
        {/* Linhas */}
        {clientes.map((c) => {
          return (
            <tr>
              <td>{c.nome} </td>
              <td> {c.cpf}</td>
            </tr>)
        })}
      </table>
    </div>
  );
}

export default ClienteList;