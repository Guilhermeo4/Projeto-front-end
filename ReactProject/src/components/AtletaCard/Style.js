import styled from "styled-components";

const Card = styled.article`
  width: 15rem;
  background-color: var(--destaque);
  padding: .5em;
  position: relative;

  div.nome{
    background-color: var(--background);
    color: var(--detalhe);
    text-align: center;
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
  }

  figure {
    margin: .5rem 0 0 0;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 22rem;
  }

`;

export {Card};