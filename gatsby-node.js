/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
async function createPokeProfile (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allPokemon(filter: { id: { ne: null } }) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allPokemon || {}).edges || []

  pageEdges
    .forEach((edge, index) => {
      const {id, name = {}} = edge.node
      const path = `/${name}/`
      // console.log(name)

      createPage({
        path,
        component: require.resolve('./src/templates/pokeProfile.js'),
        context: {edge, id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createPokeProfile(graphql, actions)
}