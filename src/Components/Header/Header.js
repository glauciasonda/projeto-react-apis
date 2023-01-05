import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToMyPage } from "../../Routes/Coordinator";
import { Container, DeleteButton, LogoImagem, PokedexButton, TodosPokemon } from "./StyleHeader";
import Logo from  "../../Assets/Logo.png"
import { PokedexContext } from "../../Contexts/PokedexContext";

const Header = (props) => {
    const { page, id } = props;

    const navigate = useNavigate();
    const context = useContext(PokedexContext);
    const {bichito, setBichito} = context;

    const texto = "< Todos Pokémons"

    const excluir = (idPokemon) => {
        const capturados = bichito.filter((element) => {
            return element.id !== idPokemon
        })
        setBichito(capturados);
        alert("Oh, no! O pokémon foi removido da sua Pokédex");
        goToMyPage(navigate);

    }


    return(
        <Container>
            {page !== "Home" && <TodosPokemon onClick={()=>goToHome(navigate)}> {texto} </TodosPokemon> }
            
            <LogoImagem src={Logo} />
            
            {page === "Home" && <PokedexButton onClick={()=>goToMyPage(navigate)}> Pokédex </PokedexButton>}

            {page === "Detail" && <DeleteButton onClick={()=>excluir(id)}>Excluir da Pokédex</DeleteButton>}
            
        </Container>
    )
}
export default Header