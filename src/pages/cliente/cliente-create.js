
import '../../MeuCss.css'

import api from '../../api';
import { useEffect, useState } from 'react';
import Titulo from '../../components/titulo';

function ClienteCreate(props) {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novo, setNovo] = useState(true)
    const [id, setId] = useState(null);
    const [showView, setShowView] = useState(false)

    useEffect(() => {
        if (props.cliente != null) {
            setNome(props.cliente.nome)
            setCpf(props.cliente.cpf)
            setId(props.cliente.idcliente)
            setNovo(false)
        } else {
            setNome('')
            setCpf('')
            setId(null)
            setNovo(true)
        }
    }, [props.cliente])

    useEffect(() => {
        setShowView(props.show)

    }, [props.show])


    function mudouNome(event) {
        setNome(event.target.value)
    }

    function salvar() {
        var dados = { "nome": nome, "cpf": cpf }
        console.log(dados);

        api.post('cliente', dados).then(e => {
            setNome("");
            setCpf("");
            props.refresh()
            // alert("Salvo com sucesso");
        }).catch((error)=> {
            const msg= error.response.data.message
            alert(msg)
         })

    }


    function atualizar() {
        var dados = { "nome": nome, "cpf": cpf }
        console.log(dados);

        api.put('cliente/' + id, dados).then(e => {
            setNome("");
            setCpf("");
            setId(null)
            props.refresh()
            // alert("Salvo com sucesso");
        }).catch((error)=> {
            const msg= error.response.data.message
            alert(msg)
         })

    }


    return (
        <>
            
                <div >
                    {novo ? <Titulo valor="Cadastrar Cliente" /> : <Titulo valor="Atualizar Cliente" />}

                    <form>
                        <label>
                            Nome:
                            <input type="text" value={nome} onChange={mudouNome} name="nome" />
                        </label>
                        <label>
                            CPF:
                            <input type="text" name="cpf" value={cpf}
                                onChange={(e) => setCpf(e.target.value)} />
                        </label>
                        {/* {someItem ? displayThisIfTrue : displayThisIfFalse} */}
                        {novo ?
                            <button type='button' onClick={salvar} >Salvar</button>
                            :
                            <button type='button' onClick={atualizar} >Atualizar</button>
                        }




                    </form>

                </div>

        </>
    );
}

export default ClienteCreate;