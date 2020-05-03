import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const Halo_Final = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Halo Final" keywords={[`halo final`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Halo Final
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}

          <p>
            I closed the file and collected my thoughts. Slowly my memories
            started to return. I remembered who I was and what was my purpose.
            Everything became clear to me. I kept the file back on the table and
            closed my eyes.
          </p>

          <p>I open them and look at you.</p>

          <p>
            “Hey, Halocrypters. Congrats on making it to the last segment of the
            game. The final 10 questions will test if you are worthy enough or
            not. We, Team Halocrypt, wish you guys all the best for the coming
            questions. The next set of questions can be related to each other,
            so be careful to save all the clues and hints you get somewhere.”
          </p>

          <p>
            I look at the locked door behind me and say, “Oh and by the way,”
          </p>

          <p>Escape the crypt if you’re worthy... </p>
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
      <Halo_Final location={props.location} data={data} {...props} />
    )}
  />
)
