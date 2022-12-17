import { useState } from "react";

function RadioTest(props) {
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


            <div onChange={e => setTipoPagamento(e.target.value)}>
                <input type="radio" value="D" name="typepg" /> Cartão de Débito
                <input type="radio" value="CD" name="typepg" /> Cartão de Crédito
            </div>

            <div>
                Item selecionando : {tipoPagamento}
            </div>

           

        </>
    )
}

export default RadioTest;