import React from 'react'
import { Link } from 'gatsby'

function Roster({rosterItem}) {
  return (
    <>
    {rosterItem && rosterItem.map(pokemon => 
      <Link to={`/${pokemon.name}`} key={pokemon.name}>
        <div>{pokemon.name}</div>
      </Link>
    )}
    </>
  )
}

export default Roster