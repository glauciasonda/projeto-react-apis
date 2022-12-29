
import axios from "axios";
import { useEffect, useState } from "react";

export const useRequest =  (url) => {
    const [ data, setData ] = useState(null) 
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
                .then(response => {
                    setIsLoading(false);
                    setData(response.data)
                })
                .catch(error => {
                    setIsLoading(false);
                    setIsError(true);
                    console.log("Erro ao executar requisição: ", error.response.status, error.response.data)
                })
    }, [url])
    return [data, isLoading, isError]
}