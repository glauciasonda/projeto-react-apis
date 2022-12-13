import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetail, goToHome } from "../Routes/Coordinator";

const MyPage = () => {
    const navigate = useNavigate()
   
    return(
        
        <>
            <h2> My Page</h2>
          
            <button onClick={()=>goToHome(navigate)} >Todos Pokémons </button>
            <button onClick={()=>goToDetail(navigate,1)} > Ver Detalhes </button>

        </>
    )
}
export default MyPage
