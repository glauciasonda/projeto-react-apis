import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { URL_API } from "../Constants/Constants";
import { useRequest } from "../Hooks/useRequest";

const Detail = () => {

    const pathParam = useParams();
    const [data, isLoading, isError] = useRequest(`${URL_API}${pathParam.idPokemon}`)
    const [details, setDetails] = useState(null);
    
    const getDetails = () => {
        if (!isError && !isLoading && data !== null){
            const pokemonDetail = {
                id: data.id,
                name: data.name,
                types: [...data.types],
                moves: [...data.moves],
                stats: [...data.stats], 
                sprites: {...data.sprites}
            }
            setDetails(pokemonDetail)
        }
       
    }


    useEffect(() => {
        getDetails();   
    },[data])



    

    return(
        <>
            <Header />
            <h3> Details!!</h3>
            {isLoading && <p>...Carregando</p>}
            {!isLoading && isError && <p>Ocorreu um erro! Para mais informações, consulte o Console</p>}
            {!isLoading && data === null && <p>Nenhum Pokemon encontrado. Tente mais tarde!</p>}
            {!isLoading && data !== null &&  <p>{data.id} - {data.name} </p>}
            


        </>

    )
}
export default Detail