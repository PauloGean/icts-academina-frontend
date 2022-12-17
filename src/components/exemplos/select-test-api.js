import { useEffect, useState } from "react";
import api from "../../api";
function SelectTestApi(props) {
    const [selectCursoId, setSelectCursoId] = useState(null)
    const [cursoList, setCursoList] = useState([])

    console.log("SelectTestApi")
    function listarCursos(){
        console.log("listarCursos")
        api.get('curso').then(e=>{
            setCursoList(e.data)
        })


    //    fetch('http://localhost:3005/curso')
    //   .then(results => results.json())
    //   .then(data => {
    //     console.log(data)
    //   });
    }


    useEffect(()=>{
        listarCursos()
    },[])




    return (
        <> 
            <h1>Curso</h1>
            <select value={selectCursoId} onChange={e => setSelectCursoId(e.target.value)}>
                {
                    cursoList.map((i,index) =>{
                        return (
                            <option key={'curso_opt'+index} value={i.idcurso}>{i.nome}</option>
                        )
                    })
                }
            </select>
            <div>
                Item selecionando : {selectCursoId}
            </div>
        </>
    )
}

export default SelectTestApi;