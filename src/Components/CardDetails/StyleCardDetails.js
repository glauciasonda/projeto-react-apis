import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${(props) => props.color};
    justify-content: space-evenly;
    align-items: baseline;
    border-radius: 12px;
    position: relative;
    font-family: 'Poppins';
    margin: 50px;
`;

export const Box1 = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
   // background-color: yellow;
   
`;
export const Box2 = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
   // background-color: green;
    
`;
export const Box3 = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  //  background-color: red;
    
`;
export const Box4 = styled.div`
    width: 20%;
    height: 100%;
  //  background-color: blue;
   
`;


export const PokemonNumber = styled.p`
    font-family: 'Inter';
    font-weight: bold;
    font-size: 28px;
    color: #FFFFFF;
  `;

export const PokemonName = styled.p`
    font-family: 'Inter';
    font-size: 24px;
    color: #FFFFFF;
  
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  
`;

export const BoxId = styled.div`
    width: 50% ;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  //  background-color: aqua;

`;

export const TypesContainer = styled.div`
    width: 100% ;
    height: 40px;
    display: flex;
    flex-direction: row;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Pokemon = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 2;
`;

export const Sprite = styled.img`
    width: 156px;
    height: 156px;

`;

export const BoxSprite = styled.div`
    width:  80%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    
`;

export const BoxMoves = styled.div`
    width:  60%;
    height: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 12px;
`;

export const PokemonMove = styled.div`
    max-width: 100px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    margin-left: 5px;
    margin-right: 5px;
`;

export const BoxBase = styled.div`
    width:  80%;
    height: 92%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 14px;
`;
export const Texto = styled.p`
    font-family: 'Inter';
    font-weight: bold;
    font-size: 28px;
    
`;
