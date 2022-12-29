import React, { useState } from "react";
import Router from "../../Routes/Router";
import { PokedexContext } from "../../Contexts/PokedexContext"

const Main = () => {
    const [bichito, setBichito] = useState([]);

    const context = {
        bichito: bichito, 
        setBichito: setBichito
    }
     
    return(
        <PokedexContext.Provider  value={context}>
                <Router/>
        </PokedexContext.Provider>          
    )
}
export default Main