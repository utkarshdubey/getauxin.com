import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const VerifiedPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Verified" keywords={[`verified`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
            <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
                Verified :)
            </h2>
            <p style={{textAlign: 'center'}}>Your email has been verified successfully, stay tuned for further updates. You can also join our <a href="https://discord.gg/993sWfS">discord</a> server to reach out to us or interact with other beta testers.</p>
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
export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <VerifiedPage location={props.location} data={data} {...props} />
    )}
  />
)
