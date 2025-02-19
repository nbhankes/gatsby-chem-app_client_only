import React from "react"
import { onError } from "apollo-link-error"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CFactorForm from "../components/cfForm/cfactorform"
import CFacQuery from "../components/cfCardAndContainer/cfacquery"
import CalcContainer from "../components/CalcContainer/calccontainer"

import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client"
import { gql } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://gatsby-chem-app.herokuapp.com/graphql",
  cache: new InMemoryCache(),
})

onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

//Not necessary, but used to verify that client and server are connected.
client
  .query({
    query: gql`
      {
        getCFactors {
          id
          cfLabel
        }
      }
    `,
  })
  .then(result => console.log(result))

const IndexPage = ({ data }) => (
  <ApolloProvider client={client}>
    <Layout>
      <SEO title="Home" />
      <CFactorForm />
      <CalcContainer />
      <CFacQuery />
    </Layout>
  </ApolloProvider>
)

export default IndexPage
