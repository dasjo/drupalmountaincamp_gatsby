import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

class IndexPage extends React.Component {

  render() {
    const sponsors = this.props.data.allNodeSponsors.edges
    const sponsorImages = sponsors.map(sponsor => sponsor.node.relationships.field_sponsor_image ?
       <Img fluid={sponsor.node.relationships.field_sponsor_image.localFile.childImageSharp.fluid} /> 
       : "" ) 
    return <div>super test<Link to="/page-2/">Go to page 2</Link><div>{sponsorImages}</div></div>
    //return <Link to="/page-2/">Go to page 2</Link>

    
  }
}

export default IndexPage

export const query = graphql`
  query pageQuery {
    allNodeSponsors {
      edges {
        node {
          title
          relationships {
            field_sponsorship_type {
              name 
            }
            field_sponsor_image {
              filename
              uri {
                value
                url
              }
              localFile {
                childImageSharp {
                  fluid (maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              
            }
          }
          field_sponsor_link {
            uri
          }
        }
      }
    }
  }
`