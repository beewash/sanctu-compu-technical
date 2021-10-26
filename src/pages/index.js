import React, {useState} from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Roster from '../components/roster'
import Button from '../components/button'

export const query = graphql`
query {
  pokemon: allPokemon {
    nodes {
      name
      types
    }
  }
}
`

const IndexPage = ({ data }) => {
  const pokemon = data && data.pokemon.nodes

  // console.log(pokemon)

  const allCategories = ['all', 'grass', 'fire', 'water', 'poison', 'flying', 'bug', 'normal']

  const [rosterItem, setRosterItem] = useState(pokemon)
  // const [buttons, setButtons] = useState(allCategories)
  const [buttons] = useState(allCategories)

  //Filter Function
  const filter = (button) =>{

    // console.log(button)

    if(button === 'all'){
      setRosterItem(pokemon);
      return;
    }

    const filteredData = pokemon.filter(pokemon => pokemon.types.includes(button))
    setRosterItem(filteredData)
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Button button={buttons} filter={filter} />
      <Roster rosterItem={rosterItem} />
    </Layout>
  )
}

export default IndexPage
