import React, { useContext } from "react";
import { PokedexContext } from "../../Contexts/PokedexContext";
import Pokecard from "../../Components/Pokecard/Pokecard";
import Header from "../../Components/Header/Header";
import { Container, DivTitulo, Titulo } from "./StyleMyPage";

const MyPage = () => {
    const context = useContext(PokedexContext);
    const { bichito } = context;  

    return(
        <>
         <Header />
         <DivTitulo>
            <Titulo>Meus Pokémons</Titulo>
         </DivTitulo>
         <Container>
           {
                bichito.map( (element, index) => {
                    return(<Pokecard key={index} 
                            id={element.id}
                            name={element.name} 
                            url={element.url} />
                        )
                } )
            }
        </Container>    
        </>
    )
}
export default MyPage
