import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const SecondPage = ({data}) => (
  <Layout>
    <h1>Hi from the second page</h1>

    {data.allNodePage.edges.map(({ node }) => (
      <div>{ ReactHtmlParser(node.body.processed) }</div>
    ))}

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
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
