import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
query Pokemon($id: String!) {
  pokemon: pokemon(id: {eq: $id}) {
    id
    image
    name
    stats {
      attack
      defense
      hp
      special_attack
      special_defense
      speed
    }
    types
  }
}
`

const PokeProfile = props => {
  const {data} = props
  const pokemon = data && data.pokemon

  console.log(props)

  return (
    <Layout>
      <div>{pokemon.name}</div>
      <div>
        <ul>
          <li>{`Attack: ${pokemon.stats.attack}`}</li>
          <li>{`Defense: ${pokemon.stats.defense}`}</li>
          <li>{`HP: ${pokemon.stats.hp}`}</li>
          <li>{`Special Attack: ${pokemon.stats.special_attack}`}</li>
          <li>{`Special Defense: ${pokemon.stats.special_defense}`}</li>
          <li>{`Speed: ${pokemon.stats.speed}`}</li>
        </ul>
      </div>
    </Layout>
  )
}

export default PokeProfile