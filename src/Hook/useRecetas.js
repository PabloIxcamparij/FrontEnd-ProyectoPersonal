
import { useState, useEffect} from 'react'
import { dataRecetas } from "../data/dataRecetas"
import { dataCategoriasRecetas } from "../data/dataCategoriasRecetas"

export const useRecetas = () =>{

    useEffect(() => {
        setData(dataRecetas)
        setDataCategoria(dataCategoriasRecetas)
    }, [])

    const [data, setData] = useState([])
    const [dataCategoria, setDataCategoria] = useState([])


    return{
        data,
        dataCategoria
    }
    
}