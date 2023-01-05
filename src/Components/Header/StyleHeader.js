import styled from "styled-components";

export const Container = styled.div`
    width: 98vw;
    height: 20vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-areas: 'Todos Logo Botao';
  
  
`;

export const LogoImagem = styled.img`
    width: 307px;
    height: 113px;
    grid-area: Logo;
   
`;

export const TodosPokemon = styled.p`
    font-family: 'Poppins';
    font-size: 24px;
    text-decoration-line: underline;
    font-weight: bold;
    grid-area: Todos;
`;

export const PokedexButton = styled.button`
    width: 287px;
    height: 74px;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    border-radius: 8px;
    background-color: #33A4F5;
    border: none;
    grid-area: Botao;
`;

export const DeleteButton = styled.button`
    width: 226px;
    height: 57px;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    border-radius: 8px;
    background: #FF6262;
    border: none;
    grid-area: Botao;
`;

