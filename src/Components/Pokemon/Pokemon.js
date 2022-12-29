import React from "react";
import Pokecard from "../Pokecard/Pokecard";

const Pokemon = (props) => {
    const { list } = props
    
   return(
        <>
            <h2>Todos os Pokemons... bem aqui!!</h2>
            {
                list.map( (element, index) => {
                    return(<Pokecard key={index} 
                            id={index+1}
                            name={element.name} 
                            url={element.url} />
                        )
                } )
            }
        </>    
    )

}
export default Pokemon
