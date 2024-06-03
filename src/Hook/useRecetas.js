
import { useState, useEffect} from 'react'
import { dataRecetas } from "../data/dataRecetas"

export const useRecetas = () =>{

    useEffect(() => {
        setData(dataRecetas)
    }, [])

    const [data, setData] = useState([])

    return{
        data,
    }
    
}