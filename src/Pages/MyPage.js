import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import { PokedexContext } from "../Contexts/PokedexContext";
import Pokecard from "../Components/Pokecard/Pokecard";

const MyPage = () => {
    const context = useContext(PokedexContext);
    const { bichito } = context;  

    return(
        <>
        <Header/>
        <h2>Pokedex é aqui: </h2>
           {
                bichito.map( (element, index) => {
                    return(<Pokecard key={index} 
                            id={element.id}
                            name={element.name} 
                            url={element.url} />
                        )
                } )
            }
        </>
    )
}
export default MyPage
