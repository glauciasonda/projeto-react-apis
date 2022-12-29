import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokedexContext } from "../../Contexts/PokedexContext";
import { useRequest } from "../../Hooks/useRequest";
import { goToDetail } from "../../Routes/Coordinator";


const Pokecard = (props) => {
    const { id, name, url } = props;
    
    const navigate = useNavigate();
    const [data, isLoading, isError] = useRequest(url);
    
    const [type, setType] = useState([]);
    const [sprite, setSprite] = useState("");

    const context = useContext(PokedexContext);
    const {bichito, setBichito} = context;

    const getAtributs = () => {
        if (!isError && !isLoading && data !== null){
            setType(data.types)
            setSprite(data.sprites.front_shiny)
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
            <p>id: {id}</p>
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
        </>
        
    )
}
export default Pokecard