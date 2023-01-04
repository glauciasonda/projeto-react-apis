import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToMyPage } from "../../Routes/Coordinator";
import { Container, LogoImagem, PokedexButton, TodosPokemon } from "./StyleHeader";
import Logo from  "../../Assets/Logo.png"

const Header = () => {

    const navigate = useNavigate();

    const texto = "< Todos Pokémons"

        
    return(
        <Container>
            <TodosPokemon onClick={()=>goToHome(navigate)}> {texto} </TodosPokemon>
            <LogoImagem src={Logo} /> 
            <PokedexButton onClick={()=>goToMyPage(navigate)}> Pokédex </PokedexButton>
            
        </Container>
    )
}
export default Header