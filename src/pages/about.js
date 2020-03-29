import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`about`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Prediction is our perception.
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <p>
            Auxin is an innovative technology that aims to help you get the best
            out of a video and instil a sense of advanced and productive
            learning to your daily online experience.
          </p>

          <p>
            While watching an educational video, Auxin enhances your learning by
            assisting you with information that is up to the minute and helps in
            strengthening your grasp on the topic in an effortless yet efficient
            format. With the aid of informative graphs and stats to definitions
            and pictorials, we seek to stimulate learning by using media that
            appeals to masses.
          </p>

          <p>
            Moreover, Auxin learns with you and the more you use it, more so it
            gets accustomed to the comfort of your ways and brings about the
            full effect of personalized education.
          </p>

          <p>
            Auxin commits to upgrade your online exposure, serve as a reliable
            platform and make your digital learning experience not just better,
            but the best.
          </p>
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
