
import '../../MeuCss.css'

import api from '../../api';
import { useState } from 'react';

function ClienteCreate() {
    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");

    function mudouNome(event){
        setNome(event.target.value)
    }

    function salvar(){
        var dados={"nome":nome, "cpf":cpf}
        console.log(dados);

        api.post('cliente', dados).then(e=>{
            setNome("");
            setCpf("");
            alert("Salvo com sucesso");
        })

    }


    return (
        <div >
            <h1 className='meuTitulo'>Criar Cliente</h1>
            <form>
                <label>
                    Nome:
                    <input type="text" value={nome}  onChange={mudouNome} name="nome" />
                </label>
                <label>
                    CPF:
                    <input type="text" name="cpf" value={cpf} 
                     onChange={(e)=>setCpf(e.target.value)}/>
                </label>
                <button type='button' onClick={salvar} >Salvar</button>
            </form>

        </div>
    );
}

export default ClienteCreate;