import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
import { useState } from 'react'



const PokemonCard = (props) => {

    function evoluirPokemon() {
        console.log("Cliquei no botão de evoluir")
        props.setPokemon1({
        nome:"Pikachu",
        tipo:"Eletrico",
        evoluiu: true,
        cor:"yellow",
        peso:6,
        img:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/300px-Pikachu.png",
        id:0})
    }

  return (
    <Card color={props.cor}>
        <img src={props.img} alt={`Pokemon`}/>
        <PokemonName>{props.nome}</PokemonName>
        <PokemonType>{props.tipo}</PokemonType>
        <p>{props.peso}kg</p>

        <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard