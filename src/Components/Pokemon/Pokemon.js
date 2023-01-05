import React from "react";
import Pokecard from "../Pokecard/Pokecard";

const Pokemon = (props) => {
    const { list, page } = props
    
   return(
        <>
            {
                list.map( (element, index) => {
                    return(<Pokecard key={index} 
                            id={index+1}
                            name={element.name} 
                            url={element.url}
                            page={page} />
                        )
                } )
            }
        </>    
    )

}
export default Pokemon
