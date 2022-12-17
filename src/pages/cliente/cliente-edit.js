
import '../../MeuCss.css'

import api from '../../api';
import { useEffect, useLayoutEffect, useState } from 'react';
import Titulo from '../../components/titulo';
import { useNavigate, useParams } from 'react-router-dom';

function ClienteEdit(props) {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novo, setNovo] = useState(true)
    const [id, setId] = useState(null);
    const [showView, setShowView] = useState(false)

    const { idCliente } = useParams()

    let navigate = useNavigate();


// ComponentWillMount() 
    useLayoutEffect(() => {

        console.log(idCliente)
        setNovo(false)

        if (idCliente!='create'){
            setNovo(false)
            api.get('cliente/'+idCliente).then((response) => {
                console.log(response.data)
                const cliente = response.data
                // goToList()
                setNome(cliente.nome)
                setCpf(cliente.cpf)
                setId(cliente.idcliente)
                setNovo(false)
              });
        }else{
            setNovo(true)

        }

        

      }, []);


    function goToList(){
        navigate("/cliente", { replace: true });

    }




    function mudouNome(event) {
        setNome(event.target.value)
    }

    function salvar() {
        var dados = { "nome": nome, "cpf": cpf }
        console.log(dados);

        api.post('cliente', dados).then(e => {

            goToList()
            // setNome("");
            // setCpf("");
            // props.refresh()
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

            goToList()
            // setNome("");
            // setCpf("");
            // setId(null)
            // props.refresh()
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

                        <button type='button' onClick={goToList} >Cancelar</button>
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

export default ClienteEdit;