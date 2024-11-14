import styled from "styled-components";

const Perfil = styled.article`
    color: rgb(218, 155, 9); 
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    width: 50%;
    padding: 30px;
    gap: 1.5em;
    justify-content: center;
    align-items: center;
    background-color: rgb(7, 38, 85);

.nome{
    font-weight: 700;
    font-size: 1.5em;
}

`
export {Perfil};