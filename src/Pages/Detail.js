import React  from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToHome } from "../Routes/Coordinator";

const Detail = () => {
    const navigate = useNavigate();
    const pathParam = useParams();

    return(
        <>
            <h3> Details!!</h3>
            <p>Valor do pathParam: {pathParam.idPokemon} </p>
            <button onClick={()=>goToHome(navigate)} >Todos Pokémons</button>
        </>

    )
}
export default Detail