import React, { useEffect, useState } from "react";
import { Container,PokemonNumber, PokemonType, TypesContainer, Pokeball, Pokemon,  Sprite, BoxSprite, BoxBase, BoxMoves, BoxId, Box1,Box2,Box3,Box4, Texto, PokemonMove } from "./StyleCardDetails";
import { getColor } from "../../Utils/GetColor";
import { getType } from "../../Utils/GetType";
import wing from "../../Assets/wing.png";

const CardDetails = (props) => {
    const {id, name, types, moves, stats, sprites} = props;
    
    const [cardColor, setCardColor] = useState("#FFFFFF")
    const [idP, setIdP] = useState("");
    const [nameP, setNameP] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [baseStats, setBaseStats] = useState([0, 0, 0, 0, 0, 0]);
    const [totalStats, setTotalStats] = useState(0);
    const [move, setMove] = useState(["", "", "", "", "", ""])
    
    const getAtributs = () => {
        if (types.length > 0) {
            setCardColor(getColor(types[0].type.name))
            setNameP(name[0].toUpperCase() + name.substring(1));
            id < 10 ? setIdP(`#0${id}`) : setIdP(`#${id}`) 
         }
        if(sprites !== null){
            setFront(sprites.front_default);
            setBack(sprites.back_default);
         }
        if(stats.length > 0) {
            const arrayStats = []
            let total = 0;
            for(let i = 0; i < stats.length; i++){
                arrayStats.push(stats[i].base_stat)
                total += stats[i].base_stat
            }
            setBaseStats(arrayStats);
            setTotalStats(total);   
        }    
        if(moves.length > 0){
            const arrayMove = []
            let nameMove = ""
            for(let i = 0; i < moves.length; i++ ){
                nameMove = (moves[i].move.name[0].toUpperCase() + moves[i].move.name.substring(1)).replace("-", " ")
                arrayMove.push(nameMove);
            }
            setMove(arrayMove);
        }    
    }

    useEffect(() => {
        getAtributs();
    }, [types, moves, stats])

    return(
        <>
            <Container color={cardColor}>
                {/* Coluna 1*/}
                <Box1>
                    <BoxSprite>
                        <Sprite src={front} />
                    </BoxSprite>
                    <BoxSprite>
                        <Sprite src={back} />
                    </BoxSprite>
                </Box1>

                {/* Coluna 2*/}
                <Box2>
                    <BoxBase>
                        <Texto>Base stats:  </Texto>
                        <p>HP {baseStats[0]} </p> 
                        <p>Attack {baseStats[1]}</p>
                        <p>Defense {baseStats[2]} </p>
                        <p>Sp. Atk {baseStats[3]} </p>
                        <p>Sp. Def {baseStats[4]} </p>
                        <p>Speed {baseStats[5]} </p>
                        <p>Total {totalStats}  </p>
                    </BoxBase>
                </Box2>

                {/* Coluna 3*/}
                <Box3>
                    <BoxId>
                        <PokemonNumber>{idP}&nbsp;&nbsp; &nbsp;{nameP} </PokemonNumber>

                        
                    </BoxId>
                    <TypesContainer>
                        
                        {types.map((element, index) => {
                                return <PokemonType key={index} src={getType(element.type.name)} alt='' />
                        })} 
                        </TypesContainer>
                    <BoxMoves>
                        <Texto>Moves: &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  </Texto>
                        <PokemonMove><p>{move[0]}</p></PokemonMove>
                        <PokemonMove><p>{move[1]}</p></PokemonMove>
                        <PokemonMove><p>{move[2]}</p></PokemonMove>
                        <PokemonMove><p>{move[3]}</p></PokemonMove>
                        <PokemonMove><p>{move[4]}</p></PokemonMove>
                        <PokemonMove><p>{move[5]}</p></PokemonMove>
                    </BoxMoves> 
                </Box3>

                {/* Coluna 4*/}
                <Box4>
                    {id < 10 ? <Pokemon src={`https://www.serebii.net/swordshield/pokemon/00${id}.png`} alt="" /> : 
                              <Pokemon src={`https://www.serebii.net/swordshield/pokemon/0${id}.png`} alt="" />  }                  
                    <Pokeball src={wing} alt="pokeball" />
                </Box4>

            </Container>
        </>
    )
}
export default CardDetails