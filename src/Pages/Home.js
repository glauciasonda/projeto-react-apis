import React from "react";
import { useNavigate } from "react-router-dom";
import { goToMyPage } from "../Routes/Coordinator";

const Home = () => {
    const navigate = useNavigate()


    return (
        <>
            <h1>Home Page!!!</h1>
            <button onClick={()=>goToMyPage(navigate)} > Ir para Pokedex </button>
        </>
    )

}
export default Home