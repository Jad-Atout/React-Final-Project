import axios from "axios";
import React, {useEffect} from "react";

export function useFetchData (url) {
    const [data,setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    const fetchData = async ()=>{
        try {
            const response  = await axios.get(url)
            setData(response)
        }catch(error){
            setError(error)
        }finally {
            setLoading(false)

        }
    }
    useEffect(() => {
        fetchData()
    },[url])
    return{data,error,loading}

}