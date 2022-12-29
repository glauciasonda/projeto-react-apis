import React from "react";
import Header from "../Components/Header/Header"
import Pokemon from "../Components/Pokemon/Pokemon";
import { URL_API } from "../Constants/Constants";
import { useRequest } from "../Hooks/useRequest";


const Home = () => {
        
    const [ data, isLoading, isError ] = useRequest(URL_API)
      
    return (
        <>
            <Header />
            <h1>Home Page dos Pokemons... afeeee!!!</h1>
            {isLoading && <p>...Carregando</p>}
            {!isLoading && isError && <p>Ocorreu um erro! Para mais informações, consulte o Console</p>}
            {!isLoading && data === null && <p>Nenhum Pokemon encontrado. Tente mais tarde!</p>}
            {!isLoading && data !== null && <Pokemon list={data.results} />}
            
        </>
    )
}
export default Home