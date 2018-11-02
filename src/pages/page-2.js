import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = ({data}) => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>{data.allNodePage.edges.node.title.body.processed}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query page2Query {
    allNodePage(filter: {
      title: {
        eq:"See you all in Davos"
      }
    }) {
      edges {
        node {
          title
          body {
            processed
          }
        }
      }
    }
  }
`
