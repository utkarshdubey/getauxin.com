import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const VerifyPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Verify" keywords={[`verify`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
            <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
                One last step
            </h2>
            <p style={{textAlign: 'center'}}>We have sent an email to your email address, please verify.  If you face any problems, reach out to us on <a href="mailto:getauxin@gmail.com">getauxin@gmail.com</a> or <a href="https://discord.gg/993sWfS">discord</a>.</p>
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
      <VerifyPage location={props.location} data={data} {...props} />
    )}
  />
)
