import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
query {
  pokemon: allPokemon {
    nodes {
      name
      stats {
        attack
        defense
        special_attack
        hp
        special_defense
        speed
      }
      types
    }
  }
}
`

const IndexPage = () => (

  <Layout>
    <Seo title="Home" />
    <StaticQuery
      key="pokemon_query"
      query={query}
      render={data => (
        <>
          {data && data.pokemon.nodes.map(pokemon => (
            <Link to={`/${pokemon.name}`}>
              <div>{pokemon.name}</div>
            </Link>
          ))}
        </>
      )}
    />
  </Layout>
)

export default IndexPage
