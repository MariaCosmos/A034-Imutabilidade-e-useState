import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';
import { UseState } from 'react';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`



function App() {
  const [pokemon3, setPokemon3] = useState({
    nome:"Beedrill",
    tipo:"Poison Bee",
    evoluiu: false,
    cor:"Amarelo",
    peso:29.5,
    img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
  })
  const [pokemon2, setPokemon2] = useState({
    nome:"Pikachu",
    tipo:"Eletrico",
    evoluiu: true,
    cor:"yellow",
    peso:6,
    img:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    id:0
  })
  const [pokemon1 , setPokemon1] = useState({
    nome: "Pichu",
    tipo: "Electrico",
    evoluiu: false,
    cor: "yellow",
    peso: 2,
    img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( 
  <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard cor={pokemon1.cor} nome={pokemon1.nome} tipo={pokemon1.tipo} peso={pokemon1.peso} img={pokemon1.img} setPokemon1={setPokemon1}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
