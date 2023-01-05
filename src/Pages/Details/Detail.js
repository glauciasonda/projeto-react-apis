import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";
import Header from "../../Components/Header/Header";
import { URL_API } from "../../Constants/Constants";
import { useRequest } from "../../Hooks/useRequest";
import { Container, DivTitulo, Titulo } from "./StyleDetail";

const Detail = () => {

    const pathParam = useParams();
    const [data, isLoading, isError] = useRequest(`${URL_API}${pathParam.idPokemon}`)
    const [details, setDetails] = useState({ id: "",
                                            name: "",
                                            types: [],
                                            moves: [],
                                            stats: [], 
                                            sprites: null });

    const page = "Detail";

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
            <Header page={page} id={details.id} />
            <Container>
                <DivTitulo>
                    <Titulo>Detalhes</Titulo>
                </DivTitulo>
                {isLoading && <p>...Carregando</p>}
                {!isLoading && isError && <p>Ocorreu um erro! Para mais informações, consulte o Console</p>}
                {!isLoading && data === null && <p>Nenhum Pokemon encontrado. Tente mais tarde!</p>}
                {!isLoading && data !== null && <CardDetails 
                                                        id={details.id} 
                                                        name={details.name}
                                                        types={details.types}
                                                        moves={details.moves}
                                                        stats={details.stats}
                                                        sprites={details.sprites}  /> }
            </Container>

            
            


        </>

    )
}
export default Detail