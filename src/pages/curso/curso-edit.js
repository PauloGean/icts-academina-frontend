import { useEffect, useState } from "react";
import api from "../../api";
import Titulo from "../../components/titulo";

function CursoEdit(props) {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [novo, setNovo] = useState(true)
    const [id, setId] = useState(null)

    useEffect(() => {
        if (props.curso != null) {
            setNome(props.curso.nome)
            setDescricao(props.curso.descricao)
            setNovo(false)
            setId(props.curso.idcurso)
        } else {
            setNome('')
            setDescricao('')
            setNovo(true)
            setId(null)
        }

    }, [props.curso])





    function salvar() {
        const dados = { 'nome': nome, 'descricao': descricao }
        console.log(dados)

        api.post('curso', dados).then(()=>{
            setNome('')
            setDescricao('')
            props.refresh()
        }
        ).catch(function (error) {

            alert(error.message)
        })
        // api.post('curso', dados)
        // .then(() => {
        //     setNome('')
        //     setDescricao('')
        //     props.refresh()
        // })
    }

    function atualizar() {
        const dados = { 'nome': nome, 'descricao': descricao }
        console.log(dados)
        api.put('curso/' + id, dados).then(() => {
            setNome('')
            setDescricao('')
            props.refresh()
        })
    }

    return (
        <>
            <Titulo valor="Curso"></Titulo>
            <form>
                <label>Nome:</label>
                <input type="text" name="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)} />

                <label>Descricao:</label>
                <input type="text" name="descricao"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)} />
                {novo ?
                    <button type="button" onClick={salvar}>Salvar</button>
                    :
                    <button type="button" onClick={atualizar}>Atualizar</button>
                }


            </form>

        </>
    )
}

export default CursoEdit;