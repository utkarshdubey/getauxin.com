import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" keywords={[`contact`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
            <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
                Want to have a talk? Sure.
            </h2>
            <hr/>
            <div>
                <h4>Email</h4>
                <span>Email is the preferred way to contact us and get fast responses. Moreover, you can also hit us up on <a href="https://discord.gg/993sWfS">Discord</a> for a much faster reply.</span>
                <h2 id="code">
                    <pre>
                        <code>
                            hi@getauxin.com
                        </code>
                    </pre>
                </h2>
                <h2 id="code">
                    <pre>
                        <code>
                            getauxin@gmail.com
                        </code>
                    </pre>
                </h2>
            </div>
            
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    
  }
`
/* benchAccounting: file(
  relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
  ) {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
*/

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
