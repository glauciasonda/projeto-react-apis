import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToMyPage } from "../../Routes/Coordinator";

const Header = () => {

    const navigate = useNavigate();
        
    return(
        <>
            <h1>Header!!</h1>
            <button onClick={()=>goToHome(navigate)} >Todos Pokémons </button>
            <button onClick={()=>goToMyPage(navigate)} > Ir para Pokedex </button>
            
        </>
    )
}
export default Header