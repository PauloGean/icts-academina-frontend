import { useState } from "react";

function SelectTest(props) {
    const [tipoPagamento, setTipoPagamento] = useState(null)
    const [tipoPagamentoId, setTipoPagamentoId] = useState(null)
    const tipoPagamentoList = [
        { id: 1, descricao: "Dinheiro" },
        { id: 2, descricao: "Cartão de Débito" },
        { id: 3, descricao: "Cartão de Crédito" },
        { id: 4, descricao: "PIX" }
    ]

    return (
        <>

            <h1>Select Fixo com String</h1>
            <select value={tipoPagamento} onChange={e => setTipoPagamento(e.target.value)}>

                <option value="D">Dinheiro</option>
                <option value="CD">Cartão de Débito</option>
                <option value="CC">Cartão de Crédito</option>
                <option value="PIX">PIX</option>

            </select>

            <div>
                Item selecionando : {tipoPagamento}
            </div>

            <h1>Select Fixo com id</h1>


            <select value={tipoPagamentoId} onChange={e => setTipoPagamentoId(e.target.value)}>

                <option value="1">Dinheiro</option>
                <option value="2">Cartão de Débito</option>
                <option value="3">Cartão de Crédito</option>
                <option value="4">PIX</option>

            </select>

            <div>
                Item selecionando : {tipoPagamentoId}
            </div>



            <h1>Select com options dinamicos com id</h1>


            <select value={tipoPagamentoId} onChange={e => setTipoPagamentoId(e.target.value)}>
                {
                    tipoPagamentoList.map((i) =>{
                        return (
                            <option value={i.id}>{i.descricao}</option>
                        )
                    })
                }

            </select>

            <div>
                Item selecionando : {tipoPagamentoId}
            </div>

        </>
    )
}

export default SelectTest;