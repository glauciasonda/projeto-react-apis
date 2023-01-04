import React from "react";
import Header from "../../Components/Header/Header";
import Pokemon from "../../Components/Pokemon/Pokemon";
import { URL_API } from "../../Constants/Constants";
import { useRequest } from "../../Hooks/useRequest";
import { Container, DivTitulo, Titulo } from "./StyleHome";

const Home = () => {
        
    const [ data, isLoading, isError ] = useRequest(URL_API)
    return (
        <>
            <Header />
            <DivTitulo>
                <Titulo>Todos Pokémons</Titulo>
            </DivTitulo>
            
            <Container>
                {isLoading && <p>...Carregando</p>}
                {!isLoading && isError && <p>Ocorreu um erro! Para mais informações, consulte o Console</p>}
                {!isLoading && data === null && <p>Nenhum Pokemon encontrado. Tente mais tarde!</p>}
                {!isLoading && data !== null && <Pokemon list={data.results} />}
            </Container>
        </>
    )
}
export default Home