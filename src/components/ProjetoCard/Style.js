import styled from "styled-components";

const Imagem = styled.article`
    width: 35vmax;
    background-color: var(--terciaria);
    padding: .5em;
    position: relative;
    margin: 1vmax;
    border: 1px solid var(--primaria);
    border-radius: 5px;

    div.titulo{
        background-color: var(--background);
        height: min-content;
        color: var(--primaria);
        justify-self: stretch;
        text-align: center;
        font-size: larger;
        font-weight: bold;
        text-transform: uppercase;
    }

    .ContainerDetalhes {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    figure {
        margin: .5rem 0 0 0;
    }

    img {
        object-fit: fill;
        width: 100%;
        height: 20rem;
    }

    a {
      text-align: center;
      height: min-content;
      padding: 0.5em;
      margin: 2em;
      min-width: 5em;
      background-color: var(--background);
      text-decoration: none;
      font-weight: bold;
      color: var(--detalhe);
      text-transform: uppercase;
      /*border-radius: .3em;*/
      &:hover{
        background-color: var(--destaque);
        color: var(--secundaria);
      }
  }
`;

export {Imagem};