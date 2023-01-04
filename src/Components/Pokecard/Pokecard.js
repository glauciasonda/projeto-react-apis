import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokedexContext } from "../../Contexts/PokedexContext";
import { useRequest } from "../../Hooks/useRequest";
import { goToDetail } from "../../Routes/Coordinator";
import {Container,PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon, PokemonDetalhe} from './StylePokeCard'
import { getType } from "../../Utils/GetType";
import wing from "../../Assets/wing.png";
import { getColor } from "../../Utils/GetColor";

const Pokecard = (props) => {
    const { id, name, url } = props;
        
    const navigate = useNavigate();
    const [data, isLoading, isError] = useRequest(url);
    
    const [type, setType] = useState([]);
    const [sprite, setSprite] = useState("");
    const [cardColor, setCardColor] = useState("");
    const [idP, setIdP] = useState("");
    const [nameP, setNameP] = useState("");
    
    const context = useContext(PokedexContext);
    const {bichito, setBichito} = context;


    
    const getAtributs = () => {
        if (!isError && !isLoading && data !== null){
            setType(data.types)
            setSprite(data.sprites.front_shiny)
            setCardColor(getColor(data.types[0].type.name))
            setNameP(name[0].toUpperCase() + name.substring(1));
            id < 10 ? setIdP(`#0${id}`) : setIdP(`#${id}`) 
        } 
    }

    const capturar = () => {
        const capturados = [...bichito]; 
        let isCapturado =  false;
        const pokemon = {
            id: id,
            name: name,
            url: url,
            type: [...type],
            sprite: sprite
        }

        capturados.find((element) => { 
            if (element.id === pokemon.id) {
                isCapturado = true;
            }
            return element.id === pokemon.id
        }); 
        
        if (!isCapturado){
            capturados.push(pokemon);
            setBichito(capturados);
            alert("Gotcha! O Pokémon foi adicionado a sua Pokédex");
        } else {
            alert("Gotcha! O Pokémon foi adicionado a sua Pokédex");
        }
    }

    const excluir = (idPokemon) => {
        const capturados = bichito.filter((element) => {
            return element.id !== idPokemon
        })
        setBichito(capturados);
        alert("Oh, no! O pokémon foi removido da sua Pokédex");

    }

    useEffect(() => {
        getAtributs();

    }, [data])

    
    
    return (
        <>
           {/* <p>id: {id}</p>
            <p>nome: {name}</p>
            <p>sprite: {sprite}</p>
            {type.map((element, index) =>{
                return ( <ul key={index}>
                            <li>{element.type.name}</li>
                        </ul>
                )})
            }
            <button onClick={()=> goToDetail(navigate, id)}> Detalhes </button>
            <button onClick={capturar}> Capturar!!</button>
            <button onClick={()=> excluir(id)}>Exluir</button>
            <br />
            <br />
            <p> colorCard: {cardColor}</p>
        */}   
            <Container color={cardColor}>
                <div>
                    <PokemonNumber>{idP}</PokemonNumber>
                    <PokemonName>{nameP}</PokemonName>
                    <TypesContainer>
                        {type.map((element, index) => {
                            return <PokemonType key={index} src={getType(element.type.name)} alt='' />
                        })}
                    </TypesContainer>
                    <PokemonDetalhe onClick={()=> goToDetail(navigate, id)}> Detalhes</PokemonDetalhe>
                </div>
                <div>
                    {id < 10 ? <Pokemon src={`https://www.serebii.net/swordshield/pokemon/00${id}.png`} alt="" /> : 
                                <Pokemon src={`https://www.serebii.net/swordshield/pokemon/0${id}.png`} alt="" />  }
                     
                    <CatchButton onClick={capturar}>Capturar!</CatchButton>
                </div>
                <Pokeball src={wing} alt="pokeball" />
            </Container>
  
        </>
        
    )
}
export default Pokecard